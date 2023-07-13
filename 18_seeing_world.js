var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ['Taj Mahal', 'Minar e Pakistan', 'Rohi', 'Mazar e Quaid'];
console.log('Original Order', place);
var alphabetical_order = __spreadArray([], place, true).sort();
console.log('Alphabetical Array Order', alphabetical_order);
console.log('This actual array is still in original order', place);
var reverse_order = alphabetical_order.reverse();
console.log('Reverse Array Order', reverse_order);
console.log('Printing Actual Array again', place);
var reverse_actual_list = place.reverse();
console.log('Reverse Actual list', reverse_actual_list);
var actual_list = reverse_actual_list.reverse();
console.log("Actual_list", actual_list);
console.log('Reverse Alphabetical Order', reverse_order);
