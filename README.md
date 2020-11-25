# Ping Pong Game
Design a ping-pong game with a given template.

## Template
Template has 2 functions onInit and onUpdate. Please design your ping-pong game with only those two functions. Do not modify app.js.

Put your initalizing functions in onInit function, like key down and up bindings or players and ball.

You can use ```this.nodes.push(nodeProperties)``` to add nodes to canvas.
You can also use ```this.getNode()``` to get node properties.

You can find examples in index.html file in public folder.

Please start server with ```node index.js```.

After finishing your work, please send pull request for review.

## Todo
- Add keyboard functionalities for both players, W and S can be one player Up and Down can be for another player.
- Add players into canvas, make sure we can move players with keyboard.
- Add ball to the game, pressing ```SPACE``` button should start game, make sure ball bounces from boundries.
- When player scores, show scoring with console.log. And reset game.

## Bonus Todo
- Add draw text functionality to the engine. You can modify app.js for that part.
- Add score system for the game and use this drawText functionality on game.
- Add resize function the engine. With window.resize

## Notes
- Make sure game has state functions like reset, start and pause. We should be able to trigger them with ```app.reset()``` or ```app.pause()```.
- Make sure players or ball uses app.width and app.height values dynamicly, hard coded values will be rejected.