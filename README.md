# Timer

**Possible Implementation1**

## Hard to understand the code

_Event listener to watch for a click on start button_

1. Draw a full border around the timer
2. Start counting down the timer
3. Each time the timer counts down, update the border
4. Each time the timer counts down, update the text
5. If we count down and timer reaches 0

- Reset the border
- Reset internal timer to get ready for another run

**Possible Implementation2**

## Easy to understand Evented style code

_Event listener to watch for a click on start button_

1. Emit an event stating that the timer has started =>

- Watch for this event. When it occurs, draw the border

2. Start counting down timer.Emit an event that timer has ticked =>

- Watch for this event. When it occurs, update the border

3. Each time the timer counts down, update the text
4. If we counted down and timer reaches 0.Emit an event that the timer is done =>

- Watch for this event. When it occurs, reset the border

5. Reset internal timer to get ready for another run.
