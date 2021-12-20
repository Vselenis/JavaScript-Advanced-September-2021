function solve(arr){
    let juiceFlavors = {};
    let bottles = {};
    arr.forEach(element => {
      let [juice, quantity] = element.split(' => ');
      quantity = Number(quantity)
  
      if(juice in juiceFlavors){
        juiceFlavors[juice] += quantity
      }else {
        juiceFlavors[juice] = quantity
      }
      if (juiceFlavors[juice] >= 1000){
        bottles[juice] = Math.floor(juiceFlavors[juice] / 1000)
        juiceFlavors[juice] += juiceFlavors[juice] % 1000
      }
      
    });
    for (let x in bottles){
      console.log(`${x} => ${bottles[x]}`)
    }
  }
  
  solve(['Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789'])
  
  solve(['Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549']
  )
  