async function addContato(){
   let dados = input_nova_tarefa.value.split(" ")
   let nome = dados[0]
   let idade = dados[1]
   let res = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3',{
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body:JSON.stringify({
        nome: nome,
        idade: idade
     })
   })
   console.log(res)
   if(res.ok){
    console.log('adicionei')
    atualizarContatos()
   }
}

// atualizarContatos();

async function atualizar(identificador){

    // let nomeNovo = prompt("nome?")
    // let idadeNovo = prompt("idade?")

    let resposta = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3' + identificador, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify({
            nome: nomeNovo,
            idade: idadeNovo,
        })
    });
    if(resposta.ok){
        alert('Atualizou')
        atualizarContatos()
    }else{
        alert('Erro ao atualizar')
    }
}

atualizarContatos();


async function atualizarContatos(){
    let resposta2 = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3')
    let body = await resposta2.json()
    tarefas.innerHTML = "<ul>"
    body.sort
    body.forEach(pessoa => {
        // let favorito = isFavorito(pessoa.id)
        // let desenhoDaEstrela;
    
        tarefas.innerHTML += 
            `<li> 
         
            ${pessoa.nome} - ${pessoa.idade} 
            <button id="botaodelete" onclick="deletar(${pessoa.id})"></button>
            <button id="botaoeditar" onclick= "atualizar(${pessoa.id})"></button>
            <button id="botaofavor" onclick= "favoritar(${pessoa.id})" ></button>
            </li>`
    });
    tarefas.innerHTML += "</ul>"
}
   
let listaDeFavorito = [];
function favoritar(id){
    listaDeFavorito.push(id)
    listaDeFavorito = [... new Set(listaDeFavorito)];
    atualizarContatos();
}

function desfavoritar(id){
    listaDeFavorito = listaDeFavorito.filter((elemento) => elemento !==id);
    atualizarContatos();
}

function isFavorito(id){
    return listaDeFavorito.indexOf(id) >= 0;
}

async function deletar(identificador){
    let res = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa3/' + identificador, {
    method: 'DELETE',
 });
 if(res.ok){
     atualizarContatos();
     console.log("Deletado")
}else{
    console.log(res.statusText)
    }
}

document.onkeydown = function (evt) {
    evt = evt || window.evt
    if(evt.key === "Enter") {
        addContato()
    }else if (evt.key === "Backspace") {
        handleBackspace()
    }else {
        handlekeyboardOnClick(evt.key.toUpperCase())
    }
}

function deslogar() {
    var nm1 = "nulo";
    var ps1 = "nulo";
    localStorage.setItem("n1", nm1);
    localStorage.setItem("p1", ps1);
    if (ps1 == "nulo"){
        location.href = "login.html";
    }
}

// function deslogar(){
//     localStorage.setItem
// }

function atualiza(){
    if("nulo" == localStorage.getItem("n1")){
        location.href = "login.html";
    }
}

let localOrdem = localStorage.getItem('ordem')
if(localOrdem === 'nulo'){
localStorage.setItem('ordem', 'asc')
localOrdem = 'asc'
}
ordem.textContent = localOrdem;

function mudarOrdem(){
    let localOrdem = localStorage()
    localStorage.getItem('ordem', 'desc')
}
// pessoa.sort(function(a,b){
//     if(a.nome < b.nome) {
//         return -1;
//     }else{
//         return true;
//     }
//  })
//  console.log(pessoa);
 
