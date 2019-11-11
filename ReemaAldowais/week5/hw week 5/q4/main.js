    json = (require('./data')); 
     
    var obj = JSON.parse(json);
    
    

    

     let logData = function() {
         
          console.log(obj);
     }
         logData();

     let logNames = function() {
          for (var i = 0; i < json.length; i++) {
          let x=( obj.people[i].name);
          return x;
     }}

     console.log(logNames());


    
     let logNameEyes = function() {
          for (let i = 0; i < json.length; i++) {
            let z=obj.people[i].eye_color;
            return z;
     }}

     console.log(logNameEyes());
     

     
     let logByMass = function() {
          for (let i = 0; i < json.length; i++) {
          let c=obj.people[i].mass;
          if(json[i].mass > 75){
            
               console.log(logNames());
          }

          return c;

         

     }}
     console.log(logByMass());

     
     
    