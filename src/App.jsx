import { useState, useEffect } from "react";
import sampleData from "./assets/sampleData.json";

// TO-DO: adjust both variables when API is ready.
const USE_LOCAL_DATA = true;
const API_URL = "";

export default function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchStories() {
    if (USE_LOCAL_DATA) {
      return Promise.resolve(sampleData);
    }

    const res = await fetch(API_URL);

    if (!res.ok) throw new Error("Could not fetch data.");

    return res.json();
  }

  useEffect(() => {
    fetchStories()
      .then((data) => {
        console.log(data);
        setStories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{stories[0].title}</div>;
}
