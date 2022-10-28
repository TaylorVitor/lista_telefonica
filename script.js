
function addNewPhone() {
    const phoneForm = document.querySelector("form#phones")
    const newPhone  = phoneForm.children[0].cloneNode(true)
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = "\n" + "Telefone " + phonePosition + ": "
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}


function printPhone() {
    let imprimir = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phones, index) => {
        imprimir += "Telefone " + (index + 1) + ": " + phones.value + "\n"
    })
    alert(imprimir)
}