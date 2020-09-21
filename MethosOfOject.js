
 var myDog = {
   name: 'Đần',
   weight: 54,
   age:16,
   bark: function(){
     console.log('Meo meo')
   },
   eat: function(bone){
     this.weight= this.weight+bone.weight
     return this
   }
 }
 var bone = {
   weight:55
 }
 console.log('weight of mydog after eat bone :'+myDog.eat(bone).weight+'kg')