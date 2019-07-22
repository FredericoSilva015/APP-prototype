import React from "react";
import { Link } from 'gatsby';

import Styles from './dashboard.module.scss';

export default ({ data }) => (
  <div className={Styles.dashboardContainer}>
    <Link 
      to="/add-campaign"
      className={Styles.dashboardLink}
      activeClassName="link--active"
    >
      Add Campaign
    </Link>
    { data.map(( val ) => 
      <div 
        className={Styles.dashboardItem}
        key={val.id}
      >
        <div className={Styles.dashboardFullBlock}> 
          <h2 className={Styles.dashboardResult} >
            Campaign: {val.id}
          </h2>
        </div>
        <div className={Styles.dashboardBlock}>
          <p className={Styles.dashboardResult} >
            Delivered Impression: {val.deliveredImpressions}
          </p>
          <p className={Styles.dashboardResult} >
            Target Impressions: {val.targetImpressions}
          </p>
        </div>
        <div className={Styles.dashboardBlock}> 
          <p className={Styles.dashboardResult} >
            Start Date: {val.startDate}
          </p>
          <p className={Styles.dashboardResult} >
            End Date: {val.endDate}
          </p>
        </div>
      </div> 
    )}
    <Link 
      to="/add-campaign"
      className={Styles.dashboardLink}
      activeClassName="link--active"
    >
      Add Campaign
    </Link>
  </div> 
)