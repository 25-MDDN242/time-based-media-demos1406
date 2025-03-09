[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378480&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

25/02/25: Started brainstorming my ideas today. I really liked the idea of a super unreadable clock but different things happen at different times. All my ideas are very centred around impractical - like I had an idea to do something with a maze, maybe the user would have to complete a randomly generated maze to be rewarded with the time or I could draw a maze that if you drew a clear line through the correct route, the line would show the time. What I have landed on is an pixel art game pretending to be clock. Like the game is happening off screen and we just get to see whats happening in between the gameplay. I think a Wild West setting would be sweet for a pixel art game.

27/02/25: Started drawing the sprite of the tree in Piskel (a drawing program for pixel art) and immediately started to see if I could animate it the way I was imagining. Just so I could gauge how long that would take me and if this idea is even plausable.. A lot of trial and error but looking very possible.

01/03/25: Cleaned up the tree code a little bit by storing each leaf's information on their x and y in an array. This way it would be a shorter amount of code in draw_clock() - just one line in a for loop. And also it would be easier to change the x coord every second for the animation. 

03/03/25: I tried to give the train animation besides just slowly moving across the screen, specifically making it look like it was bouncing. I'd also like to make steam but I think I'll save that. It was a struggle to get the animation down for the train because it kept stuttering. Will need to work on that. Also added clouds to scroll behind the mountains but in front of the blue. Decided against making them connected to the time objects.

04/03/25: First try at OOP - even more trial and error. It immediately caused issues with the train stuttering. I think I'm way over-coding everything, though. Also I finished the Maeda clock and got to experiment with maps. 

05/03/25: I was just over-thinking the issues with the train movement. It looks way better and it arrives on time. So far I have got a train that moves from left to right on the first minute of the hour, a cowboy that snores when you hold press on him and a moving tree.

06/03/25: Started thinking about what to do to represent the minutes. Tumbleweed seems like a good option, it is a classic Wild West stereotype. I also want to think about changing the movement of each of my sprites to match the classic retro style of pixel animation.
To think about:
    - Tumbleweed
    - Changing the animation style
    - Adding a vulture to be the alarm (or idea can be workshopped)
    - Changing it so just clicking once will reveal the text