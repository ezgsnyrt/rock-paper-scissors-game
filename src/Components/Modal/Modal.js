import React, { useState } from "react";
import "../Modal.css";

function Modal() {
    //useState(false) for not showing the modal on the screen when starting the game.(only show when clicking on the button)
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
        <button onClick={toggleModal} className="btn-modal">Instructions</button>
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-info">
                <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem fugit aspernatur voluptate optio! Laudantium atque nisi veniam ab laboriosam.</p>
                <button className="close-modal" onClick={toggleModal}>CLOSE</button>
            </div>
        </div>





        </>
    );
}

export default Modal;