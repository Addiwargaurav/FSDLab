function greet(name,message)
{  
    return message(name,"Hello");
}
function message(name,mess)
{
    console.log(mess+" "+name);
}
  greet("gaurav",message);