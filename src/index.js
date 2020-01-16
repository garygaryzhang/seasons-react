import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props); //a reference to the parents constructor function, must have this

        //THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setstate !!!
                this.setState({ lat: position.coords.latitude });

                //we did not, never do this 
                //this.state.lat = position.coords.latitude
            },
            err => console.log(err)
        );
    }

     // React says we have to define render!!
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);