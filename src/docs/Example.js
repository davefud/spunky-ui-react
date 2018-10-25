import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
// import EyeIcon from 'spunky-ui-react/EyeIcon'
import { CSSTransition } from 'react-transition-group';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  copyToClipboard = event => {
    event.preventDefault();
 
    document.execCommand('copy');
    
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
      {description && <h4 className={'example--heading4'}>{description}</h4>}
        <div style={{marginLeft: 0, marginRight: 0, position: 'relative', marginBottom: '40px'}}>
          <div>
            <div style={{position: 'absolute', top: 0, right: '28px', display: 'flex'}}>
              <button className="j58 j52" type="button" arial-label='Show the cource code' title='Show the source' onClick={this.toggleCode}
                onMouseDown={this.handleMouseDown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='j61'><path fill="none" d="M0 0h24v24H0V0z"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              </button>
              <a className='j58 j52' 
                  role='button' 
                  href={`https://github.com/davefud/spunky-ui-react/blob/master/src/docs/examples/${this.props.componentName}/${name}.js`}
                  target='_blank' rel="noopener noreferrer" 
                  title='See the source on GitHub'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='j61'><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>
                </a>
                <CopyToClipboard text={code}>
                  <button className="j58 j52" type="button" arial-label='Copy the cource code' title="Copy the source" onClick={this.copyToClipboard}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='j61'><path fill="none" d="M0 0h24v24H0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/></svg>
                  </button>
                </CopyToClipboard>
            </div>

            <CSSTransition 
              in={showCode}
              timeout={300}
              classNames='codewrapper'
              unmountOnExit>
              <div className="codewrapper">
                {<CodeExample>{code}</CodeExample>}
              </div>
            </CSSTransition>

          </div>
          <div style={{padding: '48px 24px 24px 24px', backgroundColor: '#eeeeee', display: 'flex', borderRadius: '4px'}}>
            <div>
              <ExampleComponent />
            </div>
          </div>
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
