var api = 'https://github.com/api/v2/json/';
$(document).ready(function () {
    $.get(api + 'user/show/michaelowens', function (data) {
        console.log(data);
    });
});