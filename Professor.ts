class Professor {
    private matricula: number;
    private nome: string;
    private titulacao: string;
    private telefone: string;
    private email: string;
    private salario: number;

    constructor(matricula: number, nome: string, titulacao: string, telefone: string, email: string, salario: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.titulacao = titulacao;
        this.telefone = telefone;
        this.email = email;
        this.salario = salario;
    }

    public getMatricula(): number {
        return this.matricula;
    }
    public getNome(): string {
        return this.nome;
    }
    public getTitulacao(): string {
        return this.titulacao;
    }
    public getTelefone(): string {
        return this.telefone;
    }
    public getEmail(): string {
        return this.email;
    }
    public getSalario(): number {
        return this.salario;
    }

    public setMatricula(matricula: number): void {
        this.matricula = matricula;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public setTitulacao(titulacao: string): void {
        this.titulacao = titulacao;
    }
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public imprimir(): void {
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Titulação: ${this.titulacao}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
        console.log(`Salário: ${this.salario}`);
    }
}
