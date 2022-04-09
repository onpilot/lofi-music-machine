import { IconsSVG } from "./IconsSVG.styled";
import "./SocialLinks.css";

const onpilot = {
  github: "https://github.com/onpilot",
  linkedin: "https://www.linkedin.com/in/onpilot",
  twitter: "https://twitter.com/onpilot_",
};

const Link = (props) => {
  const link = props.link;
  return (
    <a href={onpilot[link]} target="_blank" rel="noreferrer">
      <IconsSVG className={link}></IconsSVG>
    </a>
  );
};

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <Link link="github"></Link>
      <Link link="linkedin"></Link>
      <Link link="twitter"></Link>
    </div>
  );
};
