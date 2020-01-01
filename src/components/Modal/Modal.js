import React from 'react';

import './Modal.css';

const Modal = (props) => {
    const { toggleModal } = props;

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-close">
                    <i className="ion-android-close" onClick={() => toggleModal()}></i>
                </div>
                <div className="modal-title">
                    <p>Tạo playlist mới</p>
                </div>
                <div className="modal-input">
                    <input type="text" name="playlist" placeholder="Nhập tên playlist" />
                </div>
                <div className="modal-button" onClick={() => toggleModal()}>
                    <button>Lưu</button>
                </div>
            </div>
            <div className="modal-hidden" onClick={() => toggleModal()}></div>
        </div>
    );
};

export default Modal;