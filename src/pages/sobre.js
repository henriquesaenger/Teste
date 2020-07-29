import React from 'react'
import '../components/css/sobre.css'
import PostDesc from '../services/postDescricao'
import Menuzin from '../components/menuzin'


export default class Sobre extends React.Component{
    constructor(){
        super();
        this.state={
            desc:[],
            user:[],
            areas: [],
            av: []
        }

        
    }

    
    
    async componentDidMount(){
        var id=localStorage.getItem('id');
        await PostDesc.descricao(id).then(response => {
            this.setState({desc: response.data});
            this.setState({user: response.data.user})
            this.setState({areas: response.data.categoria})
        })
        this.setState({av: this.state.user.avaliacaos})

        console.log(this.state.desc)
        console.log(this.state.user)
        console.log(this.state.areas)
        console.log(this.state.av)
    }
    

    render(){
        return(
            <div>
            <Menuzin/>
            <div className="Container2">
                <div className="Caixa descricao2">
                    <div className="flexbox-descricao">     
                        <div className="foto2">          
                            <img src={this.state.user.foto} alt="Avatar"/>
                        </div>
                        <div className="caixa_info">
                            <div className="nome2">
                                <p>{this.state.user.name}</p>
                            </div>
                            <div className="infos2">
                                <p><b>{this.state.desc.alunos} alunos</b> na plataforma</p>
                                <p>Mais de <b>{this.state.desc.aulas} aulas</b></p>
                                <p>{this.state.user.nota}</p>
                                <p>R$ {this.state.user.valor}</p>
                            </div>
                        </div>
                        <div className="botoes2">
                            <button className="env_msg2">Enviar Mensagem</button>
                            <button className="agend">Agendar Aula</button>
                        </div>
                    </div>
                
                    <div className="Sobre-Professor">
                        <p><b>Sobre o professor</b></p>
                        <p>{this.state.user.texto1}</p>
                    </div>

                    <div className="Sobre-Materias">
                        <p><b>Sobre as matérias</b></p>
                        {this.state.areas.map( materia => (
                            <p><b>-{materia.name}</b> {this.state.user.texto2}</p>
                        ))}  
                    </div>
                    <div className="Alunos">
                        <p><b>O que os alunos falam</b></p>
                        {this.state.av.map( aluno =>(
                            <p><b>{aluno.Aluno.name}</b><br /><br />{aluno.comentario}</p>
                        ))}
                    </div>
                    <div className="botoes2r">
                        <button className="env_msg2r">Enviar Mensagem</button>
                        <button className="agendr">Agendar Aula</button>
                    </div>    
                </div>
                    
                <div className="Caixa Vazia">
                    
                </div>
            </div>
            </div>

        )
    }
}