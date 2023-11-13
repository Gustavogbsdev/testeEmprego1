//máscara para telefone e cpf
$('#celular').mask('(00)00000-0000');
$('#cpf').mask('000.000.000-00', {reverse: false});


//script para ver telefone
//variável com telefone para simular um ponto de onde vem o telefone
var telefone = "(99)99999-9999"

//selecionar texto
var numTelefone = document.querySelector(".btn");

//Função que altera o conteúdo
function fnTelefone(){
    var atributo = numTelefone.getAttribute('data-cn');
    if (atributo == "telefone"){
        numTelefone.textContent = telefone;
        numTelefone.setAttribute("data-cn", "numero");
    } else {
        numTelefone.textContent = "ver telefone";
        numTelefone.setAttribute("data-cn", "telefone");
    }
}


//alterar para número quando selecionado/clicado
numTelefone.addEventListener("click", fnTelefone)


//alerta ao pressionar o botão
const btnEnviar = document.querySelector("#botaoEnviar");

btnEnviar.addEventListener("click", alertaForm);


function alertaForm(){
    alert("Mensagem Enviada!")
    };

//calcular regra de tres

document.getElementById('calculate').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('campo1').value);
    const num2 = parseFloat(document.getElementById('campo2').value);
    const num3 = parseFloat(document.getElementById('campo3').value);

    let resultado = (num3 * num2) / num1;

    document.getElementById('resultado').innerHTML = (resultado)
   	

});




document.getElementById('abrir-modal').addEventListener('click', function() {
    document.getElementById('imagemModal').style.display = 'flex';
});

document.querySelector('.fechar').addEventListener('click', function() {
    document.getElementById('imagemModal').style.display = 'none';
});
