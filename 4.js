function fetchDataWithCallback(callback)
{
    setTimeout(callback,1000);
}
function callb(x)
{
    try{
        if(x>5)
        {
            throw"Too big";
        }
        console.log("Successfully received")
    }
    catch{
        console.log("Error");
    }

}
callb(10);
fetchDataWithCallback(callb);