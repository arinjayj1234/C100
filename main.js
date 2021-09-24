var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function sTart(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    recognition.onresult = function(event){
        console.log(event);
        var content = event.results[0][0].transcript;
        console.log(content);
        document.getElementById("textbox").innerHTML = content;
        if (content == "take my selfie"){
            sPeak();
        }
    }
}

function sPeak(){
    var synth = window.speechSynthesis;
    sPeak_data = "Taking Your Selfie in 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(sPeak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        takeSnapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });

camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("anyThing").innerHTML = "<img id='properId' src='"+data_uri+"'>";
    });
    
}
function save(){
    lInk = document.getElementById("lInk");
    iMg = document.getElementById("properId").src;
    lInk.href = iMg;
    lInk.click();
}