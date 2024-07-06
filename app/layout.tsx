// app/layout.tsx
import "./globals.css";
import Layout from "../components/Layout";
import { ReactNode } from "react";

export const metadata = {
  title: "News App",
  description: "News app with video and breaking news",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
