import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { fetchStories } from "./services/storyService";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import Header from "./components/Header/Header";
import HomePage from "./pages/home";
import StoryPage from "./pages/story";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/notFound";
import Footer from "./components/Footer/Footer";

const LIMIT_OPTIONS = [5, 10, 15];

export default function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(LIMIT_OPTIONS[0]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    async function loadStories() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchStories();
        setStories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStories();
  }, []);

  // TO-DO: if limit should be applied to all available results (not only to the currently displayed ones), move it out of the useEffect and use: const filteredStories = stories.filter((story) => story.title.toLowerCase().includes(filter.toLowerCase())).slice(0, limit);

  function handleLoadMore() {
    setLimit((prev) => prev + LIMIT_OPTIONS[0]);
  }

  return (
    <>
      <ScrollToTop />
      <ScrollToTopBtn />
      <Header />
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                stories={stories}
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
                limitOptions={LIMIT_OPTIONS}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onLoadMore={handleLoadMore}
                loading={loading}
                error={error}
              />
            }
          />
          <Route path="/story/:slug" element={<StoryPage />} />
          <Route path="/about" element={<AboutPage stories={stories} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
