import React from 'react'
import PropTypes from 'prop-types'
// import withStyles from '../with-styles'
// import styles, { keyframes } from './styles'
import * as icons from './AvailableIcons'

const Icons = ({ name, paths, viewBox, ariaHidden = true, className }) => {
  const iconPaths = name ? icons[name] : paths

/**
 * 
 *     <svg
      className={`c11n-icon ${classNames.root}`}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      aria-hidden={ariaHidden}
    >
      {iconPaths &&
        iconPaths.map((pathProps, i) => <path {...pathProps} key={i} />)}
    </svg>
 * 
 */

  return (
    <svg
      width={viewBox}
      height={viewBox}
      className={className}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      aria-hidden={ariaHidden}
    >
      {iconPaths &&
        iconPaths.map((pathProps, i) => <path {...pathProps} key={i} />)}
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
  styles: PropTypes.object
}

Icons.defaultProps = {
  color: 'currentColor',
  paths: [],
  rotate: 0,
  size: 1,
  spin: false,
  styles: {},
  viewBox: 32
}

export default Icons