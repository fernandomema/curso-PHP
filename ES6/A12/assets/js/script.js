class Vehículo {
    constructor(marca, matricula, nRuedas, nPuertas, años, velocidad) { 
        this.marca = marca;
        this.matricula = matricula;
        this.nRuedas = nRuedas;
        this.nPuertas = nPuertas;
        this.años = años;
        this.velocidad = velocidad;
    }

    correr() { 
        this.velocidad += 10;
    }

    frenar() {
        this.velocidad = 0;
    }

    aparcar() { 
        console.log('Aparcao!!');
    }
}