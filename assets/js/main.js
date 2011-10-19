var api = 'https://github.com/api/v2/json/';
$(document).ready(function () {
    $.getScript(api + 'user/show/michaelowens?callback=test');
});

function test(data) {
    console.log(JSON.parse(data));
}