
class Database {
    data = {
        users: [
            {
                id: 1,
                username: 'kbtomic',
                email: 'ktomic01@fesb.hr',
                // !IMPORTANT: Should be slow hashed in real world
                password: '123456',
            },
            {
                id: 2,
                username: 'mvuko',
                email: 'mvuko00@fesb.hr',
                // !IMPORTANT: Should be slow hashed in real world
                password: '123456',
            },
        ],
    };
    
    getUserByEmailAndPassword(email, password) {
        console.log(this.data.users);
        return this.data.users.find(
            (user) => user.email === email || user.username === email && user.password === password
        );
    }

    getUserById(id) {
        return this.data.users.find((user) => user.id === id);
    }

    createNewUser(email, username, password){
        const newUser = {
            id: this.data.users.length + 1,
            username: username,
            email: email,
            password, password
        };
        this.data.users.push(newUser);
        return newUser;
    }
}

export default Database;
