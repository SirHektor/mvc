class Calculadora {
    static Hipotenusa(cateto1, cateto2) {
        return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    }

    static VolumeEsfera(raio) {
        return (4/3) * Math.PI * (raio ** 3);
    }
}

module.exports = Calculadora;
