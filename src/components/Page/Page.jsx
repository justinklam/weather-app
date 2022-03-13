import React, { Fragment } from 'react';

// components
import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

// hook
import useForecast from '../../hooks/useForecast';

// stylesheet
import styles from './Page.module.css';

const Page = () => {
  const {isError, isLoading, forecast} = useForecast();

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
              <Form/>
              {/* if state exists, render component */}
              {isError && <Error message={isError}/>}
              {isLoading && <Loader />}
              {forecast && <Forecast />}
            </div>
        </Fragment>
    );
};

export default Page;