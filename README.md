
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementById gets one element by ID

getElementsByClassName gets multiple elements by class

querySelector gets first matching element

querySelectorAll gets all matching element

### 2. How do you create and insert a new element into the DOM?

Ans:1.Create a element like const div = document.createElement('div')

2.then type what you want to write in it by using innerHTML like 
div.innerHTML = `
          <div>
            <h2 class="font-bold text-xl name">
              name
            </h2>
					</div>
`

3.then append the div in the parent like parent.appendChild(div);

### 3. What is Event Bubbling? And how does it work?

Ans:Event bubbling is when event moves upward in the DOM

When I click something it triggers on the target element first, then goes to its parent,then parent’s parent and stops in document

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation is when putting one event listener on a parent instead of many on children

It's useful because we need less event listeners and we do not need to add listeners to every element

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() blocks browser action and stopPropagation() blocks event flow
