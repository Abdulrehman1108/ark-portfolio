"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
{
    companyImg: "/devsinc-logo.jpg",
    jobTitle: "Senior Software Engineer - MERN",
    company: "DevsinC",
    jobType: "Full-time",
    duration: "2023-09 - Present",
    stuffIDid: [
        "Contributed to the development of the Kallidus platform, a leading HR and learning management website, using the MERN stack, optimizing performance, and enhancing user experience",
        "Designed and implemented responsive and intuitive user interfaces for Recurate, enhancing circular commerce functionalities with seamless integration and real-time data handling",
        "Developed and optimized video conferencing and collaboration features for Kudo, utilizing WebRTC technology for smooth communication and robust backend services"
    ],
},
{
    companyImg: "/new-logo.jpg",
    jobTitle: "Frontend Web Engineer",
    company: "Contour Software Pvt. Ltd.",
    jobType: "Remote",
    duration: "2022-09 - 2023-08",
    stuffIDid: [
        "Managed multiple projects simultaneously under tight deadlines while maintaining high levels of quality assurance in deliverables",
        "Enhanced website performance by optimizing code and implementing responsive design techniques",
        "Reduced page load times by compressing images, minifying JavaScript files, and leveraging browser caching"
    ],
},
{
    companyImg: "/arbisoft-logo.jpg",
    jobTitle: "Full Stack Web Developer",
    company: "Arbisoft",
    jobType: "Full-time",
    duration: "2021-08 - 2022-03",
    stuffIDid: [
        "Contributed to the development and optimization of the ListenTool platform using modern web technologies, enhancing functionality and ensuring a seamless user experience"
    ],
},
{
    companyImg: "/decimal-logo.jpg",
    jobTitle: "Web Developer Intern",
    company: "Decimal Solution",
    jobType: "Internship",
    duration: "2021-02 - 2021-07",
    stuffIDid: [
        "Built and deployed a robust e-commerce solution (Bavli) with the MERN stack, focusing on seamless user interfaces, secure payment integrations, and efficient product management",
        "Delivered end-to-end development for multiple web solutions (Usquare Solutions), including dashboards, client portals, and APIs, utilizing modern web technologies and best practices"
    ],
},
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
