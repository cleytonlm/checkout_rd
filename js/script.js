let inputCPF = document.getElementById('cpfUsuarioi');
let inputCEP = document.getElementById('cep');
let inputSENHA = document.getElementById('password');
let inputconfirme=document.getElementById('confirme');
let inputcartao=document.getElementById('numeroCartao')
let inputCVV=document.getElementById('CodigoSeguranca')
let inputcpfTitular=document.getElementById('cpfTitular')
let inputEndereco =document.getElementById('endereco')
let inputBairro=document.getElementById('bairro')
let inputCidade=document.getElementById('cidade')

inputCPF.addEventListener('keyup',(event)=>{
    if (isNaN(inputCPF.value)){
        event.preventDefault();
        inputCPF.value = inputCPF.value.substring(0,(inputCPF.value.length -100))
    }
    if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0,11)
    }
})

function buscarCep(cep){
    fetch(`http://viacep.com.br/ws/${cep}/json`)
    .then (response => response.json())
    .then(dados =>{
        if(dados.erro){
            return inputCEP.setAttribute('class','form-control is-invalid')
        }
        inputCEP.setAttribute('class','form-control is-valid')
        inputEndereco.value = dados.logradouro
        inputBairro.value=dados.bairro
        inputCidade.value = dados.localidade    
    } )
}


inputCEP.addEventListener('keyup',(event)=>{
    if (isNaN(inputCEP.value)){
        event.preventDefault();
        inputCEP.value = inputCEP.value.substring(0,(inputCEP.value.length -1))
    }

    if (inputCEP.value.length >= 8){
        inputCEP.value = inputCEP.value.substring(0,8)
        buscarCep(inputCEP.value)
    }
})

inputconfirme.addEventListener('keyup', (e)=>{
    if (inputconfirme.value != inputSENHA.value){
        inputconfirme.setAttribute('class','form-control is-invalid')
    }else {
        inputconfirme.setAttribute ('class','form-control is-valid')
    }
})      

inputcartao.addEventListener('keyup',(event)=>{
    if (isNaN(inputcartao.value)){
        event.preventDefault();
        inputcartao.value = inputcartao.value.substring(0,(inputcartao.value.length -1))
    }

    if (inputcartao.value.length >= 16){
        inputcartao.value = inputcartao.value.substring(0,16)
    }
})

inputCVV.addEventListener('keyup',(event)=>{
    if (isNaN(inputCVV.value)){
        event.preventDefault();
        inputCVV.value = inputCVV.value.substring(0,(inputCVV.value.length -1))
    }

    if (inputCVV.value.length >= 3){
        inputCVV.value = inputCVV.value.substring(0,3)
    }
})

inputcpfTitular.addEventListener('keyup',(event)=>{
    if (isNaN(inputcpfTitular.value)){
        event.preventDefault();
        inputcpfTitular.value = inputcpfTitular.value.substring(0,(inputcpfTitular.value.length -100))
    }

    if(inputcpfTitular.value.length >= 11){
        inputcpfTitular.value = inputcpfTitular.value.substring(0,11)
    }
})

