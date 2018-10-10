import React from 'react';
import RegistrationForm from 'spunky/RegistrationForm';

export default class ExampleRegistrationForm extends React.Component {
      onSubmit = user => {
        console.log(user);
      };
    
      render() {
        return <RegistrationForm onSubmit={this.onSubmit} />;
      }

}
