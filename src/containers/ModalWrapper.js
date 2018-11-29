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
      <div>
        <button onClick={this.onOpenModal}>{this.props.description}</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

ModalWrapper.propTypes = {
  description: PropTypes.string.isRequired
};

export default ModalWrapper;
