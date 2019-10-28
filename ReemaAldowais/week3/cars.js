const Car = {
    make: "toyota",
    model: "rush",
    year: "2020",
    drive: function() {
      console.log(`${this.make} is driving.`);
    },
    brake: function() {
      console.log(`${this.make} make breaking.`);
    },
    park: function() {
      console.log(`${this.make}  make park.`);
    }
  }
  Car.brake();
  Car.drive();
  Car.park();
  
  
  console.log("-----------------------------------");
  const PetOwner = {
    name: "Reema Aldowais",
    address: "Saudi Arabia- Riyadh ",
    numberOfPets: 1
  }
  
  console.log(PetOwner);

  console.log("-----------------------------------");

  const SomePet = {
    name: "katy",
    species: "cat",
    breed: "siames",
    noise: "meow",
    
  }
  console.log(`  the kind of  animal is ${ SomePet.species} and your name is ${SomePet.name} , it is a ${SomePet.breed} and make noise ${SomePet.noise}`);
  
  
  