const display = (content) =>{
    document.querySelector("app").innerHTML = content;
};

const sum = (a,b,callback) =>{
    const result = a + b;
    callback(result);
};

sum(5,5,display)
