function LastDay([day,mounth,year]) {

    let LastDayPrevMonth = new Date(year, mounth-1, 0).getDate();
    console.log(LastDayPrevMonth);
}

LastDay([17, 3, 2002])