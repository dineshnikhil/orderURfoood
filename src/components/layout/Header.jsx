import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

// image import.
import mealsImg from '../../assets/meals.jpg';

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onCartActive} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="meals on the dining table image." />
            </div>
        </React.Fragment>
    )
}

export default Header
