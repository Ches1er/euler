"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Hi");
})

$(document).ready(()=>{
    console.log("Hi");
    getEvents()
});

let getEvents = function () {
    let $taskName = $(".task_name");
    $taskName.on("click",(e)=>{
        console.log("Hi");
    })
}