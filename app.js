const jokes = document.querySelector('#jokes');
const getDadJoke = async () => {
    const config= {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com',config);
    console.log(res.data.joke); 
    const newLi = document.createElement('li');
    newLi.append(res.data.joke);
    jokes.append(newLi)
}
getDadJoke()

const btn = document.getElementById("clickMe");
btn.addEventListener ("click", getDadJoke);

function removeAll(){
    document.getElementById("jokes").innerHTML = "";
}

const reset =document.getElementById("reset");
reset.addEventListener ("click", removeAll);