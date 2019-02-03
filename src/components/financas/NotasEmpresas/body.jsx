import React from 'react'
import {Table, Row, Grid, Col} from 'react-bootstrap'
import PropTypes from 'prop-types';
import Empresa from './empresaNota'

const Body = (props) =>{
    console.log(props)
    return(
        <Grid className="financas-body">
        <Row>
            <Col sm={12}>
            
                    <div className="empresas">
                        {props.empresas.map((empresa, i)=>{
                            return <Empresa empresa={empresa} key={Math.random()} func_remove={props.func_remove} index={i}/>
                        })}
                    </div>
            </Col>
        </Row>
    </Grid>
    )


}

Body.propTypes = {
    empresas: PropTypes.array.isRequired,
    func_remove: PropTypes.func
}

export default Body