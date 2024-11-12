export default function NewsLeft({ article, className, index }) {
  return (
    // text-xl font-bold lg:text-[20px]
    <div className={className}>
      {/* <!-- info --> */}
      <div className="col-span-12 lg:col-span-4">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3
            className={`mb-2.5 font-bold 
              ${
                index === 0 ? "text-2xl lg:text-[28px]" : "text-xl lg:text-2xl"
              }`}
          >
            {article.title || "Title not available"}
          </h3>
        </a>
        {article.description ? (
          <p className="text-base text-[#5C5955]">{article.description}</p>
        ) : null}

        <p className="mb-3 mt-5 text-base text-[#5C5955]">
          {new Date(article.publishedAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          | {article.source?.name || "Unknown Source"}
        </p>
      </div>

      {/* <!-- thumb --> */}
      <div className="col-span-12 lg:col-span-8 relative">
        {article.urlToImage ? (
          <>
            <img
              className="w-full max-h-80 object-cover"
              src={article.urlToImage}
              alt={article.title}
            />

            {/* Illustration Author in top-right corner */}
            {article.author ? (
              <p className="absolute top-2 right-2 text-sm text-white bg-black bg-opacity-50 px-1 ">
                {article.author}
              </p>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
