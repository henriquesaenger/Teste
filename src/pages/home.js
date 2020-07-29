import React from 'react'
import '../components/css/home.css'
import Menuzi from "../components/menuzin"
import getArea from "../services/getArea"
import postArea from "../services/postArea"
import postPesquisa from "../services/postPesquisa"
import Card from "../components/card"


export default class Home extends React.Component {
    constructor(){
      super();
  
      this.state = {
        array: [],            /*State para armazenar informações sobre os professores pesquisados que irei passar para cada Card*/
        areas: [],            /*State para armazenar as áreas vindas do getArea*/
        materias: [],         /*State para armazenar as matérias vindas do postArea*/
        professores: {},      /*State para armazenar as informações do array de professores pesquisados*/
        cidade_id: "pelotas", /*State para armazenar o id da cidade escolhida, está sempre setado para "pelotas"*/
        categoria_id: {},     /*State para armazenar o id da área que o professor atua*/
        materia_id: {},       /*State para armazenar o id da materia que o professor leciona*/
        page_id: 0            /*State para armazenar o id da page, sempre setado para 0*/
      };
      /*Binds das funções a serem utilizadas*/
      this.postArea = this.postArea.bind(this);
      this.submit= this.submit.bind(this);
      this.saveMateria= this.saveMateria.bind(this);
    }
  
    /* função acionada quando a área é selecionada*/
    async postArea(e){      
      await this.setState({categoria_id: e.target.value})
      await postArea.materia(this.state.categoria_id).then(response => {
        this.setState({materias: response.data});
      })
    }
    
    /* função acionada quando a matéria é selecionada*/
    async saveMateria(e){    /* função acionada quando a matéria é selecionada*/
      await this.setState({materia_id: e.target.value})
      
    }
    
    /* função acionada quando o botão de pesquisa é clicado*/
    async submit(){          /* função acionada quando o botão pesquisar é clicado*/
      await postPesquisa.materia(this.state.cidade_id,this.state.categoria_id, this.state.materia_id, this.state.page_id).then(response => {
        this.setState({professores: response.data});
        console.log(this.state.professores)
        this.setState({array: response.data.data})
        console.log(this.state.array)
      })
    }
    
  
    
    
  
    /*faz o primeiro get das áreas que o professor pode atuar*/
    componentDidMount(){
      getArea.area().then(response => {
        console.log(response.data)
        this.setState({areas:response.data});
      })
    
    }
  
  
    
    
    render(){
      return (
        <div className="App">       
          <Menuzi/>           {/*chama o componente menuzin */}  
          <div className="menu-escolha">
            <div className="prof">
              <p><b>Os melhores professores</b></p>
            </div>
            <div className="custom-select">   {/*div que contém os selects e o botão pesquisar*/}
              <ul>
                <li>
                  <select>              {/*select da cidade*/}
                    <option value="0" disabled selected hidden>Cidade</option>
                    <option value="1">pelotas</option>
                    
                  </select>
                </li>
                <li>
                  <select onChange={this.postArea}> {/*select da Área*/}
                    <option value="0"  disabled selected hidden>Área</option>
                    {this.state.areas.map( data => 
                      <option key={data.id} value={data.id}>{data.name}</option>
                    )}
                  </select>
                </li>
                <li>
                  <select onChange={this.saveMateria}>      {/*select da Matéria*/}
                    <option  value="0" disabled selected hidden>Matéria</option>
                    {this.state.materias.map( data => 
                     <option key={data.Categorium.id} value={data.id} >{data.Categorium.name}</option>
                    )}
                  </select>
                </li>
                <li>{/*Botão de pesquisa*/}
                  <button className="pesquisar" onClick={this.submit}>Pesquisar</button>
                </li>
              </ul>
            </div>
          </div>
          <Card professores={this.state.array}/>  {/*Chamada do componente Card enviando o State do Array de professores pro Card*/} 
        </div>
                    
      );
    }
  }