import React, { useState } from "react";
import { map } from "lodash";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

interface ProjectItem {
  id: number;
  title: string;
  img: string;
}

const Project: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Project 1",
      img: "/public/deploy.svg",
    },
    {
      id: 2,
      title: "Project 2",
      img: "/public/deploy.svg",
    },
    {
      id: 3,
      title: "Project 3",
      img: "/public/deploy.svg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 w-[100%]">
      {map(projects, (item) => (
        <ProjectCard key={item.id} title={item.title} videoSrc="/public/test.mov" />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  videoSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, videoSrc }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <CardContainer className="inter-var w-full sm:w-auto">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-center text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 relative">
          {isLoading && <div className="skeleton h-32 w-32"></div>}
          <video
            ref={(video) => {
              if (video) {
                video.onmouseenter = () => video.play();
                video.onmouseleave = () => video.pause();
              }
            }}
            src={videoSrc}
            loop
            onLoadedData={handleVideoLoaded}
            className={`w-full h-auto ${isLoading ? "hidden" : ""}`}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Project;
