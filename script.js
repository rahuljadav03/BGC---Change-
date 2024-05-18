const btns = document.querySelectorAll('.button');
const body =  document.querySelector('body');

btns.forEach(function(btn){
    // console.log(btn); // this is shows console with nodelist.
    btn.addEventListener('click',function(e){
        // console.log(e); // e is button
        // console.log(e.target); // target whichbutton you are clicked...

        if (e.target.id==="blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id==="gray") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id==="purple") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id==="yellow") {
            body.style.backgroundColor = e.target.id;
        }
    });
    
});