import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; 
import * as serviceWorker from './serviceWorker';
// import Hello from './Hello';
import GroceryList from './GroceryList';
import App from './App';
import KanbanBoard from './KanbanBoard';

let cardsList = [{
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: [{
            id: 1,
            name: "Playful  Example",
            done: true
        },
        {
            id: 2,
            name: "Kanban Example",
            done: false
        },
        {
            id: 3,
            name: "My own experiments",
            done: false
        }
    ]
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "todo",
        tasks: [{
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },

    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "done",
        tasks: [{
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: true
            },
            {
                id: 3,
                name: "My own experiments",
                done: true
            }
        ]
    },

    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "done",
        tasks: [{
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: true
            },
            {
                id: 3,
                name: "My own experiments",
                done: true
            }
        ]
    },
    


];

ReactDOM.render( <KanbanBoard cards={cardsList}  /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();