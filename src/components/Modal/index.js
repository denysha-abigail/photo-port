import React from 'react';

// create a basic modal with a backdrop and container; the modal contains a title, a description, the selected image, and a button to close the modal
// Modal ends up becoming the child component of PhotoList, the parent component, because the Modal is located in PhotoList
// destructure props into currentPhoto in the Modal parameter then destructure currentPhoto properties into constants to assign their values into the modal
function Modal({ currentPhoto }) {
    const { name, category, description, index } = currentPhoto;
    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
            <p>{description}</p>
                <button type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;