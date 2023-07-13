/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out 
a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the
name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you 
are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

let guests=['Hamza','Hassan','Wahaj','Ali'];
for(let i=0;i < 1; i++){
console.log("Sorry",guests[1],'and', guests[0],"cannot make dinner");
}
let new_guests=['Faizan','Zain'];

/*•Now Modify my list, replacing the name of the guest who can’t make it with the name of the new person you 
are inviting.*/
for(let i=0;i < 1;i++){
console.log("I am replacing",guests[1],'by', new_guests[0]);
console.log("I am replacing",guests[0],'by', new_guests[1]);
}

/*• Print a second set of invitation messages, one for each person who is still in your list.*/
let final_list=[guests[2],guests[3],new_guests];
for(let i=0;i<1;i++){
console.log('Final people for dinner is',final_list);
}