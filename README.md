[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378480&assignment_repo_type=AssignmentRepo)

# New Austin Trail

By: Helena Whiteford

### Design Intentions

My primary intention was to make a clock that had inspiration drawn from Mark Ferrari's "Living Worlds" clock, an animated landscape clock using color-cycling techniques. I loved how it was technically a clock but intentionally impractical and I wanted to emulate that. I decided to limit the scenery to a Wild West landscape because I love the aesthetic.

### External Influence & Inspiration

-   [Living Worlds](http://www.effectgames.com/demos/worlds/) by Mark Ferrari
-   Pixel art & animations: Inspired by retro video games, such as Oregon Trail, and contemporary artists on [itch.io](https://itch.io/game-assets/tag-pixel-art/tag-wild-west) or [Pinterest](https://pin.it/7Ei8Hfbey)

### Design Process & Journal

From the start, I knew I wanted my clock to lean heavily into impracticality—the concept of a useless clock was simply too enjoyable to pass up. In the brainstorming phase, I came up with multiple impractical ideas, including requiring users to solve puzzles or mazes to reveal the time. However, I was drawn to the charm and nostalgia of idle animations in retro video games, so I settled on depicting what was happening just off-screen from where a player might be active. What if real time was passing when the player was offline?

I began developing my sprites using a pixel art studio called Piskel. Initially, I considered drawing directly into the `draw_clock()` function, which would open up more feature opportunities later. However, to preserve my sanity, I opted for using an external app to draw sprites and loaded each as an image. This stage involved considerable trial and error, especially with animations for the tree and the moving train.

The greatest learning curve in this project involved understanding the `translate()` and `rotate()` functions in P5.js—something I'm still grasping fully. Despite this, some happy accidents occurred, significantly enhancing the tumbleweed animation used to represent minutes.

This project taught me much about pixel art, a stark difference from the art styles I'm used to. Scale was my biggest challenge, particularly with the vulture sprite. Early versions made the vulture appear as large as the cowboy sprite, as if to say a vulture the size of an adult human. After several iterations and simplifications, I achieved a vulture design that satisfied me, and I still find it cute.

Several ambitious ideas had to be abandoned due to limitations within p5’s framework. For example, I intended to include an interactive element where hitting the vulture three times triggered the vulture to squawk in annoyance, but p5's rapid iteration structure prevented its feasible implementation.

The day-night cycle was my final addition, and I'm particularly pleased with the outcome. Drawing each sprite directly within `draw_clock()` would have simplified this process significantly, allowing straightforward colour changes with the `fill()` function. Instead, I wrestled with the more complex `tint()` function, eventually reaching a satisfying result. Colour theory was not an expected learning experience from this project.