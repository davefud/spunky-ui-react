import React from 'react';
import { PasswordInput } from 'spunky-ui-react';

/** All features for PasswordInput enabled */
class ExampleAllFeatures extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: ''
        };
    }

    getQuality() {
        const length = this.state.password.length;
        return length > 10 ? 100 : length * 10;
      }

      // ES7 Class Properties
      setPassword = ev => {
          this.setState({
             password: ev.target.value 
          });
      }
    
      render() {
        return (
          <div>
            <PasswordInput
              htmlId="password-input-example-all-features"
              name="password"
              onChange={this.setPassword}
              value={this.state.password}
              minLength={8}
              placeholder="Enter password"
              showVisibilityToggle
              quality={this.getQuality()}
              {...this.props} />
          </div>
        )
      }
}

export default ExampleAllFeatures;