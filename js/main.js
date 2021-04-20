//import {datos} from './datos.json'
//const dat=require('./datos.json')
//console.log(dat)
const data = [
  {"value":0,"content":"delfin"},
  {"value":1,"content":"caballo"},
  {"value":2,"content":"jirafa"},
  {"value":3,"content":"elefante"},
  {"value":4,"content":"koala"},
  {"value":5,"content":"perico"}
]

let list = []
let body = document.getElementById('root')
let btnReset = document.getElementById('reset')

const desordenar = (lista) =>{
  lista.sort(function(){return Math.random() - 0.5})
}
const duplicar = (lista, datos) =>{
  let aux
  for(let i=0; i<datos.length; i++){
     aux = datos[i]
     lista.push(aux)
     lista.push(aux)
  }
  return lista
}
const crearTablero = (lista,conteiner) =>{
  for(let i=0; i < lista.length; i++){
    let ficha = new Ficha(lista[i].content,lista[i].value, i)
    let btn = ficha.crearFicha()
    conteiner.appendChild(btn)
  }
}
class Ficha{
  constructor(content, value, id){
    this.content = content
    this.value = value
    this.id = id
  }

  crearFicha(){
    let btn = document.createElement('button')
    let p = document.createElement('p')
    let content = document.createTextNode(this.content)
    p.appendChild(content)
    p.setAttribute('class','hidden')
    btn.appendChild(p)
    btn.setAttribute('id', this.id)
    btn.setAttribute('value', this.value)
    return btn
  }
}

duplicar(list,data)
desordenar(list)
crearTablero(list,body)

btnReset.addEventListener('click',()=>{
  body.innerHTML=''
  desordenar(list)
  crearTablero(list,body)
  btnReset.setAttribute('disabled','')
})
