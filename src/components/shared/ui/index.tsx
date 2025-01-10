import React, { useId } from "react";
import { Div, H1, Img, P } from "../styles";
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
      <H1 $size="35.2px" $weight="35.2px" $leading="52.8px">
        {text}
      </H1>
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
      $width="493px"
      $height="195px"
      $flex="flex"
      $padding="10px"
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
      <Div $width="32px" $height="32px">
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
              $bg="#3c3e67"
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
    <Div
      $width="40px"
      $height="40px"
      $border-radius="50%"
      $position="fixed"
      $bottom="90px"
      $right="50px"
      $shadow="2px 2px 30px 2px #000"
      $flex="flex"
      $justify-content="center"
      $align-items="center"
      as="a"
      href="#home"
    >
      <HiHome size={20} />
    </Div>
  );
};
