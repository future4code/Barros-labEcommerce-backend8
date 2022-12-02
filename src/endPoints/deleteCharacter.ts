import {Request, Response} from "express";
import connection from "../connection";


export async function deleteCharacter(req: Request, res: Response): Promise <void>{
  
  try {
    const {id} = req.params 
    await connection("character")
    .delete()
    .where({id})
  
    res.status(200).send("Personagem deletado com sucesso!")

        // const index:number = characters.findIndex( elemento => elemento.id === Number(id) )

        // if(index > -1 ) characters.splice(index, 1)

  } catch (error) {
    res.status(500).send("Deu erro")    
  }

}