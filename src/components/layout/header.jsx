import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './layout.css'
const Header = () =>{
    return(
        <header className="layout">
            <Grid>
                <Row>
                    <nav>
                        <ul className="nav">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/renda-variavel/">Renda Variável</NavLink>   
                            </li>
                            <li>
                                <NavLink to="/renda-variavel/empresa">Ranking</NavLink>
                            </li>
                            <li>
                                <NavLink to="/renda-fixa">Renda Fixa</NavLink>
                            </li>
                        </ul>
                    </nav>

                </Row>
            </Grid>
        <hr/>  
        </header>
        
    )
}

export default Header