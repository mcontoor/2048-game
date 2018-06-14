## Summary 
It's play time, people! In this milestone, we are going to create a game from scratch. The game is **drumroll** 2048!! 

For those of you who are new to 2048, [check it out](https://gabrielecirulli.github.io/2048/)

## Instructions
This is your first multi-day MileStone. You will be working on this over the next 3 days. At the end of Day 14, we will have presentations by all the teams where they will showcase their finished game and talk about how they built it and what were the challenges they faced.

While working on a large project, it's a good idea to spend sometime planning. Some of the things you can plan are: 
- Break down the product into multiple versions like 0.1, 0.2, 0.3 etc
    - For e.g. 0.1 could be only the CLI game, 0.2 could be 0.1 with Front end, 0.3 could be 0.2 with jQuery methods and so on.. 
- Decide what's your [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product), what are your stretch features, make a list of all features you would like to build
    - Each stage can have certain features 
    - Every stage builds upon the features from the previous stage(s). 
- [Trello](https://trello.com/) can be a brilliant tool to work with for this. You can divide feature by [Day](https://trello.com/b/kZsVVrc8/front-product-roadmap), [progress](https://trello.com/b/0xzkRjTH/scrum-project-management-board) etc. Figure what works for your team
- Decide how much time you would like to allocate to each stage. Keep in mind the deadline i.e. end of Day 14

## Teams 
- Bill Gates : Ben Sooraj M, Akshay Reddy, Narayan Siddharth
- Paul Allen : Rahul Dronamraju, Deepinder Singh, Vijay Boosa 
- Steve Balmer : Rahul Kumar Korada, Ravi Reddy, Vigneshwar Balakrishnan, Vamshidhar Reddy

## Release 0 : WTF is going on!?
Spend some time playing 2048 and understand what is happening. Some of the questions to ponder upon are:
- Is there a pattern to the place where the numbers pop up or are they random? What about the numbers themselves?
- What is the gameplay like? What all can we do in the game? What are the things we can't do? 
- How do you know that you have won the game? (Hint: You can either say the user wins the game once they reach 2048 or we can create the game with a high score. In which case, how do you keep a track of the high score?)

## Release 1 : Break! Break! Break! 
The game might seem overwhelming. We should focus on breaking things down to very basic problems. Some of them could be: 
- How do we represent the game programatically? What data structure should we use to represent the board? 
- How do we make random numbers pop up? Should we define a function for the same?
- How do we add 2 blocks? How do we verify that the blocks are indeed "add-able"?

It's a great idea to follow the [Single Responsibility Principle](http://en.wikipedia.org/wiki/Single_responsibility_principle) when we're working with such projects. The basic idea of the SRP is that once function should do just one thing but do it really well. 

It's also a good time to assign who will be doing what. Considering there's a lot you need to accomplish (and research and learn); discuss with your team and divide responsibilities. 

## Release 2 : Make it work in the CLI 
The first step for you should be to make the game work in the CLI. This is the most important step in the entire process of building the game. 

## Release 3 : Beautify
A CLI game is super cool and *cough* nerdy *cough* but users usually prefer beautiful interfaces to play games on. How do we build the interface to work with our CLI game? How do we connect the 2 things? 

## Release 4 : Optimize & Refactor
We have discussed about [Refactoring your code](https://en.wikipedia.org/wiki/Code_refactoring)
Go back to all you have created so far and check if you could optimize your code further. 

- Are there functions you could make more efficient? 
- Is your code [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) enough?

## Release 5 : Features and more Features
Can you think of additional features you can add to the game? How about assigning various keypresses to the various gameplay options? Can we have something else instead of the numbers? Maybe fruits? Cars? Checkout some of the versions that people have created of 2048.
