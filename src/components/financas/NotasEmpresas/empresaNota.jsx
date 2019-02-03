import React from 'react'
import PropTypes from 'prop-types'

const Empresa = (props)=>{
    let style = {
        backgroundImage: `url('${props.empresa.image}')`
    }
    return(
        <div className="empresa" >
            <img src={props.empresa.image} className="center-block img-responsive" />
            <div className="info" >
                <div>{props.empresa.nome}</div>
                <div>{props.empresa.cod}</div>
                <div>{props.empresa.lucro}</div>
                <div>{props.empresa.roe}</div>
                <div>{props.empresa.gov}</div>
                <div>{props.empresa.pro}</div>
                <div>{props.empresa.pro}</div>
            </div>                

            <div className="fechar" onClick={ ()=> props.func_remove(props.index)  } >
                X
            </div>
        </div>
    )
}

Empresa.propTypes = {
    empresa: PropTypes.object
}
export default Empresa