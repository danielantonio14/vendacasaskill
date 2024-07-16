import React from "react";
import '@/assets/styles/global.css';

export const metadata = {
    title: "Venda Casa Skill",
    description: "Venda Casa Skill is a platform for selling property skills",
    keywords: "venda casa, skill, property, property management",
  };


const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children} </div>
      </body>
    </html>
  );
};

export default MainLayout;
