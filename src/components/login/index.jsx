import React from 'react'
import {Grid, Col} from 'react-bootstrap'
import './login.css'

class Login extends React.Component{
    render(){
        return(
            <Grid>
                <div className="login-fi">
                    <div className="row loginbox">                    
                        <div className="col-lg-12">
                            <span className="singtext" >Faça o login</span>   
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <input className="form-control" type="text" placeholder="Please enter your user name" /> 
                        </div>

                        <div className="col-lg-12  col-md-12 col-sm-12">
                            <input className="form-control" type="password" placeholder="Please enter password" />
                        </div>
                        
                        <div className="col-lg-12  col-md-12 col-sm-12">
                            <a href="#" className="btn  submitButton">Submit </a> 
                        </div>                     

                    </div>
                </div>
            </Grid>

        )
        
    }
}

export default Login