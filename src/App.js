import React, { Component } from 'react';
import FinancasNotaEmpresas from './components/financas/NotasEmpresas/notasEmpresas'
import Layout from './components/layout/layout'
import {Route} from 'react-router-dom'
import Routers from '../src/router/index'
import Login from './components/login'
import RendaVariavel from './components/financas/rendaVariavel/rendaVariavel'
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers>
          <Layout>
            <Route path="/" exact component={Home}/> 
            <Route path="/login" exact component={Login}/>
            <Route path="/renda-variavel" exact component={RendaVariavel}/>
            <Route path="/renda-variavel/empresa" exact component={FinancasNotaEmpresas}/>
          </Layout>
        </Routers>
      </div>
    );
  }
}

export default App;
