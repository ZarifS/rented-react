
import styled from 'styled-components';
import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import LoginInputForm from './components/LoginInputForm';


class Login extends Component {

    state = {
        open: false,
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
            <button onClick={this.onOpenModal}>Open modal</button>
            <Modal open={open} onClose={this.onCloseModal} center>
                <LoginInputForm/>
            </Modal>
          </div>
        );
      }
}

export default Login;
