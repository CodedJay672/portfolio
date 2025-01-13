import React, { useId } from "react";
import { Div, H1, HeadingTitle, HomeButton, Img, P } from "../styles";
import {
  ProjectCard,
  ProjectImg,
  ProjectLink,
  Span,
} from "../../containers/Projects/ProjectStyles";
import { HiHome } from "react-icons/hi";

export const SectionTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Div
      $width="100%"
      $flex="flex"
      $flex-direction="column"
      $justify-content="center"
      $align-items="center"
    >
      <HeadingTitle>{text}</HeadingTitle>
    </Div>
  );
};

export const ExperienceCard: React.FC<{
  imageUrl: string;
  position: string;
  company: string;
  role: "full-time" | "Part-time";
  range: string;
  location: string;
  description: string;
  type: "Remote" | "Hybrid" | "Onsite";
}> = ({
  imageUrl,
  position,
  company,
  role,
  range,
  location,
  description,
  type,
}) => {
  return (
    <Div
      $width="500px"
      $height="195px"
      $flex="flex"
      $padding="20px"
      $border="1px solid #E9E9E9"
      $border-radius="10px"
      $gap="10px"
    >
      <Div $width="60px" $height="60px">
        <Img
          src={imageUrl}
          alt="logo"
          $width="100%"
          $height="100%"
          $object-fit="contain"
        />
      </Div>
      <Div $width="100%" $overflow="hidden">
        <H1 $size="20.8px" $weight="500" $leading="31.2px">
          {position}
        </H1>
        <P $size="14.4px" $weight="200" $line-height="21.2px" $color="#000">
          {company} - {role}
        </P>
        <P $size="10.4px" $weight="200" $line-height="21.2px" $color="#000">
          {range}
        </P>
        <P $size="10.4px" $weight="200" $line-height="21.2px" $color="#000">
          {location} - {type}
        </P>
        <P $size="10.4px" $weight="200" $line-height="21.2px" $color="#000">
          {description}
        </P>
      </Div>
    </Div>
  );
};

export const SkillsCard: React.FC<{ img: string; skill: string }> = ({
  img,
  skill,
}) => {
  return (
    <Div
      $width="176px"
      $height="100px"
      $border="1px dashed #E9E9E9"
      $border-radius="10px"
      $flex="flex"
      $flex-direction="column"
      $justify-content="center"
      $align-items="center"
    >
      <Div $width="48px" $height="48px">
        <Img
          src={img}
          alt="skill img"
          $width="100%"
          $height="100%"
          $object-fit="contain"
        />
      </Div>
      <P $size="16px" $weight="300" $color="#0F172A" $line-height="24px">
        {skill}
      </P>
    </Div>
  );
};

export const ProjectDetails: React.FC<{
  imageUrl: string;
  title: string;
  desc: string;
  tech: string[];
  link: string;
  github: string;
}> = ({ imageUrl, title, desc, tech, link, github }) => {
  const id = useId();
  return (
    <>
      <ProjectCard>
        <Div $width="100%" $overflow="hidden">
          <ProjectImg
            src={imageUrl}
            alt="project-img"
            $width="100%"
            $height="100%"
            $object-fit="contain"
          />
        </Div>
        <Div
          $padding="0 10px"
          $flex="flex"
          $flex-direction="column"
          $justify-content="space-between"
          $align-items="space-evenly"
        >
          <H1 $size="16px" $weight="600" $leading="31px">
            {title}
          </H1>
          <P
            $size="12.4px"
            $line-height="21px"
            $color="#545454"
            $weight="300"
            $truncate={4}
          >
            {desc}
          </P>
          <Span>Tech Stack</Span>
          <Div
            $flex="flex"
            $gap="2px"
            $justify-content="center"
            $align-items="center"
            $margin="6px 0"
          >
            {tech.map((item) => (
              <Div
                $padding="5px 9px"
                $border="1px solid #E9E9E9"
                $border-radius="4px"
                $flex="flex"
                $justify-content="center"
                $align-items="center"
                key={id + Math.random()}
              >
                <P
                  $size="10px"
                  $weight="300"
                  $line-height="19.2px"
                  $color="#545454"
                >
                  {item}
                </P>
              </Div>
            ))}
          </Div>

          <Div $flex="flex" $gap="3px">
            <ProjectLink
              $leading="24px"
              $weight="300"
              $size="10.4px"
              $bg="#0F172A"
              $color="#fff"
              href={`https://${link}`}
              target="_blank"
            >
              <Img
                src="/assets/gotolink.png"
                alt="visit link"
                $width="16px"
                $height="16px"
                $object-fit="contain"
              />{" "}
              Live
            </ProjectLink>
            <ProjectLink
              $leading="24px"
              $weight="300"
              $size="10.4px"
              $bg="#D1D5DB"
              href={`https://${github}`}
              target="_blank"
            >
              <Img
                src="/assets/visitgit.png"
                alt="visit link"
                $width="16px"
                $height="16px"
                $object-fit="contain"
              />{" "}
              Github
            </ProjectLink>
          </Div>
        </Div>
      </ProjectCard>
    </>
  );
};

export const GoHome = () => {
  return (
    <HomeButton as="a" href="#home">
      <HiHome size={20} />
    </HomeButton>
  );
};

export const Summary = () => {
  return (
    <P $size="14.5px" $weight="300px" $line-height="20px" $color="#3c3e67">
      HI,
      <br />
      <br />
      I am Emmanuel Ebuka Ugoh, a frontend developer with over 3 years of
      experience in creating mordern UI designs for users. I have a solid
      background in HTML, CSS and Javascript, and their related frameworks such
      as ReactJs and NextJs, with styling tools like TailwindCSS, Styled
      Components, Material UI and Bootstrap.
      <br />
      <br />
      I am familiar with tools like VSCode for clean and beautiful code editing
      and also Git and Github for version control, remote collaboration and open
      source contributions.
      <br />
      <br />
      Having graduated from ALX Africa, I have worked with teams around Africa,
      building applications for the web and learning soft skills like team
      playing, active listening and effective collaboration both on-site and
      remotely
      <br />
      <br />
      I am part of the Sekure Business team, where we are building an online
      business platform which allows users to purchase virtual cards. This
      application will simplify the process of carrying out local and
      international online purchases.
      <br />
      <br />I am also a part of the Tech64 team where we are building a School
      Management System which will manage the financial activities in schools,
      allowing the management to focus on more pressing issues like running the
      school affairs and imparting knowldge on the students.
    </P>
  );
};

export const Education = () => {
  return (
    <P $size="14.5px" $weight="300px" $line-height="20px" $color="#3c3e67">
      I am a graduate of Bayero University, Kano, Kano state, where I studied
      computer science in the department of computer science, Faculty of
      Computer Science and Information Technology (FCSIT).
      <br />
      <br />
      In my course of study, I focused on building a solid foundation in
      Computer Theory, System Analysis and Design, Human Computer Interactions,
      Computer Graphics, Data Structures and Algoriths, Cryptography and Crypto
      Analytics, Networking, Operating systems, and Software Engineering. In my
      second year, I wrote my first Python code - the legendary "Hello World!"
      program - after which we went ahead to learn programming languages like C,
      C++, Java, Visual Basic, Javascript, and Php.
      <br />
      <br />
      I graduated with an Upper Second Class honors (CGPA 4.46).
      <br />
      <br />
      I was called to serve in Katsina, Daura LGA. This afforded me the
      opportunity to impart knowledge of Maths and C.I.T into my students.
      <br />
      <br />
      During this time, I also took the opportunity to enrol as an intern at ALX
      Africa. This program is a practical internship program where I gained
      hands-on experience in writing codes and building real world applications
      for the web. During this program I learned and mastered technologies like
      Shell Scripting, Virtualization, Dockerization, Ruby on Rails, SCSS,
      TailwindCSS, ReactJs, NextJS, Flask, MySQL, and many more.
      <br />
      <br /> I chose to follow the frontend path but I also build fullstack
      applications with NextJs using backend tools like Appwrite and MongoDB.
      <br />
      <br />I passed out of the NYSC in November 2022, and completed my
      internship in August 2023.
    </P>
  );
};

export const Hobbies = () => {
  return (
    <P $size="14.5px" $weight="300px" $line-height="20px" $color="#3c3e67">
      I love to travel, meet new friends, read, and code.
      <br />
      <br /> I enjoy board games like chess and scrabble and I love playing
      video games too.
      <br />
      <br />
      Talking about sports, I enjoy playing football.
      <br />
      <br />
      Talking about music, I love Gospel, Afrobeats, Amapiano, Rap and Regae. I
      also play the Keyboard, Drums and a tiny bit of Bass guitar and Acoustic
      box guitar.
      <br />
      <br />I love God, and I am a Devout Christian.
      <br />
      <br />
      Talking about social media and infotainment, I LOVE LinkedIn and you
      should check out my profile - you'll love it. I think Twitter is too toxic
      and Instagram and TikTok are for relaxing and goofing sometimes.
      <br />
      <br />I love watching The Morning Show on Arise TV and, for movies, I
      enjoy Sci-fi and Super hero series. I also enjoy super hero comics and
      cartoons.
      <br />
      <br />I believe in the power of the subconscious. So whatever you want to
      achieve in life you have to first be obssessed with it, only then will
      everything, within and without, work for you to achieve it.
    </P>
  );
};
