import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { fetchStories } from "./services/storyService";
import Header from "./components/Header";
import HomePage from "./pages/home";
import StoryPage from "./pages/story";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/notFound";

const LIMIT_OPTIONS = [4, 8, 16];

export default function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(4);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    async function loadStories() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchStories(limit);
        setStories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStories();
  }, [limit]);

  // TO-DO: if limit should be applied to all available results (not only to the currently displayed ones), move it out of the useEffect and use: const filteredStories = stories.filter((story) => story.title.toLowerCase().includes(filter.toLowerCase())).slice(0, limit);

  return (
    <>
      <Header />
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
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
