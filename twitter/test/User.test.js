const User=require('../app/User');

describe('Testing if User can receive datas with constructor class',()=>{
    test('1)Trying the User class',()=>{
        const usuario=new User(1,'tavolordk','octavio','@tavolordk');
        expect(usuario.id).toBe(1);
        expect(usuario.username).toBe('tavolordk');
        expect(usuario.name).toBe('octavio');
        expect(usuario.bio).toBe('@tavolordk');
        expect(usuario.dateCreated).not.toBeUndefined();
        expect(usuario.lastUpdated).not.toBeUndefined();
    })
})

describe('Testing if User has same dates',()=>{
    test('2)Dates with User class',()=>{
        const userOne = new User(1,'tavolordk','octavio','@tavolordk');
        expect(userOne.dateCreated).not.toBeUndefined();
        expect(userOne.lastUpdated).not.toBeUndefined();
    });
})

describe('Add getters',()=>{
    test('3)Trying getters',()=>{
        const userDos = new User(2,'Tavolordk','Octavio Olea','@TavoLordk');
        expect(userDos.getUsername).toBe("Tavolordk");
        expect(userDos.getBio).toBe("@TavoLordk");
        expect(userDos.getDateCreated).not.toBeUndefined();
        expect(userDos.getLastUpdated).not.toBeUndefined();
    });
})

describe('Add setters',()=>{
    test('3)Trying getters',()=>{
        const userTres = new User(2,'Tavolordk','Octavio Olea','@TavoLordk');
        userTres.setUsername="Tavusia";
        userTres.setBio='@Tavusia';
        expect(userTres.username).toBe("Tavusia");
        expect(userTres.bio).toBe("@Tavusia");
        expect(userTres.getDateCreated).not.toBeUndefined();
        expect(userTres.getLastUpdated).not.toBeUndefined();
    });
})