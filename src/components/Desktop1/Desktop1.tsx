import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:9 */
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.samVuong}>Sam Vuong</div>
      <div className={classes.aboutMe}>About me</div>
      <div className={classes.skills}>Skills</div>
      <div className={classes.projects}>Projects</div>
      <div className={classes.welcomeToMyWebsite}>Welcome to my website</div>
      <div className={classes.strivingToMakeADifference}>Striving to make a difference</div>
      <div className={classes.hiring}>
        <div className={classes.hireMe}>Hire Me !</div>
      </div>
      <div className={classes.projectFrame}>
        <div className={classes.seeMyProjects}>See my projects</div>
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
