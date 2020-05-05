/* global $ */

console.log('hi');
picNum = Math.floor(Math.random() * 11);
url = "https://api.warframestat.us/xb1"
console.log(url);
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        $("#boss").text('Boss : ' + data.sortie.boss);
        for (var item in data.sortie.variants) {
            counter = 0
            $("#variants").append("<li> Mission Type = " + item.modifier+ "</li>");
            counter += 1
        }
        
    })
