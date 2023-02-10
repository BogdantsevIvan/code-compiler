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
    let language = req.body.language;
    let input = req.body.input;

    if (language === "python") {
        language = "py"
    }

    let data = ({
        "code": code,
        "language": language,
        "input": input
    });
    let config = {
        method: 'post',
        //url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
        url: 'http://coliru.stacked-crooked.com/compile',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    //     var http = new XMLHttpRequest();
    // http.open("POST", "http://coliru.stacked-crooked.com/compile", false);
    // http.send(JSON.stringify({ "cmd": "g++ main.cpp && ./a.out", "src": "int main() { throw 1; }" }));
    // alert(http.response);

    //calling the code compilation API
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
