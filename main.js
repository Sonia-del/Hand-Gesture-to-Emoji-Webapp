prediction_1 = "";
prediction_2 = ""; 
 
 Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rdJQdBy8p/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    document.getElementById("result_hand_gesture_name").innerHTML = results[0].label;
    document.getElementById("result_hand_gesture_name2").innerHTML = results[1].label;

    prediction_1 = results[0].label;
    prediction_2 = results[1].label;

    statement_1 = "";
    statement_2 = "";
    
    if(results[0].label == "Amazing")
    {
      statement_1 = "This is looking amazing";
      document.getElementById("update_emoji").innerHTML = "&#128076;";
    }
    else if(results[0].label == "Best")
    {
      statement_1 = "All the best";
      document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
    else if(results[0].label == "Victory")
    {
      statement_1 = "That was a marvelous victory";
      document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    else if(results[0].label == "Worst")
    {
      statement_1 = "Todays exam was the worst one yet";
      document.getElementById("update_emoji").innerHTML = "&#128078;";
    }
    else if(results[0].label == "Pointing Down")
    {
      statement_1 = "He is pointing down towards the cat";
      document.getElementById("update_emoji").innerHTML = "&#128071;";
    }
    else if(results[0].label == "Pointing Up")
    {
      statement_1 = "She is pointing up towards the aeroplane";
      document.getElementById("update_emoji").innerHTML = "&#128070;";
    }
    else if(results[0].label == "Pointing Right")
    {
      statement_1 = "He is pointing to the right of the mirror";
      document.getElementById("update_emoji").innerHTML = "&#128073;";
    }
    else if(results[0].label == "Pointing Left")
    {
      statement_1 = "She is pointing to the left of the playground";
      document.getElementById("update_emoji").innerHTML = "&#128072;";
    }


    if(results[1].label == "Amazing")
    {
      statement_2 = "This is looking amazing";
      document.getElementById("update_emoji2").innerHTML = "&#128076;";
    }
    else if(results[1].label == "Best")
    {
      statement_2 = "All the best";
      document.getElementById("update_emoji2").innerHTML = "&#128077;";
    }
    else if(results[1].label == "Victory")
    {
      statement_2 = "That was a marvelous victory";
      document.getElementById("update_emoji2").innerHTML = "&#9996;";
    }
    else if(results[1].label == "Worst")
    {
      statement_2 = "Todays exam was the worst one yet";
      document.getElementById("update_emoji2").innerHTML = "&#128078;";
    }
    else if(results[1].label == "Pointing Down")
    {
      statement_2 = "He is pointing down towards the cat";
      document.getElementById("update_emoji2").innerHTML = "&#128071;";
    }
    else if(results[1].label == "Pointing Up")
    {
      statement_2 = "She is pointing up towards the aeroplane";
      document.getElementById("update_emoji2").innerHTML = "&#128070;";
    }
    else if(results[1].label == "Pointing Right")
    {
      statement_2 = "He is pointing to the right of the mirror";
      document.getElementById("update_emoji2").innerHTML = "&#128073;";
    }
    else if(results[1].label == "Pointing Left")
    {
      statement_2 = "She is pointing to the left of the playground";
      document.getElementById("update_emoji2").innerHTML = "&#128072;";
    }

    speak();
  }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data_1 = "The first prediction is " + prediction_1;
    speak_statement_1 = statement_1;

    speak_data_2 = "The second prediction is " + prediction_2;
    speak_statement_2 = statement_2

    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    
    synth.speak(utterThis);

    setTimeout(function()
    {
      var utterStatement = new SpeechSynthesisUtterance(speak_statement_1);
      synth.speak(utterStatement);
    },500);


    setTimeout(function()
    {
      var utterThis2 = new SpeechSynthesisUtterance(speak_data_2);
      synth.speak(utterThis2);
    }, 1000);

    setTimeout(function()
    {
      var utterStatement2 = new SpeechSynthesisUtterance(speak_statement_2);
      synth.speak(utterStatement2);
    },1500);



}
