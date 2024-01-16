const gradientBackgrounds = [
  "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  "linear-gradient(225deg, #093857 0%, #3f4499 33%, #ae0a0a 66%, #daff00 100%)",
  "linear-gradient(90deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  "linear-gradient(90deg, #00DBDE 20%, #FC00FF 100%)",
  "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
  "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
  "linear-gradient(298deg, #FF3CAC 0%, #2aebd2 50%, #2B86C5 100%)",
  "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",
];

let backgroundIndex = 0;

const speakButton = document.querySelector( "button" );

const voiceDropdown  = document.querySelector( "select" );

const speech  = new SpeechSynthesisUtterance();

let voicesArray = [];

window.speechSynthesis.getVoices();

window.addEventListener("load", function () {
  voicesArray = window.speechSynthesis.getVoices();
  for ( let i = 0; i < voicesArray.length; i++ ) {
    let option = document.createElement( "option" );
    option.text = voicesArray[i].name;
    voiceDropdown .appendChild( option );
  }
});

voiceDropdown .addEventListener("change", function () {
  speech .voice = voicesArray [voiceDropdown .selectedIndex] ;
  if ( backgroundIndex >= gradientBackgrounds.length ) backgroundIndex = 0;
  document.body.style.background = gradientBackgrounds[ backgroundIndex++ ];
});

speakButton.addEventListener("click", function () {
  speech .text = document.querySelector( ".input_section" ).value || "Enter some text to Say!";
  window.speechSynthesis.speak( speech );
});
