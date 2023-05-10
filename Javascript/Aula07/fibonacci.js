function fibonacci(num) {
    if (num <= 0) {
      return [];
    } else if (num === 1) {
      return [0];
    } else if (num === 2) {
      return [0, 1];
    } else {
      let fib = [0, 1];
      for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;
    }
  }
  
  console.log(fibonacci(20));

