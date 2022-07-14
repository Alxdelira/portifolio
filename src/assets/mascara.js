function mascaraDeTelefone( telefone ){
  const textoAtual = telefone.value;
}

function mascaraDeTelefone(telefone){
  const textoAtual = telefone.value;
  const isCelular = textoAtual.length === 9;
  let textoAjustado;
      if(isCelular) {
       // faz alguma coisa 
      } else {
       // faz alguma coisa
      }
  telefone.value = textoAjustado;
}
function tiraHifen(telefone) {
  const textoAtual = telefone.value;
  const textoAjustado = textoAtual.replace(/\-/g, '');

  telefone.value = textoAjustado;
}