import React from 'react';
import Header from './header'
const Layout = (props) =>{
    return(
        <div>
            <Header/>
            <article>
                {props.children}
            </article>
        </div> 
    )
}


export default Layout;