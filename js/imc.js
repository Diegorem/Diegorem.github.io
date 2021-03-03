function imc(peso, altura){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').innerHTML = imc.toFixed(2);

    if(imc <= 18.5){
        document.getElementById('bajo').classList.add('respuesta');
    }else if(imc <= 24.9){
        document.getElementById('saludable').classList.add('respuesta');
    }else if(imc <= 29.9){
        document.getElementById('sobrepeso').classList.add('respuesta');
    }else if(imc <= 34.9){
        document.getElementById('obesidad1').classList.add('respuesta');
    }else if(imc <= 39.9){
        document.getElementById('obesidad2').classList.add('respuesta');
    }else if(imc > 40){
        document.getElementById('morbida').classList.add('respuesta');
    }
    else{
        document.getElementById('resultado').innerHTML = "Digite valores válidos"
    }
}