import React from 'react';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      components: this.props.components
    }
  }


  handleFilterComponents = ev => {
    let { components } = this.props;

    let value = ev.target.value.trim().toLowerCase();

    if (value) {
      components = this.props.components.filter( component => {
          return component.toLowerCase().indexOf(value) > -1;
      });
    }

    this.setState({
      components: components
    });
  }


  render() {

    return (
      <div className="navmenu">
        <h1>React Components</h1>
        <div className={'navigation--search'}>
          <input className={'navigation--input'} placeholder={'Filter by name'} onChange={this.handleFilterComponents}></input>
        </div>
        <ul className="navigation">
          <li className={'navigation--listItem'}>
            <a className={'navigation--link'} href={`/#`}>Components</a>
          </li>
          <ul className="navigation">
            {
              this.state.components.map( name => {
                return (
                  <li className={'navigation--listItem'} key={name}>
                    <a className={'navigation--link'} href={`#${name}`}>{name}</a>
                  </li>
                )
              })
            }
          </ul>
        </ul>
      </div>
    );
  }
}

// const Navigation = ({components}) => {
//   return (
//     <div className="navmenu">
//       <h1>React Components</h1>
//       <div className={'navigation--search'}>
//         <input className={'navigation--input'} placeholder={'Filter by name'}></input>
//       </div>
//       <ul className="navigation">
//         <li className={'navigation--listItem'}>
//           <a className={'navigation--link'} href={`/#`}>Components</a>
//         </li>
//         <ul className="navigation">
//           {
//             components.map( name => {
//               return (
//                 <li className={'navigation--listItem'} key={name}>
//                   <a className={'navigation--link'} href={`#${name}`}>{name}</a>
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </ul>
//     </div>
//   )
// }

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
