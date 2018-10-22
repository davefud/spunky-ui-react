import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
import { CSSTransition } from 'react-transition-group';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  // Static Class property with arrow function - experimental feature transpiled by Babel
  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  handleMouseDown = event => {
    event.preventDefault();
  }

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;

    return (
      <span>
      {description && <h4>{description}</h4>}
        <div className="examplewrapper">
        
          <div className="example">
            <div className="exampleComponent">
              <ExampleComponent />
            </div>
            <CSSTransition in={showCode} timeout={1000} classNames="codewrapper">
              <div className="codewrapper">
                {showCode && <CodeExample>{code}</CodeExample>}
              </div>
            </CSSTransition>
          </div>
          <button 
            type='button'
            onClick={this.toggleCode}
            onMouseDown={this.handleMouseDown}
            className={'button'}
            style={{
              background: showCode ? '#eef3f7' : '#fff',
            }}>
            {showCode ? "Hide" : "Show"} code
          </button>
        </div>
      </span>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;
