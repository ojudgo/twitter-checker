const count = document.getElementById('current-count')
const textArea =  document.getElementById('text-area')

textArea.addEventListener('input', 
e =>  count.innerText = e.target.value.length )
