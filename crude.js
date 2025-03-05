const express = require('express');
const app = express();
  const port = 3000;
app.use(express.json());
let users = [
    { id: 1, name: "ram", salary:2.5 },
    { id: 2, name: "dev", salary:2.5 }
];  
app.get('/api/users', (req, res) => {
    res.json(users);
});
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        salary: req.body.salary
    };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name;
        user.salary = req.body.salary;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({ message: 'User deleted' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});