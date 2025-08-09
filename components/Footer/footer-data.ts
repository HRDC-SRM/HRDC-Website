// Types Imports
import { FooterOptionType, SocialLinkType } from "@/types/footer-option-type";

const communityLinks: Array<FooterOptionType> = [
  { 
    title: "Contact Us", 
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=hrdcsrm@gmail.com" 
  },
  // { title: "Sponsor us", link: "https://github.com/hekors/.github" },
  // {
  //   title: "Open Source",
  //   link: "https://github.com/hackerrank-developers-community-srmist",
  // },
  // {
  //   title: "Our Gallery",
  //   link: "https://drive.google.com",
  // },
];

const directLinks: Array<FooterOptionType> = [
  { title: "Centre of Excellence", path: "https://www.srmist.edu.in/department/department-of-computational-intelligence/centre-of-excellence-for-agentictwins-agentic-ai-digital-twins-and-metaverse/" },
  {
    title: "Department of Computational Intelligence",
    link: "https://www.srmist.edu.in/department/department-of-computational-intelligence/",
  },
];

const socialLinks: Array<SocialLinkType> = [
  {
    iconPath: "linkedin-3D-icon.png",
    label: "linkedin",
    link: "https://www.linkedin.com",
  },
  {
    iconPath: "whatsapp-3D-icon.png",
    label: "whatsapp",
    link: "https://whatsapp.com/",
  },
  {
    iconPath: "instagram-3D-icon.png",
    label: "instagram",
    link: "https://www.instagram.com/hrdc.srm/",
  },
];

export { communityLinks, directLinks, socialLinks };
