import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType =AuthContext;

  componentDidMount(){
    //this.inputElement.focus(); 
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log('[Person.js] rendering...');
    console.log("....................");
    return (
      <Aux>
          {this.context.authenticated ?<p>Authenticated</p>:<p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
      </p>
        <p>{this.props.children}</p>
        <input type="text" 
        onChange={this.props.changed}
         value={this.props.name}
        //ref = {(inputEl)=>{this.inputElement = inputEl}}
        ref ={this.inputElementRef}
        />
      </Aux>
    );
  }

};

export default withClass(Person, classes.Person);
