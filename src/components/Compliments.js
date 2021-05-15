import React, { useState } from 'react';
import ComplimentArray from './ComplimentArray'
import ReactDOM from 'react-dom'
import canivete from '../images/canivete.svg'
import folha from '../images/checked-sheet.svg'
import lupa from '../images/lupa.svg'
import sorriso from '../images/smile-face.svg'
import lampada from '../images/lampada.svg'
import './Compliments.css'

const Compliments = () => {
    const compliments = [
        {icon: lampada, text: 'Estimula a criatividade'},
        {icon: lupa, text: 'Estimula a curiosidade'},
        {icon: canivete, text: 'Se adapta a necessidade'},
        {icon: folha, text: 'Ótima didática'},
        {icon: sorriso, text: 'Gente bosasíssima'},
    ]
    
    const [ showOptions , setShowOptions] = React.useState(false)
    const onClick = () => setShowOptions(true)

                const Options = () => (
                    <div className="compliment__container">
                    <div className="send__compliment">
                        Envie um elogio
                    </div>
                    <ComplimentArray compliments={ compliments }/>
                    
                    <div className="send__message__alert">
                        <p className="send__message">
                            Deixe uma mensagem
                        </p>
                        <input type="text"
                        className="send__box" >
                        </input>
                    </div>
                    </div>
                )

                return (
                <div className="align__box">
                    <div className="send__compliment__button">
                        <p className="compliment" 
                        type="submit"
                        onClick={onClick}>ELOGIAR</p>
                    </div>
                    <div>
                        { showOptions ? <Options /> : null }
                    </div>
              </div>
            )
}







export default Compliments

//ReactDOM.render(<Compliments />, document.querySelector("#container"))



