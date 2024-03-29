// Q47:Advance array 
// Destructing:Given an array of objects representing different laptops, each with reperesenting different laptop, each with properties make, model, and year, use array destructing to assign the first and second laptops to variables. Then log these variables.
const laptops: any = [
    {
        make: "Microsoft",
        model:"surface Laptop 4",
        year: 2022,
    },
    { 
        make:"Apple",
        Model: "MAcBook Pro",
        year: 2022,
    },
 {
    make: "HP",
    model:"HP Pro",
    year: 2021    
},   
]

const[laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);