let d = document.querySelector("#decr");
let res = document.querySelector("#reset");
let inn = document.querySelector("#incr");
let v = document.querySelector("#val");

d.addEventListener('click',function()
{
    v.innerHTML = parseInt(v.innerHTML) - 1;
});
res.addEventListener('click',function()
{
    v.innerHTML = 0;
});
inn.addEventListener('click',function()
{
    v.innerHTML = parseInt(v.innerHTML) + 1;
});