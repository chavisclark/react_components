import React, {PropTypes, Component} from 'react'
import dynamics from 'dynamics.js'
import Modal from '../components/Modal'
import ModalWrapper from '../components/Modal/ModalWrapper'
import Label from '../components/Label'

export default class ModalContainer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isPopupOpen: false
      }
    }

    handleOpenPopUp() {
        const setState = this.setState.bind(this);
        setState({
            isPopupOpen: true
        });
    }

    handleClosePopup() {
        const setState = this.setState.bind(this)
        setState({
          isPopupOpen: false
        });
    }

    animateModal() {
      // Animate the popover
      const div = document.getElementById('modal-box')
      while (div !== null) {
        dynamics.animate(div, {
          translateY: -100
        }, {
          type: dynamics.spring,
          friction: 400,
          duration: 1300
        })
      break;
      } 
    }
    
    componentDidUpdate() {
      if (this.state.isPopupOpen === true) {
        this.animateModal()
      }
    }

    render() {
      return (
        <ModalWrapper>
          <Label openPopUp={this.handleOpenPopUp.bind(this)} />
          <Modal isOpen={this.state.isPopupOpen} closePopupProp={this.handleClosePopup.bind(this)}>
            Hello Ya'll -- Click outside to close
          </Modal>
        </ModalWrapper>
      );
    }
}