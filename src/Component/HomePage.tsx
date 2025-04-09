import React from "react";
import { Code, Server, Layers, BookOpen } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0ecff] via-[#f0e6ff] to-[#ffe4f0] p-8">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-md">
          👨‍💻 Web Dev Playground
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Welcome to your personalized web development dashboard. Learn, build,
          and level up your skills in frontend, backend, and full-stack
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card
          icon={<Code className="w-8 h-8 text-indigo-600" />}
          title="Frontend Development"
          description="Create stunning, responsive interfaces using HTML, CSS, JavaScript, React, and modern UI frameworks like Tailwind CSS."
          color="bg-indigo-50"
        />
        <Card
          icon={<Server className="w-8 h-8 text-green-600" />}
          title="Backend Development"
          description="Power your applications with REST APIs, Node.js, Express, and MongoDB. Learn server-side logic and authentication."
          color="bg-green-50"
        />
        <Card
          icon={<Layers className="w-8 h-8 text-yellow-500" />}
          title="Full-Stack Projects"
          description="Build real-world MERN stack applications — from social platforms to real-time chat apps — with full integration."
          color="bg-yellow-50"
        />
        <Card
          icon={<BookOpen className="w-8 h-8 text-purple-600" />}
          title="Learning Resources"
          description="Get access to curated documentation, tutorials, coding platforms, and GitHub repositories to practice and grow."
          color="bg-purple-50"
        />
      </div>
    </div>
  );
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  color = "bg-white",
}) => {
  let iconBg = "bg-indigo-100";
  if (color.includes("green")) iconBg = "bg-green-100";
  if (color.includes("yellow")) iconBg = "bg-yellow-100";
  if (color.includes("purple")) iconBg = "bg-purple-100";

  return (
    <div
      className={`${color} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`${iconBg} p-3 rounded-xl shadow-inner`}>{icon}</div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default HomePage;
