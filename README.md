# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

7. [Github markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (packages, libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

### v0.1

Uses the forever feature to switch between two faces: [Program](Activity_1.js)

### v0.2

Switches between two faces when A or B are pressed: [Program](Activity_2.js)

### v0.3

Score keeper for two player game using A and B inputs: [Program](Activity_3.js)

### v0.4

Rock paper scissors using shake as an input and using a random number generator: [Program](Activity_4.js)

### v0.5

Creates a sprite that moves around the edges when A is pressed and plots and unplots LEDs on the display: [Program](Activity_5.js)

### v0.6

Spawns up to three sprites that move around the display based on a random number generator using A, B and AB as inputs: [Program](Mini_Project.js)

### v0.7

Uses an LED plot to toggle between faces: [Program](Activity_7.js)

### v0.8

Coin flip game that uses conditionals to determine the winner: [Program](Activity_8.js)

### v0.9

Binary converter that uses a binary number in the form of a string and converts it to a decimal: [Program](Activity_9.js)

### v0.10

Uses the radio feature to send Marco and Pollo between two microbits: [Program](Activity_10.js)

### v0.11

A word game inspired by Ellen DeGeneres: [Program](Activity_11.js)

### v0.12

User plays as a cat and tries to catch a mouse using A and B as controls: [Program](Final_Project.js)


## Designs


### Mini-project

#### Goal

The goal of this mini-project was to try and connect the ideas used in activities 1-5 into one program.

#### Design process

I started by looking at the mini-project [ideas](https://makecode.microbit.org/courses/csintro/miniproject/project) and saw the moving monster idea which I found interesting. While doing this idea I ran into the problem of how the monster would move. The solution that I found was to use a random number generator with some if statements so that the movement of the monsters would be random. After I had initially finished it I realized that it didn't look like much was happening since at the time the monster would spawn move around then just stop after about 100 iterations. To combat this I made it so that if you pressed A, B or A and B at the same time a new monster would spawn and be able to move around. This allowed up to three monsters to be present at the same time. 

#### JS Constructs & Objects

1. pause
2. if
3. else if
4. math.random
5. variables
6. "game." objects
7. for loops
8. button inputs

### Final project

#### Goal

The goal of this final project was to try and connect the ideas of used in all the activities throughout the [CS intro course.](https://makecode.microbit.org/courses/csintro)

#### Design process

Thinking up ideas for this program was rather difficult since the section did not have listed project ideas like the mini-project. I decided that since I was using the idea of building off of previous ideas I would do something similar to the mini-project but put a spin on it so that it would be different. However; rather than just making another simulation type program I made a game that depended on the users input in order for it to function. This allowed me to use more JS constructs and objects to the program covering more of the topics. One big issue I had when putting together this program was with how the user was supposed to move the cat with the buttons. Since I wanted to use booleans I had it to where you would press a button to toggle true on a boolean and that would tell the program that you wanted to turn left or right. The issue arose when I realized that even though you pressed the left button the sprite would continue in a straight line and not actually turn. To solve the issue I enabled the snail mode so I could watch what happened during each part of the code and found out that the order of where I put the onButtonPress was wrong. I had initially placed it at the bottom so that it wouldn't change the boolean state until the end but by the time the program checked for the status, the boolean would already be reset to false. I ultimately just had to move the onButtonPress above the while loop.

#### JS Constructs & Objects

1. "game." objects
2. LED brightness
3. booleans
4. button inputs
5. if
6. else if
7. pause
8. while loop
9. variables
10. math.random
11. coordinates
