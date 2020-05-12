/* global $ */

console.log('hi');
picNum = Math.floor(Math.random() * 11);
url = "https://api.warframestat.us/xb1"
console.log(url);
var i = 0
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        $("#boss").text('Boss : ' + data.sortie.boss);
        for (var item in data.sortie.variants) {
            i2 = i+1
            $("body").append("<li> Mission " + i2 + " Type = " + data.sortie.variants[i].missionType + "</li>");
            i = i + 1
        }
    })
