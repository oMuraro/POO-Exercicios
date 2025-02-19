class JogadorFutebol {
    private nome: string;
    private idade: number;
    private clube: string;
    private salario: number;
    private numeroCartaoAmarelo: number;
    private numeroCartaoVermelho: number;

    constructor(nome: string, idade: number, clube: string, salario: number, numeroCartaoAmarelo: number, numeroCartaoVermelho: number) {
        this.nome = nome;
        this.idade = idade;
        this.clube = clube;
        this.salario = salario;
        this.numeroCartaoAmarelo = numeroCartaoAmarelo;
        this.numeroCartaoVermelho = numeroCartaoVermelho;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getClube(): string {
        return this.clube;
    }

    public getSalario(): number {
        return this.salario;
    }

    public getNumeroCartaoAmarelo(): number {
        return this.numeroCartaoAmarelo;
    }

    public getNumeroCartaoVermelho(): number {
        return this.numeroCartaoVermelho;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public setClube(clube: string): void {
        this.clube = clube;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public setNumeroCartaoAmarelo(numeroCartaoAmarelo: number): void {
        this.numeroCartaoAmarelo = numeroCartaoAmarelo;
    }

    public setNumeroCartaoVermelho(numeroCartaoVermelho: number): void {
        this.numeroCartaoVermelho = numeroCartaoVermelho;
    }

    public registrarNumeroCartoesAmarelos() : void{
        this.numeroCartaoAmarelo += 1;
    }

    public registrarNumeroCartoesVermelhos() : void{
        this.numeroCartaoVermelho += 1;
    }

    public verificarVinculoClube() : void{
        if(this.clube == null){
            console.log("Não possui vínculo com clubes");
        } else {
            console.log(`Possui vínculo com o clube ${this.clube}`);
        }
    }

    public imprimir(): void {
        console.log(`Jogador: ${this.nome}, 
            Idade: ${this.idade}, Clube: ${this.clube}, 
            Salário: ${this.salario}, 
            Cartões Amarelos: ${this.numeroCartaoAmarelo}, 
            Cartões Vermelhos: ${this.numeroCartaoVermelho}`);
    }   
}