import {app} from './app';
import {getAllCharacters} from './endPoints/getAllCharacters';
import {createCharacter}  from './endPoints/createCharacter';
import {deleteCharacter} from './endPoints/deleteCharacter';

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)
