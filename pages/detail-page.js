function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.nodeValue
    const textArea = document.getElementById('msg')
    const msg = testArea.value 
    const comment = document.createElement('section')
    const h3 = dcument.createElement('h3')
    const p = document.createElament('p')
    h3.innerHTML = '${name} said:'
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    console.log(msg)
}