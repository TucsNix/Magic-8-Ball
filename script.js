button = document.getElementById('game');

button.onclick = function () {
    let randomNumber = Math.floor(Math.random() * 20);
    eightBall = randomNumber;

    switch (randomNumber) {
        case 1:
            document.getElementById('answer').innerHTML = 'It is certain.';
            break;
        case 2:
            document.getElementById('answer').innerHTML = 'It is decidedly so.';
            break;
        case 3:
            document.getElementById('answer').innerHTML = 'Without a doubt.';
            break;
        case 4:
            document.getElementById('answer').innerHTML = 'Yes definitely.';
            break;
        case 5:
            document.getElementById('answer').innerHTML = 'You may rely on it.';
            break;
        case 6:
            document.getElementById('answer').innerHTML = 'As I see it, yes.';
            break;
        case 7:
            document.getElementById('answer').innerHTML = 'Most likely.';
            break;
        case 8:
            document.getElementById('answer').innerHTML = 'Outlook good.';
            break;
        case 9:
            document.getElementById('answer').innerHTML = 'Yes.';
            break;
        case 10:
            document.getElementById('answer').innerHTML = 'Signs point to yes.';
            break;
        case 11:
            document.getElementById('answer').innerHTML = 'Reply hazy, try again.';
            break;
        case 12:
            document.getElementById('answer').innerHTML = 'Ask again later.';
            break;
        case 13:
            document.getElementById('answer').innerHTML = 'Better not tell you now.';
            break;
        case 14:
            document.getElementById('answer').innerHTML = 'Cannot predict now.';
            break;
        case 15:
            document.getElementById('answer').innerHTML = 'Concentrate and ask again.';
            break;
        case 16:
            document.getElementById('answer').innerHTML = "Don't count on it.";
            break;
        case 17:
            document.getElementById('answer').innerHTML = 'My reply is no.';
            break;
        case 18:
            document.getElementById('answer').innerHTML = 'My sources say no.';
            break;
        case 19:
            document.getElementById('answer').innerHTML = 'Outlook not so good.';
            break;
        case 20:
            document.getElementById('answer').innerHTML = 'Very doubtful.';
            break;
    }

    setTimeout(timeUp, 4000);
    function timeUp() {
        document.getElementById("answer").innerHTML = "8";
    }
}