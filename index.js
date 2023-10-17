// 1. Grab the save-el paragrah and store it in a variable called saveEl

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
