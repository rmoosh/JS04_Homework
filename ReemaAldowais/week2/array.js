
let q1 = ["image1.png", "image2.png", "image3.png"];
console.log(q1);


let q2 = q1.slice(0,1);
    console.log(q2);

    let q3 = q1.length;
    console.log(q3);

    let q4 = q1.slice(2);
    console.log(q4);


    let q5 = [1, 2, 3, 4];
    let q5M = q5.map(a => a + 1);
     console.log(q5M);

     
     let q6 = q5M.reduce((a, b) => a + b, 0) / q5M.length;
  console.log(q6);

