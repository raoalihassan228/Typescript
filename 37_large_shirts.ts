/*Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/

function make_shirt(size1: string= 'Large', message1: string='I Love typeScript'){
console.log('size: ',size1,'\n','Message: ',message1);
}
make_shirt();
make_shirt("Meduim");
make_shirt("",'I love python');