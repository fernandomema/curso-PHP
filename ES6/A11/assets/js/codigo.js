class Coche {
    constructor(marca, nombre) { 
        this.nombre = nombre;
        this.marca = marca;
        this.velocidad = 0;
    }

    acelerar() { 
        this.velocidad = 30;
    }

    frenar() { 
        this.velocidad = 0;
    }
}

var coche = new Coche('Audi', 'A3');
console.log(coche);
coche.acelerar();
console.log(`Velocidad del coche despues de acelerar ${coche.velocidad}Km/h`);
coche.frenar();
console.log(`Velocidad del coche despues de frenar ${coche.velocidad}Km/h`);
