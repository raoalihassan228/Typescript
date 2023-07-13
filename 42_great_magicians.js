/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
var magicians1 = ['Hamza', 'Waji', 'Hassan', 'Ali'];
function show_magicians1() {
    for (var i = 0; i < magicians1.length; i++) {
        console.log("The great", magicians1[i]);
    }
}
show_magicians1();
