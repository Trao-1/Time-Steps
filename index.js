import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { battery } from "power";

const myBattery = document.getElementById("myBattery");

myBattery.text = `${battery.chargeLevel}%`; // initialize on startup
battery.onchange = (charger, evt) =>
{
   myBattery.text = `${battery.chargeLevel}%`;
}

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const myMonth = document.getElementById("myMonth");
const myDay = document.getElementById("myDay");
const mySteps = document.getElementById("mySteps");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => 
{
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h")
  {
    // 12h format
    hours = hours % 12 || 12;
  } else
  {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let monthnum = today.getMonth();
  let day = today.getDate();
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";  
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
let monthname = month[monthnum];
  if (preferences.clockDisplay === "12h") 
  {
    // 12h format
    hours = hours % 12 || 12;
  } else 
  {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  myMonth.text = `${monthname}`;
  myDay.text = `${day}`; 
}

import { me as appbit } from "appbit";
import { today } from "user-activity";

if (appbit.permissions.granted("access_activity")) 
{
   console.log(`${today.adjusted.steps} Steps`);
  mySteps.text=`${today.adjusted.steps}`;
}


