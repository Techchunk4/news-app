// components/VideoNews.tsx
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface VideoNewsProps {
  video: {
    url: string;
    title: string;
    description: string;
  };
}

const VideoNews: React.FC<VideoNewsProps> = ({ video }) => {
  return (
    <Card>
      <CardMedia
        component="iframe"
        height="300"
        src={video.url}
        title={video.title}
      />
      <CardContent>
        <Typography variant="h6">{video.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {video.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoNews;
