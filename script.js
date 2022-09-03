// funct to splite

let splite = (string , changeToArray) => {
    let result = 0
    for(let i = 0; i < 1000; i++)
    {
        if(typeof string[i] == "string")
        {
            result = i + 1;
        }
    }
    for(let i = 0; i < result; i++)
    {
        if(changeToArray == string[i])
        {
            console.log([string[i]]);
        }
    }
};

splite('ziad ahmed fawzy love js' , " ");

let btn = document.getElementById('go');

btn.onclick = function() {
    window.location.href = "../func_1/index.html";
}