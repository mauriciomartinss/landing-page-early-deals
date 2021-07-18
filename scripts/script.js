const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();//evita que a pagina carregue quando o submit for invocado

    let name = document.querySelector("#name").value; //pega o valor do campo nome
    let email = document.querySelector("#mail").value; //pega o valor do campo email
    let client = returnObject(name, email); //coloca o valor das variaveis em um objeto
    let clientJSON = convertToJSON(client); //converte o objeto "client" para JSON 
    let localStorageKey = returnKeyClient(); //retorna a key do cliente que sera "cadastrado"

    saveIntoLocalStorage(localStorageKey, clientJSON);
    alert("cadastrado");
});


//retorna um objeto a partir dos parametros
let returnObject = (name, email) => {
    return data = {
        name,
        email
    }
};

//converte o objeto para json
let convertToJSON = (data) => {
    return JSON.stringify(data);
};

//de acordo com a quantidade de itens no local storage, ele retorna o valor da key
let returnKeyClient = () => {
    if(localStorage.length != 0)
        return localStorageKey = (localStorage.length);
    return localStorageKey = 0;
}

// salva o objeto no local storage
let saveIntoLocalStorage = (key, client) => {
    localStorage.setItem(key, client);
};
