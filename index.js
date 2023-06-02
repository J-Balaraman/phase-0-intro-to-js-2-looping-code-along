function writeCards()
{
    const writeCards = ["Thank you, Guadalupe, for the wonderful surprise gift!",
    "Thank you, Ollie, for the wonderful surprise gift!",
    "Thank you, Aki, for the wonderful surprise gift!"]
    return writeCards;
};

function countDown(n)
{
    let countDownn = n;
    while (countDownn != -1)
    {
        console.log(countDownn--);
    }
};

countDown(4);