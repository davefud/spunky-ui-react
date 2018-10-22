import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({components}) => {
  return (
    <div className="navmenu">
      <h1>React Components</h1>
      <div className={'navigation--search'}>
        <input className={'navigation--input'} placeholder={'Filter by name'}></input>
      </div>
      <ul className="navigation">
        {
          components.map( name => {
            return (
              <li className={'navigation--listItem'} key={name}>
                <a className={'navigation--link'} href={`#${name}`}>{name}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
