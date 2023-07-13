/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let username1 = ['ali@gmail.com', 'hassan@gmail.com', 'waji@gmail.com', 'hamza@gmail.com', 'ahmad@gmail.com', 'admin'];

console.log('This list is not empty:', username1);

let username2=[];
if (username2.length === 0) {
  console.log('This list is empty, so we need to find some users.',username2);
}