const button = document.getElementById('button');
const select = document.getElementById('eurodolar');
const dolar = 4.94;
const euro = 5.94;

const conversor = () => {
    const inputValue = document.getElementById('valor').value;
    
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
