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
  const {isError, isLoading, forecast, submitRequest} = useForecast();

  const onSubmit = (value) => {
    // console.log({value});
    submitRequest(value);
  };

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
              {/* if state exists, render component */}
              {!isLoading && <Form submitSearch={onSubmit} />}
              {isError && <Error message={isError}/>}
              {isLoading && <Loader />}
            </div>
            {forecast && <Forecast />}
        </Fragment>
    );
};

export default Page;