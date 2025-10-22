---
title: "Assignment 3: Interactive Archive"
---
Assigned: October 20, 2025\
**DUE: November 3, 2025 at 12:00PM Noon**

# Overview

In this assignment you’ll create an archive of elements that can be rearranged. As a starting point,
consider a collection of images, but you can use other elements if you'd like. There are two important considerations:

**The source of your elements:**
Ideally, choose one of the following:
* A collection of items stored in a JSON file
* A collection of items retrieved from a web API
* Elements added or uploaded by the user

**An interaction for arranging them:**
Some examples:
* Moving them around within a grid or placing them within categories
* Changing the order of items
* Adding or deleting items

# Creative Considerations

* What are you collecting and what does it mean to rearrange these items?
* What structures do you want to provide your user to help them organize? e.g. a timeline, categories, boxes, etc.
* If you are providing items, what is their significance?
    - If you are allowing users to upload items, what prompt are you giving them to guide what they contribute?

# Phases

## Phase 1: Design

**Be prepared to discuss this design on Monday, October 27.

* Identify what sort of images or other items your interface will contain
* Write out how users will rearrange the images (timeline, grid, freeform, categories, etc.).
* Gather your images if you are providing them or identify an API source

## Phase 2: Develop

- Sketch or outline how the interface will look and how images will move.
- Set up a React project with initial state holding your images.
- Develop your interface

# Requirements

- Include at least 15 items
    - The images can be defined in your app or you can provide a way for your user to upload them.
- Allow interactive rearrangement
    - Users must be able to rearrange or otherwise curate the items.
    - The UI should update automatically when the arrangement changes.
- Use React state
    - Use `useState` to keep track of the images and their order or placement.
- Styling
    - Make it visually clear which images are being moved and where they can go.

## Submission Instructions

Your website should be published to the web using GitHub pages. Submit your assignment by submitting **the link to your GitHub repository** in Canvas.