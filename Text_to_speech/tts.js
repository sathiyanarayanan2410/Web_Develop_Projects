const bg = [
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    "linear-gradient(225deg, #093857 0%, #3f4499 33%, #ae0a0a 66%, #daff00 100%)",
    "linear-gradient(90deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    "linear-gradient(90deg, #00DBDE 20%, #FC00FF 100%)",
    "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
    "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
    "linear-gradient(298deg, #FF3CAC 0%, #2aebd2 50%, #2B86C5 100%)",
    "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)"
];

let i = 0;

const butt = document.querySelector("button");

const dropd = document.querySelector("select");

const audio = new SpeechSynthesisUtterance();

let arr = [];

window.addEventListener('load',function()
{
    let newdiv = document.createElement("div");
    newdiv.text = "Preferred Browser Edge for more language support";
});

window.speechSynthesis.onvoiceschanged = function()
{
    arr = window.speechSynthesis.getVoices();
    for(let i=0;i<arr.length;i++)
    {
        let option = document.createElement("option");
        option.text = arr[i].name;
        dropd.appendChild(option);  
    }
};

dropd.addEventListener('change',function()
{
    audio.voice = arr[dropd.selectedIndex];
    if(i>=bg.length) i=0;
    document.body.style.background = bg[i++];
});

butt.addEventListener('click',function()
{
    audio.text = document.querySelector(".input_section").value;
    window.speechSynthesis.speak(audio);
});

