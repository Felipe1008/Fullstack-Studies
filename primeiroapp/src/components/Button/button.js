import React from 'react'
import './styles.css'

function Button({name, active, onClick}){
    return(
        <div className='containerButton'>
            <button onClick={onClick} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estarão a salvo conosco!</span>
        </div>
    );
}

export default Button