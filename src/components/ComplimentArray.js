import { Component } from "react";
import Compliment from './GenericCompliment'; 


class ComplimentArray extends Component {
    render() {
        return (
            <ul className="caixa__grande">
            {this.props.compliments.map((i) => {
                return (
                    <li className="caixinhas">
                        <Compliment icon={i.icon}>{i.text}</Compliment>
                    </li>
                    )
            })}
            </ul>
        )
    }
}

export default ComplimentArray