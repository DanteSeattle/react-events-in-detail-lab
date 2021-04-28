// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    otherClick = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event) ,this.props.delay )

    }

    render(){
        return (
            <button onClick = {this.otherClick} > 
                2nd Button!
            </button>
        )
    }
}