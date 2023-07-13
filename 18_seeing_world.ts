let place=['Taj Mahal','Minar e Pakistan','Rohi','Mazar e Quaid'];
console.log('Original Order',place);

let alphabetical_order=[...place].sort();
console.log('Alphabetical Array Order',alphabetical_order);

console.log('This actual array is still in original order',place);

let reverse_order=alphabetical_order.reverse();
console.log('Reverse Array Order',reverse_order);

console.log('Printing Actual Array again', place);

let reverse_actual_list=place.reverse();
console.log('Reverse Actual list',reverse_actual_list);

let actual_list=reverse_actual_list.reverse();
console.log("Actual_list",actual_list);

console.log('Reverse Alphabetical Order', reverse_order);