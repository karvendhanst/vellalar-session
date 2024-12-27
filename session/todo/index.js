const input = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    const list = document.querySelector(".list")
    const p = document.createElement("p")
    p.innerHTML = input.value
    list.append(p)
    input.value = ""
})