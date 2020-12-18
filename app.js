function number(num){
    var screen = document.getElementById("result")
    screen.value += num; 
    }
    
    function clearbutton(){
        var screen = document.getElementById("result")
        screen.value = "";
    }
    function back(){
        var screen = document.getElementById("result")
        screen.value=screen.value.slice(0,-1)
    }
    
    function getresult(){
        var screen = document.getElementById("result")
        screen.value = eval(screen.value);
    }