import React from 'react';
import PropTypes from 'prop-types';
import * as PercentUtils from '../utils/percentUtils';

/** Progress bar with color coded status of progress */
class ProgressBar extends React.Component {
  getColor = (percent) => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  }

  render() {
    const {percent, width, height} = this.props;
    const percentWidth = PercentUtils.getWidthAsPercentOfTotalWidth(percent, width);
    return (
      <div style={{border: 'solid 1px lightgray', width: width}}>
        <div style={{
          width: percentWidth,
          height,
          backgroundColor: this.getColor(percent)
        }} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;