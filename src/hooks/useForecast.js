import { useState } from "react";
import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  // call the api
  const submitRequest = location => {
    console.log({location});
  };

  return {
    isError, 
    isLoading, 
    forecast,
    submitRequest
  };
  
};

export default useForecast;