var form = document.querySelector('form')

function sendAjax(variable){
    var http = new XMLHttpRequest()
    http.open('POST','post.php', true)
    http.addEventListener('load', function() {
         console.log(this.responseText)
    })
    http.send(JSON.stringify(variable))
}

form.addEventListener("submit",function(e) {
    e.preventDefault()
    var jsonObj= {}
    var input = document.querySelectorAll(".field")
    input.forEach(function(field){
        if(field.value != "")
        jsonObj[field.name] = field.value
        }
    )
    jsonObj['Field15'] = input[12]['checked']
    sendAjax(jsonObj)
})
