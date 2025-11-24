document.getElementById('formCadastro').addEventListener('submit', function(event){
  event.preventDefault(); //impede o reload da pagina quando apertar submit
  const resultado = document.getElementById("resultado");

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const personagem = document.getElementById("personagem").value;
  const fruta = document.getElementById("fruta").value;
  const nota = document.getElementById("nota").value;

  //resultado.textContent =
 //"Informações digitadas:\n" + 
 // "Nome: " + nome + "\n" +
 //"Email: " + email + "\n" +
 //"Senha: " + senha + "\n" +
 // "Personagem favorito: " + personagem + "\n" +
 //"Fruta favorita: " + fruta + "\n" +
 //"Nota: " + nota;

 resultado.innerHTML =
 "Informações digitadas:<br>" +
 "Nome: " + nome + "<br>" +
 "Email: " + email + "<br>" +

 "Personagem favorito: " + personagem + "<br>" +
 "Fruta favorita: " + fruta + "<br>" +
 "Nota: " + nota;


 const btnConfirmar = document.createElement("button");
  btnConfirmar.id = "confirmar";
  btnConfirmar.textContent = "Confirmar Cadastro";

  const btnCancelar = document.createElement("button");
  btnCancelar.id = "cancelar";
  btnCancelar.textContent = "Cancelar Cadastro";
  resultado.appendChild(btnConfirmar);
  resultado.appendChild(btnCancelar);

  btnConfirmar.addEventListener("click", () => {
    resultado.textContent = "✔ Cadastro confirmado com sucesso!";
    formulario = document.getElementById('formCadastro')
    formulario.reset()
  });

  btnCancelar.addEventListener("click", () => {
    alert("Cadastro cancelado!");
    resultado.innerHTML = ""; // apaga tudo
    formulario = document.getElementById('formCadastro')
    formulario.reset()
  });
});