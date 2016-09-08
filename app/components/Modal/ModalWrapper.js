import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import classNames from 'classnames/bind'
import styles from './style.scss'

const cx = classNames.bind(styles)

const ModalWrapper = (props) => {
  const {children} = props;
    return (
      <div className={cx('container')}>
        <Link to='/' className={cx('back')}>
          <span> Home </span>
        </Link>
        {children}
      </div>

    )
}

export default ModalWrapper