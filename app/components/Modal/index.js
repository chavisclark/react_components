import React, {PropTypes} from 'react'
import classNames from 'classnames/bind'
import styles from './style.scss'

const cx = classNames.bind(styles)

const Modal = (props) => {
  const {isOpen, closePopupProp, children} = props;
  if (isOpen === false) {
    return null
  } else {
      return (
        <section className={cx('popupContainer')}>
            <div id='modal-box' className={cx('popup')}>
                {children}
            </div>
            <div className={cx('backdrop')} onClick={closePopupProp}></div>
        </section> 
      )    
  }
}

export default Modal