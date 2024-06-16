function test(cb) {
cb()
    return true
}


function mycallback()
{
   
    console.log("Diki")
}
function mycallback2()
{
   
    console.log("Hello Diki")
}

test(mycallback2)