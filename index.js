const button = document.getElementById('button');
const select = document.getElementById('eurodolar');


const conversor = async () => {
    const inputValue = document.getElementById('valor').value;
    
    // Toda vez que a genter for lidar com codigos assincronos
    //  1 - Sempre preicisa ocorrer dentro de um função
    // 2 -   Precisamos usar Funçoes Assincronas (Só ir na função e colocar "Async")
    // 3 - a segunda parte eu preciso falar pra função assinncrona onde tá meu await, ligando async no await 
    // 4 - Se não fosse um função Arrow fazemos assim : async function
   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json());
   /////////////////////////////////

   const dolar = data.USDBRL.high;
   const euro = data.EURBRL.high;
   console.log(data)


    const numberReal =  document.getElementById('realParagrafo');
    numberReal.innerHTML = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
     }).format(inputValue);
    

     if(select.value === 'US$ Dólar Americano'){
    const numberDolar = document.getElementById('dolarParagrafo');
    numberDolar.innerHTML = new Intl.NumberFormat('es-US',{
        style: 'currency',
        currency: 'USD',
     }).format(inputValue / dolar);
    }

    if(select.value === '€ Euro'){
     const numberEuro = document.getElementById('dolarParagrafo');
    numberEuro.innerHTML = new Intl.NumberFormat('de-DE',{
        style: 'currency',
        currency: 'EUR',
     }).format(inputValue / euro);
    }
}

button.addEventListener('click', conversor);



const trocaValores = () => {
    
    if(select.value === '€ Euro'){
    const euro = document.getElementById('america');
    euro.innerHTML = euro.src = "/assets/EURO.png";

    const textEuro =  document.getElementById('textdolar');
    textEuro.innerHTML = '<p>€ Euro</p>'
    }

    if(select.value === 'US$ Dólar Americano'){
        const euro = document.getElementById('america');
        euro.innerHTML = euro.src = "/assets/dolar.png";

        const textEuro =  document.getElementById('textdolar');
        textEuro.innerHTML = '<p>Dólar Americano</p>'
    }
conversor()

}
select.addEventListener('change', trocaValores)
