var utils = (function () {

var shipConfig = [
  {
    x: 50,
    y: 50,
    angle: 0,
    spriteIndexArr: [2],
    omega: 3,
    speed: 3,
    firingDelay: 1, // no of frames before next shot can be fired
    ammoSpec: {
      speed: 6, // multiples of 3
      size: 64, // ammo size in px
      life: 40, // ammo life in frames
      damage: 10 // damage dealt
    }
  },

  {
    x: 750,
    y: 300,
    angle: 180,
    spriteIndexArr: [3],
    omega: 3,
    speed: 3,
    firingDelay: 15,
    ammoSpec: {
      speed: 9, // multiples of 3
      size: 32,
      life: 80,
      damage: 5
    }
  }
];

function bindKeys(playerOne, playerTwo) {
  // bind keys for playerOne
  $(document).on(
    'keydown',
    function(e) {
      if (e.keyCode === 87) playerOne.MOVE_FORWARD = true; // w
      if (e.keyCode === 83) playerOne.MOVE_BACKWARD = true; // s
      if (e.keyCode === 68) playerOne.ROTATE_CLOCK = true; // d
      if (e.keyCode === 65) playerOne.ROTATE_ANTI = true; // a
      if (e.keyCode === 81) playerOne.STRAFE_LEFT = true; // q
      if (e.keyCode === 69) playerOne.STRAFE_RIGHT = true; // e
      if (e.keyCode === 32) playerOne.fireAmmo(); // spacebar
    });
  $(document).on(
    'keyup',
    function(e) {
      if (e.keyCode === 87) playerOne.MOVE_FORWARD = false; // w
      if (e.keyCode === 83) playerOne.MOVE_BACKWARD = false; // s
      if (e.keyCode === 68) playerOne.ROTATE_CLOCK = false; // d
      if (e.keyCode === 65) playerOne.ROTATE_ANTI = false; // a
      if (e.keyCode === 81) playerOne.STRAFE_LEFT = false; // q
      if (e.keyCode === 69) playerOne.STRAFE_RIGHT = false; // e
    });
  // bind keys for playerTwo
  $(document).on(
    'keydown',
    function(e) {
      if (e.keyCode === 73) playerTwo.MOVE_FORWARD = true; // i
      if (e.keyCode === 75) playerTwo.MOVE_BACKWARD = true; // k
      if (e.keyCode === 76) playerTwo.ROTATE_CLOCK = true; // l
      if (e.keyCode === 74) playerTwo.ROTATE_ANTI = true; // j
      if (e.keyCode === 85) playerTwo.STRAFE_LEFT = true; // u
      if (e.keyCode === 79) playerTwo.STRAFE_RIGHT = true; // o
      if (e.keyCode === 8) playerTwo.fireAmmo(); // delete
    });
  $(document).on(
    'keyup',
    function(e) {
      if (e.keyCode === 73) playerTwo.MOVE_FORWARD = false; // w
      if (e.keyCode === 75) playerTwo.MOVE_BACKWARD = false; // s
      if (e.keyCode === 76) playerTwo.ROTATE_CLOCK = false; // d
      if (e.keyCode === 74) playerTwo.ROTATE_ANTI = false; // a
      if (e.keyCode === 85) playerTwo.STRAFE_LEFT = false; // q
      if (e.keyCode === 79) playerTwo.STRAFE_RIGHT = false; // e
    });
}

function hasCollided(object1, object2) {
  var
    left1 = object1.x,
    left2 = object2.x,
    right1 = object1.x + object1.width,
    right2 = object2.x + object2.width,
    top1 = object1.y,
    top2 = object2.y,
    bottom1 = object1.y + object1.height,
    bottom2 = object2.y + object2.height;

    if (bottom1 < top2) return(false);
    if (top1 > bottom2) return(false);
    if (right1 < left2) return(false);
    if (left1 > right2) return(false);
    return(true);
}

return {
  bindKeys: bindKeys,
  hasCollided: hasCollided,
  shipConfig: shipConfig
}

}());


// http://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked

// <div class="play">Play</div>

// <div class="pause">Stop</div>

// <script>
//     $(document).ready(function() {
//         var audioElement = document.createElement('audio');
//         audioElement.setAttribute('src', 'audio.mp3');
//         audioElement.setAttribute('autoplay', 'autoplay');
//         //audioElement.load()

//         $.get();

//         audioElement.addEventListener("load", function() {
//             audioElement.play();
//         }, true);

//         $('.play').click(function() {
//             audioElement.play();
//         });

//         $('.pause').click(function() {
//             audioElement.pause();
//         });
//     });
// </script>