//Criando uma requisição HTTP

fetch('https://api.coingecko.com/api/v3/exchange_rates', {mode: 'cors'}).then((data) => {
    console.log(data) //usamos o mode: 'cors' para bater em uma API que está em outra máquina
})