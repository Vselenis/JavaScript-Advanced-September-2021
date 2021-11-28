function fibo(k, n){
    let fibo_list = [1]
    for (let x = 1; x < k; x++){
      let current_num = 0;
      for (let y = 1; y < n+1; y++) {
        if (x-y >= 0){
        current_num += fibo_list[x-y];
        }
      }
      fibo_list.push(current_num)
    }
    return 
}