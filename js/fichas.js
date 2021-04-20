const OCULTO = -1
const MATCH = 0

let fichas = document.querySelectorAll('#root button')
let click = 0
let aux = []
let matchs=0
const congrats = () => {
  window.alert('¡Felicidades!')
  document.getElementById('reset').removeAttribute('disabled')
  return document.querySelectorAll('#root button')
}

function ocultar(){
  return new Promise (resolve =>{
    setTimeout(()=>{
      aux[0].firstChild.classList.add('hidden')
      aux[1].firstChild.classList.add('hidden')
      resolve(true)
    },1000)
  })
}
async function reset(){
  const res = await ocultar()
  aux=[]
  click=0
}

//console.log(fichas)
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

        console.log(matchs === fichas.length/2 ? fichas = congrats() : null)
  })
})
