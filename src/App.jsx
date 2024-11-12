import Footer from "./component/Footer";
import Header from "./component/header/Header";
import NewsSection from "./component/News/NewsSection";
import MenuProvider from "./provider/menuProvider";
import SearchProvider from "./provider/SearchProvider";

export default function App() {
  return (
    <SearchProvider>
      <MenuProvider>
        <Header />
        <NewsSection />
        <Footer />
      </MenuProvider>
    </SearchProvider>
  );
}
