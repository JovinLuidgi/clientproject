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
            $("#variants").append("<li> Mission " + i2 + " Type = " + data.sortie.variants[i].missionType + "</li>");
            i = i + 1
        }
        if (data.cetusCycle.isDay === true) {
            $("#cetustimeofday").text("It is currently " + data.cetusCycle.state + "time. It will be night time in " + data.cetusCycle.timeLeft + ".");
        }else {
             $("#cetustimeofday").text("It is currently " + data.cetusCycle.state + " time in. It will be daytime in " + data.cetusCycle.timeLeft + ".");
        }
        if (data.earthCycle.isDay === true) {
            $("#earthtimeofday").text("It is currently " + data.earthCycle.state + "time. It will be night time in " + data.earthCycle.timeLeft + ".");
        }else {
             $("#earthtimeofday").text("It is currently " + data.earthCycle.state + " time in. It will be daytime in " + data.earthCycle.timeLeft + ".");
        }
        if (data.vallisCycle.isWarm === true) {
            $("#warmstate").text("It is currently " + data.vallisCycle.state + " in Vallis. It will be cold in " + data.vallisCycle.timeLeft + ".");
        }else {
            $("#warmstate").text("It is currently " + data.vallisCycle.state + " in Vallis. It will be daytime in " + data.vallisCycle.timeLeft + ".");
        }
    })
