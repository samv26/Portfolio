import React from 'react';
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';

const HireMe = () => {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.linkedIn}></div>
      <div className={classes.envelope}></div>
      <div className={classes.smartphone}></div>
      <div className={classes._412354456}>0412354456</div>
      <div className={classes.myContacts}>My Contacts</div>
      <div className={classes.samvuong263GmailCom}>samvuong263@gmail.com</div>
      <div className={classes.samVuong}>
        <a
          href='https://www.linkedin.com/in/sam-vuong-1b5a9b269/'
          target='_blank'
          rel='noreferrer'
          className={classes.textBlock}
        >
          Sam Vuong
        </a>
      </div>
      <div className={classes.frame2}></div>
    </div>
  );
};

export default HireMe;