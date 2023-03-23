import React from 'react';
import JSONPretty from 'react-json-pretty';

var JSONPrettyMon = require('react-json-pretty/dist/monikai');

const Results = (props) => {
  const { data } = props;
    return (
      <section>
        {
          props.loading ? <p>Fetching your data this will only take a sec... </p>
          :
        <pre>
          {
          data ? <JSONPretty data = {data} theme={JSONPrettyMon}></JSONPretty> : null
          }
        </pre>
        }
      </section>
    );
  };
// got pretty json from code review
export default Results;
