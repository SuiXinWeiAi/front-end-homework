//打印表单
function showList() {
    var todoList = document.getElementById("todoList");
    var todoList1 = "";
    var data = localStorage.getItem("todoList");
    //alert(data);
    //alert((data == null));
    console.log(data);
    console.log(typeof data);
    if (data != null) {
        data = JSON.parse(data);
        for (var i = data.length - 1; i >= 0; i--) {
            todoList1 += "<li id='li-" + i + "'>" +
                "<input class='content' type='text' style='float:left;' id='" + i + "' value=" + data[i].li + " onchange='update(" + i + ")'>" +
                "<span class='listSpan' style='float:right;' onclick=remove(" + i + ")>" + "-</span></li>";
            //var marker = document.getElementById("::maker");
            //remove(maker);
        }

        todoList.innerHTML = todoList1;
    }
    else {
        todoList.innerHTML = "";
    }
}
//存入数据
function saveData(data) {
    data = JSON.stringify(data);
    localStorage.setItem("todoList", data);
}
//加载数据
function loadData() {
    var data = localStorage.getItem("todoList");
    var temp = [];
    if (data == null)
        return temp;
    else
        return JSON.parse(data);
}


//编辑
function update(id) {
    var data = loadData();
    var newItem = document.getElementById(new String(id));  //被修改的数据
    data[id].li = newItem.value;
    saveData(data);
}
//输入
function postaction() {
    var inputTodo = document.getElementById("inputTodo");
    if (inputTodo.value == "") {
        alert("内容不能为空");
    } else {
        var data = loadData();
        var todo = { "li": inputTodo.value };
        data.push(todo);
        saveData(data);
        var form = document.getElementById("form");
        form.reset();
        showList();
    }
}
//加载
window.onload = function () {
    showList();
}
//清除全部
function clear() {
    localStorage.clear();
    showList();
}
//删除
function remove(n) {
    var data = loadData();
    data.splice(n, 1);
    saveData(data);
    showList();
}