import React from 'react'
import '../components/css/card.css';
import { Link } from 'react-router-dom';

{/*função pra quando o botão "Ver mais sobre professor" for clicado, passar o id do professor pra localStorage pra pegar na página "/Sobre"*/}
function setChangeLoc(params){
    localStorage.setItem('id', params)
}

const Prof = ({professores}) =>(    
    <div>
        {professores.map(professor => (
        <ul>
            <li>                        {/*fiz como uma lista de cards, pra armazenar cada card como um item da lista*/}
                <section className="container row">         {/* O corpo branco do Card*/}
                    <div className="foto">                  {/* Div pra foto*/}
                        <img src={professor.foto} alt="Avatar"/>
                        <div className="infor">                  {/* Div das informaçoes*/}
                            <p className="nome"><b>{professor.name}</b></p>
                            <p></p>
                            <p>{professor.alunos}alunos</p>
                            <p>{professor.aulas}aulas</p>
                            <p>R$ {professor.valor}</p>
                            <p className="nota">{professor.nota}</p>
                        </div>
                    </div>
                    <div className="info">                  {/* Div das informaçoes*/}
                        <p className="nome"><b>{professor.name}</b></p>
                        <p></p>
                        <p>{professor.alunos} alunos</p>
                        <p>{professor.aulas} aulas</p>
                        <p className="nota">{professor.nota}</p>
                        <p>R$ {professor.valor}</p>
                    </div>
                    
                    <div className="descricao">             {/* Div da Descrição*/}
                        <p className="text_desc"><b>Descrição</b></p>
                        <p>{professor.texto1} ...</p>
                    </div>

                    <div className="botoes">                {/* Div dos Botões*/}
                        <button className="env_msg">Enviar Mensagem</button>
                        <Link to='/sobre' onClick={setChangeLoc(professor.id)}>
                            <button className="ver_mais">Ver mais sobre professor</button>
                        </Link>
                    </div>

                </section>    
            </li>
        </ul>
    
    ))}
    </div>       
         
);

export default Prof
