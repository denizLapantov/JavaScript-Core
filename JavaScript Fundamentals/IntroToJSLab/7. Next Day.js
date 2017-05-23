function NextDay(year,mounth,day) {
    let a = new Date(year,mounth - 1,day );
    let oneDay=24*60*60*1000;
    let date = new Date(a.getTime() + oneDay);
    console.log(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDate()))
}

NextDay(2016,9,30)