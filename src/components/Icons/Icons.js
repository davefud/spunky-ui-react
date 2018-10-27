import React from 'react'
import PropTypes from 'prop-types'
import * as icons from './AvailableIcons'

function Icons({ name, paths, viewBox, width, height, ariaHidden = true, className, color }) {
  const iconPaths = name ? icons[name] : paths

  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width={`${width}`}
      height={`${height}`}
      className={className}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      aria-hidden={ariaHidden}>
      <g fill={color}>
        {iconPaths && iconPaths.map((pathProps, i) => <path {...pathProps} key={i} />)}
      </g>
    </svg>
  );
}

Icons.propTypes = {
  /**
   * The name of the icon e.g. chevron, facebook etc.
   */
  name: PropTypes.string,

  /**
   * The color of the icon
   */
  color: PropTypes.string,

  /**
   * The size of the icon in ems
   */
  size: PropTypes.number,

  /**
   * The paths of a custom icon
   */
  paths: PropTypes.array,

  /**
   * Rotate the icon a certain number of degrees
   */
  rotate: PropTypes.number,

  /**
   * Make the icon spin
   */
  spin: PropTypes.bool,

  /**
   * Custom viewbox sizing
   */
  viewBox: PropTypes.number,

  /**
   * Override the default to hide icon from screen readers
   */
  ariaHidden: PropTypes.string,

  /**
   * Add custom styles to the icon
   */
  styles: PropTypes.object,

  /**
   *  Custom viewbox width
   */
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   *  Custom viewbox height
   */
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

Icons.defaultProps = {
  color: 'currentColor',
  paths: [],
  rotate: 0,
  size: 1,
  spin: false,
  styles: {},
  viewBox: 24,
  width: '100%',
  height: '100%'
}

export default Icons