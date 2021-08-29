import express from "express";
const app = express();

app.get("/", (req, res)=>{
    res.send("Server is alive");
});

app.listen(3000, () => console.log("Listening On: http://localhost:3000"));