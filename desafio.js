class Heroi {
  constructor (nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = '';
  }
  atacar() {
    switch (this.tipo) {
      case 'guerreiro':
        this.ataque = 'espada';
        break;
      case 'mago':
        this.ataque = 'magia';
        break;
      case 'monge':
        this.ataque = 'artes maciais';
        break;
      case 'ninja':
        this.ataque = 'shuriken';
        break;
    }
    return `o ${this.tipo} atacou usando ${this.ataque}`
  }
}

const BRUNO = new Heroi('Bruno', 35, 'monge')

BRUNO.atacar()
