import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
  return (
    <table className="props">
      <thead>
        <tr>
          <th>Prop name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {
        Object.keys(props).map(key => {
          return (
            <tr key={key}>
              <td className='propname'>{key}</td>
              <td className='proptype'>{props[key].type.name}</td>
              <td>{props[key].required && "X"}</td>
              <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
              <td>{props[key].description}</td>
            </tr>
          );
        })
      }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
