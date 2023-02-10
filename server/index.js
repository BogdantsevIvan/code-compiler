const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
    //getting the required data from the request
    let code = req.body.code;


    let data = ({
        "cmd": "g++ main.cpp && ./a.out",
        "src": code,
    });
    let config = {
        method: 'post',
        url: 'http://coliru.stacked-crooked.com/compile',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    Axios(config)
        .then((response) => {
            res.send(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
