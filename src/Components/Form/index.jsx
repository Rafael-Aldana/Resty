import React, { useState } from 'react';

import './Form.scss';

// const [something, setSomthing] = useState('something');
// const [age, setAge] = useState(0);
// const [factorOfFive, setFactorOfFive] = useState(false);
function Form (props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [data, setData] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button type="submit" id="submit">GO!</button>
        </label>
            <span>
              {method === "POST" && <textarea onChange={(e) => setData(e.target.value)}/>}
              {method === "PUT" && <textarea onChange={(e) => setData(e.target.value)}/>}
            </span>
        <label className="methods">
          <span style={{backgroundColor: method === 'GET' ? 'red' : '#10a2eb' }} id="get" onClick={(e) => setMethod(e.target.innerText)}>
            GET
            </span>
          <span style={{backgroundColor: method === 'POST' ? 'red' : '#10a2eb' }} id="post" onClick={(e) => setMethod(e.target.innerText)}>
            POST
            </span>
          <span style={{backgroundColor: method === 'PUT' ? 'red' : '#10a2eb' }} id="put" onClick={(e) => setMethod(e.target.innerText)}>
            PUT
            </span>
          <span style={{backgroundColor: method === 'DELETE' ? 'red' : '#10a2eb' }} id="delete" onClick={(e) => setMethod(e.target.innerText)}>
            DELETE
            </span>
        </label>
      </form>
    </>
  );
};
// Got textarea code from code review

export default Form;
// class Form extends React.Component {


//   }

//   render() {

// }


