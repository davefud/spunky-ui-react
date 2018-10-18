import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Props = ({props}) => {

  let orderedProps = _(props).keys().sort().map(key => {
    return (
      <tr key={key}>
      <td className='propname'>{key}</td>
      <td className='proptype'>{props[key].type.name}</td>
      <td>{props[key].required ? 'X' : ''}</td>
      <td>{props[key].defaultValue ? props[key].defaultValue.value : ''}</td>
      <td>{props[key].description}</td>
    </tr>
    );
  }).value();

  return (
    <table className="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        { orderedProps }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
