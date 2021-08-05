# The Fit Factory

## Setup: Follow these steps exactly:
1. Use terminal to clone this repository
1. `cd` into the directory it creates
```
git clone git@github.com:warrior14/The_Fit_Factory_Capstone.git
cd fitfactory-capstone
```
1. Create an `api` directory outside of the project directory.
1. In the `api` directory, create a copy of the `database.json.example` and remove the `.example` extension.
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Run `npm install` and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.

**Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## What is The Fit Facotry?
The Fit Factory is a workout companion app that will educate and motivate someone who wants to start their fitness journey. As someone who has a passion for health and fitness, there is nothing I find more rewarding than helping someone transform their body and lifestyle for the better. Having more than a decade’s experience in personal training, the most common problems I encounter are that people don’t know the correct form for the exercises they are trying to do (which could lead to injury) and that they lack the motivation to stay disciplined on their workout regimen. These issues could hinder or deter their progress and make them revert to their unhealthy lifestyles. Although there are countless exercise apps out there, they can be very confusing, misleading and expensive. My free app will provide simple and easy to follow exercises that users can implement in their workout routine. In addition, it will display a timer/cooldown countdown for each exercise chosen that includes text to speech feature with Web Speech external API that will communicate with the user.


I built the app with the ReactJS library and incorporated the Web Speech API. The Fit Factory is a CRUD app and is implemented by a flat data-structure utilizing JSON Server along with being styled with Bulma framework and CSS.

I built this app for my Front-End Capstone project for Nashville Software School.

The following are examples of how the resources in your API should look once it is populated with data from the application.

**Note:** This version of The Fit Factory has mock authentication and does not provide secure storage. Please do not save sensitive information in this database!


### users
```json
  {
      "id": 1,
      "name": "Luke Madrazo",
      "email": "fitfam@gmail.com",
      "password": "fitfam"
    }
```
### exercises
```json
    {
      "id": 1,
      "name": "Barbell Squats",
      "description": "The back squat is a basic barbell strength exercise for the lower body with an emphasis on the quads, hamstrings, and glutes. HOW TO DO THIS EXERCISE: Take the bar out of the rack with it resting on your rear shoulder muscles. Take two big steps back and stand with your feet roughly shoulder-width apart, toes pointing slightly out. Keep your spine in alignment by looking at a spot on the floor about two metres in front of you, then “sit” back and down as if you’re aiming for a chair. Descend until your hip crease is below your knee. Keep your weight on your heels as you drive back up.",
      "muscleCategoryId": 1
    }
```
### muscleCategories
```json
   {
      "id": 1,
      "name": "Leg Exercise"
    }
```
### bundleAssociation
```json
 {
      "id": 2,
      "bundleId": 2,
      "exerciseId": 2,
      "sets": "2",
      "setsTimeMinutes": "0",
      "setsTimeSeconds": "5",
      "cooldownTimeMinutes": 1,
      "cooldownTimeSeconds": 0,
      "reps": "30",
      "notes": "i like this one",
      "coolDownTimeMinutes": "0",
      "coolDownTimeSeconds": "5"
    }
```

