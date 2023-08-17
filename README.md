This JavaScript-Algorithms-and-Data-Structures-Projects repository contains 5 JavaScript projects. The projects are: Palindrome Checker, Roman Numeral Converter, Caesars Cipher, Telephone Number Validator, and Cash Register. 

1. Palindrome Checker - A palindrome is a word or sentence that is spelled the same way both foward and backward,such as "eye" or "race car". It returns "true" if the given string is a palindrome, otherwise it returns false.

2. Roman Numeral Converter - It converts any given number into a roman numerical.

3. Caesars Cipher - One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on. This code takes a ROT13 encoded string as input and returns a decoded string. "SERR CVMMN!" is returned "FREE PIZZA!".

4. Telephone Number Validator - The code return true if the passed number looks like a valid US phone number.

5. Cash Register - A cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency. The Register return an object with a status key and a change key.
(a) Returns {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
(b) Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
(c) Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) returns {status: "OPEN", change: [["QUARTER", 0.5]]}.


