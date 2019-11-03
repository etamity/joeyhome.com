---
title: "Learn coding from making games"
author: etamity
tags: ["Projects", "Tech"]
featuredImage: ./cover.png
date: '2018-11-24'
draft: false
---

## How does computer games being made?

Have you ever wondered how games is being made? Making games is not that hard of you think, just need some ideas, and drag few code blocks, the most fun game prototype is being created! 

## Google Blockly make games

Make Game is an experimental project let people make games and learn coding with simple drag & drop blocks.

![make-game](./make-game.png)

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli)

    npm install -g polymer-cli

Install gulp-cli

	npm i -g gulp-cli

##### Install project dependencies

    npm install & bower install

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    gulp watch

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies.

    gulp build

### Demo
http://makegame.s3-website-eu-west-1.amazonaws.com