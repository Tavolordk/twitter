const UserView = require('../../app/views/UserView');
const UserService = require('./../../app/services/UserService');

describe("Test for UserService", () => {
    test("1)Creating a new user using the UserService", () => {
        const user = UserService.create(1, 'octavioolea', 'Octavio');
        expect(user.username).toBe('octavioolea');
        expect(user.name).toBe('Octavio');
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(2, 'tavolordk', 'Octavio');
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(2);
        expect(userInfoInList[1]).toBe('tavolordk');
        expect(userInfoInList[2]).toBe('Octavio');
        expect(userInfoInList[3]).toBe('Sin bio');
    });

    test("3. Update username", () => {
        const user = UserService.create(3, 'tavusia', 'Octavio');
        UserService.updateUserUsername(user, 'tavolordk');
        expect(user.username).toBe('tavolordk');
    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, 'tavolordk', 'Tavo Olea');
        const user2 = UserService.create(2, 'tavusia', 'Tavo Manuel');
        const user3 = UserService.create(3, 'Tavocorp', 'Octavio Olea');
        const usernames=UserService.getAllUsernames([user1,user2,user3]);
        expect(usernames).toContain('tavolordk');
        expect(usernames).toContain('tavusia');
        expect(usernames).toContain('Tavocorp');
    });

    test("Return an error object when try to create a new user with an null payload", ()=>{
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    });

    test("Return an error object when try to create a new user with a payload with invalid properties",()=>{
        const payload = {username:null,name:12,id:"id"};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test("Return an error object when try to create a new user with a payload with invalid properties",()=>{
        const payload = {username:"Username"};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    });

    test("Create a user by a given valid payload",()=>{
        const payload = {username:"username",id:1,name:"name"};
        const result = UserView.createUser(payload);
        expect(result.name).toBe("name");
        expect(result.username).toBe("username");
        expect(result.id).toBe(1);
    })
})