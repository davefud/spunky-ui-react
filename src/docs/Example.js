import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

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
          <div className="codewrapper">
            {showCode && <CodeExample>{code}</CodeExample>}
          </div>
        </div>
        <button 
          type='button'
          onClick={this.toggleCode}
          onMouseDown={this.handleMouseDown}
          style={{
            position: 'absolute',
            background: showCode ? '#f5f5f5' : '#fff',
            color: '#1978c8', 
            right: 0,
            bottom: '-26px',
            cursor: 'pointer',
            borderBottomLeftRadius: '3px',
            borderBottomRightRadius: '3px',
            border: '1px solid #d3d3d3',
            borderTop: 0,
            padding: '6px 8px',
            fontSize: '14px',
            lineHeight: 1,
            textDecoration: 'none'
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
