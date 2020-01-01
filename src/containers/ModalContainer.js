import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Modal } from '../components/index';
import { toggleModal } from '../actions/ui';

class ModalContainer extends Component {

    render() {
        const { isModal, toggleModal } = this.props;
        return(
            isModal
            ? <Modal
                toggleModal={toggleModal}
            /> 
            : ""
        );
    };
};

const mapStateToProps = state => {
    const { UIState } = state;
    return {
        isModal: UIState.isModal
    }
};
export default connect(mapStateToProps, {
    toggleModal
})(ModalContainer);