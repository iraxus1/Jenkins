const hobbies = require("./hobbies");
const express =  require("express");

const app = express();

app.listen(3000,'0.0.0.0', () => {
    console.log("App listening on 0.0.0.0:3000");
});

app.get('/', (req,res) => {
    res.send("Simple API");
});

app.get('/hobbies', (req,res) => {
    res.send(hobbies.getHobbies());
})

app.get('/hobbies/:id', (req,res) => {
    const id = req.params.id;
    const hobby = hobbies.getHobby(id);
    if (!hobby){
        res.status(404).send("Hobby not found");
        return;
    }
    res.send(hobby);
});

app.get('/hobbies/:id/length', (req,res) => {
    const id = req.params.id;
    const hobby = hobbies.getHobbyLength(id);
    if (!hobby){
        res.status(404).send("Hobby not found");
        return;
    }
    res.send(hobby.toString());
});

app.get('/hobbies/:id/upper', (req,res) => {
    const id = req.params.id;
    const hobby = hobbies.getHobby(id);
    if (!hobby){
        res.status(404).send("Hobby not found");
        return;
    }
    res.send(hobby.toUpperCase());
});

app.get('/hobbies/all/longest', (req,res) => {
    const hobby = hobbies.getHobbyOfLongestName();
    res.send(hobby);
});

app.get('/hobbies/all/shortest', (req,res) => {
    const hobby = hobbies.getHobbyOfShortestName();
    res.send(hobby);
});

