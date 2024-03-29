// Enhanced laptop object: Construct and object for a laptop including properties make model, year, and a method describe()that logs a sentence about the laptop.
const laptop: {make:string;model:string; year: number; describe: any} = {
    make: "Apple",
    model:"MacBook Pro",
    year:2022,
    describe: function (){
        return `Make:${laptop.make}\nModel: ${laptop.model}\nYear:${laptop.year}`;

    },
};
console.log(laptop.describe());