class EquipeEsports {
    private nome: string;
    private campeonatosVencidos: number;
    private valorTotalGanho: number;
    private anoEstreia: number;

    constructor(nome: string, campeonatosVencidos: number, valorTotalGanho: number, anoEstreia: number) {
        this.nome = nome;
        this.campeonatosVencidos = campeonatosVencidos;
        this.valorTotalGanho = valorTotalGanho;
        this.anoEstreia = anoEstreia;
    }

    public getNome(): string {
        return this.nome;
    }

    public getCampeonatosVencidos(): number {
        return this.campeonatosVencidos;
    }

    public getValorTotalGanho(): number {
        return this.valorTotalGanho;
    }

    public getAnoEstreia(): number {
        return this.anoEstreia;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setCampeonatosVencidos(campeonatosVencidos: number): void {
        this.campeonatosVencidos = campeonatosVencidos;
    }

    public setValorTotalGanho(valorTotalGanho: number): void {
        this.valorTotalGanho = valorTotalGanho;
    }

    public setAnoEstreia(anoEstreia: number): void {
        this.anoEstreia = anoEstreia;
    }

    public atualizarValorTotalPremiacoes(valor : number) : void{
        this.valorTotalGanho += valor;
    }

    public registrarCampeonatoVencido(valorPremio) : void{
        this.campeonatosVencidos += 1;
        this.atualizarValorTotalPremiacoes(valorPremio);
    }

    public verificarAnoEstreia() : void{
        const anoAtual : number = new Date().getFullYear();
        if(this.anoEstreia == anoAtual){
            console.log("Time Novato");
        } else {
            console.log("Time Veterano");
        }
    }

    public imprimir(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Campeonatos Vencidos: ${this.campeonatosVencidos}`);
        console.log(`Valor Total Ganhado: R$ ${this.valorTotalGanho}`);
        console.log(`Ano de Estreia: ${this.anoEstreia}`);
    }
    
}