import {useEffect } from "react"
import Background from "../components/Background"

class Humano{

    public nombre : string
    public altura : number
    public peso : number

    constructor(nombre:string, altura:number, peso:number){
       // console.log("hola soy un humano: "+ this.nombre)
       this.nombre = nombre;
       
       this.altura = altura;
       this.peso = peso;
       this.saludar()
    }

    private saludar(){
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

class Peleador extends Humano{
    private poder = 100
    private defensa = 100
    
    constructor(nombre, scene:Scene){
    super(nombre, 1.42, 50)
    console.log(this.nombre)
    }

    public duplicarEstadisticas(){
        this.poder *= 2
        this.defensa *=2
        console.log(this.poder)
        console.log(this.defensa)
    }

    public Ejecutar(fn){
        fn()
    }
}

class Scene{
    private score = 0


    constructor(){
      const peleador = new Peleador("nombre",this)
      const persona = new Humano("Ricardo", 1.80,60)

     // peleador.Ejecutar(this.aumentarScore.bind(this))
    }

    private aumentarScore(){
        this.score +=10
      console.log(this)
    }
}


function HomePage(){
    new Scene()
    const peleador = new Peleador("Lenin",this)
    peleador.duplicarEstadisticas()
    
    return <Background/>
}

export default HomePage