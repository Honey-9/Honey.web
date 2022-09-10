import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// "@fortawesome/free-regular-svg-icons": "^5.15.1",

import {
  faGithub,
  faTwitter,
  faBehanceSquare,
  faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

import './footer.css';


export default function Footer(){
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © {new Date().getFullYear()}. Honey. All rights reserved
        </span>
        <div className="socialinks">
          <span>Follow me</span>
          <a href="https://github.com/Honey-9" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/_Honey_9__" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="mailto:harshsingh9667903022@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.behance.net/honey-9" target="_blank">
            <FontAwesomeIcon icon={faBehanceSquare} />
          </a>
          <a href="https://codepen.io/____honey_9" target="_blank">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
      </div>
    </div>
  )
}
