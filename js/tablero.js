const data = [
    {"value":0, "content":"delfin"  , "icon": "128044"},
    {"value":1, "content":"caballo" , "icon": "128052"},
    {"value":2, "content":"perro"   , "icon": "128054"},
    {"value":3, "content":"pulpo"   , "icon": "128025"},
    {"value":4, "content":"conejo"  , "icon": "128007"},
    {"value":5, "content":"elefante", "icon": "128024"},
]
let body = document.getElementById('root')
let btnMezclar = document.getElementById('mezclar')


let click = 0
let aux = []
let matchs=0

let fichas = []

class Ficha{
    constructor(content, value, id, icon){
        this.content = content
        this.value = value
        this.id = id
        this.icon = icon
    }

    crearFicha(){
        let btn = document.createElement('button')
        let p = document.createElement('p')

        let content = `&#${this.icon}; </br> ${this.content}`
        p.setAttribute('class','hidden')
        
        p.innerHTML = content

        btn.appendChild(p)
        btn.setAttribute('id', this.id)
        btn.setAttribute('value', this.value)
        
        return btn
    }
}

const desordenar = (lista) =>{
    lista.sort(function(){return Math.random() - 0.5})
    // console.log(lista)
}

const duplicar = (datos) =>{
    let lista = datos.concat(datos)
    return lista
}

const crearTablero = (lista,conteiner) =>{
    let id = 0
    lista.forEach(item => {
        let ficha = new Ficha(item.content, item.value, id++, item.icon)
        let boton = ficha.crearFicha()
        conteiner.appendChild(boton)
    })
    
    fichas = document.querySelectorAll('#root button')
}

const congrats = () => {
  setTimeout( () => { window.alert('¡Felicidades! Completaste el juego') }, 500 )
  document.getElementById('mezclar').removeAttribute('disabled')
  return document.querySelectorAll('#root button')
}

function ocultar(){
  return new Promise (resolve =>{
    setTimeout(()=>{
      aux[0].firstChild.classList.add('hidden')
      aux[1].firstChild.classList.add('hidden')
      resolve(true)
    },500)
  })
}

async function reset(){
  const res = await ocultar()
  aux=[]
  click=0
}

let list = duplicar(data)

desordenar(list)
crearTablero(list,body)

fichas.forEach(ficha => {
  ficha.addEventListener('click', (e)=>{
    click++
    aux.push(e.target)

    aux[0].firstChild.classList.remove('hidden')

    if(click === 2){
      aux[1].firstChild.classList.remove('hidden')

      if(aux[0].value === aux[1].value && aux[0].id != aux[1].id){
        aux[0].setAttribute('disabled','')
        aux[1].setAttribute('disabled','')
        matchs++
        click = 0
        aux = []
      }else{
        reset()
      }
    }

    matchs === fichas.length/2 ? fichas = congrats() : null

  })
})

btnMezclar.addEventListener('click',()=>{
    location.reload()
})