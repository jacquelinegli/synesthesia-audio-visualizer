const model_url =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let pitch;
let started = false;
let mic;
let button;
let freq = 0;
let audioContext;
let notes = [
  {
    note: "C0",
    freq: 16.35,
  },
  {
    note: "C#0",
    freq: 17.32,
  },
  {
    note: "D0",
    freq: 18.35,
  },
  {
    note: "D#0",
    freq: 19.45,
  },
  {
    note: "E0",
    freq: 20.6,
  },
  {
    note: "F0",
    freq: 21.83,
  },
  {
    note: "F#0",
    freq: 23.12,
  },
  {
    note: "G0",
    freq: 24.5,
  },
  {
    note: "G#0",
    freq: 25.96,
  },
  {
    note: "A0",
    freq: 27.5,
  },
  {
    note: "A#0",
    freq: 29.14,
  },
  {
    note: "B0",
    freq: 30.87,
  },
  {
    note: "C1",
    freq: 32.7,
  },
  {
    note: "C#1",
    freq: 34.65,
  },
  {
    note: "D1",
    freq: 36.71,
  },
  {
    note: "D#1",
    freq: 36.71,
  },
  {
    note: "E1",
    freq: 41.2,
  },
  {
    note: "F1",
    freq: 43.65,
  },
  {
    note: "F#1",
    freq: 46.25,
  },
  {
    note: "G1",
    freq: 49,
  },
  {
    note: "G#1",
    freq: 51.91,
  },
  {
    note: "A1",
    freq: 55,
  },
  {
    note: "A#1",
    freq: 58.27,
  },
  {
    note: "B1",
    freq: 61.74,
  },
  {
    note: "C2",
    freq: 65.41,
  },
  {
    note: "C#2",
    freq: 69.3,
  },
  {
    note: "D2",
    freq: 73.42,
  },
  {
    note: "D#2",
    freq: 77.78,
  },
  {
    note: "E2",
    freq: 82.41,
  },
  {
    note: "F2",
    freq: 87.31,
  },
  {
    note: "F#2",
    freq: 92.5,
  },
  {
    note: "G2",
    freq: 98,
  },
  {
    note: "G#2",
    freq: 103.83,
  },
  {
    note: "A2",
    freq: 110,
  },
  {
    note: "A#2",
    freq: 116.54,
  },
  {
    note: "B2",
    freq: 123.47,
  },
  {
    note: "C3",
    freq: 130.81,
  },
  {
    note: "C#3",
    freq: 138.59,
  },
  {
    note: "D3",
    freq: 146.83,
  },
  {
    note: "D#3",
    freq: 155.56,
  },
  {
    note: "E3",
    freq: 164.81,
  },
  {
    note: "F3",
    freq: 174.61,
  },
  {
    note: "F#3",
    freq: 185,
  },
  {
    note: "G3",
    freq: 196,
  },
  {
    note: "G#3",
    freq: 207.65,
  },
  {
    note: "A3",
    freq: 220,
  },
  {
    note: "A#3",
    freq: 233.08,
  },
  {
    note: "B3",
    freq: 246.94,
  },
  {
    note: "C4",
    freq: 261.63,
  },
  {
    note: "C#4",
    freq: 277.18,
  },
  {
    note: "D4",
    freq: 293.66,
  },
  {
    note: "D#4",
    freq: 311.13,
  },
  {
    note: "E4",
    freq: 329.63,
  },
  {
    note: "F4",
    freq: 349.23,
  },
  {
    note: "F#4",
    freq: 369.99,
  },
  {
    note: "G4",
    freq: 392,
  },
  {
    note: "G#4",
    freq: 415.3,
  },
  {
    note: "A4",
    freq: 440,
  },
  {
    note: "A#4",
    freq: 466.16,
  },
  {
    note: "B4",
    freq: 493.88,
  },
  {
    note: "C5",
    freq: 523.25,
  },
  {
    note: "C#5",
    freq: 554.37,
  },
  {
    note: "D5",
    freq: 587.33,
  },
  {
    note: "D#5",
    freq: 622.25,
  },
  {
    note: "E5",
    freq: 659.25,
  },
  {
    note: "F5",
    freq: 698.46,
  },
  {
    note: "F#5",
    freq: 739.99,
  },
  {
    note: "G5",
    freq: 783.99,
  },
  {
    note: "G#5",
    freq: 830.61,
  },
  {
    note: "A5",
    freq: 880,
  },
  {
    note: "A#5",
    freq: 932.33,
  },
  {
    note: "B5",
    freq: 987.77,
  },
  {
    note: "C6",
    freq: 1046.5,
  },
  {
    note: "C#6",
    freq: 1108.73,
  },
  {
    note: "D6",
    freq: 1174.66,
  },
  {
    note: "D#6",
    freq: 1244.51,
  },
  {
    note: "E6",
    freq: 1318.51,
  },
  {
    note: "F6",
    freq: 1396.91,
  },
  {
    note: "F#6",
    freq: 1479.98,
  },
  {
    note: "G6",
    freq: 1567.98,
  },
  {
    note: "G#6",
    freq: 1661.22,
  },
  {
    note: "A6",
    freq: 1760,
  },
  {
    note: "A#6",
    freq: 1864.66,
  },
  {
    note: "B6",
    freq: 1975.53,
  },
  {
    note: "C7",
    freq: 2093,
  },
  {
    note: "C#7",
    freq: 2217.46,
  },
  {
    note: "D7",
    freq: 2349.32,
  },
  {
    note: "D#7",
    freq: 2489.02,
  },
  {
    note: "E7",
    freq: 2637.02,
  },
  {
    note: "F7",
    freq: 2793.83,
  },
  {
    note: "F#7",
    freq: 2959.96,
  },
  {
    note: "G7",
    freq: 3135.96,
  },
  {
    note: "G#7",
    freq: 3322.44,
  },
  {
    note: "A7",
    freq: 3520,
  },
  {
    note: "A#7",
    freq: 3729.31,
  },
  {
    note: "B7",
    freq: 3951.07,
  },
  {
    note: "C8",
    freq: 4186.01,
  },
  {
    note: "C#8",
    freq: 4434.92,
  },
  {
    note: "D8",
    freq: 4698.63,
  },
  {
    note: "D#8",
    freq: 4978.03,
  },
  {
    note: "E8",
    freq: 5274.04,
  },
  {
    note: "F8",
    freq: 5587.65,
  },
  {
    note: "F#8",
    freq: 5919.91,
  },
  {
    note: "G8",
    freq: 6271.93,
  },
  {
    note: "G#8",
    freq: 6644.88,
  },
  {
    note: "A8",
    freq: 7040,
  },
  {
    note: "A#8",
    freq: 7458.62,
  },
  {
    note: "B8",
    freq: 7902.13,
  }
];

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#visualizer-canvas");
  noLoop();
}

$(document).ready(function () {
  $(document).click(function () {
    startLoop();
  });
});

function goToHome() {
  if (history.replaceState) {
    history.replaceState(null, null, '/');
  } else {
    location.replace('/');
  }
}

// starts the synesthetic visualization
function startLoop() {
  // gets audio context after user gestures on the screen
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
  // if (mic.getLevel() > 0.03) {
  if (!started) {
    started = true;
    audioContext.resume();
    loop();
  } else {
    started = false;
    audioContext.suspend();
    noLoop();
  }
  // }
}

function modelLoaded() {
  pitch.getPitch(gotPitch);
}

function gotPitch(error, frequency) {
  if (error) {
    console.error(error);
  } else {
    if (frequency) {
      freq = frequency;
    }
    pitch.getPitch(gotPitch);
  }
}

function listening() {
  pitch = ml5.pitchDetection(model_url, audioContext, mic.stream, modelLoaded);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 20);

  if (started) {
    let closestNote = "";
    let color;
    let recordDiff = Infinity;
    for (let i = 0; i < notes.length; i++) {
      // audio frequency - all of the notes frequencies
      let diff = freq - notes[i].freq;
      if (abs(diff) < abs(recordDiff)) {
        closestNote = notes[i];
        recordDiff = diff;
      }
    }

    let currentNote = "";
    // check if the second letter is NOT a number
    // eg C#4 or F#4
    if (isNaN(closestNote.note.substring(1, 2))) {
      currentNote = closestNote.note.substring(0, 2);
    } else {
      // eg C4 or F4
      currentNote = closestNote.note.substring(0, 1);
    }

    // console.log(freq);

    // assigning color
    switch (currentNote) {
      case "C":
        fill("red");
        break;
      case "C#":
        fill("purple");
        break;
      case "D":
        fill("yellow");
        break;
      case "D#":
        fill("magenta");
        break;
      case "E":
        fill(147, 233, 190);
        break;
      case "F":
        fill(153, 0, 0);
        break;
      case "F#":
        fill("blue");
        break;
      case "G":
        fill("orange");
        break;
      case "G#":
        fill(255, 0, 127);
        break;
      case "A":
        fill(204, 255, 204);
        break;
      case "A#":
        fill(102, 0, 51);
        break;
      case "B":
        fill(153, 204, 255);
        break;
      default:
        fill(random(255));
    }

    if (freq == 0) {
      noFill();
    }
    noStroke();
    rect(random(width), 0, 5, height);
  }
}
