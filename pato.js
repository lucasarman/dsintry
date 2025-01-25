class Pato {
  constructor(nome) {
    this.nome = nome;
  }

  quack() {
    console.log(`${this.nome} diz: Quack!`);
  }

  nadar() {
    console.log(`${this.nome} está nadando.`);
  }

  andar() {
    console.log(`${this.nome} está andando.`);
  }

  voar() {
    console.log(`${this.nome} está voando no céu!`);
  }
}

const donald = new Pato("Donald");

donald.quack();
donald.nadar();
donald.andar();
donald.voar();
