import React, {useEffect, useRef} from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {

  const toggleBtnRef = useRef(null);
    //as this methods get execute every time component render to aviod that we can pass condition argument
    useEffect(()=>{
      console.log("[cockpit.js] useEffect..");
      console.log("........................");
      //return is like componentWillUnmount
      return () =>{
        console.log('[cockpit.js] cleanup work in useEffect..')
      }
    },[props.persons]);
    //if we want to use effect only once then we have to pass [], it works as componentDidUpdate
    useEffect(()=>{
      console.log("[cockpit.js] useEffect..");
      console.log("........................");
      toggleBtnRef.current.click();
      return () =>{
        console.log('[cockpit.js] cleanup work in useEffect 2nd one..')
      }
    },[]);
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);