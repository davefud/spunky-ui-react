import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import Icon from '../Icon';
import Label from '../Label';
import { renderToStaticMarkup } from 'react-dom/server';

/** Password input with integrated label, quality tips, and show password toggle. */
class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showPassword: false
    };

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  // ES7 class properties
  toggleShowPassword = ev => {

    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });

    if (ev) ev.preventDefault();
  }

  render() {
    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;
    const { showPassword } = this.state;
    const svgString = encodeURIComponent(renderToStaticMarkup(<Icon name={showPassword ? 'visibility' : 'visibility_off'} viewBox={24} width={16} height={16} />));
    const dataUri = `url("data:image/svg+xml,${svgString}") center / contain no-repeat`;
    let normalStyle = {
        padding: '10px 35px 10px 10px', 
        width: '235px'
    };
    let errorStyle = {
        padding: '10px 35px 10px 10px', 
        width: '235px',
        border: 'solid 1px red'
    };

    let styles = error ? errorStyle : normalStyle;

    return (
      <div>
        <Label htmlFor={htmlId} label={label} required={true} />
        <div style={{position: 'relative', maxWidth: '235px', cursor: 'pointer' }}>
          <span style={{
            content: "",
            position: 'absolute',
            left: '255px',
            top: 0,
            bottom: 0,
            width: '16px',
            height: '40px',
            background: dataUri
          }} onClick={this.toggleShowPassword} />
          
          <label style={{maxWidth: '250px'}}>
            <input 
              id={htmlId} 
              type={showPassword ? 'text' : 'password'}
              placeholder={placeholder}
              value={value} 
              onChange={onChange} 
              style={styles}
              {...props} />

              {error && <div className='error' style={{color: 'red', fontSize: '.75em', fontWeight: 'bold'}}>{error}</div>}
          </label>
        </div>

        { value.length > 0 && quality && <ProgressBar percent={quality} width={130} height={5} /> }

      </div>
    );
  }
}

Input.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/
  name: PropTypes.string.isRequired,

  /** Password value */
  value: PropTypes.any,

  /** Input label */
  label: PropTypes.string,

  /** Function called when password input value changes */
  onChange: PropTypes.func.isRequired,

  /** Max password length accepted */
  maxLength: PropTypes.number,

  /** Placeholder displayed when no password is entered */
  placeholder: PropTypes.string,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: PropTypes.bool,

  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: PropTypes.number,

  /** Validation error to display */
  error: PropTypes.string
};

Input.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: 'Password'
};

export default Input;
