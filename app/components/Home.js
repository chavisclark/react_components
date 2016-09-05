import React from 'react'
import classNames from 'classnames/bind'
import MainWrapper from './MainWrapper'
import styles from '../styles/navigation.css'

const cx = classNames.bind(styles);
const opened = cx('opened-nav');

export default class Home extends React.Component {

  nav() {
    let button = document.getElementById('nav-button'),
        wrapper = document.getElementById('nav-wrapper'),
        open = false;

    button.addEventListener('click', handler, false);

    function handler(){
      if(!open) {
        this.innerHTML = "Close";
        classie.add(wrapper, opened);
      } else {
        this.innerHTML = "Menu";
        classie.remove(wrapper, opened);
      }
      open = !open;
    }

    function closeWrapper(){
      classie.remove(wrapper, opened);
    }
  }

  componentDidMount() {
    this.nav(opened)
  }

  render() {
    return (
        <MainWrapper>
          <header>
            <h1>React Components<span>volume 1</span></h1> 
          </header>
          <div className={cx("component")}>
            <h2>Vol 1</h2>

            <button className={cx("button")} id="nav-button">Menu</button>
            <div className={cx("wrapper")} id="nav-wrapper">
              <ul>
                <li><a href="#"><span>Loader</span></a></li>
                <li><a href="#"><span>...</span></a></li>
                <li><a href="#"><span>...</span></a></li>
                <li><a href="#"><span>...</span></a></li>
                <li><a href="#"><span>...</span></a></li>
                <li><a href="#"><span>...</span></a></li>
                <li><a href="#"><span>...</span></a></li>
               </ul>
            </div>
          </div>
          <section>
            <p>A collection of custom React componets</p>
          </section>
        </MainWrapper>

    )
  }
}