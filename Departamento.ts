class Departamento {
    private nome: string;
    private telefone: string;
    private email: string;
    private professores: Professor[];

    // Construtor
    constructor(nome: string, telefone: string, email: string, professores: Professor[] = []) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.professores = professores;
    }

    // Getters
    public getNome(): string {
        return this.nome;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public getEmail(): string {
        return this.email;
    }

    public getProfessores(): Professor[] {
        return this.professores;
    }

    // Setters
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setProfessores(professores: Professor[]): void {
        this.professores = professores;
    }

    // Método para adicionar um professor à lista
    public adicionarProfessor(professor: Professor): void {
        this.professores.push(professor);
    }

    // Método para excluir um professor com base na matrícula
    public excluirProfessor(matricula: number): void {
        this.professores = this.professores.filter(professor => professor.getMatricula() !== matricula);
    }

    // Método para buscar um professor com base na matrícula
    public buscaProfessor(matricula: number): boolean {
        return this.professores.some(professor => professor.getMatricula() === matricula);
    }

    // Método para imprimir os dados do departamento e de todos os professores
    public imprime(): void {
        console.log(`Departamento: ${this.nome}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Professores do departamento:`);
        this.professores.forEach(professor => {
            console.log('--------------------------');
            professor.imprimir();
        });
    }
}