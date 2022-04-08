function findSolution(target){

  const multiply1 = Number(prompt('Enter first number'));
  const multiply2 = Number(prompt('Enter second number'));
  const plus = Number(prompt('Enter third number'));

  if(isNaN(multiply1)){
      alert('Please enter the number');
  } else if(isNaN(multiply2)){
      alert('Please enter the number');
  } else if(isNaN(plus)){
      alert('Please enter the number');
  } else{
          function find(current, history){
          if(current === target){
              return history;
          } else if(current > target){
              return null;
          } else{
              return find(current * multiply1,`${history} * ${multiply1}`) ||
                     find(current * multiply2, `${history} * ${multiply2}`) ||
                     find(current + plus, `(${history} + ${plus})`);
          }
      }
      return find(1, '1');
  }
  
}
console.log(findSolution(34));