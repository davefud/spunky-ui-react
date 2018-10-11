import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/** Registration form with built-in validation. */
  function RegistrationForm({user, passwordQuality, onChange, onSubmit, errors}) {
    return (
      <div>
        <TextInput
          htmlId="registration-form-email"
          name="email"
          onChange={onChange}
          label="Email"
          value={user.email}
          error={errors.email}
          required />

        <PasswordInput
          htmlId="registration-form-password"
          name="password"
          value={user.password}
          onChange={onChange}
          quality={passwordQuality}
          showVisibilityToggle
          maxLength={50}
          error={errors.password} />

        <input type="submit" value="Register" onClick={onSubmit} />
      </div>
    );
  }

RegistrationForm.propTypes = {
  /** The quality of the password */
  passwordQuality: PropTypes.number.isRequired,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Called when text for email or password changes */
  onChange: PropTypes.func.isRequired,

  /** User object containg email and password */
  user: PropTypes.object.isRequired
}


export default RegistrationForm;
