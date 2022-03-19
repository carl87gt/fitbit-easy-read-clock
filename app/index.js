import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "./common/utils";
import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { today } from 'user-activity';

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> elements
const timeLabel = document.getElementById("timeLabel");
const monthLabel = document.getElementById("monthLabel");
const dayLabel = document.getElementById("dayLabel");
const heartRate = document.getElementById("heartRate");
const calories = document.getElementById("calories");
const steps = document.getElementById("steps");

// heart-rate monitor
let hrm;

let months = [];
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "Jun";  
months[6] = "Jul";
months[7] = "Aug";
months[8] = "Sep";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";

function configureClock() {
  // Update the <text> element every tick with the current time
  clock.ontick = (evt) => {
    updateTime(evt);
    updateDate(evt);
    updateHeartRate();
    updateCalories();
    updateSteps();
  }
}

function configureHeartRateMonitor() {
  if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
     hrm = new HeartRateSensor();
     hrm.onreading = function () {
       heartRate.text = `${hrm.heartRate}`;
     }
     display.addEventListener("change", () => {
      // stop sensor when screen is off to conserve battery
      if (display.on) {
        hrm && hrm.start();
      } else {
        hrm && hrm.stop();
      }
    });
    hrm.start();
  } else {
    heartRate.text = `--`;
    console.log("This device does NOT have a HeartRateSensor");
  }

}

function updateTime(evt) {
  let date = evt.date;
  let hours = date.getHours();
  let seconds = util.zeroPad(date.getSeconds());
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = util.zeroPad(hours % 12 || 12);
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let minutes = util.zeroPad(date.getMinutes());
  timeLabel.text = `${hours}:${minutes}:${seconds}`;
}

function updateDate(evt) {
  let date = evt.date;
  let month = months[date.getMonth()];
  let day = util.zeroPad(date.getDate());
  monthLabel.text = `${month}`;
  dayLabel.text = `${day}`;
}

function updateHeartRate() {
  hrm && hrm.start();
}

function updateCalories() {
  calories.text = `${util.format(today.adjusted.calories)}`;
}

function updateSteps() {
  steps.text = `${util.format(today.adjusted.steps)}`;
}

configureClock();
configureHeartRateMonitor();
