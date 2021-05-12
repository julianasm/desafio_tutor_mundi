import React, { useState } from 'react';
import lampada from '../images/lampada.svg' 
import canivete from '../images/canivete.svg'
import folha from '../images/checked-sheet.svg'
import lupa from '../images/lupa.svg'
import sorriso from '../images/smile-face.svg'
import Modal from 'react-modal'


function Compliments (){
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

        return (
            <div>
            <button onClick={() => setModalIsOpen(true) }> Elogios </button>
                <Modal isOpen={ modalIsOpen }>
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
                </Modal>
            </div>
            
        )
    }


export default Compliments



