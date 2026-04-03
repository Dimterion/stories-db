import sampleStories from "../assets/sampleStories.json";
import sampleStory from "../assets/sampleStory.json";
import { storyImages } from "../assets/images/imgImport";

// TO-DO: adjust variables when API is ready.
// Example API structure:
// GET https://api.example.com/stories        ← list
// GET https://api.example.com/stories/:id    ← detail
// fetch(`${API_URL}/stories?limit=${limit}`)
// fetch(`${API_URL}/stories/${id}`)

const USE_LOCAL_DATA = true;
const STORIES_API_URL = import.meta.env.VITE_STORIES_API_URL;
const STORY_API_URL = import.meta.env.VITE_STORY_API_URL;

export async function fetchStories() {
  if (USE_LOCAL_DATA) {
    const stories = sampleStories.map((story) => ({
      ...story,
      image: story.image ?? storyImages[story.slug] ?? null,
    }));

    return Promise.resolve(stories);
  }

  const res = await fetch(STORIES_API_URL);

  if (!res.ok) throw new Error("Could not fetch stories.");

  return res.json();
}

export async function fetchStory(slug) {
  if (USE_LOCAL_DATA) {
    const story = sampleStory.find((s) => s.slug === slug);

    if (!story) throw new Error("Story not found.");

    return Promise.resolve({
      ...story,
      image: story.image ?? storyImages[story.slug] ?? null,
    });
  }

  const res = await fetch(`${STORY_API_URL}/${slug}`);

  if (!res.ok) throw new Error("Could not fetch story.");

  return res.json();
}
