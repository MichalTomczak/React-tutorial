/**
 * Created by Grucha on 20/02/2019.
 */
import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <h2>This React app does not do anything useful</h2>
            <p className={assignedClasses.join(' ')}>It's still great, though</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle names view
            </button>
        </div>
    );
};

export default cockpit;



