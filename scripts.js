let contador = 0;
let nome;
let endereco;
let whatzs;
let comida;
let preco=Number();
let preco_bebida=Number();
let  preco_sobremesa=Number();
let sobremesa;
let bebida;
let preco_total=Number();
function selecao_java(elemento){

    let referencia = document.querySelector(".selecao");
    let tirar = document.querySelector(".aparecer");
    console.log(referencia)
    if (referencia !== null){
        referencia.classList.remove("selecao");
        tirar.classList.remove("aparecer");
        contador = contador - 1;
    }
    console.log(elemento);
     

      elemento.classList.add("selecao");
      let okz = elemento.querySelector(".ok");
      okz.classList.add("aparecer");
      contador = contador + 1;
      preco= Number(elemento.children[5].innerHTML);
      comida=elemento.children[1].innerHTML;
      console.log(preco);
      console.log(comida);
      ficarverde()
}
function selecao_java_bebida(elemento){
    let referencia = document.querySelector(".selecao_bebida");
    let tirar = document.querySelector(".aparecer_bebida");
    console.log(referencia)
    if (referencia !== null){
        referencia.classList.remove("selecao_bebida");
        tirar.classList.remove("aparecer_bebida");
        contador = contador - 1;
    }
    console.log(elemento);
      

      elemento.classList.add("selecao_bebida");
      let okz = elemento.querySelector(".ok_bebida");
      okz.classList.add("aparecer_bebida");
      contador = contador + 1;
      preco_bebida=Number(elemento.children[5].innerHTML);
      bebida=elemento.children[1].innerHTML;
     console.log(contador);
     ficarverde()
}
function selecao_java_sobremesa(elemento){
    let referencia = document.querySelector(".selecao_sobremesa");
    let tirar = document.querySelector(".aparecer_sobremesa");
    console.log(referencia)
    if (referencia !== null){
        referencia.classList.remove("selecao_sobremesa");
        tirar.classList.remove("aparecer_sobremesa");
        contador = contador - 1;
    }
    console.log(elemento);
    

      elemento.classList.add("selecao_sobremesa");
      let okz = elemento.querySelector(".ok_sobremesa");
      okz.classList.add("aparecer_sobremesa");
      contador = contador + 1;
      preco_sobremesa= Number(elemento.children[5].innerHTML);
      sobremesa=elemento.children[1].innerHTML;
     console.log(contador);
     ficarverde()
}
function ficarverde(){
    if (contador == 3){
    let referencia = document.querySelector(".confirmacao");
    let tirar = document.querySelector(".confirmacao_final");
    referencia.classList.add("escondido")
    tirar.classList.remove("escondido")}
}
function confirmar(){
    if (contador == 3){
        preco_total = Number((preco + preco_bebida + preco_sobremesa))
        const principal_bonus =document.querySelector(".comida_itens")
        principal_bonus.innerHTML= comida;
        const principal_bonus_bebida =document.querySelector(".bebida_itens")
        principal_bonus_bebida.innerHTML= bebida;
        const principal_bonus_sobremesa =document.querySelector(".sobremesa_itens")
        principal_bonus_sobremesa.innerHTML= sobremesa;
        const principal_preco =document.querySelector(".comida_valores")
        principal_preco.innerHTML= preco;
        const principal_preco_bebida =document.querySelector(".bebida_valores")
        principal_preco_bebida.innerHTML= preco_bebida;
        const principal_preco_sobremesa =document.querySelector(".sobremesa_valores")
        principal_preco_sobremesa.innerHTML= preco_sobremesa;
        const principal_preco_total =document.querySelector(".total_valores")
        principal_preco_total.innerHTML= preco_total.toFixed(2);
        nome = prompt("Qual seu nome?");
        endereco = prompt("Qual seu endereço?");
        let ultimato=document.querySelector(".confirmar_bonus");
         ultimato.classList.remove("escondido")
    }
}
function confirmar_pedido(){
     whatzs = document.querySelector(".whats");  
    whatzs.href = `https://wa.me/5541997975542?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0D-%20Prato:%20${comida}%0D-%20Bebida:%20${bebida}%0D-%20Sobremesa:%20${sobremesa}%0D-%20Total:%20R$%20${preco_total.toFixed(2)}%0D%0DNome:${nome}%0DEndereço:${endereco}`

}
function cancelar(){
    let ultimato=document.querySelector(".confirmar_bonus");
    ultimato.classList.add("escondido")
        

}