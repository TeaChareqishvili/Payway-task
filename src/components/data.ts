import facebook from "../assets/socialIcons/facebook.png";
import instagram from "../assets/socialIcons/insta.png";
import twitter from "../assets/socialIcons/twitter.png";
import linkedin from "../assets/socialIcons/linkedin.png";
import { LinksTypes, SlideTypes } from "../Interface";
import { ServiceTypes } from "../Interface";
import web from "../assets/services/web.tif.png";
import mobile from "../assets/services/mobile.png";
import UI from "../assets/services/UI.png";
import arrow from "../assets/services/arrow.png";
import slide from "../assets/projects/project.png";
import slide2 from "../assets/projects/project2.png";
import slide3 from "../assets/projects/project3.png";

export const socialLinks: LinksTypes[] = [
  {
    id: 1,
    icon: facebook,
    address: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: instagram,
    address: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: twitter,
    address: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: linkedin,
    address: "https://www.linkedin.com/company/devspacebd/posts/?feedView=all",
  },
];

export const ServiceData: ServiceTypes[] = [
  {
    id: 1,
    image: web,
    number: "01",
    title: "Web Development",
    text: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed di nonumy eirm tempor invidunt dolore.",
    arrow: arrow,
    background: "#e2c8f6",
  },
  {
    id: 2,
    image: mobile,
    number: "02",
    title: "Mobile Development",
    text: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed di nonumy eirm tempor invidunt dolore.",
    arrow: arrow,
    background: "#c9f7fc",
  },
  {
    id: 3,
    image: UI,
    number: "03",
    title: "UI/UX Development",
    text: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed di nonumy eirm tempor invidunt dolore.",
    arrow: arrow,
    background: "#c0c5fc",
  },
];

export const sliderdata: SlideTypes[] = [
  {
    id: 1,
    image: slide,
  },
  {
    id: 2,
    image: slide2,
  },
  {
    id: 3,
    image: slide3,
  },
  {
    id: 4,
    image: slide,
  },
  {
    id: 5,
    image: slide2,
  },
  {
    id: 6,
    image: slide3,
  },
];
