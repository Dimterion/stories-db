import sampleStories from "../assets/sampleStories.json";
import sampleStory from "../assets/sampleStory.json";

// TO-DO: adjust variables when API is ready.
const USE_LOCAL_DATA = true;
const STORIES_API_URL = import.meta.env.VITE_STORIES_API_URL;
const STORY_API_URL = import.meta.env.VITE_STORY_API_URL;

export async function fetchStories(limit) {
  if (USE_LOCAL_DATA) return Promise.resolve(sampleStories.slice(0, limit));

  const res = await fetch(`${STORIES_API_URL}?limit=${limit}`);

  if (!res.ok) throw new Error("Could not fetch stories.");

  return res.json();
}

export async function fetchStory(id) {
  if (USE_LOCAL_DATA) {
    const story = sampleStory[String(id)];

    if (!story) throw new Error("Story not found.");

    return Promise.resolve(story);
  }

  const res = await fetch(`${STORY_API_URL}/${id}`);

  if (!res.ok) throw new Error("Could not fetch story.");

  return res.json();
}
