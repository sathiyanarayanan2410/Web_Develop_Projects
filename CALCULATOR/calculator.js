let out=document.getElementsByName("output");
function display(num)
{
    output.value+=num;
}
function Clear()
{
    output.value="";
}
function DEL()
{
    output.value = output.value.slice(0,-1);
}
function Calculate()
{
    if(output.value=="")
    {
        output.value = "No Input Given";
    }
    else
    {
        output.value = eval(output.value);
    }
}