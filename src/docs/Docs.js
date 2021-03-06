import React from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
    this.handleHashChange = this.handleHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange() {
    this.setState({route: window.location.hash.substr(1)});
  }

  render() {
    const {route} = this.state;
    const component = route ? componentData.filter(component => component.name === route)[0] : componentData[0];

    return (
      <div className="doc">
        <Navigation components={componentData.map(component => component.name)} />
        <div className="main">
          <ComponentPage component={component} />
        </div>
      </div>
    )
  }
}
