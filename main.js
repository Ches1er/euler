"use strict";

$(document).ready(()=>{
    getEvents()
});

let getEvents = function () {
    let $taskName = $(".task_name");
    $taskName.on("click",(e)=>{
        getTaskCondition(e.target.nextElementSibling);
    })
}

let getTaskCondition = function (elem) {
    elem.classList.toggle("show");
}