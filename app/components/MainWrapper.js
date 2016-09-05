import React from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/layout.css'

const cx = classNames.bind(styles)

const MainWrapper = (props) => {
  const {children} = props;
    return (
      <div className={cx("container")}>
          {children}
      </div>

    )
}

export default MainWrapper