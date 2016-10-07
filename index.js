//-----------------------------------
//Global variables for events and categories

var eventsarray = [];

var cats = {
    coding: true,
    robotics: true,
    mean: true,
    deepSci: true,
    finance: true,
    quiz: true,
    exhibition: true,
    DIY:true,
}

//-----------------------------------
//Basic functions to interact with events and categories

function add(name,time,cat){
    var event= {};
    event.name = name;
    event.time = time;
    event.cat = cat;
    eventsarray.push(event);
}

function getEvents(time){
    var evt = [];
    for(i=0;i<eventsarray.length;i++){
        if(eventsarray[i].time == time && cats[eventsarray[i].cat] == true){
            evt.push(eventsarray[i]);
        }
    }
    return evt;
}

function enable(cat){
    cats[cat] = true;
}

function disable(cat){
    cats[cat] = false;
}

//-----------------------------------
//Function to create HTML

function showEvents(time,str){
    var html = "<div class='cd-timeline-block'><div class='cd-timeline-timeslot'><p>" + str + "</p></div><div class='cd-timeline-content'>";
    var evt = getEvents(time);
    if(evt.length ==0){
        return false;
    }
    for(i=0;i<evt.length;i++){
        html += "<div class='eventsarray " + evt[i].cat + "'>" + evt[i].name + "</div>";
    }
    html+= "</div></div>";
    return html;
}

function updateEvents(){
    var html = "<div class='cd-timeline-block'>";
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1000","10 AM")
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1100","11 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1200","Noon");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1300","1 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1400","2 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1500","3 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1600","4 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1700","5 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1800","6 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("1900","7 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("2000","8 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("2100","9 PM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("2200","10 PM");
    evt = evt ? evt : ""
    html += evt;
    html += "</div>";
    var holder = document.getElementById('cd-timeline');
    holder.innerHTML = html;
}

//-----------------------------------
//Function called on page load.

function loadTestingEvents(day){
    if(day == '1'){
        add("techtainment","0900","exhibition");
        add("reverse coding","1100","coding");
        add("pybits","0900","coding");
    }
    if(day == '2'){
        add("robo wars","0900","mean");
        add("quiz","1700","quiz");
        add("pybits","0900","coding");
        add("botshot","1500","robotics");
    }
    if(day == '3'){
        add("robo wars","0900","mean");
        add("open outcry","1100","finace");
        add("pybits","0900","coding");
        add("botshot","1500","robotics");
    }
}

function loadmystuff(){
    var day = document.getElementsByTagName('body')[0].getAttribute('data-day');
    loadTestingEvents(day);
    //updateEvents();
    testCode();
}

//-----------------------------------
//Other event handlers and functions

function toggleFilterButton(button){
	var name = button.getAttribute("data-categoryname");
    var returnval = button.classList.toggle('btn-primary');
	button.classList.toggle('btn-default');
    if(returnval){
        enable(name);
    }
    else{
        disable(name);
    }
    updateEvents();
}

/*function testCode(){
    var html = "<div class='cd-timeline-block'>";
    html += "<div class='cd-timeline-block'><div class='cd-timeline-timeslot'><p>9 AM</p></div><div class='cd-timeline-content'>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "</div>"
    html += "<div class='cd-timeline-block'><div class='cd-timeline-timeslot'><p>9 AM</p></div><div class='cd-timeline-content'>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "</div>"
    html += "<div class='cd-timeline-block'><div class='cd-timeline-timeslot'><p>9 AM</p></div><div class='cd-timeline-content'>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "<div class='eventsarray'>My event name</div>";
    html += "</div>"
    html += "</div>";
    html += "</div>";
    var holder = document.getElementById('cd-timeline');
    holder.innerHTML = html;
}   
*/

//TODO fetchEvents on page load from some remote server.
//TODO put all the event and category handlers in new object.