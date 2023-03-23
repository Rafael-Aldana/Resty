import React, { useEffect, useState} from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';
// const [something, setSomthing] = useState('something');
// const [age, setAge] = useState(0);
// const [factorOfFive, setFactorOfFive] = useState(false);
const App = () => {

const [data, setData] = useState('');
const [requestParams, setRequestParams] = useState({});
const [loading, setLoading] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //   };
  // }
  
  const callApi = (requestParams) => {
    // mock output
    setLoading(true);
    setTimeout(() =>{
      setRequestParams(requestParams);
      setLoading(false);
    }, 3000)
  }
  
  useEffect(() => {
    const getData = async () => {
    console.log('RequestParams have Changed')
    let response = await axios.get(requestParams);
    setData(response.data);
    }
    getData();
  }, [requestParams]);
  
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading} />
        <Footer />
      </React.Fragment>
    );
};

export default App;
