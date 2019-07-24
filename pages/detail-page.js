function submitComment() {
    console.log('hello')
    const inputField = document.getElementById('name')
    console.log(inputField)
    const name = inputField.value
    console.log(name)
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    console.log(h3.innerHTML)
    console.log(p.innerHTML)
    console.log(comment)
    comment.appendChild(h3)
    comment.appendChild(p)
    const commentSection = document.getElementById('newbox')
    console.log(commentSection)
    commentSection.appendChild(comment)

    //reset form values
    inputField.value = null
    textArea.value = null

    //check if user input passes validations
    if(doesNotPassAllValidations(name, msg)){
      return null
    }
}
function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
      alert('You forgot to fill in your name or message!')
      return true;
    }
  
    if(msg.length > 280) {
      alert('Your comment is too long')
      return true
    }
}