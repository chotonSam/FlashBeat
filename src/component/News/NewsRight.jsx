export default function NewsRight({ className, article }) {
  return (
    <div className={`relative ${className}`}>
      {/* Image */}
      {article.urlToImage ? (
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={article.urlToImage}
            alt={article.title || "News Image"}
          />
          {article.author ? (
            <p className="absolute top-2 right-2 text-sm text-white bg-black bg-opacity-50 px-1">
              {article.author}
            </p>
          ) : null}
        </div>
      ) : null}

      {/* Info */}
      <div className="col-span-12 mt-6 md:col-span-4">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
            {article.title || "Title not available"}
          </h3>
        </a>
        {article.description ? (
          <p className="text-base text-[#292219]">{article.description}</p>
        ) : null}

        {/* Published Time and Source */}
        <p className="mt-5 text-base text-[#94908C]">
          {new Date(article.publishedAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          | {article.source?.name || "Unknown Source"}
        </p>
      </div>
    </div>
  );
}
