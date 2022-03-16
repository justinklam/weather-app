import React from 'react';
import PropTypes from 'prop-types';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div></div>
            <div></div>
        </div>
    </div>
);

// CurrentDay.propTypes = {
//   weekday, 
//   date, 
//   location, 
//   temperature, 
//   weatherIcon, 
//   weatherDescription
// };

export default CurrentDay;