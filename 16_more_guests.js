/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Guest = ['Hamza', 'Hassan', 'Wahaj', 'Ali'];
console.log('Original guests');
for (var i = 0; i < Guest.length; i++) {
    console.log(Guest[i]);
}
console.log('Table is bigger so we add more people');
Guest = __spreadArray(["Faizan"], Guest, true);
var middleIndex = Math.floor(Guest.length / 2);
Guest.splice(middleIndex, 0, "Ahmad"); // Add a new guest to the middle
Guest = __spreadArray(__spreadArray([], Guest, true), ['Zain'], false);
for (var i = 0; i < Guest.length; i++) {
    console.log('I want to invite', Guest[i], 'for the dinner.');
}
