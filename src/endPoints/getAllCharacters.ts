import {Request, Response} from "express";
import {connection} from "../connection";
import {character} from "../types";

export async function getAllCharacters(req: Request, res: Response):Promise<void>{
    
    try {
        const {name, orderBy, orderType, page} = req.query

        //const result: character[] = await connection.raw("SELECT * FROM character") // MODO RAW
        //res.send(result[0])
        
        const resultPage = 5
        
        //pagina 1 -> offset 0 === 5 * 0;
        //pagina 2 -> offset 1 === 5 * 1;
        //pagina 3 -> offset 2 === 5 * 2;

        const offset = resultPage * (Number(page) - 1)

        const characters: character[] = await connection("character")
        .where("name", "LIKE", `%${name}%`)
        .orderBy(orderBy as string || "name", orderType as string)
        .offset(offset)
        
        res.send(characters) 
 
} catch (error) {
        res.status(500).send("Deu erro")
    }

}    