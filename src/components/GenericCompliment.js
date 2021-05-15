import React, { Component } from 'react'
import './GenericCompliment.css'


class GenericCompliment extends Component {
    render(){
        return (
            <div className="compliment__box">
            <div className="compliment__image">
                <img src={this.props.icon} />
            </div>
            <div className="compliment__text">
                {this.props.children}
            </div>
            </div>
        )
    }
} 
// <GenericComponent icon={foto} text='texto aleatorio'></GenericComponent>
//<GenericComponent icon={foto}>texto aleatorio</GenericComponent>

export default GenericCompliment