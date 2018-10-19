import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

  return (
    <div className="componentpage">
      <h2>{name}</h2>
      
      <div className='importstatement'>{`import ${name} from 'spunky-ui-react/${name}';`}</div>

      <div>
        <p className='component-description__p'>{description}</p>
      </div>

      <h3>Props</h3>

      { props ? <Props props={props} /> : "This component accepts no props." }

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
