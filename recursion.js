function sumToOne(n) {
  let sum = 0;
  // for (let i = n; i >= 1; i--) {
  //   sum += i;
  // }
  // return sum;
  if (n > 1){
  	return n + sumToOne(n-1);

  } else{
  	return 1;
  }
}

console.log(sumToOne(4));