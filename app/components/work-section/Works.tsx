import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Cowsync",
      liveLink: "https://cowsync-web-v1.vercel.app/",
      about:
        "COWSYNC seamlessly integrates disease prevention, location monitoring, and high-quality milk supply into one user-friendly platform for cow care.COWSYNC aims to revolutionizes the cow sector by improving dairy supply, enhancing cow health, and promoting safer practices for both livestock and consumers.This system will revolutionize livestock handling by empowering farmers for efficient management and ensuring the safety and quality of milk for consumers.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/cowsyncc.jpg",
    },
    {
      title: "ARKs-Coffee-Website",
      gitLink: "https://github.com/Abdulrehman1108/ARK-s-Coffee-Website",
      liveLink: "https://mani-coffee-cafe.netlify.app/",
      about:
        "Mani's Coffee Cafe is your ultimate online destination for all things coffee. Whether you're a casual coffee drinker or a true connoisseur, we offer a rich blend of insights, recipes, and tips to elevate your coffee experience. Explore the world of brewing, discover unique coffee flavors, and connect with a community that shares your passion for the perfect cup..",
      stack: ["React.js", "javascript", "framer motion", "sass"],
      img: "/manis-coffee.jpg",
    },
    {
      title: "Work Manager",
      gitLink: "https://github.com/Abdulrehman1108/Work-Manager",
      liveLink: "https://the-work-manager.netlify.app/login",
      about:
        "Work Manager is a streamlined task management website designed to help you stay organized and productive. With features to easily add, delete, and view tasks, it’s your go-to tool for managing daily to-do lists and long-term projects. Whether you're tracking personal goals or managing work assignments, Work Manager provides a simple and intuitive interface to keep everything in check and boost your efficiency.",
      stack: ["Next.js", "Mongodb", "react-router", "javascript","typescript", "tailwindcss"],
      img: "/work-manager.jpg",
    },
    // {
    //   title: "Multi-step form",
    //   gitLink: "",
    //   liveLink: "",
    //   about:
    //     "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "/multistep.svg",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px] "
      
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
