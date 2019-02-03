import React, { Component } from 'react'
import {Grid, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import RadialChart from '../financas/charts/radialChart'
const data = [
    {angle: 66, title:"Renda Variavél", label:"20%",color: '#087ec0'}, {angle: 6, label:"70%", title:"Renda Fixa",color: '#e58909'}
  ];
const colors = ['#087ec0','#e58909']
const Home = (props) => {
    return(
        <Grid>
            <Row>
            <Col xs={6}sm={4}>
                    <h4>Total Investimentos</h4>                    
                    <RadialChart chart={{width:200, height:200}} data={data} colors={colors}/>
                </Col>
                <Col xs={6}sm={4}>
                    <h4>Renda Fixa</h4>
                </Col>
                <Col xs={6}sm={4}>
                    <h4>Renda Variável</h4>
                    <p><Link to={{
                        pathname: '/renda-variavel/empresa'
                    }} >Notas das Empresas</Link></p>
                    <p><Link to="/empresas">Fundos Imobiliarios</Link></p>
                    
                </Col>
            </Row>
        </Grid>
    )
}

export default Home