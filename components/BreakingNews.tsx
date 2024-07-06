// components/BreakingNews.tsx
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { FaExclamationCircle } from "react-icons/fa";

interface BreakingNewsProps {
  news: {
    title: string;
    description: string;
  }[];
}

const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
  return (
    <List>
      {news.map((item, index) => (
        <ListItem key={index}>
          <FaExclamationCircle color="red" style={{ marginRight: "10px" }} />
          <ListItemText primary={item.title} secondary={item.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default BreakingNews;
