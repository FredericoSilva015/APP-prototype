import React from "react";

import load from '../../media/giphy.gif';
import Styles from './loader.module.scss'

export default () => (
  <div className={Styles.loaderContainer}>
    <img src={load} alt="Loading giphy" />
  </div> 
)