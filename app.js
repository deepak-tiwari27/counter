
const counter = document.querySelector("#counter")
const incrementBtn = document.querySelector("#increment")
const saveBtn = document.querySelector("#save")
const prevEntries = document.querySelector("#entries")

let count = 0

incrementBtn.addEventListener("click",()=>{
    count+=1
    counter.textContent= count

})
saveBtn.addEventListener("click",()=>{
    let total = `${count} - `
    prevEntries.textContent+= " "+ total
    counter.textContent = 0
    count = 0
})