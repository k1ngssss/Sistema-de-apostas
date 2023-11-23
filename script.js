//Função iniciar
function inicio() {
let nsorteado = sortear();
document.getElementById("nsorteado").value = nsorteado;
}
    
//Função número soteado
function sortear(){
let sorteio = Math.floor(Math.random() * 10) + 1
return sorteio
}

let tentativas = 0;
let saldoc;
let pista;

//Função saldo da carteira com pistas
function saldo() {

let saldo = parseFloat(document.getElementById("depositar").value);

if(tentativas == 0)
{
    saldoc = saldo;
}
else if (tentativas != 0) {
    
}

let apostam = parseFloat(document.getElementById("apostam").value);
let apostan = parseInt(document.getElementById("apostan").value);
let nsorteado = parseInt(document.getElementById("nsorteado").value);
let utilizador = document.forms["myForm"]["fname"].value;
let tentativasn = apostan;
    
//Controlo aposta
if (saldo > 50) {
    alert("O saldo máximo que a sua carteira aguenta são 50€.");
    return;
}
else if (apostam > saldo) {
    alert("Não podes apostar mais do que o valor em carteira!")
    return;
}
else if (apostam == 0) {
    alert("O valor da aposta monetária não pode ser negativo nem nulo!")
    return;
}
else if (apostam <= 0) {
    alert("O valor da aposta monetária não pode ser negativo nem nulo!")
    return;
}
else if (saldoc <= 0) {
    alert("Não possuis fundos suficientes para continuar a jogar, atenção às dívidas! Boa sorte para a próxima!")
    return;
}
else if (saldoc < apostam) {
    alert("Diminui a tua aposta, não tens dinheiro suficiente para continuar a fazer uma aposta tão elevada!")
    return;
}
else if (apostan > 10) {
    alert("Ao fazer a sua aposta numérica insira um número de 1 a 10.")  
    return;
}
else if (isNaN(saldo) || isNaN(apostam) || isNaN(apostan)) {
    alert("Por favor preencha todos os campos.")
    return;
}
else if (utilizador == "" || utilizador == null) {
    alert("Por favor insira um nome de utilizador.")
    return;
}
else if (isNaN(nsorteado)) {
    alert("Por favor sorteie um número.")
    return;
}
else if (apostan < 1 && apostan > 10) {
    alert("Ao fazer a sua aposta numérica insira um número de 1 a 10.")
    return;
}
//Aposta ganha
else if (apostan == nsorteado) {
    
    tentativas++;
    alert("Parabéns! Você ganhou a aposta! O saldo global vem afetado por um desconto de 10% por ter jogado com dicas!");
    document.body.style.backgroundColor = "green";
    let table = document.getElementById("historico");
    let row = table.insertRow(-1);
    let head1 = row.insertCell(0);
    let head2 = row.insertCell(1);
    let head3 = row.insertCell(2);
    let desativarbc = document.getElementById("desativar");
    let desativarbc2 = document.getElementById("desativar2");
    let desativari1 = document.getElementById("depositar");
    let desativari2 = document.getElementById("apostam");
    let desativari3 = document.getElementById("apostan");
    let desativarbs = document.getElementById("sorteio");
    let desativarnu = document.getElementById("utilizador");
    desativarbc.disabled = true;
    desativarbc2.disabled = true;
    desativari1.disabled = true;
    desativari2.disabled = true;
    desativari3.disabled = true;
    desativarbs.disabled = true;
    desativarnu.disabled = true;
    saldoc += apostam;
    let saldog = ((saldoc - (apostam * 0.1)) - saldo).toFixed(1)
    //Output saldo da conta
    document.getElementById('saldoc').innerHTML = `
    <p>${(saldoc - (apostam * 0.1))}€</p>`;
    pista = "Parabéns!";
    head1.innerHTML = tentativas;
    head2.innerHTML = tentativasn;
    head3.innerHTML = pista;
    document.getElementById('cheque').innerHTML = `
    <p style="text-decoration: underline;">Cheque de Utilizador:</p>
    <p>Nome: ${utilizador}</p>
    <p>Saldo final: ${(saldoc - (apostam * 0.1))}€ (${saldog}€ lucro/ prejuízo)</p>`;
    return;
    
}
//Aposta perdida 
else if (apostan != nsorteado) { 
    tentativas++;
    alert("Tente novamente! A aposta numérica que fez está errada!");
    document.body.style.backgroundColor = "red";
    let table = document.getElementById("historico");
    let row = table.insertRow(-1);
    let head1 = row.insertCell(0);
    let head2 = row.insertCell(1);
    let head3 = row.insertCell(2);
    saldoc -= apostam
    //Output saldo da conta
    document.getElementById('saldoc').innerHTML = `
    <p>${saldoc}€</p>`;
    if (nsorteado < apostan) {
        pista = "Menor"
    }
    else if (nsorteado > apostan) {
        pista = "Maior"
    }
    head1.innerHTML = tentativas;
    head2.innerHTML = tentativasn;
    head3.innerHTML = pista;
    let desativarbs = document.getElementById("sorteio");
    desativarbs.disabled = true;
   
    return;
}  

}

//Função saldo da carteira sem pistas
function saldos() {

let saldo = parseFloat(document.getElementById("depositar").value);
    
if(tentativas == 0)
{
    saldoc = saldo;
}
    
let apostam = parseFloat(document.getElementById("apostam").value);
let apostan = parseInt(document.getElementById("apostan").value);
let nsorteado = parseInt(document.getElementById("nsorteado").value);
let utilizador = document.forms["myForm"]["fname"].value;
let tentativasn = apostan;
    
//Output saldo da conta
document.getElementById('saldoc').innerHTML = `
<p>${saldo}€</p>`;
        
//Controlo aposta
if (saldo > 50) {
    alert("O saldo máximo que a sua carteira aguenta são 50€.");
    return;
}
else if (apostam > saldo) {
    alert("Não podes apostar mais do que o valor em carteira!")
    return;
}
else if (apostam == 0) {
    alert("O valor da aposta monetária não pode ser negativo nem nulo!")
    return;
}
else if (apostam <= 0) {
    alert("O valor da aposta monetária não pode ser negativo nem nulo!")
    return;
}
else if (saldoc <= 0) {
    alert("Não possuis fundos suficientes para continuar a jogar, atenção às dívidas! Boa sorte para a próxima!")
    return;
}
else if (saldoc < apostam) {
    alert("Diminui a tua aposta, não tens dinheiro suficiente para continuar a fazer uma aposta tão elevada!")
    return;
}
else if (apostan > 10) {
    alert("Ao fazer a sua aposta numérica insira um número de 1 a 10.")  
    return;
}
else if (isNaN(saldo) || isNaN(apostam) || isNaN(apostan)) {
    alert("Por favor preencha todos os campos.")
    return;
}
else if (utilizador == "" || utilizador == null) {
    alert("Por favor preencha todos os campos.")
    return;
}
else if (isNaN(nsorteado)) {
    alert("Por favor sorteie um número.")
    return;
}
else if (apostan < 1 && apostan > 10) {
    alert("Ao fazer a sua aposta numérica insira um número de 1 a 10.")
    return;
}
//Aposta ganha
else if (apostan == nsorteado) {
        
    tentativas++;
    alert("Parabéns! Você ganhou a aposta!");
    document.body.style.backgroundColor = "green";
    let table = document.getElementById("historico");
    let row = table.insertRow(-1);
    let head1 = row.insertCell(0);
    let head2 = row.insertCell(1);
    let desativarbc = document.getElementById("desativar");
    let desativarbc2 = document.getElementById("desativar2");
    let desativari1 = document.getElementById("depositar");
    let desativari2 = document.getElementById("apostam");
    let desativari3 = document.getElementById("apostan");
    let desativarbs = document.getElementById("sorteio");
    let desativarnu = document.getElementById("utilizador");
    desativarbc.disabled = true;
    desativarbc2.disabled = true;
    desativari1.disabled = true;
    desativari2.disabled = true;
    desativari3.disabled = true;
    desativarbs.disabled = true;
    desativarnu.disabled = true;
    saldoc += apostam;
    let saldog = saldoc - saldo
    //Output saldo da conta
    document.getElementById('saldoc').innerHTML = `
    <p>${saldoc}€</p>`;
    head1.innerHTML = tentativas;
    head2.innerHTML = tentativasn;
    document.getElementById('cheque').innerHTML = `
    <p style="text-decoration: underline;">Cheque de Utilizador:</p>
    <p>Nome: ${utilizador}</p>
    <p>Saldo final: ${saldoc}€ (${saldog}€ lucro/ prejuízo)</p>`;
    return;
        
}
//Aposta perdida 
else if (apostan != nsorteado) { 
    tentativas++;
    alert("Tente novamente! A aposta numérica que fez está errada!");
    document.body.style.backgroundColor = "red";
    let table = document.getElementById("historico");
    let row = table.insertRow(-1);
    let head1 = row.insertCell(0);
    let head2 = row.insertCell(1);
    saldoc -= apostam
    //Output saldo da conta
    document.getElementById('saldoc').innerHTML = `
    <p>${saldoc}€</p>`;
    head1.innerHTML = tentativas;
    head2.innerHTML = tentativasn;
    let desativarbs = document.getElementById("sorteio");
    desativarbs.disabled = true;

    return;
}  

}

//Função trocar imagens
function imagens() {
    let saldo = parseFloat(document.getElementById("depositar").value);
    let imagem = '';
    if (saldo >= 0 && saldo < 5) {
        imagem = "/Imagens/1x1-0000ff7f.png"
    }
    else if (saldo > 5 && saldo < 10) {
        imagem = "/Imagens/1x1-0000ff7f.png"
    }
    else if (saldo > 10 && saldo < 20) {
        imagem = "/Imagens/1x1-0000ff7f.png"
    }
    else if (saldo > 20 && saldo < 50) {
        imagem = "/Imagens/1x1-0000ff7f.png"
    }
    else if (saldo == 5) {
        imagem = "/Imagens/5euros.png"
    }
    else if (saldo == 10) {
        imagem = "/Imagens/10euros.png"
    }
    else if (saldo == 20) {
        imagem = "/Imagens/20euros.png"
    }
    else if (saldo == 50) {
        imagem = "/Imagens/50euros.png"
    }

//Output HTML
document.getElementById('imagem').src = imagem;
}
    


