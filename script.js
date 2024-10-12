const valor = document.getElementById('sum-')

    
    valor.addEventListener('submit', function(event){

        const numero1 = parseFloat(document.getElementById('n1').value, 10)
        const numero2 = parseFloat(document.getElementById('n2').value, 10) 
        alert(numero1 + numero2);
    }
    
)