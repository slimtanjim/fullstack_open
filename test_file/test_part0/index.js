var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status ==200){
        const data = JSON.parse(xhttp.responseText);
        console.log(data);

        data.forEach(function(note){
            var li = document.createElement(`li`)

            ul.appendChild(`li`)
            li.appendChild(document.createTextNode(note.c))
        })
    }
}

xhttp.open('GET', `/data.json`, 'true')
xhttp.send()