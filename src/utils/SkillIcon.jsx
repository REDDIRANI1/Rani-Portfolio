import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiMysql,
  SiLeetcode,
  SiInstagram
} from "react-icons/si";

const ICON_MAP = {
  github: FaGithub,
  linkedin: FaLinkedin,
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  next: SiNextdotjs,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  python: SiPython,
  fastapi: SiFastapi,
  mysql: SiMysql,
  dbms: FaDatabase,
  docker: FaDocker,
  linux: FaLinux,
  tailwind: SiTailwindcss,
  leetcode:SiLeetcode,
  instagram:SiInstagram
};

const SkillIcon = ({ name }) => {
  const IconComponent = ICON_MAP[name?.toLowerCase()];

  if (!IconComponent) {
    console.warn(`No icon found for "${name}"`);
    return null;
  }

  return <IconComponent />;
};

export default SkillIcon;
