import express from 'express';

const users = [
    'Ronaldo', // 0
    'Robinho', // 1
    'Roberto Carlos'// 2
];
const app = express();

app.use(express.json());

app.get('/users',(request, response)=>{//Rota
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    response.json(filteredUsers);
});

app.get('/users/:id',(request, response)=>{//Rota
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) =>{
    const {name, email} = request.body;
    const user = {
        name,
        email
    }
    return response.json(user);
})

app.listen(3333);   //Porta aplicacao 

