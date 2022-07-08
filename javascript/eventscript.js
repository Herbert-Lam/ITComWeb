let eventdisplay = document.getElementById("eventdisplay");
let eventitem;
calendardate.onmouseover = calendardate.onmouseout = calendardate.onmouseleave = handler;
function handler(event){
    let displayTable = document.createElement("table");
    if(event.type=="mouseover"){
        event.target.style.backgroundColor = "lightgrey";
        while(eventdisplay.childNodes[0]!=undefined){
            eventdisplay.removeChild(eventdisplay.childNodes[0]);
        }
        if (isNaN(parseInt(event.target.innerHTML.substr(1,1)))){
                eventitem = event.target.innerHTML.substr(5);
        } else {
            eventitem = event.target.innerHTML.substr(6);
        }
        if(eventitem==""){
            let tr1 = document.createElement("tr");
            let td1 = document.createElement("td");
            eventdisplay.appendChild(displayTable);
            displayTable.appendChild(tr1);
            tr1.appendChild(td1);
            td1.innerHTML = "Sorry.&nbsp;There is no event on the selected date.";
            eventdisplay.style.boxShadow="0px 0px 10px red";
            displayTable.style.cssText=`margin:0px; width:100%; border:2px solid red; height:186px;`;
            td1.style.cssText=`border:none; height:182px; padding:0; text-align:center; vertical-align:middle; font-size:22px;`;        
        } else {
            let tr1 = document.createElement("tr");
            let tr2 = document.createElement("tr");
            let tr3 = document.createElement("tr");
            let tr4 = document.createElement("tr");
            let trArr = [tr1, tr2, tr3, tr4];
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let td8 = document.createElement("td");
            let tdArr = [td1, td2, td3, td4, td5, td6, td7, td8];
            eventdisplay.appendChild(displayTable);
            for(i = 0; i < trArr.length; i++){
                displayTable.appendChild(trArr[i]);
            }
            for(i = 0; i < trArr.length; i++){
                for(j = i*2; j < i*2+2; j++){
                    trArr[i].appendChild(tdArr[j]);
                }
            }
            displayTable.style.cssText=`margin:0px; width:100%; font-size:20px;`;
            eventdisplay.style.boxShadow="0px 0px 10px #2776ea";
            td1.style.cssText=`width:20%`;
            td2.style.cssText=`width:80%`;
            let eventArr = [];
            switch (eventitem){
                case "Canada IT Expo":
                    eventArr = [`Event:`, `Canada IT Expo`,`Date:`,`Dec 3 - 6, 2021`, `Time:`, `09:00 - 17:00`, `Venue:`, `Vancouver Convention Centre, 1055 Canada PI, Vancouver, BC, V6C0C3, Canada`];
                    break;
                case "World IT Seminar":
                    eventArr = [`Event:`, `World IT Seminar`,`Date:`,`Dec 15, 2021`, `Time:`, `09:00 - 17:00`, `Venue:`, `Hong Kong Convention and Exhibition Centre, 1 Expo Drive, Wanchai, Hong Kong`];
                    break;
                case "Elderly Care Visit":
                    eventArr = [`Event:`, `Elderly Care Visit`,`Date:`,`Dec 22, 2021`, `Time:`, `09:00 - 12:00`, `Venue:`, `Douglas Elderly Care Center, 10th floor, 1250 Pinetree Way, Coquitlam, BC, V3B7X3, Canada`];
                    break;
                case "Hardware Mega Sales":
                    eventArr = [`Event:`, `Hardware Mega Sales`,`Date:`,`Dec 30, 2021`, `Time:`, `10:00 - 17:00`, `Venue:`, `Douglas College Concourse, 2nd floor, 700 Royal Avenue, New Westminster, BC, V3M5Z5, Canada`];
                break;
            }
            for(i = 0; i<tdArr.length; i++){
                tdArr[i].innerHTML = eventArr[i];
            }
        }
    }
    if (event.type=="mouseout") {
        event.target.style.backgroundColor = "#fcf0e1";
    }
    if (event.type=="mouseleave") {
        while(eventdisplay.childNodes[0]!=undefined){
            eventdisplay.removeChild(eventdisplay.childNodes[0]);
        }
        let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
        eventdisplay.appendChild(displayTable);
        displayTable.appendChild(tr1);
        tr1.appendChild(td1);
        td1.innerHTML = "Event details will be displayed here when the pointer is hovered over the calendar dates.";
        eventdisplay.style.boxShadow="0px 0px 10px #2776ea";
        displayTable.style.cssText=`margin:0px; width:100%; border:2px solid #2776ea; height:186px;`;
        td1.style.cssText=`border:none; height:182px; padding:0; text-align:center; vertical-align:middle; font-size:22px;`;
    }
}