let colors = ['red','green','yellow','blueviolet','burlywood','chartreuse','darkgoldenrod','forestgreen','crimson','darkorange'];


let btn = document.getElementById('btn');
let col = document.querySelector('.color-value');

btn.addEventListener('click',function()
{
    let i = getrandnum();
    document.body.style.backgroundColor  = colors[i];
    col.innerHTML = " \" " + colors[i] + " \" ";
});

function getrandnum()
{
    return Math.floor(Math.random()*colors.length);
}