function solve(arr){
    arr.sort();
    let catalogue = {};
    let alpha = '';
    for (let x = 0; x < arr.length; x++){
      let [product, price] = arr[x].split(' : ');
      let alpha = product[0];
      if (!catalogue[alpha]){
        catalogue[alpha] = []
      }
      catalogue[alpha].push({product, price: Number(price)})
    }
    let result = [];
    for (const letter in catalogue){
      let values = catalogue[letter].map(entry => `  ${entry.product}: ${entry.price}`);
      let string = `${letter}\n${values.join("\n")}`;
      result.push(string)
    }
    return result.join('\n')
  }
  
  console.log(solve(['Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10']
  ));
  