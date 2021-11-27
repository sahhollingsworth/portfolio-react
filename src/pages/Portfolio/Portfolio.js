import React from 'react';
import Project from './Project';
// import project images
import projBudgetTracker from '../../images/projects/budget-tracker_screenshot.png';
import projCelebrityShowdown from '../../images/projects/celebrity-showdown-screenshot.png';
import projWorkoutTracker from '../../images/projects/workout-tracker_screenshot.png';
import projEmployeeTracker from '../../images/projects/employee-tracker-screenshot.png';
import projNotetaker from '../../images/projects/notetaker_screenshot.png';
import projReadmeGen from '../../images/projects/readme-generator_screenshot.png';
import projWorkdayScheduler from '../../images/projects/workday-scheduler_screenshot.png';
import './Portfolio.css';

const projects = [
    {
        name: 'Budget Tracker',
        image: projBudgetTracker,
        production: 'https://budget-tracker-211115.herokuapp.com/',
        repository: 'https://github.com/sahhollingsworth/budget-tracker',
    },
    {
        name: 'Celebrity Showdown',
        image: projCelebrityShowdown,
        production: 'https://powerful-badlands-23075.herokuapp.com/',
        repository: 'https://github.com/sahhollingsworth/celebrity-showdown',
    },
    {
        name: 'Workout Tracker',
        image: projWorkoutTracker,
        production: 'https://workout-tracker-211115.herokuapp.com/',
        repository: 'https://github.com/sahhollingsworth/workout-tracker',
    },
    {
        name: 'Employee Tracker',
        image: projEmployeeTracker,
        repository: 'https://github.com/sahhollingsworth/employee-tracker',
    },
    {
        name: 'Notetaker',
        image: projNotetaker,
        production: 'https://sleepy-reef-64762.herokuapp.com/',
        repository: 'https://github.com/sahhollingsworth/note-taker',
    },
    {
        name: 'ReadMe Generator',
        image: projReadmeGen,
        repository: 'https://github.com/sahhollingsworth/readme-generator',
    },
    {
        name: 'Workday Scheduler',
        image: projWorkdayScheduler,
        production: 'https://sahhollingsworth.github.io/workday-scheduler/',
        repository: 'https://github.com/sahhollingsworth/workday-scheduler',
    },
]


function Portfolio() {
    return (
        <div className="m-3 px-4">
            <div className= "py-4 d-flex flex-wrap justify-content-center">
                {projects.map((project) => (
                    <Project
                        name = {project.name}
                        image = {project.image}
                        prod = {project.production}
                        repo = {project.repository}
                    />
                ))}
            </div>
        </div>
    );

}

export default Portfolio;