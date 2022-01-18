import React, {useState} from 'react'
import './Modal.css'



export default function Modal() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }



    return (
        <>
            <button 
            onClick={toggleModal}
            className="btn-modal">Open</button>

{modal && (

            <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h2>Hello Modale</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, eos architecto. Nulla praesentium temporibus natus incidunt non ex blanditiis, et dolores nobis excepturi ullam repellat repellendus laudantium odio aut, modi doloremque laboriosam architecto. Eum ipsa ad, facere eius illum nobis ipsum iure debitis mollitia deserunt sed aliquam in corporis itaque!
                        </p>
                        <button 
                        onClick={toggleModal}
                        className="close-modal">Close</button>
                    </div>
                </div>
            </div>
        ) }
        </>
    )
}
