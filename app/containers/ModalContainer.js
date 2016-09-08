import React = require('react');
import dynamics = require('dynamics.js');
import PropTypes = React.PropTypes;
import Modal = require('../Modal');
import MyArtistShare = require('./MyArtistShare')
import {connect} = require('react-redux');
import styles = require('../../styles/components/user');

export default class ModalContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isPopupOpen: false
      };
    }

    handleOpenPopUp() {
        this.setState({
            isPopupOpen: true
        });
    }

    handleClosePopup() {
        this.setState({
          isPopupOpen: false
        });
    }

    animateModal() {
      // Animate the popover
        var modal = document.querySelector('span')
        while (modal !== null) {
          var div = document.getElementById('modal-box')
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
        <div>
          <Label openPopUp={this.handleOpenPopUp} />
          <Modal isOpen={this.state.isPopupOpen} closePopupProp={this.handleClosePopup}>
            Hello Ya'll
          </Modal>
        </div>
      );
    }
}


export default ModalContainer