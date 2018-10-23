import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

  // TODO: generate category somehow from generateComponentData by using some convention (sub directories?)
  // add category as a prop for heading1 below?

  return (
    <div className="componentPage">
      <h1 className={'componentPage--heading1'}>Components</h1>

      <h2 className={'componentPage--heading2'}>{name}</h2>
      
      <div className='importstatement'>{`import ${name} from 'spunky-ui-react/${name}';`}</div>

      <div>
        <p className='componentPage--description'>{description}</p>
      </div>

      <h3>Props</h3>

      { props ? <Props props={props} /> : "This component accepts no props." }

      <h3 className={'componentPage--heading3'}>Example{examples.length > 1 && "s"}</h3>
      
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
