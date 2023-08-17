import React from 'react';
import Modal from 'react-modal';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        width: '90vh',
        border: 'none',
        boxShadow: '2px 2px 10px gray'
    },
};

Modal.setAppElement('#root');

const AppointmentInfo = ({ modalIsOpen, setIsOpen, booking, selectedDate }) => {

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <AppointmentForm
                booking={booking}
                selectedDate={selectedDate}
                closeModal={closeModal}
                 />
        </Modal>
    );
};

export default AppointmentInfo;