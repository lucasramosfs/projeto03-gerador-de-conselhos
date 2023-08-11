const botao = document.querySelector(".botao")
const idNumber = document.getElementById("id")
const adviceText = document.getElementById("advice")

botao.addEventListener('click', () =>{

    pegaId()

})

async function pegaId() {
    const resposta = await fetch("https://api.adviceslip.com/advice")
    const json =  await resposta.json()
    const id = `ADVICE #${json.slip.id}`
    const advice = json.slip.advice

    idNumber.innerHTML = id
    adviceText.innerHTML = advice

}
