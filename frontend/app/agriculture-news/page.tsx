"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Newspaper,
  ArrowUpRight,
  RefreshCw,
  Sprout,
  CloudSun,
  TrendingUp,
  Landmark,
  Cpu,
  Wheat,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  getAgricultureNews,
  type NewsArticle,
} from "@/services/news";

type Category =
  | "All"
  | "Farming"
  | "Crops"
  | "Weather"
  | "Market"
  | "Government"
  | "Technology";

const categories: {
  name: Category;
  icon: typeof Newspaper;
}[] = [
  { name: "All", icon: Newspaper },
  { name: "Farming", icon: Sprout },
  { name: "Crops", icon: Wheat },
  { name: "Weather", icon: CloudSun },
  { name: "Market", icon: TrendingUp },
  { name: "Government", icon: Landmark },
  { name: "Technology", icon: Cpu },
];

function getCategory(article: NewsArticle): Exclude<Category, "All"> {
  const text = `${article.title ?? ""} ${
    article.description ?? ""
  }`.toLowerCase();

  if (
    text.includes("weather") ||
    text.includes("rain") ||
    text.includes("monsoon") ||
    text.includes("drought") ||
    text.includes("climate") ||
    text.includes("temperature") ||
    text.includes("storm")
  ) {
    return "Weather";
  }

  if (
    text.includes("market") ||
    text.includes("price") ||
    text.includes("commodity") ||
    text.includes("export") ||
    text.includes("import") ||
    text.includes("trade") ||
    text.includes("farmer income")
  ) {
    return "Market";
  }

  if (
    text.includes("government") ||
    text.includes("scheme") ||
    text.includes("subsidy") ||
    text.includes("policy") ||
    text.includes("ministry") ||
    text.includes("government support")
  ) {
    return "Government";
  }

  if (
    text.includes("ai") ||
    text.includes("artificial intelligence") ||
    text.includes("technology") ||
    text.includes("drone") ||
    text.includes("robot") ||
    text.includes("smart farming") ||
    text.includes("digital agriculture")
  ) {
    return "Technology";
  }

  if (
    text.includes("crop") ||
    text.includes("wheat") ||
    text.includes("rice") ||
    text.includes("maize") ||
    text.includes("corn") ||
    text.includes("soybean") ||
    text.includes("cotton") ||
    text.includes("harvest") ||
    text.includes("seed")
  ) {
    return "Crops";
  }

  return "Farming";
}

function formatDate(date: string | null) {
  if (!date) return "Recently";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Recently";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AgricultureNewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("All");

  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadNews() {
    try {
      setLoading(true);
      setError("");

      const data = await getAgricultureNews();

      setArticles(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Agriculture news error:", err);
      setError("Unable to load agriculture news.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNews();
  }, []);

  const filteredNews = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      const title = article.title ?? "";
      const description = article.description ?? "";
      const source = article.source ?? "";

      const articleCategory = getCategory(article);

      const matchesCategory =
        selectedCategory === "All" ||
        articleCategory === selectedCategory;

      const searchableText =
        `${title} ${description} ${source} ${articleCategory}`.toLowerCase();

      const matchesSearch =
        query.length === 0 || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, searchQuery, selectedCategory]);

  const featuredArticle = filteredNews[0] ?? articles[0];

  return (
    <DashboardLayout>
      <main className="space-y-10">

        {/* HEADER */}
        <section>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10">
              <Newspaper
                size={22}
                className="text-green-400"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-green-400">
                AgriSense AI
              </p>

              <h1 className="mt-1 text-4xl font-bold text-white">
                Agriculture News
              </h1>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-white/60">
            Stay informed with the latest agricultural developments,
            farming technologies, crop updates, weather intelligence,
            market movements and government initiatives.
          </p>
        </section>

        {/* FEATURED NEWS */}
        {featuredArticle && !loading && !error && (
          <section
            className="
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.06]
              backdrop-blur-xl
            "
          >
            <div className="grid lg:grid-cols-2">

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden lg:h-[360px]">
                {featuredArticle.image ? (
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-105
                    "
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-900/40 to-black">
                    <Newspaper
                      size={70}
                      className="text-green-400/40"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className="absolute left-6 top-6 rounded-full border border-green-400/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-300 backdrop-blur-xl">
                  Featured
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative flex flex-col justify-center p-8 lg:p-10">

                <span className="w-fit rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
                  {getCategory(featuredArticle)}
                </span>

                <h2 className="mt-5 text-2xl font-bold leading-tight text-white lg:text-3xl">
                  {featuredArticle.title}
                </h2>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-white/60">
                  {featuredArticle.description ||
                    "Latest agriculture news and developments from around the world."}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/40">
                  <span>
                    {featuredArticle.source || "Agriculture News"}
                  </span>

                  <span>•</span>

                  <span>
                    {formatDate(featuredArticle.publishedAt)}
                  </span>
                </div>

                <a
                  href={featuredArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    flex
                    w-fit
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-green-400/30
                    bg-green-400/10
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-green-300
                    transition
                    hover:bg-green-400/20
                  "
                >
                  Read Full Article
                  <ArrowUpRight size={16} />
                </a>

              </div>
            </div>
          </section>
        )}

        {/* SEARCH */}
        <section className="space-y-5">

          <div className="relative mx-auto max-w-3xl">

            <Search
              size={21}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-white/40
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search agriculture, crops, weather, market, AI..."
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-black/20
                py-4
                pl-14
                pr-5
                text-white
                outline-none
                backdrop-blur-xl
                transition
                placeholder:text-white/35
                focus:border-green-400/40
                focus:bg-black/30
                focus:ring-2
                focus:ring-green-400/10
              "
            />

          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  onClick={() =>
                    setSelectedCategory(category.name)
                  }
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-5
                    py-2.5
                    text-sm
                    transition
                    ${
                      selectedCategory === category.name
                        ? "border-green-400/40 bg-green-400/20 text-green-300 shadow-[0_0_25px_rgba(74,222,128,0.08)]"
                        : "border-white/10 bg-white/[0.04] text-white/65 hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-300"
                    }
                  `}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}

          </div>

        </section>

        {/* STATUS BAR */}
        {!loading && !error && (
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Latest Agriculture News
              </h2>

              <p className="mt-1 text-sm text-white/40">
                {filteredNews.length} article
                {filteredNews.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <button
              onClick={loadNews}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-sm
                text-white/70
                transition
                hover:border-green-400/30
                hover:text-green-300
              "
            >
              <RefreshCw size={16} />
              Refresh
            </button>

          </div>
        )}

        {/* LOADING STATE */}
        {loading && (
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                "
              >
                <div className="h-48 animate-pulse bg-white/[0.06]" />

                <div className="space-y-4 p-6">
                  <div className="h-4 w-20 animate-pulse rounded bg-white/[0.08]" />

                  <div className="h-6 w-full animate-pulse rounded bg-white/[0.08]" />

                  <div className="h-16 w-full animate-pulse rounded bg-white/[0.06]" />
                </div>
              </div>
            ))}

          </section>
        )}

        {/* ERROR STATE */}
        {!loading && error && (
          <section className="rounded-3xl border border-red-400/20 bg-red-400/5 p-10 text-center">

            <h2 className="text-xl font-semibold text-white">
              Unable to load news
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Please check your backend server and NewsAPI connection.
            </p>

            <button
              onClick={loadNews}
              className="
                mt-6
                rounded-xl
                bg-green-400/10
                px-5
                py-3
                text-sm
                font-semibold
                text-green-300
                hover:bg-green-400/20
              "
            >
              Try Again
            </button>

          </section>
        )}

        {/* EMPTY STATE */}
        {!loading &&
          !error &&
          filteredNews.length === 0 && (
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-12 text-center">

              <Search
                size={48}
                className="mx-auto text-white/20"
              />

              <h2 className="mt-5 text-xl font-semibold text-white">
                No news found
              </h2>

              <p className="mt-2 text-sm text-white/45">
                Try another keyword or select a different category.
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="
                  mt-6
                  rounded-xl
                  border
                  border-green-400/30
                  bg-green-400/10
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-green-300
                  hover:bg-green-400/20
                "
              >
                Clear Filters
              </button>

            </section>
          )}

        {/* NEWS GRID */}
        {!loading &&
          !error &&
          filteredNews.length > 0 && (
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {filteredNews.map((article, index) => {
                const category = getCategory(article);

                return (
                  <article
                    key={`${article.url}-${index}`}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      transition
                      duration-300
                      hover:-translate-y-2
                      hover:border-green-400/20
                      hover:bg-white/[0.07]
                    "
                  >

                    {/* IMAGE */}
                    <div className="relative h-48 overflow-hidden bg-black/20">

                      {article.image ? (
                        <img
                          src={article.image}
                          alt={article.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-500
                            group-hover:scale-105
                          "
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-900/30 to-black">
                          <Newspaper
                            size={55}
                            className="text-green-400/30"
                          />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                      <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-xl">
                        {category}
                      </span>

                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                      <div className="flex items-center justify-between gap-3">

                        <span className="truncate text-xs text-white/40">
                          {article.source || "Agriculture News"}
                        </span>

                        <span className="shrink-0 text-xs text-white/35">
                          {formatDate(article.publishedAt)}
                        </span>

                      </div>

                      <h3 className="mt-4 line-clamp-3 text-xl font-semibold leading-snug text-white">
                        {article.title || "Agriculture News Update"}
                      </h3>

                      <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/50">
                        {article.description ||
                          "Read the latest agricultural developments and updates."}
                      </p>

                      <div className="mt-6">

                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-green-400
                            transition
                            hover:text-green-300
                          "
                        >
                          Read More
                          <ArrowUpRight
                            size={16}
                            className="transition group-hover:translate-x-1"
                          />
                        </a>

                      </div>

                    </div>

                  </article>
                );
              })}

            </section>
          )}

      </main>
    </DashboardLayout>
  );
}