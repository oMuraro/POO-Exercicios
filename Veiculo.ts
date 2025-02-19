class Veiculo {
    private nome: string;
    private montadora: string;
    private anoFabricacao: number;
    private anoModelo: number;
    private cor: string;
    private placa: string;
    private valorIPVA: number;
    private IPVApago: boolean;

    constructor(nome: string, montadora: string, anoFabricacao: number, anoModelo: number, cor: string, placa: string, valorIPVA: number, IPVApago: boolean) {
        this.nome = nome;
        this.montadora = montadora;
        this.anoFabricacao = anoFabricacao;
        this.anoModelo = anoModelo;
        this.cor = cor;
        this.placa = placa;
        this.valorIPVA = valorIPVA;
        this.IPVApago = IPVApago;
    }

    public getNome(): string {
        return this.nome;
    }

    public getMontadora(): string {
        return this.montadora;
    }

    public getAnoFabricacao(): number {
        return this.anoFabricacao;
    }

    public getAnoModelo(): number {
        return this.anoModelo;
    }

    public getCor(): string {
        return this.cor;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public getValorIPVA(): number {
        return this.valorIPVA;
    }

    public getIPVApago(): boolean {
        return this.IPVApago;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setMontadora(montadora: string): void {
        this.montadora = montadora;
    }

    public setAnoFabricacao(anoFabricacao: number): void {
        this.anoFabricacao = anoFabricacao;
    }

    public setAnoModelo(anoModelo: number): void {
        this.anoModelo = anoModelo;
    }

    public setCor(cor: string): void {
        this.cor = cor;
    }

    public setPlaca(placa: string): void {
        this.placa = placa;
    }

    public setValorIPVA(valorIPVA: number): void {
        this.valorIPVA = valorIPVA;
    }

    public setIPVApago(IPVApago: boolean): void {
        this.IPVApago = IPVApago;
    }

    public verificarStatusIPVA() : void{
        if(this.IPVApago == true){
            console.log("IPVA Pago");
        } else {
            console.log("IPVA Não Pago");
        }
    }

    public pagarIPVA() : void{
        if(this.IPVApago == true){
            console.log("IPVA Já Pago");
        } else {
            this.IPVApago = true;
            console.log("IPVA Pago com Sucesso");
        }
    }

    public atualizarValorIPVA(reajuste : number) : void{
        reajuste = (this.valorIPVA / 100) * reajuste;
        this.valorIPVA += reajuste;
    }

    public imprimir(): void {
        console.log(`Veículo: ${this.nome}, 
            Montadora: ${this.montadora}, 
            Ano de Fabricação: ${this.anoFabricacao}, 
            Ano Modelo: ${this.anoModelo}, Cor: ${this.cor}, 
            Placa: ${this.placa}, Valor IPVA: ${this.valorIPVA}, 
            IPVA Pago: ${this.IPVApago}`);
    }
}