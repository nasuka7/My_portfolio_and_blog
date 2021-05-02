import { AiOutlineDownCircle } from "react-icons/ai";
import { IProject, Service } from "./types";

export const services: Service[] = [
  {
    title: "Age",
    about: "21",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Hometown",
    about: "Tokyo",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Motto",
    about: "No Attack No Chance",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Club",
    about: "Ultimate , Baseball",
    Icon: AiOutlineDownCircle,
  },
  {
    title: "Email",
    about: "kobakai0707baseball@gmail.com",
    Icon: AiOutlineDownCircle,
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: "Twitter Clone",
    description: "Twitterのクローンです。",
    image_path: "/images/tt.jpg",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    key_techs: ["React"],
  },
  {
    id: 2,
    name: "Photo Search App",
    description: "写真の検索サイトです",
    image_path: "/images/tt.jpg",
    deployed_url: "",
    github_url: "",
    category: ["java"],
    key_techs: ["Java"],
  },
  
]