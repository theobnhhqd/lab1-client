let stdin = process.openStdin()
stdin.addListener("data", function(str){
    console.log(str.toString().trim())
    stdin.destroy()
});