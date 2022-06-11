let contador = 0;
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
      alert(elemento)

      elemento.classList.add("selecao");
      let okz = elemento.querySelector(".ok");
      okz.classList.add("aparecer");
      contador = contador + 1;
      console.log(contador);
      confirmar()
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
      alert(elemento)

      elemento.classList.add("selecao_bebida");
      let okz = elemento.querySelector(".ok_bebida");
      okz.classList.add("aparecer_bebida");
      contador = contador + 1;
     console.log(contador);
     confirmar()
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
      alert(elemento)

      elemento.classList.add("selecao_sobremesa");
      let okz = elemento.querySelector(".ok_sobremesa");
      okz.classList.add("aparecer_sobremesa");
      contador = contador + 1;
     console.log(contador);
     confirmar()
}
function confirmar(){
    if (contador == 3){
        let referencia = document.querySelector(".confirmacao");
        let tirar = document.querySelector(".confirmacao_final");
        referencia.classList.add("escondido")
        tirar.classList.remove("escondido")

    
    }
}