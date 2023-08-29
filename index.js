// const submit = document.getElementById('submit');
// const rectangle = document.getElementById('rectangle');


const changecolorbutton =document.getElementById('changecolorbutton');

changecolorbutton.addEventListener('click', function onClick(even){
    const rectangle = document.getElementById('rectangle');
    const backgroundcolor = rectangle.style.backgroundColor; 

    if(backgroundcolor ==='blue'){
        rectangle.style.backgroundColor='red';
    }else{
        rectangle.style.backgroundColor='blue';
    }
})


// document.getElementById("button").innerHTML = rectangle;
// const colors=['blue','green'];

// let changerectanglecolor = function () {
//     rectangle.style.background = 'blue';
// };


// submit.addEventListener('click',changerectanglecolor);



// const points = new fruits[];
// document.getElementById("h1").innerHTML = points

// let mytext = "this is my twextv"
// letmynuwe = 7787