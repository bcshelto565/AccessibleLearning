import React from 'react'
import '../App.css';
import { Button } from './Button';
import { GetStartedButton } from './GetStartedButton';
import './MainSection.css';
import image from '../images/dyslexia.gif'

function MainSection() {
    // console.log('test main section');
    return (
    <div className='main-container'>
            <img src={image} alt="dyslexia experience"/>
            <h1>Do You Know How To Make Things Accomodating?</h1>
            <p>If not, we are here to help.</p>
            
            <div className='main-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    The Project<i className='far' />
                </Button>
            </div>
            <div className='get-started'>
                <GetStartedButton
                    className='btn-center' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    align-items='center'
                    justify-content='center'>
                    Start Learning<br></br>
                </GetStartedButton>
            </div>
    </div>
    
  );
}

export default MainSection;