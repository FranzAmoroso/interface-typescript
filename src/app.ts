// Es: 1
// creare un interfaccia
interface Prova{
   readonly nome: string
    saluta(): void
}

interface Querty{
    scrivi() : void
}

// Differenza type

type Persona = {
    nome : string
    saluta() : void
}

// Implementare interface

class x implements Prova, Querty{
    nome: string


    constructor(nome: string){
        this.nome = nome;
    }

    saluta(): void {
        console.log("Ciao");  
    }

    scrivi(): void {
        console.log("Querty");
        
    }
    
}


// Es: 2
interface Internet{
    ip: string
    connettiInternet(): void
}

// Abstact class es:
abstract  class Dispositivo{


    constructor(protected nome : string, protected anno: number){}

    abstract accendi() : void
    abstract spegni() : void
}

class Telefono extends Dispositivo{
    accendi(): void {
        console.log("il telefono si accende..");
        
    }
    spegni(): void {
        console.log("il telefono si spegne..");
        
    }
}

class Smartphone extends Dispositivo implements Internet{
    ip: string

    constructor(nome : string, anno : number){
        super(nome,anno)
        this.ip = this.ip
    }
    
    accendi(): void {
        console.log("lo smartphone si accende..");
        
    }
    spegni(): void {
        console.log("lo smartphone si spegne..");
        
    }

    connettiInternet(): void {
        console.log("Connessione Internet .. ");
        
    }
}

class Computer extends Dispositivo implements Internet{
    
    ip: string

    constructor(nome : string, anno : number){
        super(nome,anno)
        this.ip = this.ip
    }

    accendi(): void {
        console.log("il computer si accende..");
        
    }
    spegni(): void {
        console.log("il computer si spegne..");
        
    }
    connettiInternet(): void {
        console.log("Connessione Internet ..");
        
    }
}

// Estendere più interface

interface X{
    nome : String
}

interface Y extends X{
    cognome: String
    respira() : void
}

interface Z{
    telefono : String
    saluta() : void
}

interface W extends Y,Z{
    anno : number
    mangia() : void
}

class Studente implements W{
    nome: String
    cognome: String
    telefono: String
    anno: number


    constructor(nome: string, cognome: string, telefono : string, anno: number){
        this.nome = nome
        this.cognome = cognome;
        this.telefono = telefono;
        this.anno = anno;
    }
    
    
    respira(): void {
        console.log("Studente respira");
    }

    mangia(): void {
        console.log("Studente mangia");
    }

    saluta(): void {
        console.log("Studente saluta");
    }
    
}