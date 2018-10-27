import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
import { CSSTransition } from 'react-transition-group';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icons from 'spunky-ui-react/Icons';

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
        <div style={{marginLeft: 0, marginRight: 0, position: 'relative', marginBottom: '40px', minWidth: '500px'}}>
          <div style={{position: 'absolute', top: 0, right: '28px'}}>
            <button className="j58 j52" type="button" arial-label='Show the cource code' title='Show the source' onClick={this.toggleCode}
              onMouseDown={this.handleMouseDown}>
              <Icons name={'code'} viewBox={24} width={24} height={24} className={'j61'} />
            </button>
            <a className='j58 j52' 
                role='button' 
                href={`https://github.com/davefud/spunky-ui-react/blob/master/src/docs/examples/${this.props.componentName}/${name}.js`}
                target='_blank' rel="noopener noreferrer" 
                title='See the source on GitHub'>
                  <Icons name={'github'} viewBox={24} width={24} height={24} className={'j61'} />
              </a>
              <CopyToClipboard text={code}>
                <button className="j58 j52" type="button" arial-label='Copy the cource code' title="Copy the source" onClick={this.copyToClipboard}>
                <Icons name={'file_copy'} viewBox={24} width={24} height={24} className={'j61'} />
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

          <div style={{padding: '45px 24px 24px', backgroundColor: '#eeeeee', borderRadius: '4px', minWidth: '450px', overflow: 'auto'}}>
              <ExampleComponent />
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
