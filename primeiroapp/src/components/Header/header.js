import React, { useContext, useState } from 'react'
import './styles.css'
import Button from '../Button/button';
import { UserContext } from '../../contexts/userContext';

function Header(){
    const {login, setLogin} = useContext(UserContext);

    return(
        <div>
            <nav>
                <ul className='lista'>
                    <li>Home</li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                    <li onClick={() => setLogin(!login)}>{login ? 'Deslogar' : 'Login'}</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header