import { AiOutlineDownCircle } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { IProject, Service, Skill } from './types';

export const services: Service[] = [
  {
    title: 'Age',
    about: '21',
    Icon: AiOutlineDownCircle,
  },
  {
    title: 'Height',
    about: '181',
    Icon: AiOutlineDownCircle,
  },
  {
    title: 'Body weight',
    about: '90',
    Icon: AiOutlineDownCircle,
  },
  {
    title: 'Hometown',
    about: 'Tokyo',
    Icon: AiOutlineDownCircle,
  },
  {
    title: 'Motto',
    about: 'No Attack No Chance',
    Icon: AiOutlineDownCircle,
  },
  {
    title: 'Club',
    about: 'Ultimate , Baseball',
    Icon: AiOutlineDownCircle,
  },
  // {
  //   title: "Email",
  //   about: "kk0707baseball@gmail.com",
  //   Icon: AiOutlineDownCircle,
  // },
];

export const languages: Skill[] = [
  {
    name: 'HTML',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'CSS',
    level: '50%',
    Icon: BsCircleFill,
  },
  {
    name: 'JavaScript',
    level: '40%',
    Icon: BsCircleFill,
  },
  {
    name: 'React',
    level: '40%',
    Icon: BsCircleFill,
  },
  {
    name: 'Next.js',
    level: '40%',
    Icon: BsCircleFill,
  },
  {
    name: 'TailwindCSS',
    level: '50%',
    Icon: BsCircleFill,
  },
];

export const tools: Skill[] = [
  {
    name: 'PhotoShop',
    level: '50%',
    Icon: BsCircleFill,
  },
  {
    name: 'Illustrator',
    level: '50%',
    Icon: BsCircleFill,
  },
  {
    name: 'Rhinoceros',
    level: '40%',
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Demo App',
    description: 'DemoApp1です',
    image_path: '/images/profile.jpg',
    deployed_url: '',
    github_url: '',
    category: ['React'],
    key_techs: ['React'],
  },
  {
    id: 2,
    name: 'Demo App2',
    description: 'DemoApp2です',
    image_path: '/images/demo_image.JPG',
    deployed_url: '',
    github_url: '',
    category: ['Javascript'],
    key_techs: ['Javascript'],
  },
];
