const laptop1 = {
  brand: "Apple",
  model: "Macbook Air",
  weight: 1.5,
  info: () => {
    return `brand: ${this.brand} | model: ${this.model} | weight: ${this.weight}`;
  },
};

// console.log(laptop1.info());

// const keys = Object.keys(laptop1);
// const values = Object.values(laptop1);
// const entries = Object.entries(laptop1);

// let [, pronoun, , name] = ["Merhaba", "benim", "adım", "Mehmet"];

// console.log(pronoun);

let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" };
let { name: foo } = person;

console.log(foo);

// print = () => {
//     keys.forEach(key => {
//         console.log(key,":", laptop1[key]);
//     });
// }

// entries.forEach(entry => {
//     console.log(entry[0],":",entry[1]);
// });

// console.log(JSON.stringify(laptop1));

// print(laptop1);
