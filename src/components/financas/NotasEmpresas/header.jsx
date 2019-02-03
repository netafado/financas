import React from 'react'
import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
function convertToString(number){
    return number.toString()
}
const Header = (props)=>(
    <Grid>
    <Row>
        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>Nome</ControlLabel>
                <FormControl type="text" id="nome" 
                onChange={(e)=> props.func_change("nome", false, e)}
                value={props.item.nome}/>
            </FormGroup>
        </Col>
        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>Codigo</ControlLabel>
                <FormControl type="text" id="cod" 
                onChange={(e)=> props.func_change("cod", false, e)}
                value={props.item.cod}
                />
            </FormGroup>
        </Col>
        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>Lucro/Margem/Divida</ControlLabel>
                <FormControl type="number" id="lucro" 
                onChange={(e)=> props.func_change("lucro", true, e)}
                value={convertToString(props.item.lucro)}/>
            </FormGroup>
        </Col>
        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>ROE / PL</ControlLabel>
                <FormControl type="number" id="roe" 
                onChange={(e)=> props.func_change("roe", true, e)}
                value={convertToString(props.item.roe)}/>
            </FormGroup>
        </Col>

        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>Proventos</ControlLabel>
                <FormControl type="number" id="provento" 
                onChange={(e)=> props.func_change("pro", true, e)}
                value={convertToString(props.item.pro)}/>
            </FormGroup>
        </Col>

        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>Governança</ControlLabel>
                <FormControl type="number" id="gov" 
                onChange={(e)=> props.func_change("gov", true, e)}
                value={convertToString(props.item.gov)}/>
            </FormGroup>
        </Col>  
        </Row>
        <Row>
        <Col sm={12}>
            <Button bsStyle="success" bsSize="large" block onClick={props.func_add}>Enviar</Button>
        </Col>              
    </Row>
</Grid>  
)

export default Header