import React from 'react';
import RegistrationForm from 'spunky/RegistrationForm';

export default class ExampleRegistrationForm extends React.Component {
      onSubmit = user => {
        const message = `Thank you ${user.email} for registering, your password '${user.password}' is safe with us! ;-)`;
        alert(message);
      };
    
      render() {
        return <RegistrationForm onSubmit={this.onSubmit} />;
      }

}
