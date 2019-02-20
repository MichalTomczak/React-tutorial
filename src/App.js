import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            {id: 'sdi234', name: "Stefanek", age: 93},
            {id: 'woi487', name: "Grucha", age: 33},
            {id: 'wdu963', name: "Natalka", age: 27}
        ],

        otherState: 'some other value',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.people.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.people[personIndex]
            // const person = Object.assign({}, this.state.people[personIndex])  this would also work
        };

        person.name = event.target.value;

        const persons = [...this.state.people];
        persons[personIndex] = person;

        this.setState({people: persons});
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.people.slice(); -old
        const persons = [...this.state.people];
        persons.splice(personIndex, 1);
        this.setState({people: persons});
    };

    toglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',


        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.people.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })
                    }

                </div>

            );

        }

        const classes = [];

        if (this.state.people.length <= 2) {
            classes.push('red');
        }

        if (this.state.people.length <= 1) {
            classes.push('bold');
        }

        return (

            <div className="App">
                <h1>This React app does not do anything useful</h1>
                <p className={classes.join(' ')}>It's still great, though</p>
                <button
                    style={style}
                    onClick={this.toglePersonsHandler}>Toggle names view
                </button>

                {persons}

            </div>

        );
        //   return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'React now!!!!'));
    }
}

export default App;
