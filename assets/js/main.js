var api = 'https://github.com/api/v2/json/';
$(document).ready(function () {
    $.ajax(api + 'user/show/michaelowens', function (data) {
        console.log(JSON.parse(data));
    });
});