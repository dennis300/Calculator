/* 
NB: THERE ARE THREE DIFFERENT WAYS WHICH THE CALCULATOR IS BEEN BUILT,MAKE SURE TO UNCOMMENT ANY PART OF THE CODE YOU WISH TO RUN.

NO.1, LOOP THROUGH THE BUTTONS FIRST AND ADDED AN EVENT LISTENER.
NO.2, ADDED AN EVENT LISTENER TO THE BUTTONS FIRST AND THEN USED AN IF STATEMENT.
NO.3, ADDED AN EVENT LISTENER TO THE BUTTONS FIRST AND THEN USED A SWITCH
NO.4, no.2 and no.3 are sharing the same under the same event listener, in other to use either of them(i.e no.2 or no.3),
you have to uncomment the one you want to use in either of the two(no,2 or no,3). Thank you.
*/



const display = document.getElementById('screen'); // select input element
const buttons = document.getElementsByTagName('button'); // select all the list of buttons
const btnContainer = document.getElementById('calButtons'); // select button container

/* First method to solve the problem */
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click' , function(){
    
        if (buttons[i].innerText == 'CE') {
            display.value = '';
        }else if (buttons[i].innerText == '=') {
            display.value = eval(display.value);
        }else if (buttons[i].innerText == '←') {
            display.value = display.value.slice(0 , -1);
        }
        else {
            display.value += buttons[i].innerText; 
         }
    })
    
}

                       // UNCOMMENT FIRST BEFORE RUNNING.

/* Second method to solve the problem */
// btnContainer.addEventListener('click' , function (e) {

//     if (e.target.innerText == 'CE') {
//         display.value = '';
//      }else if (e.target.innerText == '=') {
//         display.value = eval(display.value);
//      }else if (e.target.innerText == '←') {
//         display.value = display.value.slice(0 , -1);
//      }
//      else {
//         display.value += e.target.innerText; 
//      }

// /* Third method to solve the problem */
//     switch (e.target.innerText) {
//         case 'CE':
//             display.value = '';
//             break;
//         case '=':
//                 display.value = eval(display.value);
//                 break;
//         case '←':
//                 display.value = display.value.slice(0, -1);
//                 break;
//         default:
//             display.value += e.target.innerText; 
//             break;
//     }
    

// })


