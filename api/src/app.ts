import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});