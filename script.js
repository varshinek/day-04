//1.Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

//ANONYMOUS FUNCTION
var a = [1,2,3,4,5,6,7,8,9,10];
var odd = function(res) {
  var m = [],j = 0;
  for(var i = 0;i<res.length;i++)
  {
    if(res[i]%2 != 0)
    {
      m[j] = res[i];
      j++;
    }
  }
  return m;
}
console.log(odd(a));

//IIFE FUNCTION
(function odd(){
  var m = [],j = 0;
  for(var i = 0;i<a.length;i++)
  {
    if(a[i]%2 != 0)
    {
      m[j] = a[i];
      j++;
    }
  }
  console.log(m);
})()

/******************************************************************************************************************************************************************/

//b. Convert all the strings to title caps in a string array

//ANONYMOUS FUNCTION
var convert = function (array) {
    var titleCaps = [];
    for (var i = 0; i < array.length; i++) {
        titleCaps += array[i][0].toUpperCase() + array[i].slice(1);
    } console.log(titleCaps);
}
convert(["bhoomi ", "vibhoo ", "swetha ", "shine"]);

//IIFE FUNCTION
var arr = ["bhoomi ", "vibhoo ", "swetha ", "shine"];
(function conver(){
    var titleCaps = [];
    for (var i = 0; i < arr.length; i++) 
    {
        titleCaps += arr[i][0].toUpperCase() + arr[i].slice(1);
    } console.log(titleCaps);
})()

/************************************************************************************************************************************************************************* */

//c. Sum of all numbers in an array

//ANONYMOUS FUNCTION
var sum = function(res){
    var temp = 0;
    for(var i = 0;i<res.length;i++)
    {
        temp += res[i];
    }
    return temp;
}
console.log(sum(a));

//IIFE FUNCTION
(function sum(){
  var temp = 0;
  for(var i = 0;i<a.length;i++)
  {
      temp += a[i];
  }
console.log(temp);  
})()

/******************************************************************************************************************************************************************************/

//d. Return all the prime numbers in an array

//ANONYMOUS FUNCTION
var prime = function(res){
    var m = [];
    var k = 0, count;
    for(var i = 0;i<res.length;i++)
    {
        count = 1;
        for(var j = 1;j<=i;j++)
        {
            if(res[i]%j === 0)
            {
                count++;
            }
        }
        if(count == 2)
        {
            m[k] = res[i];
            k++;
        }
    }
    return m;

}
console.log(prime(a));

//IIFE FUNCTION
(function prime(){
  var m = [];
  var k = 0, count;
  for(var i = 0;i<a.length;i++)
  {
      count = 1;
      for(var j = 1;j<=i;j++)
      {
          if(a[i]%j === 0)
          {
              count++;
          }
      }
      if(count == 2)
      {
          m[k] = a[i];
          k++;
      }
  }
console.log(m);
})()

/***************************************************************************************************************************************************************************** */

//e.Return all the palindromes in an array

//ANONYMOUS FUNCTION
var arr = ["abc", " car" , "ada" , "racecar" , "cool" ];
var tem = [];
var s,m=0;
var palin = function(res)
{
    for(var i = 0;i<res.length;i++)
    {
      s = res[i].split("").reverse().join("");
      if(res[i] === s)
      {
        tem[m] = s;
        m++;
      }
    }
  return tem;
}
console.log(palin(arr));

//IIFE FUNCTION
var tem = [];
var s,m=0;
(function palin()
{
    for(var i = 0;i<arr.length;i++)
    {
      s = arr[i].split("").reverse().join("");
      if(arr[i] === s)
      {
        tem[m] = s;
        m++;
      }
    }
  console.log(tem);
})()

/*************************************************************************************************************************************************************************/

//f. Return median of two sorted arrays of the same size.

//ANONYMOUS FUNCTION
var a1 = [1, 12, 15, 26, 38];
var a2 = [2, 13, 17, 30, 45];
var arr = [...a1,...a2];
function compareNumbers(a, b) {
  return a - b;
}
arr.sort(compareNumbers);

var n = arr.length/2;
var median = (arr[n-1] + arr[n]) / 2;
console.log(median);

/*****************************************************************************************************************************************************************************/

//g. Remove duplicates from an array

//ANONYMOUS FUNCTION
var arr = [2, 3, 6, 7, 2, 9, 3];
console.log(new Set(arr));

/*****************************************************************************************************************************************************************************/

//h. Rotate an array by k times

//ANONYMOUS FUNCTION
var rotate = function(res)
{
  var n,k,count;
  k = 4;
  n = res.slice(k,res.length);
  count = n.length;
  for(var i = 0;i<k;i++)
  {
    n[count] = res[i];
    count += 1;
  }
  return n;
}
console.log(rotate(a));

//IIFE FUNCTION
(function rotate()
{
  var n,k,count;
  k = 4;
  n = a.slice(k,a.length);
  count = n.length;
  for(var i = 0;i<k;i++)
  {
    n[count] = a[i];
    count += 1;
  }
  console.log(n);
})()

/****************************************************************************************************************************************************************************/

//Do the below programs in arrow functions.
//a. Print odd numbers in an array

var odd = (res) => {
  var m = [],j = 0;
  for(var i = 0;i<res.length;i++)
  {
    if(res[i]%2 != 0)
    {
      m[j] = res[i];
      j++;
    }
  }
  return m;
}
console.log(odd(a));

/*****************************************************************************************************************************************************************************/

//b. Convert all the strings to title caps in a string array

var arr = ["bhoomi ", "vibhoo ", "swetha ", "shine"];
var convert = (array) => {
    var titleCaps = [];
    for (var i = 0; i < array.length; i++) {
        titleCaps += array[i][0].toUpperCase() + array[i].slice(1);
    } 
    return titleCaps;
}
console.log(convert(arr));

/************************************************************************************************************************************************************************* */

//c. Sum of all numbers in an array

var sum = (res) => {
  var temp = 0;
  for(var i = 0;i<res.length;i++)
  {
      temp += res[i];
  }
  return temp;
}
console.log(sum(a));

/*****************************************************************************************************************************************************************************/

//d. Return all the prime numbers in an array

var prime = (res) => {
  var m = [];
  var k = 0, count;
  for(var i = 0;i<res.length;i++)
  {
      count = 1;
      for(var j = 1;j<=i;j++)
      {
          if(res[i]%j === 0)
          {
              count++;
          }
      }
      if(count == 2)
      {
          m[k] = res[i];
          k++;
      }
  }
  return m;

}
console.log(prime(a));

/****************************************************************************************************************************************************************************/

//e. Return all the palindromes in an array

var arr = ["abc", " car" , "ada" , "racecar" , "cool" ];
var tem = [];
var s,m=0;
var palin = (res) => {
    for(var i = 0;i<res.length;i++)
    {
      s = res[i].split("").reverse().join("");
      if(res[i] === s)
      {
        tem[m] = s;
        m++;
      }
    }
  return tem;
}
console.log(palin(arr));

/*****************************************************************************************************************************************************************************/