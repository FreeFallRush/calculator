Project Calculator - from The Odin Project Curriculum (https://www.theodinproject.com/lessons/foundations-calculator)

The exercise asks to:

- Make a basic calculator that can calculate the math operations: addition, subtraction, multiplication and division.

- Each number and operator should have a button that when clicked populates the display.

- There should be a function 'operate' that 'takes an operator and 2 numbers and then calls one of the above functions on the numbers.'

- The calculator should string together several operations with each pair of numbers being evaluated at a time.

- The results with long decimals should be rounded so they don't overflow the display of the calculator

- There should be a 'clear' button that when pressed clears the screen of the calculator

- A sneaky error message should be displayed when a number is being divided by 0

Extra requirements:

- A decimal point button that lets users input decimals
- A 'backspace' button, to undo the last input
- Keyboard support for the calculator

---> [view project](https://freefallrush.github.io/calculator/) <----

[![ezgif-com-gif-maker2.gif](https://i.postimg.cc/mDg4xCQM/ezgif-com-gif-maker2.gif)](https://postimg.cc/3yVVmyfJ)

The exercise was a big challenge and took me several months to complete it - mostly because I took lots of personal breaks that made me restart twice The Odin Project module, while also starting other curriculums for better understanding of JS.
I'm not sure exactly what was the hardest part in solving this exercise: making the values appear on the display (the numbers should not start with 0 if there's no decimal point after 0; the numbers should have a certain limit for characters, so they can't overflow the screen), storing the values and calling the 'operate' function with them, adding the sneaky message when divided by 0 and stopping all calculations after the message appears. I stumbled a lot in making my calculator functional and whenever something looked solved somewhere, it seemed broken in another part.
The code is not that DRY, actually is not DRY at all, but at least it works and is done based on the knowledged I have till now. Hopefully, when I have more experience, I can come back to it and clean it.
At this point, I'm grateful I didn't give up and returned to finish it.
Ironically, the easiest part was adding the keyboard support (in my head seemed like the heavy cherry on top).
