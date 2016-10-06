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
        html += "<div class='col-sm-3 eventsarray " + evt[i].cat + "'>" + evt[i].name + "</div>";
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
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    evt = showEvents("0900","9 AM");
    evt = evt ? evt : ""
    html += evt;
    html += "</div>";
    var holder = document.getElementById('cd-timeline');
    holder.innerHTML = html;
}

//-----------------------------------
//Function called on page load.

function loadmystuff(){
    add("law follower","0900","coding");
    add("reverse coding","1100","coding");
    add("pybits","0900","cat3");
    add("botshot","0900","cat2");
    add("taronish",Date.now(),"cat2");
    updateEvents();
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

//TODO fetchEvents on page load from some remote server.
//TODO put all the event and category handlers in new object.