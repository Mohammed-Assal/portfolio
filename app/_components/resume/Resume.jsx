import React from "react";

function Resume() {
  return (
    <div className="md:w-[60%] w-full ">
      {/* Metavse Experience */}
      <div className="flex items-start mb-12">
        <div className="border-l-4 border-green-400 pl-4">
          <h3 className="text-3xl font-semibold text-white mb-1">
            {" "}
            Metaverse, Casablanca - 2024
          </h3>
          <p className="text-[18px] text-gray-300">
            {" "}
            Full Stack Developer MERN Stack & AWS (Internship) - 4 months
          </p>
          <ul className="list-disc text-[14px]  list-inside mt-4 text-gray-400">
            <li>
              Developed and optimized scalable web applications using Next.js,
              MERN stack, and AWS.
            </li>
            <li>
              Led the end-to-end development of two projects from scratch,
              implementing best practices in frontend and backend development.
            </li>
            <li>
              Integrated into an existing project, enhancing features,
              optimizing performance, and improving code maintainability.
            </li>
            <li>
              Worked with Git and Jira for efficient version control, project
              tracking, and agile collaboration.
            </li>
          </ul>
        </div>
      </div>

      {/* Oriental Import Experience */}
      <div className="flex items-start mb-12">
        <div className="border-l-4 border-green-400 pl-4">
          <h3 className="text-3xl font-semibold text-white mb-1">
          Group-Oriental, Marrakech - 2025
          </h3>
          <p className="text-[18px] text-gray-300">
            WordPress Developer (Internship)  - 1 month
          </p>
          <ul className="list-disc text-[14px]  list-inside mt-4 text-gray-400">
            <li>
              Provided IT support and troubleshooting for internal systems and
              networks.
            </li>
            <li>
              Worked on 8 WordPress websites, handling development,
              optimization, and maintenance.
            </li>
            <li>
              Built a website from scratch, ensuring performance,
              responsiveness, and SEO optimization.
            </li>
            <li>
              Increased website performance scores from 60 to 99 on three
              projects through advanced optimization techniques.
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-[100px] md:mb-[0]"></div>
    </div>
  );
}

export default Resume;
