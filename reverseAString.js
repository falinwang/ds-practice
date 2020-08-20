// Create a function that reverses a string:
// 'Hi My name is Roy'
// 'yoR si eman yM iH'

function reverseString(str){
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'input not valid'
  }
  // reverse the array
  let reversedArray = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--){
    reversedArray.push(str[i])
  }
  // array to string
  return reversedArray.join(''); 
}
console.log(reverseString('Hi My name is Roy'));
// 10 mins


function reverse2(str){
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'input not valid'
  }
  return str.split('').reverse().join('')
}
console.log(reverse2("12345678"))


const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3("1234567890"))


const reverse4 = str => [...str].reverse().join('');
console.log(reverse4("098767890987654321"))
