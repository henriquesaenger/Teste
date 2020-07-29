import {http} from "../components/api" 


/*Get para a lista de áreas atuantes dos professores*/
/*para popular o segundo select*/


export default{
    area:() =>{
        return http.get('listaareas')
    }
}

    
  