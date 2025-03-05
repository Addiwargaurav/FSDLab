const express = require('express');
const app = express();
const employees = [
    { id: 1, name: "gaurav", salary: 45000, loc: "Hyderabad" },
    { id: 2, name: "chethan", salary: 65000, loc: "Hyderabad" },
    { id: 3, name: "ram", salary: 35000, loc: "Hyderabad" },
    { id: 4, name: "dev", salary: 55000, loc: "Hyderabad" },
];

app.get('/', (req, res) => {
    res.send('Welcome to the page');
});

app.get('/employees',(req,res)=>{
    res.send(JSON.stringify(employees));
});

app.get('/employees/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

app.get('/employee',(req,res)=>{
    const name=req.query.name
    if(name){
        const emp=employees.find(e=>e.name===name);
        if(emp){
        res.json(emp);
        }
        else
        {
            res.status(404).json({message:'Employee not found'});
        }
    }
    else{
        res.status(404).json({message:'name query is invalid'});
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});