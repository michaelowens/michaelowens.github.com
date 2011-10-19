var api = 'https://github.com/api/v2/json/';
$(document).ready(function () {
    $.getScript(api + 'user/show/michaelowens?callback=handleUser');
});

function handleUser(json) {
    console.log('incoming');
    console.log(json);
}