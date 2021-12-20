function solve(arr){
    let carBrands = new Map;
  
    arr.forEach(element => {
      let [brand, model, produced] = element.split(' | ');
      produced = Number(produced);
    
    
      if (carBrands.has(brand)){
        let carBrand = carBrands.get(brand);
  
        if (carBrand.has(model)){
          let carModel = carBrand.get(model);
          carModel += produced;
          carBrand.set(model, carModel);
        } else {
          carBrand.set(model, produced);
        }
      }else {
        const brands = new Map();
        brands.set(model, produced);
        carBrands.set(brand, brands);
      }
    });
    
    for(let key of carBrands.keys()){
      console.log(key);
      const brand = carBrands.get(key)
      for (let [x,y] of brand){
        console.log(`###${x} -> ${y}`)
      }
    }
  }
  
  solve(['Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10'])
  