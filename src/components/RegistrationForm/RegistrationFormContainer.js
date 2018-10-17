import React from 'react';
import PropTypes from 'prop-types';
import RegistrationForm from './RegistrationForm';

/** Registration form with built-in validation. */
class RegistrationFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false,
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  // Returns a number from 0 to 100 that represents password quality.
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.
  passwordQuality(password) {
    if (!password) return 0;
    if (password.length >= this.props.minPasswordLength) return 100;
    const percentOfMinLength = parseInt(password.length/this.props.minPasswordLength * 100, 10);
    return percentOfMinLength;
  }

  validate({email, password}) {
    const errors = {};
    const {minPasswordLength} = this.props;

    if (!email) errors.email = 'Email required.';
    if (password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters.`;

    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {password} = this.state.user;

    return (
      submitted ?
      <h2>{this.props.confirmationMessage}</h2> :
      <RegistrationForm 
        user={this.state.user} 
        onChange={this.onChange} 
        onSubmit={this.onSubmit} 
        passwordQuality={this.passwordQuality(password)} 
        errors={errors} />
    );
  }
}

RegistrationFormContainer.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number
}

RegistrationFormContainer.defaultProps = {
  confirmationMessage: "Thanks for registering!",
  minPasswordLength: 8
};

export default RegistrationFormContainer;
