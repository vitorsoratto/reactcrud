import React, {Component} from 'react';
import TabelaLivros from './components/TabelaLivros';
import Menu from './components/Menu';
import CadastrarLivros from './components/CadastrarLivros';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component{
  state ={
    livros:[
      {
      id:1,
      isbn: 493492834982934,
      titulo: "Criando CRUD com react",
      autor: "Paulo Fontoura"
      },
      {
        id:2,
        isbn: 493256786798,
        titulo: "CRUD",
        autor: "Artur Gimenez"
        },
        {
          id:3,
          isbn: 412312312312,
          titulo: "Tabela Livros com react",
          autor: "Filipe Silveira"
          }
    ]
  }
  render(){
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/cadastrar" render={() => <CadastrarLivros />} />
          <Route exact path="/livros" render={() => <TabelaLivros livros={this.state.livros}/>} />
        </Switch>
      </div>
    </Router>
  );
}
}//fecha render

export default App;
