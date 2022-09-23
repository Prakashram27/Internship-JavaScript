let miles = [5,12,75,3,7];
let A = 0; 

// Addup all numbers using for loop
for (i=0;i<miles.length;i++)
    A += miles[i];
    console.log(A)

// addup all numbers using reducer: Array.reduce() method
const R = (accumulator,value) => accumulator+value;
const result = miles.reduce(R)
console.log(result)

// let parent = document.getElementById("parent") 
// for (i=0;i<10;i++){
//     let element = document.createElement("div");
//     element.innerHTML = "created elements";
//     parent.appendChild(element)
// }


// Applying the Array entries method
var arr = ["HTML", "CSS", "JS",
"Bootstrap", "PHP"];
var seqn = arr.entries();
console.log("Applying the Array entries method:"
    + "<br>");

for (var x of seqn) {
console.log(x + "</br>");
}

// for loop

// // for-loop with an empty body
// for(initialize;condition; increment);
// //Iterate over a single statement
// for(initialize;condition; increment) single_statement;
// // Iterate over multiple statement
// for(initialize;condition; increment){
//     multiple;
//     statement;
// } 

// let counter = 0;
// function inc(){ counter++; }

// for(let i=0;i<10;i++,inc())
// console.log(counter)


// let count = 0;
// for(let i=0;i<10;i++)
//   count++
// console.log(count) // 10

      // for loop and let scope //

// for (var i=0;i<10;i++) let x = i;

// for (var i=0;i<10;i++) {let x = i};

       // nested for loop // 

for (let y=0;y<2;y++)
    for(x=0;x<2;x++)
    console.log(x,y)

    let text = "";
    for (let i = 0; i < 5; i++) {
      if (i === 3) continue;
      text += i;
    }
    console.log(text)

    for (let i=0;i<10;i++){
        console.log("loop");
        break;
    }
    // costum break //
    for (let i=0;;i++){
        console.log("loop,i =" +i);
        if(i>1)
        break;
    }

    var c= 0;

    mark : for(i=0;i<5;i++){
        inner: for(j=0;j<5;j++){
            console.log(j)
            c++;
            if(i==2)
            // break mark;
            break inner;
            
        }
    }
    console.log(c) //21

    block : {
        console.log("before")
        break block;
        console.log("after")
    }

    // generator function // 

    function* generator(){
        yield 1;
        yield 2;
        yield 3;
    }
    for (let value of generator())
    console.log(value)

    let gen = generator();
    console.log(gen.next.value)
    console.log(gen.next.value)
    console.log(gen.next.value)

let string = "Text";

for(let value of string){
    console.log(value)
}

let arr1 = [1,2,3,4];
for(let value of arr1){
    console.log(value)
}




    












