let myPins = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myPins"));

if (leadsFromLocalStorage) {
    myPins = leadsFromLocalStorage;
    render(myPins);
}

function render(pins) {
    let listItems = ""
    for (let i = 0; i < pins.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='https://${pins[i]}'>
                    ${pins[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
    myPins.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myPins", JSON.stringify(myPins));
    render(myPins)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myPins = []
    render(myPins)
})