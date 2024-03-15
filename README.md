Mulalo Mabuda
JSL02 Project Debug the DOM

Resources used I used ChatGPT to help me understand the code.
 
The breakdown of the code:

- `addNewGoal` function:

-It starts by retrieving the value of the input field with the id `goalInput` and the list container with the id `goalList`.
-Next, it selects all existing goals in the list by querying all `<li>` elements within the `goalList`.
-Then, it iterates over each existing goal using `forEach` loop and checks if the text content of any goal matches the new goal input. If a duplicate is found, it sets the variable `isDuplicate` to `true`.
-After checking all existing goals, if a duplicate was found (`isDuplicate` is `true`), it displays an alert to the user informing them that the goal already exists, and the function returns, preventing further execution.
-If no duplicate is found, it proceeds to create a new `<li>` element, sets its text content to the new goal input, and appends it to the `goalList` container.

-Event Listener:

-An event listener is attached to the button with the id `submitGoal`, so when this button is clicked, the `addNewGoal` function is invoked
