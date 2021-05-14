import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import lampada from '../images/lampada.svg' 
import canivete from '../images/canivete.svg'
import folha from '../images/checked-sheet.svg'
import lupa from '../images/lupa.svg'
import sorriso from '../images/smile-face.svg'
import './Compliments.css'

const Compliments = () => {
    const [ showOptions , setShowOptions] = React.useState(false)
    const onClick = () => setShowOptions(true)

                const Options = () => (
                    <div className="compliment__container">
                    <div>
                        <p className="send__compliment">Envie um elogio</p>
                    </div>
                    <div className="compliment__1">
                       <img className="light__bulb" 
                        alt="lampada" src=
                        { lampada }></img>
                        <p className="text_1" > Estimula a criatividade</p>
                    </div> 
                    <div className="compliment__2">
                     <img className="magifying__glass"
                      alt="lupa"
                      src={ lupa }></img>
                        <p className="text_2">Estimula a curiosidade</p>
                    </div> 
                    <div className="compliment__3">
                        <img className="knife"
                        alt="canivete" 
                        src={ canivete }></img>
                        <p className="text_3">Se adapta à necessidade</p>
                    </div>
                    <div className="compliment__4">
                        <img className="checked__sheet"
                        alt=""
                        src={ folha }></img>
                        <p className="text_4">Ótima didática</p>
                    </div> 
                    <div className="compliment__5">
                        <img className="smiley-face"
                        alt='sorriso'
                        src={ sorriso }></img>
                        <p className="text_5">Gente boasíssima</p>
                    </div>
                    <div className="send__message__alert">
                    <p className="send__message">Deixe uma mensagem</p>
                    <input type="text" className="send__box" ></input>
                    </div>
                    </div>
                )

                return (
                <div className="compliment__box">
                        <input className="compliment" 
                        type="submit"
                        value="Elogio"
                        onClick={onClick} />
                        { showOptions ? <Options /> : null }
              </div>
            )
}







export default Compliments

ReactDOM.render(<Compliments />, document.querySelector("#container"))



