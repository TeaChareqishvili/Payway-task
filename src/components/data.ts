import facebook from "../assets/socialIcons/facebook.png";
import instagram from "../assets/socialIcons/insta.png";
import twitter from "../assets/socialIcons/twitter.png";
import linkedin from "../assets/socialIcons/linkedin.png";
import { LinksTypes } from "../Interface";
import { ServiceTypes } from "../Interface";
import web from "../assets/services/web.tif.png";
import mobile from "../assets/services/mobile.png";
import UI from "../assets/services/UI.png";
import arrow from "../assets/services/arrow.png";

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
