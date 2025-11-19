---
title: "Assignment 4: Collaboration"
---
Assigned: October 20, 2025\
**DUE: December 01, 2025 at 12:00PM Noon**

### Overview

In this assignment you’ll use Node.js and WebSockets to create a real time collaborative application. Your users should be able to do something collaborative together such as: 

- Drawing on a shared canvas.
- Moving items or shapes around a board.
- Editing a shared text box or simple document.

### Creative Considerations

- What does it mean to collaborate? How can your interface facilitate healthy collaboration?

### Phases

#### Phase 1: Design & Setup

- Decide what kind of collaboration your app will support (drawing, moving shapes, editing text, etc.).
- Sketch how the interface should look and how two users will interact with it.

#### Phase 2: Develop

- Set up a Node.js server to handle signaling between users.
- Build the WebSockets connection so two users can share actions in real time.
- Implement the shared interaction (canvas, board, or editor) and test that changes sync across both users.
- Add simple styling and indicators to make the collaboration clear.

### Requirements

- Real-Time Collaboration
    - Use WebSockets to connect two users in real-time.
    - Actions from one user should be immediately visible to the other.
- Node.js Server
    - Create a server with Node.js to handle signaling for the WebSockets connection.
- Shared State / Interaction
    - Actions from one user must update the other user’s view in real-time.
- Basic UI
    - Include a simple interface to display the shared content.
    - Show clear indicators of changes (e.g., cursor positions, drawing strokes).
- Two Users Only
    - Limit collaboration to two users.
    - No authentication required — just connect via unique session URL or code.

#### Submission Instructions

Your website should be in a GitHub repository. Submit the **link to your GitHub repository** in Canvas.

We will also be doing in-class demos on December 1st. Prepare to either be able to run your server locally or have a version deployed online for that. **No video walkthrough is necessary this time.**