import React, { useState } from "react";
import "./Modal.css";

function Modal() {
    //useState(false) for not showing the modal on the screen when starting the game.(only show when clicking on the button)
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
        <button onClick={toggleModal} className="btn-modal">Game Rules</button>

        {modal && (
            <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-info">
                    <h2>INSTRUCTIONS</h2>
                    <p>Rock wins against scissors; paper wins against rock; and scissors wins against paper.</p>
                    <button className="close-modal" onClick={toggleModal}>CLOSE</button>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;