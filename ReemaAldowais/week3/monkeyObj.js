  var MonkeyObj={
    name: 'mon', species: 'gorila', foodsEaten:'coconut',

    eatsomething: function (){
        console.log(this .foodsEaten);},

        introduce: function (name,species,foodsEaten) {

            console.log(Object.keys(MonkeyObj));}
    
};   

var monkey2= Object.create(MonkeyObj);
monkey2.name='mand';
monkey2.species='mandrill'
monkey2.foodsEaten='nuts';
monkey2.eatsomething();

 var monkey3=Object.create(MonkeyObj);
 monkey3.name='tail';
 monkey3.species="lionTailed"
monkey3.foodsEaten='banana';
monkey3.eatsomething();

console.log(Object.keys(MonkeyObj));

  
    
  
  
  
  
  
  
  
  
    
    
    
    
     