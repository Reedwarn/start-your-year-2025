type Person = {
  age: number;
  name: {
    first: string;
    last: string;
    updateFirstName: Function;
  };
};

let person: Person = {
  age: 20,
  name: {
    first: "John",
    last: "River",
    updateFirstName: function (x: string) {
      this.first = x;
    },
  },
};
console.log(person);
person.name.updateFirstName("Jonathan");
console.log(person);
