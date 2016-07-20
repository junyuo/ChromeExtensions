var myVar = setInterval(myTimer, 3000);

function myTimer() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var time = year + '/' + month + '/' + date + ' ' + hour + ':' + minutes + ':' + seconds;
    console.log(time);
}
