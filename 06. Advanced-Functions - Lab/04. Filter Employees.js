function solve(arr, criteria){
    counter = 0
    const data = JSON.parse(arr) 
    const [k,v] = criteria.split('-')
    data.forEach(element => {
        if (element[k] == v){
            console.log(`${counter}. ${element["first_name"]} ${element["last_name"]} - ${element["email"]}`)
            counter += 1
        }
    });

}


solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')
