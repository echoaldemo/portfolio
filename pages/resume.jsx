import React from 'react'
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const resume = () => {
  return (
    <>
      <Head>
        <title>Jericho | Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Jericho Aldemo</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/jerichoaldemo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/echoaldemo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{' '}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Tools and Technologies
          </h5>
          <p className="py-2">
            <span className="font-bold whitespace-nowrap">
              Technical Skills
            </span>
            <span className="px-2">|</span>HTML5
            <span className="px-2">|</span>CSS3
            <span className="px-2">|</span>JavaScript
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>Node.js
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next.js
            <span className="px-2">|</span>PostgreSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind CSS / Bootstrap
            <span className="px-2">|</span>Storybook
            <span className="px-2">|</span>REST API (Axios, Fetch, RXjs)
            <span className="px-2">|</span>Postman / Insomnia
            <span className="px-2">|</span>Express.js / Adonis.js
          </p>
          <p className="py-2">
            <span className="font-bold">
              Source Code and Project Management
            </span>
            <span className="px-2">|</span>GitHub
            <span className="px-2">|</span>GitLab
            <span className="px-2">|</span>JIRA
            <span className="px-2">|</span>Trello
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Multisys Technologies Corporation
            </span>
            <span className="px-2">|</span>Parañaque City, PH
          </p>
          <p className="py-1 italic">
            Front-End Software Engineer (June 2020 - Present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Develop functional and appealing web-based applications based on
              usability.
            </li>
            <li>
              Discuss user interface ideas and applications with the development
              team.
            </li>
            <li>
              Implement responsible web design principles to ensure that the
              application renders well across multiple devices.
            </li>
            <li>Ensure the technical feasibility of UI/UX designs.</li>
            <li>Documents application changes and developing updates.</li>
            <li>
              Work on the development of user interface & UI modernization of
              legacy company products.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Boomsourcing Inc.</span>
            <span className="px-2">|</span>Legazpi City, PH
          </p>
          <p className="py-1 italic">
            Front-End Developer (May 2019 - April 2020)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Led different teams of developers while collaborating with project
              managers, including designers and back-end developers, to
              consistently improve functionality and user friendliness of
              web-applications.
            </li>
            <li>
              Wrote clean, modular and well-annotated code that made it easier
              to maintain, update, and scale as projects grew.
            </li>
            <li>
              Conducted unit tests and optimized existing code to ensure optimal
              speed and performance.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Work Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Pag-asa National High School</span>
            <span className="px-2">|</span>Legazpi City, PH
          </p>
          <p className="py-1 italic">
            Full-Stack Developer (Intern) (June 2018 - October 2018)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Led a team on developing an online enrollment system that would be
              able to manage the information of the school&apos;s students.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default resume
