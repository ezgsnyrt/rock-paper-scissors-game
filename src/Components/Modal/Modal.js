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






        </>
    );
}

export default Modal;