
import fs from 'fs'


export const retrieveAllUsers = () =>{
    return JSON.parse(fs.readFileSync('../data/users.json').toString());
    
}

export const createUser =(req)=>{
    let arrayUsers= retrieveAllUsers();
    if(arrayUsers.some(v=> v.correo !==req.correo)){
    arrayUsers.push(req)
     fs.writeFileSync('../data/users.json', JSON.stringify(arrayUsers))}
    

}
