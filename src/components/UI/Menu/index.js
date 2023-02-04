import React, { useEffect } from 'react';
import { push as BurgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './index.css';

function Menu() {

    useEffect(() => {
        document.querySelector('.bm-item-list').removeAttribute('style')
    }, [])
    
  return (
    <React.Fragment>
      <BurgerMenu customBurgerIcon={ <img src="/assets/burger-bar.png" /> } pageWrapId="page-wrap" outerContainerId="root">
        <Link to="/">Link1</Link>
        <Link to="/">Link2</Link>
        <Link to="/">Link3</Link>
        <Link to="/">Link4</Link>
      </BurgerMenu>
    </React.Fragment>
  );
}

export default Menu;
