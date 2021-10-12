console.log("This is project 4");
const aname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// const nameValidate= new RegExp('[Aa-zZ]|[\w \s]')
/**
 * [a-z A-Z] all leeter and the blank spaces 
 * [a-zA-Z] all leeter and no  blank spaces 
 * 
 *[Aa-zZ] --> no sense 
 */

// const emailValidate= new RegExp('[a-z]@[a-z].[a-z]')
/**
 * [a-z]@[a-z].[a-z] --> will only match to one characters like v@g.c  not adsf@gmail.com 
 * [a-z]+@[a-z]+.[a-z]+ --> is best matches one or more characters so will match both  v@g.c  and adsf@gmail.com 
 * [a-z]*@[a-z]*.[a-z]* -->can also work but not advised as it matches 0 or ore chrac
 */

// const phoneValidate= new RegExp('[0-9]*10')
/**
 * [0-9]*10  --> will match a patern like qwe10 or 13410 or 3310 or ayiekl135mid10  ,,, iska matlab hai ki 10 se pahle 0-9 ka occurance ho bhi sakta hai ya nahi wo bhi kitni bhi baar   ... jab 1 to 9 hoga to us last wale digit jo 10 se pahle hai usse bhi reurn kar deg awarna nahi karega par result of test is always true
 * [0-9]{10}--> this will do the exact work 
 */

const nameValidate = new RegExp('[A-Z a-z]|[\w \s]')
const emailValidate = new RegExp('[a-z]+@[a-z]+.[a-z]+')
const phoneValidate = new RegExp('[0-9]{10}')

let a1 = toString(aname.value);

let nameMatch = nameValidate.test(toString(aname.value));
let emailMatch = nameValidate.test(email.value);
let phoneMatch = nameValidate.test(phone.value);

const btn = document.getElementById('submit')
btn.addEventListener('click', f3)
function f3(e) {

    //     const aname = document.getElementById('name');
    //     const email = document.getElementById('email');
    //     const phone = document.getElementById('phone');

    //     const nameValidate= new RegExp('[A-Z a-z]|[\w \s]')
    // const emailValidate= new RegExp('[a-z]+@[a-z]+.[a-z]+')
    // const phoneValidate= new RegExp('[0-9]{10}')

    // let nameMatch=nameValidate.test(toString(aname.value));
    // let emailMatch=nameValidate.test(email.value);
    // let phoneMatch=nameValidate.test(phone.value);

    e.preventDefault();
    if (nameMatch) {
        console.log('kk')
    } else {
        // alert('invalid name')
        console.log('invalid name')
        
    }

    if (emailMatch) {
        console.log('kk')
    } else {
        alert('invalid email')
    }

    if (phoneMatch) {
        console.log('kk')
    } else {
        alert('invalid phone')
    }
}

