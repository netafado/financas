import React, {Component} from 'react'
import Header from './header'
import './rendaVariavel.css'

class RendaVariavel extends Component{
    state = {
        item:{
            nome: " ",
            cod: ' ',
            lucro: 0,
            roe: 0,
            gov: 0,
            pro: 0,  
        },
        empresas: []

    }

    changeStateItem = (nome, isNumber, e)=>{
        let item  = {...this.state.item};
        item[nome] =  isNumber ? parseInt(e.target.value) : e.target.value;
        console.log(item)
        this.setState({
            item
        });
    }

    remove = (index)=>{
        let empresas = [...this.state.empresas];
        empresas.splice(index, 1);
        this.setState({
            empresas
        }) 
    }

    insertCompany = ()=>{
        let empresas =  [...this.state.empresas];
        empresas.push(this.state.item)
        this.setState({
            empresas: empresas
        })

        // limpar
        let item = {
            nome: " ",
            cod: ' ',
            lucro: 0,
            roe: 0,
            gov: 0,
            pro: 0,            
        };
        this.setState({
            item: item
        })
    }
    render (){
        
        return(
            <div className="financas">
                <h3 className="text-center">Cadastrar Empresa</h3>
                <Header item={this.state.item} func_change={this.changeStateItem} func_add={this.insertCompany}/>                
            </div>
        )

    }
}

export default RendaVariavel