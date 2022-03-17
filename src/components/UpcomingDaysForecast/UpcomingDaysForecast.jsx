import React from 'react';

import styles from './UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({days}) => <ul className={`${styles.weekList} d-flex justify-content-between p-0`}></ul>;

export default UpcomingDaysForecast;