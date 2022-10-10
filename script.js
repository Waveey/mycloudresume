
function updateCounter(){
    fetch('https://api.countapi.xyz/update/myresume/ogonna/?amount=1')
    .then(res => res.json() )
    .then(data => counterElement.innerHTML = data.value)
}

updateCounter()


counterElement = document.getElementsByClassName('visits')[0];