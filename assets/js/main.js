var api = 'https://github.com/api/v2/json/',
    username = 'michaelowens',
    user = {},
    repos = {};
$(document).ready(function () {
    $('#my_repos').text('0');
    $('#my_private_repos').text('0');
    $('#my_followers').text('0');
    $.getScript(api + 'user/show/' + username + '?callback=handleUser');
    $.getScript(api + 'repos/show/' + username + '?callback=handleRepos');
});

function handleUser(json) {
    user = json.user;
    $('#my_repos').text(user.public_repo_count);
    $('#my_followers').text(user.followers_count);
}

function handleRepos(json) {
    repos = json.repositories;
    console.log(repos);
    $('.site').fadeIn();
}