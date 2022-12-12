var numberofdrumbuttons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofdrumbuttons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",  function(){
    var button=this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
    }
    );
    //calling the function loads the event listener as soon as we load the site
}                                                                             //so mentioning function waits for click action to happen 
                                                                                /*addeventlistener takes two inputs first input specifies
                                                                                 the action and 2nd specifies what to do on that action */
document.addEventListener("keypress", function(event)
{
    makeSound(event.key)
    buttonAnimation(event.key);
});
function makeSound(key)
{
    switch(key)
    {
        case"w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case"a":
        var tom2 =new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case"s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case"d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case"k":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case"j":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        case"l":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        default:
        console.log(button);
    }
}
function buttonAnimation(currentkey){
let activebutton =document.querySelector("."+currentkey)
    activebutton.classList.add("pressed");
    //to remove the pressed after we have pressed the key we have a fucntion called settimeout which takes in 3 parameters 
    //the function we want to perform, after what time, any addtional parameters.
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    }, 100);
}


