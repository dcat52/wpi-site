$(document).ready(function () {
    var url = window.location;
    console.log("hi");
    // url.href.substring(39,url.href.length-5)
    arr = url.href.split('/');
    console.log(arr);
    ele = arr[arr.length - 1]
    ele = ele.substring(0,ele.length-5);
    e = document.getElementById(ele);

    if(e == null) {
        e = document.getElementById("index");
    }

    // if (url.href == 'http://users.wpi.edu/~dscatherman/') {
    //     console.log("in here")
    //     e = document.getElementById("index");
    // }
    e.classList.add("active");
    console.log(e)
});