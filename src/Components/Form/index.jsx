import React, { useState } from 'react';

import './Form.scss';

// const [something, setSomthing] = useState('something');
// const [age, setAge] = useState(0);
// const [factorOfFive, setFactorOfFive] = useState(false);
function Form (props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          <button type="submit" id="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={() => setMethod('GET')}>GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
};


export default Form;
// class Form extends React.Component {


//   }

//   render() {

// }


