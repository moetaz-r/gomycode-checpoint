# TaskFlow Todo App

A clean, responsive task tracker built with HTML, CSS, and JavaScript. Tasks are saved in `localStorage`, so the list persists after refreshing the browser.

## Features

- Add new tasks
- Mark tasks as completed or active
- Delete tasks
- Filter by All, Active, and Completed
- Persistent browser storage with `localStorage`
- Responsive layout for desktop and mobile
- Smooth UI transitions and accessible form controls

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
`-- PROJECT_SPEC.md
```

## How to Run

Open `index.html` in a browser. No build step, dependency install, or external server is required.

## Storage

Tasks are stored under the `localStorage` key:

```text
taskflow.tasks
```

## Browser Support

The app uses modern browser APIs including `localStorage`, with a built-in fallback for task IDs.
