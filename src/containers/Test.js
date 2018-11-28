
import styled from 'styled-components';
import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import Login from './Login';
import SignUp from './SignUp';


class Test extends Component {

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
            <button onClick={this.onOpenModal}>Open</button>
            <Modal open={open} onClose={this.onCloseModal} center>
                <SignUp/>
            </Modal>
          </div>
        );
      }
}

export default Test;
