
### Explanation of Project

- **Overview**: Introduces the project and its inspiration.
- **Features**: Highlights the key features of the game.
- **How to Play**: Provides simple instructions for playing the game.
- **Game Rules**: Explains the rules in detail, including objectives, movement mechanics, and win/lose conditions.
- **Prerequisites**: Lists the tools and knowledge required to run the project.
- **Technologies Used**: Describes the libraries and technologies used in the project.
- **File Structure**: Shows the organization of files and folders.
- **Credits**: Acknowledges resources and provides links for further exploration.


# Red Light, Green Light Game (Squid Game Inspired)

## Overview
This project is a 3D implementation of the "**Red Light, Green Light**" game inspired by the popular **Netflix series Squid Game**.  
Built using **[Three.js](https://threejs.org/docs/)** for rendering **3D graphics** and **[GSAP](https://greensock.com/docs/)** for smooth animations, this interactive game allows players to control a sphere and navigate across a track while avoiding detection by a rotating doll model.  
The goal is to move from the starting position to the finish line without being caught moving when the doll is looking forward. If you succeed, you win; otherwise, you lose!

---

## Features
- **3D Environment**: Interactive 3D world with a track, doll, and progress bar.
- **Dynamic Animations**: Smooth doll rotations and player movement using GSAP.
- **Game Logic**:
  - Move when the doll looks backward; stop when it looks forward.
  - Win by crossing the finish line or lose if caught moving.
- **Progress Bar**: Shrinks over time to indicate the countdown.

---

## How to Play
- Use the **Arrow Up** key to move the player forward.
- Avoid moving when the doll is looking forward.

---

## Game Rules
### **Objective**
Move the player from the starting position to the finish line within the given time limit.

### **Movement**
- Press the **Arrow Up** key to move forward.
- Release the key to gradually stop the player.

### **Doll Behavior**
- The doll alternates between looking backward and forward at random intervals.
- You can only move when the doll is not looking forward.

### **Win/Lose Conditions**
- **Win**: Cross the finish line before the time runs out.
- **Lose**:
  - Move when the doll is looking forward.
  - Fail to cross the finish line before the time runs out.

---

## Prerequisites
- Basic knowledge of JavaScript, HTML, and CSS.
- A modern web browser (e.g., Chrome, Firefox, Edge).
- Node.js (optional, if you want to use a local server).

---

## Technologies Used
- **[Three.js](https://threejs.org/docs/)**: Renders 3D graphics.
- **[GSAP](https://greensock.com/docs/)**: Handles animations.
- **HTML/CSS/JavaScript**: Structures and styles the game.

---

## File Structure
project-folder/
├── index.html       # Main HTML file
├── css/
│   └── style.css    # Stylesheet
├── js/
│   ├── main.js      # Game logic
│   ├── three.min.js # Three.js library
│   ├── GLTFLoader.js # Loads 3D models
│   └── gsap.min.js  # GSAP animation library
├── models/          # 3D doll model

---

- **3D Doll Model**: Created by [Sketchfab Community](https://sketchfab.com/).
- **Three.js Documentation**: [https://threejs.org/docs/](https://threejs.org/docs/)
- **GSAP Documentation**: [https://greensock.com/docs/](https://greensock.com/docs/)

## Open in Visual Studio Code

Click the button below to open this project directly in Visual Studio Code:

[![Open in Visual Studio Code](https://img.shields.io/badge/Open%20in-VSCode-blue?logo=visualstudiocode)](https://github.dev/KadamTejashwini21/Squid-Game-Gaint-Doll)


