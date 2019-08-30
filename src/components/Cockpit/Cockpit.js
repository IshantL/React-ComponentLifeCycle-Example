import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    //as this methods get execute every time component render to aviod that we can pass condition argument
    useEffect(()=>{
      console.log("[cockpit.js] useEffect..");
      console.log("........................");
    },[props.persons]);
    //if we want to use effect only once then we have to pass [], it works as componentDidUpdate
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;