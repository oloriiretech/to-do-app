const date = new Date();

const mCalender = () => {

    date.setDate(1);

    const monthDays = document.getElementById("daily");

    const lastDay = new Date(date.getFullYear(),
        date.getMonth() + 1, 0).getDate();


    const prevLastDay = new Date(date.getFullYear(),
        date.getMonth(), 0).getDate();
    console.log(prevLastDay);

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(),
        date.getMonth() + 1, 0).getDay();

    const nextDays = lastDayIndex + 1;

    const months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.getElementById("mont").innerHTML = months[date.getMonth()];

    document.getElementById("ddmmy").innerHTML = new Date().toDateString();

    //document.getElementById("year").innerHTML = new Year().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class ="prev-date">${prevLastDay - x + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.
            getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    };

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

}


document.getElementById("previous").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    //date.setFullYear(date.getFullYear()-1);
    mCalender();
});

document.getElementById("nexT").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    mCalender()
});

mCalender();

daily.addEventListener("click", function () {
    const popup = document.getElementById("popup");
    const daily = document.getElementById("daily");
    popup.classList.add("open-popup");
});


submitBtn.addEventListener("click", function () {
    const submitBtn = document.getElementById("submitBtn");
    popup.classList.remove("open-popup");
});