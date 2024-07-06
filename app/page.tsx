// app/page.tsx
import React from "react";
import VideoNews from "../components/VideoNews";
import BreakingNews from "../components/BreakingNews";

const Home: React.FC = () => {
  const videoNews = {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video News",
    description: "This is a sample description for video news.",
  };

  const breakingNews = [
    { title: "Breaking News 1", description: "Details of breaking news 1" },
    { title: "Breaking News 2", description: "Details of breaking news 2" },
  ];

  return (
    <>
      <h2 className="flex items-center justify-center text-3xl font-thin uppercase tracking-widest pt-5">
        Breaking News
      </h2>
      <div className="pt-5">
        <VideoNews video={videoNews} />
      </div>
      <h2 className="pt-5 m-5 uppercase text-2xl tracking-widest font-thin">
        News
      </h2>
      <BreakingNews news={breakingNews} />
    </>
  );
};

export default Home;
