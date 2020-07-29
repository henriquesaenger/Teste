import React from 'react';
import '../components/css/menuzin.css';

export default class Menuzin extends React.Component{
    render(){
        return( 
            <header className="headermenu">
                <nav className="menu">		
				    <ul>
				        <li><a href="/">Planos</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Cadastre-se</a></li>
				    </ul>
			    </nav>
	        </header>
        );
    }
}
