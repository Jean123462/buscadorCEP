const form = document.getElementById("cep-form");
const cepInput = document.getElementById("cep-input");
const resultado = document.getElementById("resultado");


form.addEventListener("submit", (event) => {
    event.preventDefault(); // evitar o recarregamento da página

    const cep = cepInput.value.trim(); //trim remove os white space
    resultado.innerHTML = "<p>Buscando...</p>"
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(Response => {
            if (!Response.ok) {
                throw new Error("erro ao buscaro CEP")

            }
            return Response.json();
        })
        .then(data => {
            if (data.error) {
                resultado.innerHTML = '<p style = "color: red; ">CEP não encontrado</p>'
            }
            resultado.innerHTML = `
            <p> <strong>CEP:</strong>${data.cep} </p>
            <p> <strong>Logradouro:</strong>${data.logradouro} </p>
            <p> <strong>Bairro:</strong>${data.bairro} </p>
            <p> <strong>Cidade:</strong>${data.localidade} </p>
            <p> <strong>Estado:</strong>${data.uf} </p>
            `
        })

})