import React from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/label.css'

const cx = classNames.bind(styles)

const Label = (props) => {
  const {openPopUp} = props;
    return (
      <div className={cx('label')} className={cx('hoverable')}> 
          <label onClick={openPopUp}>Open</label>
      </div>

    )
}

export default Label