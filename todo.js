document.addEventListener("DOMContentLoaded", function () {
    getStorage();
    noentrycontrol();
});

function noentrycontrol() {
    let tabledata = localStorage.getItem("tableData");
    let compdata = localStorage.getItem("compdata");
    if (tabledata === "" || !tabledata) {
        document.getElementById("noentry").innerText = "No Entries Available";
        document.getElementById("noentry").style.padding = "20px";
    }
    if (compdata === "" || !compdata) {
        document.getElementById("noentry2").innerText = "No Entries Available";
        document.getElementById("noentry2").style.padding = "20px";
    }
}
function appnd() {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let todorow = document.createElement("tr");
    todorow.innerHTML = `
        <td contenteditable>${title}</td>
        <td contenteditable>${desc}</td>
        <td><button onclick="completebtn(this)">Task Completed</button></td>
        <td><button onclick="removeRow(this)">Delete</button></td>
    `;
    document.getElementById("pendingdata").appendChild(todorow);
    document.getElementById("noentry").innerText = "";
    document.getElementById("noentry").style.padding = "0";
    setStorage();
}

function completebtn(button) {
    let row = button.parentNode.parentNode;
    let title = row.querySelectorAll('td')[0].innerText;
    let desc = row.querySelectorAll('td')[1].innerText;
    let todorow = document.createElement("tr");
    
    todorow.innerHTML = `
        <td>${title}</td>
        <td>${desc}</td>
        <td><button onclick="removeRow(this)">Delete</button></td>
    `;
    document.getElementById("completedata").appendChild(todorow);
    row.parentNode.removeChild(row);
    setStorage();
}


function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    setStorage();
}

function setStorage() {
    localStorage.setItem("tableData", document.getElementById("pendingdata").innerHTML);
    localStorage.setItem("compdata", document.getElementById("completedata").innerHTML);
    noentrycontrol();
}

function getStorage(){
    let tabledata = localStorage.getItem("tableData");
    let compdata = localStorage.getItem("compdata");
    if (tabledata) {
        document.getElementById("pendingdata").innerHTML = tabledata;
    }

    if (compdata) {
        document.getElementById("completedata").innerHTML = compdata;
    }
}
