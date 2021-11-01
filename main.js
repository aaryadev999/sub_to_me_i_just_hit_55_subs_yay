var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function jhonnyClick(){
    document.getElementById("jhonnyText").innerHTML= "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    if(Content=="take my selfie"){
    console.log(Content);
    speak();
    }
    document.getElementById("jhonnyText").innerHTML = Content;
}

function speak(){
    var synth = window.speechSynthesis;

    var speak_data = "Taking Your Selfie In 5 Seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    setTimeout(function(){
        JhonnyPic();
        jhonnySavesHumans();
    },5000);
    Webcam.attach(camera);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

function JhonnyPic(){
    Webcam.snap(function(data_URL){
        document.getElementById("cam_result").innerHTML = '<img id="jhonnydoc" src="'+data_URL+'">';
    });
}

function jhonnySavesHumans(){
    var link = document.getElementById("link");
    var image = document.getElementById("jhonnydoc").src;
    link.href = image;
    link.click();
}