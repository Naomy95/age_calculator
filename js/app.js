function calculateAge(year,month,day) {
    var currentDate = new Date();
    var birthYear = parseInt(year)
    var birthMonth = parseInt(month)
    var birthDay = parseInt(day)

    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();

    // var currentYear = parseInt(year)
    // var currentMonth = parseInt(month)
    // var currentDay = parseInt(day)

    var ageYear = currentYear - birthYear;
    var ageMonth = currentMonth - birthMonth;
    var ageDay = currentDay - birthDay;

    // Adjust the age if the current month/day is before the birth month/day
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        ageYear--;
        ageMonth += 12;
        if (ageDay < 0) {
            ageDay += new Date(currentYear, currentMonth, 0).getDate();
        }
    }

    return {
        years: ageYear,
        months: ageMonth,
        days: ageDay
    };
}

// Example usage
// var birthDate = new Date('1993-06-10');
// var year= document.getElementById("day").value;
// var month=document.getElementById("month").value;
// var day=document.getElementById("year").value;
// var age = calculateAge(year,month,day);
// console.log("Age: " + age.years + " years, " + age.months + " months, " + age.days + " days");

function getInput() {
    // Get the value from the input field
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    // Do something with the input value (for example, print it)
    var age = calculateAge(year,month,day);
    console.log("Age: " + age.years + " years, " + age.months + " months, " + age.days + " days");
    var yearDisplay = document.getElementById("yearDisplay");
    var monthDisplay = document.getElementById("monthDisplay");
    var dayDisplay = document.getElementById("dayDisplay");
    yearDisplay.textContent =  age.years ;
    monthDisplay.textContent =  age.months ;
    dayDisplay.textContent =  age.days ;
}
