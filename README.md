1. what is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
getElementByID select only one element by unique id, it returns one html element, it is the most fastest method for selecting.

getElementByClassName select all elements with same class name, returns html collection, it is live when dom is changed or updated.

querySelector select first matched item- it may be a tag name, class name, id etc. it returns one element.

querySelectorAll selects all matching elements using CSS selectors. It returns a NodeList, which is static and supports forEach() loop.


2. How do you create and insert a new element into the DOM?

Ans: 

I will create a new element with document.createElement("desire element") and insert it with apppendChild() method.


3. What is Event Bubbling? And how does it work?

Ans: 

Event Bubbling is a JS system called event propagation. when was clicked on a element it is targeted. then we can upward to the element parent or grand parent step by step until it reached the document.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans:

Event Delegation is a JS system where we can do a single event listener to their parent and use the event to determine which child triggered the event.The parent element listens for events on its children. When a child triggers an event, event bubbling sends the event to the parent. The parent can check event.target to handle the correct child element.


5. What is the difference between preventDefault() and stopPropagation() methods?


Ans:

preventDefault()- Stops the default browser action (following a link, submitting a form) but Does NOT stop event bubbling.

stopPropagation(): Stops the event from bubbling up to parent elements butDoes NOT stop default browser actions.