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
                <ControlLabel>Cod.</ControlLabel>
                <FormControl type="number" id="cod" 
                onChange={(e)=> props.func_change("cod", true, e)}
                value={convertToString(props.item.roe)}/>
            </FormGroup>
        </Col>

        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>Preço</ControlLabel>
                <FormControl type="number" id="preco" 
                onChange={(e)=> props.func_change("pro", true, e)}
                value={convertToString(props.item.pro)}/>
            </FormGroup>
        </Col>

        <Col xs={6} sm={2}>
            <FormGroup>
                <ControlLabel>Quant.</ControlLabel>
                <FormControl type="number" id="quant" 
                onChange={(e)=> props.func_change("quant", true, e)}
                value={convertToString(props.item.gov)}/>
            </FormGroup>
        </Col> 
        <Col  xs={6} sm={2}>
            <ControlLabel>Quant.</ControlLabel>
            <Button bsStyle="success" bsSize="large" block onClick={props.func_add}>Enviar</Button>
        </Col>     
    </Row>
          

</Grid>  
)

export default Header