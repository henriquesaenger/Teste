import {http} from "../components/api" 



/*Post que a página "/sobre" vai fazer para pegar as informações do professor*/

export default{
    descricao:(id) =>{
        let data= {}
        data.id=id
        return http.post('detalhe', data)
    }
}