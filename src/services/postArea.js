import {http} from "../components/api" 


/*Post de quando a área do professor a ser pesquisado é escolhida*/
/*liberando assim a matéria do terceiro select que era dependente disso*/

export default{
    materia:(id) =>{
        let data= {}
        data.area=id
        return http.post('listaareascategorias', data)
    }
}