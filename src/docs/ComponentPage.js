import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

  return (
    <div className="componentpage">
      <h2>{name}</h2>
      <p>{description}</p>

      <h3 styles={{borderBottom: '2px #f28a25 solid'}}>Props & Methods</h3>
      {
        props ?
        <Props props={props} /> :
        "This component accepts no props."
      }

      <h3>Example{examples.length > 1 && "s"}</h3>
      {
        examples.length > 0 ?
        examples.map(example => <Example key={example.name} example={example} componentName={name} /> ) :
        "No examples exist."
      }
    </div>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;