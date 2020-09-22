/**
 *  for of lặp các key có trong mảng(array)
 */
var students=[
  { name: 'Long', age:18},
  { name: 'Mi', age: 17}
]

for(var key in students){
 console.log(key, students[key])
}