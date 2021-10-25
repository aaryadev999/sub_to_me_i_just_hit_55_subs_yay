var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function jhonnyClick(){
    document.getElementById("jhonnyText").innerHTML= "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);
    document.getElementById("jhonnyText").innerHTML = Content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;

    var speak_data = document.getElementById("jhonnyText").value;

    var utterThis = new SpeechSynthesisUtterance(speek_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}


Webcam.set({
    width: 1920,
    height: 1080,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");