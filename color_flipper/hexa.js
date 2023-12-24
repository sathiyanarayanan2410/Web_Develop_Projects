const hexaval = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];

const btn = document.getElementById('btn');
const select = document.querySelector('.color-value');
btn.addEventListener('click',function()
{
    let col = getRandomHexa();
    document.body.style.backgroundColor = col;
    select.textContent = col;
});

function getRandomHexa()
{
    let color = "#";
    for(let i=0;i<6;i++)
    {
        color+= hexaval[Math.floor(Math.random()*hexaval.length)];
    }
    return color;
}