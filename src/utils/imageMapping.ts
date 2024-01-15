import angularImage from "../assets/angular.png";
import apiImage from "../assets/api.png";
import awsImage from "../assets/aws.png";
import bootstrapImage from "../assets/bootstrap.png";
import bootstrapProject from "../assets/bootstrapProject.jpeg";
import buzzImage from "../assets/buzzfeed.jpeg";
import cssImage from "../assets/css.png";
import dockerImage from "../assets/docker.png";
import gitImage from "../assets/git.png";
import githubImage from "../assets/github.png";
import htmlImage from "../assets/html.png";
import icon from "../assets/icon.jpg";
import javaImage from "../assets/java.png";
import javascriptImage from "../assets/javascript.png";
import jornada from "../assets/jornadaheroi.jpeg";
import kenzie from "../assets/kenzie.png";
import left from "../assets/left.png";
import linkedinImage from "../assets/linkedin.png";
import materialui from "../assets/materialui.png";
import nodeImage from "../assets/node.png";
import pythonImage from "../assets/python.png";
import reactImage from "../assets/react.png"; 
import reactProject from "../assets/reactProject.jpeg";
import right from "../assets/right.png";
import sqlImage from "../assets/sql.png";
import taiwilnd from "../assets/taiwilnd.png";
import typescriptImage from "../assets/typescript.png";
import vueImage from "../assets/vue.png";
import whatsappImage from "../assets/whatsapp.png";
import indicium from "../assets/indicium.svg";

export const images = {
  java: javaImage,
  html: htmlImage,
  css: cssImage,
  javascript: javascriptImage,
  typescript: typescriptImage,
  react: reactImage,
  angular: angularImage,
  vue: vueImage,
  node: nodeImage,
  python: pythonImage,
  sql: sqlImage,
  aws: awsImage,
  docker: dockerImage,
  git: gitImage,
  github: githubImage,
  api: apiImage,
  bootstrap: bootstrapImage,
  materialui: materialui,
  linkedin: linkedinImage,
  whatsapp: whatsappImage,
  jornada: jornada,
  kenzie: kenzie,
  buzz: buzzImage,
  taiwilnd: taiwilnd,
  icon: icon,
  left: left,
  right: right,
  reactProject: reactProject,
  bootstrapProject: bootstrapProject,
  indicium: indicium,
};

export type ImageKeys = keyof typeof images;