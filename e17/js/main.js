$(document).ready(function() {
    // run function on initial page load
    flowerGuess();
});

function flowerGuess() {
    var flowerArray = ["Acacia", "Amaranth","Cactus","Coriander","Daffodil","Daisy","Iris","Rose","Lavender","Lily","Mandrake","Mistletoe","Nightshade","Pansy","Sunflower","Sage","Tulip","Violet","Lily","Peppermint","Ivy","Buttercup"]; 3

    var randomNumber = Math.floor(Math.random() * flowerArray.length);
    var stripped = flowerArray[randomNumber].toLowerCase();
    console.log(flowerArray[randomNumber]);
    console.log(stripped);
    $('body').css('background-color', flowerArray[randomNumber]);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == flowerArray[randomNumber]) {
            $('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' is wrong');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}
