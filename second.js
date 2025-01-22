function mul(number,subfunc)
{
    return subfunc(number*2,add);
}
 function sub(number,addfunc)
 {
    return addfunc(number - 3);
 }
 function add(number)
 {
    return number +10;
 }
 console.log(mul(5,sub));  