class Livro{
    protected titulo: String;
    protected autor: String;
    protected pgs: number;
    protected lido: boolean;

    constructor(titulo:String, autor:String, pgs:number, lido:boolean){
        this.titulo=titulo;
        this.autor=autor;
        this.pgs=pgs;
        this.lido=lido;
    }

    marcarLivro(): void {
        this.lido = true;
    }
    infoLivro():String{
        return(`o livro: ${this.titulo}"\nautor: ${this.autor}\npáginas: ${this.pgs}\nestá lido?: ${this.lido ? 'sim' : 'nao'}`)
    }
}

const livro1 = new Livro("diario de um banana", "jeff kinney",100,true)
const livro2 = new Livro("diario de um banana - rodricky é o cara", "jeff kinney",100,false)
console.log(livro1.infoLivro());
console.log(livro2.infoLivro())
livro1.marcarLivro();
livro2.marcarLivro();
