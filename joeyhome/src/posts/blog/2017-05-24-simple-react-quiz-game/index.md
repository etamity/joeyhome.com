---
title: A Simple React Quiz Gamecover (Made with React + Redux)
author: etamity
tags: ["Projects", "Tech", "React"]
featuredImage: ./cover.png
date: '2017-05-24'
draft: false
---

## Millionaire Quiz Game - React Demo App

[Github](https://github.com/etamity/Millionaire-Quiz-Game) 

### Introduction

This is a simple React Quiz Game made with React, Redux, and React-Router, all questions sample data are from internet.

Project Starter Kit:
https://github.com/davezuko/react-redux-starter-kit

### Configurations

#### Append New Question
Please feel free to edit file under  `/public/data.json` append new question into `data.json` array.
This is sample question structure:

    {
      "question":"A flashing red traffic light signifies that a driver should do what?",
      "A":"stop",
      "B":"speed up",
      "C":"proceed with caution",
      "D":"honk the horn",
      "answer":"A",
      "id":0
     }

#### Random Picked Questions
Please go to : `src/route/Home/modules/QuizReducer.js`

You will see initial state defined at `line 110`

    const initialState = {
	  questions: [],
	  answers: [],
	  submited: false,
	  showNumOfQuiz: 10
	}
Default show 10 random questions from library, please change `showNumOfQuiz` to what you want.

### Install Dependencies

    yarn install

### Start the server

This command serves the app at `http://localhost:3000` and provides basic URL
routing for the app:

    yarn start

### Testing

    yarn test

![Millionaire Quiz Game](./preview.png)