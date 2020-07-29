import {http} from "../components/api" 



/*Post com a rota relacionada a quando aperta o botão "Pesquisar" na Home Page*/

export default{
    materia:(cidade, area, materia, page) =>{
        let data= {}
        data.cidade=cidade
        data.area=area
        data.materia=materia
        data.page=page
        return http.post('busca', data)
    }
}