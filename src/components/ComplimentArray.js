import { Component } from "react";
import Compliment from './GenericCompliment'; 


class ComplimentArray extends Component {
    render() {
        return (
            <ul className="large__box" >
            {this.props.compliments.map((i) => {
                return (
                    <li className="small__box">
                        <Compliment icon={i.icon}>{i.text}</Compliment>
                    </li>
                    )
            })}
            </ul>
        )
    }
}

export default ComplimentArray