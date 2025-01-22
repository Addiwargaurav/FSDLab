function delayedMessage(delay,printmessage)
{
    setTimeout(printmessage,delay);
}
function printmessage()
{
    console.log("Hello");
}
printmessage();
delayedMessage(1000,printmessage);