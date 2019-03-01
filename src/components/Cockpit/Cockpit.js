import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    React.useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('Mock http request');
      }, 1000);
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, []);

    React.useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    });


    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    } 
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    } 

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default React.memo(cockpit);