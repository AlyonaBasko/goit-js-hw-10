import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


// flatpickr("#datetimePicker", {
//     enableTime: true, // дозволяє вибрати час
//     dateFormat: "Y-m-d H:i", // формат дати і часу
//   });

  let userSelectedDate;

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        console.log("Обрана дата:", selectedDate);
    },
    if (selectedDate >= new Date()) {
        userSelectedDate = selectedDate;
      } else {
        console.log("Обрана дата не може бути у минулому!");
      },
  };

  flatpickr("#datetimePicker", options);