import React from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/label.css'

const cx = classNames.bind(styles)

const MainWrapper = (props) => {
  const {children} = props;
    return (
      <div className={styles.label} className='hoverable'> 
          <label className="btn btn-facebook form-control" onClick={this.handleOpenPopUp}>PROMOTE</label>
      </div>

    )
}

export default MainWrapper