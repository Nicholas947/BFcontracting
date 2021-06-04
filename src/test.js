function text(){
    document.getElementById('servicePic').src  = "assets/Division_Tiles/Wet Utilities.jpg"
    document.getElementById('text').innerHTML  = "Wet utilities"
}
function text1(){
    document.getElementById('servicePic1').src  = "assets/Division_Tiles/Wet Utilities.jpg"
    document.getElementById('text0').innerHTML  = "Wet utilities"
}
function UtilityRehab(){
    document.getElementById('servicePic').src  = "assets/Division_Tiles/Utility Rehabilitation.jpg"
    document.getElementById('text').innerHTML  = "Utility Rehab"

}
function UtilityRehab1(){
    document.getElementById('servicePic1').src  = "assets/Division_Tiles/Utility Rehabilitation.jpg"
    document.getElementById('text0').innerHTML  = "Utility Rehab"

}
function dryUt(){
    document.getElementById('servicePic').src  = "assets/Division_Tiles/Dry Utilities.jpg"
    document.getElementById('text').innerHTML  = "Dry utilities"
}
function traffic_street(){
    document.getElementById('servicePic').src  = "assets/Division_Tiles/Traffic Signals.jpeg"
    document.getElementById('text').innerHTML  = "Traffic and street"

}
function pump_pipe(){
    document.getElementById('servicePic').src  = "assets/Division_Tiles/Pump & Pipe.jpg"
    document.getElementById('text').innerHTML  = "Service decription"

}
function dryUt1(){
    document.getElementById('servicePic1').src  = "assets/Division_Tiles/Dry Utilities.jpg"
    document.getElementById('text0').innerHTML  = "Dry utilities"
}
function traffic_street1(){
    document.getElementById('servicePic1').src  = "assets/Division_Tiles/Traffic Signals.jpeg"
    document.getElementById('text0').innerHTML  = "Traffic and street"

}
function pump_pipe1(){
    document.getElementById('servicePic1').src  = "assets/Division_Tiles/Pump & Pipe.jpg"
    document.getElementById('text0').innerHTML  = "Service decription"

}
function projects(){
    document.getElementById('projectPic').src  = "assets/General Picture Auger Drill.jpg"
    document.getElementById('text2').innerHTML  = "These are all the projects to be displayed"
    document.getElementById('text9').innerHTML = "Here is where the detail for teh picture will go"


}function services(){
    document.getElementById('projectPic').src  = "assets/General Picture Auger Drill.jpg"
    document.getElementById('text2').innerHTML  = "-breakdowns" + `<br>` + "more";
    document.getElementById('text9').innerHTML = "Here is where the detail for teh picture will go"



}function markets(){
    document.getElementById('text2').innerHTML = "markets"
    document.getElementById('text9').innerHTML = "Here is where the detail for teh picture will go"


}function delivery(){
    document.getElementById('text2').innerHTML = "delivery methods"
    document.getElementById('text9').innerHTML = "Here is where the detail for teh picture will go"


}function jobsearch(){
    document.getElementById('text3').innerHTML = "Looking for a job?"

}function careers(){
    document.getElementById('text3').innerHTML = "Carreer paths"

}

function equal(){
    document.getElementById('text3').innerHTML = "Equal opportunity"

}
function visions(){
    document.getElementById('text4').innerHTML = "Our visions and beliefs"

}
function benefit(){
    document.getElementById('text4').innerHTML = "Benefit of B & F"

}
function history(){
    document.getElementById('text4').innerHTML = "History of B & F"

}
function meetTheTeam(){
    document.getElementById('text4').innerHTML = "Meet our amazing staff"

}


function placeText(date){
    if(date == "2017"){
        document.getElementById("allText").innerHTML = `<h2 id="historyText">
        May 8, 2017
    </h2>
    <p>
        dahbsjdiuas
    </p>`
    }
    if(date == "2018"){
        document.getElementById("allText").innerHTML = `<h2 id="historyText">
        January 28, 2018
    </h2>
    <p>
        Here is some text of the date
    </p>`
    }
}