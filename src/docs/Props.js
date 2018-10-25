import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Props = ({props}) => {

  function extractEnumAndUnionProps(props) {
    if (!_.isArray(props)) {
      return null;
    }

    let formatedProps = _.reduce(props, (acc, prop, index) => {
      let value = prop.value || prop.name;
      return acc + (index >= props.length-1 ? value : `${value} | `);
    }, ': ');

    return formatedProps;
  }

  let sortedProps = _(props).keys().sort().map(key => {
    return (
      <tr key={key}>
      <td className='propname'>{key}</td>
      <td className='proptype'>{props[key].type.name + (props[key].type.value ? extractEnumAndUnionProps(props[key].type.value) : '')}</td>
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
        { sortedProps }
      </tbody>
    </table>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
