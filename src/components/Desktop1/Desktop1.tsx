import { memo } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./Desktop1.module.css";

interface Props {
  className?: string;
}

export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
     
      <div className={classes.samVuong}>Sam Vuong</div>
      {/* Use Link component for routing */}
      <Link to="/about" className={classes.aboutMe}>
        About me
      </Link>
      <Link to="/skills" className={classes.skills}>
        Skills
      </Link>
      <Link to="/projects" className={classes.projects}>
        Projects
      </Link>
      <div className={classes.welcomeToMyWebsite}>Welcome to my website</div>
      <div className={classes.strivingToMakeADifference}>
        Striving to make a difference
      </div>
      <div className={classes.hiring}>
        <Link to="/hireme" className={classes.hireMe}>
          Hire Me !
        </Link>
      </div>
      <div className={classes.projectFrame}>
        <Link to="/projects" className={classes.seeMyProjects}>
          See my projects
        </Link>
      </div>
      <div className={classes.hiIMSamSoftwareEngineeringStud}>
        <div className={classes.textBlock}>Hi ! I’m Sam,</div>
        <div className={classes.textBlock2}>Software Engineering Student </div>
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle2}></div>
    </div>
  );
});
