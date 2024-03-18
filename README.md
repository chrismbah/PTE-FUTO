# PTE-FUTO

- Polymer and Textile Engineering Department, FUTO

## Overview

PTE-FUTO is an E-Learning platform I have built to solve certain problems college students face in their day to day life.

<b>Problem:</b> Students often struggle to find all the resources they need for success in one place. Course outlines, learning materials, textbooks, and GPA calculators can be scattered across different websites or physical locations.

<b>Solution:</b> My E-learning platform offers a centralized hub for students, providing:

- <b> Course Outlines: </b> Easy access to course syllabi and structures.
- <b> Learning Resources: </b> Downloadable PDFs, files, materials, manuals and textbooks relevant to their studies.
- <b> GPA Calculator: </b> A tool to track and calculate their academic performance.
- <b> Blog: </b> Educational and Informative content, tips, and updates for students.
- <b> Student Dashboard: </b> A personalized workspace for managing their learning journey.

<b>Overall Benefits: </b>

- Improved organization and accessibility of learning materials.
- Streamlined study process and easier tracking of academic progress.
- Access to valuable educational content and resources.

This platform has the potential to be a valuable resource for students, saving them time and effort in finding the information they need to succeed.

## Features

- User Authentication (Custom Student's Registeration).
- Student Profile and Update Student Profile.
- Notification System.
- GPA Calculator (with predetermined courses and credit units for all levels )
- Course Outlines of all courses in all levels in the department.
- Learning Resources ( Including handouts, textbooks, and past questions ) of all courses in all levels in the department.
- Student Dashboard and Personalized workspace.
- Blog section on articles related and non-related to the department.
- Create and delete comments and replies on each blog.
- About Department section including its history, philosophy, objectives and a timeline of the head of departments.
- Department Image Gallery Section

## Screenshots

![Screenshot 1](</public/img/screenshots/Screenshot (4).png>)
Home Page

![Screenshot 2](</public/img/screenshots/Screenshot (5).png>)
About Section

![Screenshot 3](</public/img/screenshots/Screenshot (11).png>)
Student's Dashboard with personalized learning resources, gpa calculator and course outlines

![Screenshot 3](</public/img/screenshots/Screenshot (13).png>)
Login page

## Installation

1. Clone the repository: `git clone https://github.com/chrismbah/PTE-FUTO.git`
2. Navigate to the project directory: `cd PTE-FUTO`
3. Install dependencies: `npm install`

## Usage

1. Run the app: `npm run dev`
2. Open your web browser and go to: `http://localhost:5173`

## Tech Stack

### Client
- React
- Typescript
- Tailwind CSS
- Flowbite Tailwind UI Component Library
- React Framer Motion (Animations)
- Vite

### Server
- Firebase



## Environent Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_FIREBASE_API_KEY`
`REACT_APP_FIREBASE_AUTH_DOMAIN`
`REACT_APP_FIREBASE_PROJECT_ID`
`REACT_APP_FIREBASE_STORAGE_BUCKET`
`REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
`REACT_APP_FIREBASE_APP_ID`
`REACT_APP_MEASUREMENT_ID`

## Live Demo

Check out the live demo of this platform : [Live Demo](https://pte-futo.vercel.app)
