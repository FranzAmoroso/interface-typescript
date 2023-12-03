# Typescript Interface

Le interfacce in TypeScript sono un modo per definire contratti per la struttura di oggetti. Le interfacce consentono di dichiarare quali proprietà e metodi un oggetto deve avere, senza fornire l'implementazione effettiva di tali proprietà e metodi. Servono principalmente a stabilire un contratto che le classi o gli oggetti devono seguire.

Le interfacce possono contenere definizioni per:

- Proprietà: 
    - Specificano i nomi e i tipi di proprietà che un oggetto deve avere.

- Metodi: 
    - Dichiarano i nomi 
    - i tipi di ritorno e i parametri dei metodi che un oggetto deve implementare.


### Differenza tra interface e type :
interface lo utilizziamo per esserre implementato a più classi per dare delle funzionalità aggiuntive mentre il custom type lo utilizziamo per creare dei tipi per quelli che abbiamo già.

### readonly
si può utilizzare definendolo solo una volta nell'interfaccia

### abstract class con interface
Le classi astratte (abstract class) in TypeScript sono classi che non possono essere istanziate direttamente. Servono come modelli o "scheletri" per altre classi che ereditano da loro. Le classi astratte possono contenere metodi astratti, che sono dichiarati ma non implementati nella classe astratta stessa. Le classi che ereditano da una classe astratta devono implementare tutti i suoi metodi astratti.
Nell'esempio, c'è una classe astratta Dispositivo con due proprietà protette (nome e anno) e due metodi astratti (accendi e spegni). Le classi concrete Telefono, Smartphone, e Computer ereditano da Dispositivo e implementano i suoi metodi astratti.

### implementare interface 
Posso implementare più interface in una classe, ma non posso estendere più classi.
     
     class X extends Y implements Prova, Querty{

        // Resto del codice ..

     }

### estendere da più interface
La possibilità di definire un'interfaccia che eredita da più di una interfaccia. Ciò consente a un'interfaccia figlia di acquisire le proprietà e i metodi di più interfacce genitori.

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

- Interfaccia X:

    - Ha una proprietà nome di tipo stringa.

- Interfaccia Y estesa da X:

    - Eredita dalla proprietà nome di X.
    - Ha una nuova proprietà cognome di tipo stringa.
    - Ha un metodo respira senza implementazione (astratto).

- Interfaccia Z:

    - Ha una proprietà telefono di tipo stringa.
    - Ha un metodo saluta senza implementazione (astratto).

- Interfaccia W estesa da Y e Z:

    - Eredita le proprietà e i metodi di Y e Z.
    - Ha una nuova proprietà anno di tipo numero.
    - Ha un nuovo metodo mangia senza implementazione (astratto).

e successivamente implementare interface nelle classi.

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
- Classe Studente implementa W:

    - Implementa l'interfaccia W, quindi deve fornire implementazioni concrete per tutte le proprietà e i metodi di W.
    - Ha le proprietà nome, cognome, telefono, e anno.