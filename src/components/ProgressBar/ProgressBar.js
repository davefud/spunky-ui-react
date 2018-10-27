import React from 'react';
import PropTypes from 'prop-types';
import * as PercentUtils from '../utils/percentUtils';

/** Progress bar with color coded status of progress */
class ProgressBar extends React.Component {

  render() {
    const {percent, width, showPercentage} = this.props;
    const percentWidth = PercentUtils.getWidthAsPercentOfTotalWidth(percent, width);

    return (
      <div className="progressbar" style={{width: width}}>
        <div style={{width: percentWidth, backgroundColor: '#00695C'}}>
          {showPercentage && <div>{`${percent.toFixed(0)}%`}</div>}
        </div>
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
  height: PropTypes.number,

  /** Show percentage text */
  showPercentage: PropTypes.bool
};

ProgressBar.defaultProps = {
  height: 5,
  width: 250,
  showPercentage: false
};

export default ProgressBar;