import sampleData from "../assets/sampleData.json";

// TO-DO: adjust both variables when API is ready.
const USE_LOCAL_DATA = true;
const API_URL = "";

export async function fetchStories() {
  if (USE_LOCAL_DATA) return Promise.resolve(sampleData);

  const res = await fetch(API_URL);

  if (!res.ok) throw new Error("Could not fetch data.");

  return res.json();
}
