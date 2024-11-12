import { MenuContext, SearchContext } from "../../context/newsContext";
import useNewsQuery from "../../hooks/useNewsQuery ";
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

import { useContext } from "react";

export default function NewsSection() {
  const { menuData } = useContext(MenuContext);

  const { searchTerm } = useContext(SearchContext);

  const apiUrl = searchTerm
    ? `${import.meta.env.VITE_BASE_URL}/v2/search?q=${searchTerm}`
    : `${import.meta.env.VITE_BASE_URL}/v2/top-headlines?category=${menuData}`;

  let { data, loading, error } = useNewsQuery(apiUrl);

  // Assuming data.articles is an array of news articles
  const totalArticles = data?.result?.length || data?.articles?.length || 0;

  console.log(totalArticles);

  // Split the data into two parts, e.g., two-thirds to NewsLeft and one-third to NewsRight
  const splitIndex = Math.ceil(totalArticles * (2 / 3));
  const newsLeftData = (data?.articles || data?.result)?.slice(0, splitIndex);
  const newsRightData = (data?.articles || data?.result)?.slice(splitIndex);

  console.log(newsRightData);
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8 ">
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8 ">
          {newsLeftData?.map((article, index) => {
            let styleClassLeft;

            if (index === 0) {
              styleClassLeft = "col-span-12 grid grid-cols-12 gap-4 pb-3"; // Style for index 0
            } else if (index === 1) {
              styleClassLeft =
                "col-span-12 grid grid-cols-12 gap-4 lg:col-span-8 border-t-2 py-3"; // Style for index 1
            } else {
              styleClassLeft =
                "col-span-12 md:col-span-6 lg:col-span-4 border-t-2 py-3"; // Style for all other articles
            }

            return (
              <NewsLeft
                key={index}
                article={article}
                className={styleClassLeft}
                index={index}
              />
            );
          })}
        </div>
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {newsRightData?.map((articles, index) => {
              let styleClassRight;

              if (index === 0) {
                styleClassRight = "col-span-12 mb-6 md:col-span-8 "; // Style for index 0
              } else {
                styleClassRight = "col-span-12 md:col-span-8 border-t-2 pt-3"; // Style for all other articles
              }

              return (
                <NewsRight
                  key={index}
                  article={articles}
                  className={styleClassRight}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
