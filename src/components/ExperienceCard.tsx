import React from "react";
import {
  FaLocationDot,
  FaSackDollar,
  FaCalendar,
  FaComputer,
  FaBriefcase,
} from "react-icons/fa6";

interface ExperienceCardProps {
  company: string;
  position: string;
  img: string;
  description: string;
  tags: string[];
  logo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  img,
  description,
  tags,
  logo,
}) => {
  return (
    <div className="experience-card">
      <div className="demo-image"><img src={`../src/imgs/demos/${img}`} alt="demo"/></div>
      <div className="experience-content">
        <div className="logo"><img src={`../src/imgs/logos/${logo}`} alt="logo"/></div>
        <div className="experience-text">
          <h2>{company}</h2>
          <p>{description}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
