let tweetMax = 140;

function letter() {
    let tweetLength = $('#tweet-box').val().length;
    $('#tweet-feedback').html(tweetMax - tweetLength);
}

$('#tweet-box').keyup(letter);