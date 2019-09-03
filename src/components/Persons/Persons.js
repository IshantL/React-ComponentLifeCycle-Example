import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends PureComponent {

  componentWillReceiveProps(props){
    console.log("[Persons.js] componentWillRecieveProps");
    console.log("Props",props);
    console.log("....................");
  }
  static getDerivedStatefromProps(props,state){
    console.log("[Persons.js] getDerivedStateFromProps");
    console.log("Props",props);
    console.log("State",state);
    console.log("....................");
    return state;
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   console.log("nextProps",nextProps);
  //   console.log("nextState",nextState);
  //   console.log("....................");
  //   if(nextProps.persons !== this.props.persons){
  //     return true;
  //   }else{
  //     return false;

  //   }
  // }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    console.log("prevProps",prevProps);
    console.log("prevState",prevState);
    console.log("....................");
  }
  
  
  componentDidUpdate(){
    console.log("[Persons.js] compoenentDidUpdate");
    console.log("....................");
  }

  render(){
     console.log('[Persons.js] rendering...');
     console.log("....................");
  return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
        isAuth= {this.props.isAuthenticated}
      />
    );
  });
  }
 
};

Person.propTypes = {
  click: PropTypes.func,
  name:PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}
export default Persons;
