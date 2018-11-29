import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";

class ModalWrapper extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <span style={{ ...styles.modalButton }}>
        <span onClick={this.onOpenModal}>{this.props.description}</span>
        <Modal open={open} onClose={this.onCloseModal} center>
          {this.props.children}
        </Modal>
      </span>
    );
  }
}

ModalWrapper.propTypes = {
  description: PropTypes.string.isRequired
};

const styles = {
  modalButton: {
    padding: "20px",
    cursor: "pointer"
  }
};

export default ModalWrapper;
