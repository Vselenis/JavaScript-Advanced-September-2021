function getPreviousDay(year, month, day) {
    let today = new Date(year, month - 1, day);
    let yesterday = new Date(today);
 
    yesterday.setDate(yesterday.getDate() - 1)
 
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`)
}
previousDate(2016, 9, 30)
previousDate(2016, 10, 1)