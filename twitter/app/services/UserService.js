const User = require('../models/User');

class UserService{
    static create(id,username,name){
        return new User(id,username,name,'Sin bio');
    }
    static getInfo(User){
        let array = Object.values(User);
         return array;
    }
    static updateUserUsername(User,username){
        User.username=username;
    }
    static getAllUsernames(arreglo){
       let array = Array.from(arreglo);
       let newArray=array.map(e=>{return e.username});
       return newArray;
    }
}

module.exports = UserService;