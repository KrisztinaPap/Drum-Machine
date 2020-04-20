var sounds = [
    {
      key: "Q",
      id: "heater1",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      key: "W",
      id: "heater2",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      key: "E",
      id: "heater3",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      key: "A",
      id: "heater4",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      key: "S",
      id: "heater6",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      key: "D",
      id: "disc",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      key: "Z",
      id: "kick",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      key: "X",
      id: "kick2",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      key: "C",
      id: "cev",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  
  function createButton() {
    for (var i = 0; i < sounds.length; i++) {
        document.getElementById("drum-machine").innerHTML += "<div class='drum-pad btn btn-lg btn-danger' id='" + sounds[i].id + "' onclick='playAudio(" + i + ")'><audio src='" + sounds[i].sound + "' class='clip' id='" + sounds[i].key + "'></audio>" + sounds[i].key + "</div>";
       
    };
  };

  createButton();

  function playAudio(x) {
    var audio = new Audio(sounds[x].sound);
    audio.play();
  };


