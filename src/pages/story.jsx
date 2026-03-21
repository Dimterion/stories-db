import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function StoryPage() {
  const { id } = useParams();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return <div>StoryPage {id}</div>;
}
