function solve(arr){
    let new_arr = {};
    for (let i of arr){
        let data = i.split(" <-> ");
        let name = data[0]
        let population = Number(data[1])
        if (new_arr[name]) {
            new_arr[name] += population; 
        }else{
            new_arr[name] = population;
        }
    }
    for (let a in new_arr){
        console.log(`${a} : ${new_arr[a]}`);
    }
  }
  
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)