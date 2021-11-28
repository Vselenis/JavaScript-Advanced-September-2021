function week(day) {
    let result = 0;
    switch(day) {
        case "Monday":result += 1;console.log(result);break;
        case "Tuesday":result += 2;console.log(result); break;
        case "Wednesday":result += 3;console.log(result); break;
        case "Thursday":result += 4;console.log(result); break;
        case "Friday":result += 5;console.log(result); break;
        case "Saturday":result += 6;console.log(result); break;
        case "Sunday":result += 7;console.log(result); break;
    default: console.log("error");
    }
}


week("Monday")
week("Saturday") 
week("asd")