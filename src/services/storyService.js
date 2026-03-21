import sampleStories from "../assets/sampleStories.json";

// TO-DO: adjust both variables when API is ready.
const USE_LOCAL_DATA = true;
const API_URL = import.meta.env.VITE_STORIES_API_URL;

export async function fetchStories(limit) {
  if (USE_LOCAL_DATA) return Promise.resolve(sampleStories.slice(0, limit));

  const res = await fetch(`${API_URL}?limit=${limit}`);

  if (!res.ok) throw new Error("Could not fetch data.");

  return res.json();
}
