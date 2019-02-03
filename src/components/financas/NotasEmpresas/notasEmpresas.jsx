import React, {Component} from 'react'
import Header from './header'
import Body from './body'
import '../financas.css'

class Financas extends Component{
    state = {
        item:{
            nome: " ",
            cod: ' ',
            lucro: 0,
            roe: 0,
            gov: 0,
            pro: 0,
            image: '/img/itausa.jpg'   
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
            image: '/img/logo-grendene.png'            
        };
        this.setState({
            item: item
        })
    }
    render (){
        
        return(
            <div className="financas">
                <h1 className="text-center">Notas para as empresas</h1>
                <Header item={this.state.item} func_change={this.changeStateItem} func_add={this.insertCompany}/>                
                <Body empresas={this.state.empresas} func_remove={this.remove} />
            </div>
        )

    }
}

export default Financas