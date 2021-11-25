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

const projects = [
    {
        name: 'Budget Tracker',
        prod_link: 'https://budget-tracker-211115.herokuapp.com/',
        repo_link: 'https://github.com/sahhollingsworth/budget-tracker',
    },
    {
        name: 'Celebrity Showdown',
        prod_link: 'https://powerful-badlands-23075.herokuapp.com/',
        repo_link: 'https://github.com/sahhollingsworth/celebrity-showdown',
    },
    {
        name: 'Workout Tracker',
        prod_link: 'https://workout-tracker-211115.herokuapp.com/',
        repo_link: 'https://github.com/sahhollingsworth/workout-tracker',
    },
    {
        name: 'Employee Tracker',
        repo_link: 'https://github.com/sahhollingsworth/employee-tracker',
    },
    {
        name: 'Notetaker',
        prod_link: 'https://sleepy-reef-64762.herokuapp.com/',
        repo_link: 'https://github.com/sahhollingsworth/note-taker',
    },
    {
        name: 'ReadMe Generator',
        repo_link: 'https://github.com/sahhollingsworth/readme-generator',
    },
    {
        name: 'Workday Scheduler',
        prod_link: 'https://sahhollingsworth.github.io/workday-scheduler/',
        repo_link: 'https://github.com/sahhollingsworth/workday-scheduler',
    },
]


function Portfolio() {
    return (
        <div>
            <p>portfolio placeholder text</p>
        </div>
    );

}

export default Portfolio;