# Project Specification: TaskFlow Todo App

## Objective

Build a modern browser-based todo application that helps users track tasks, completion state, and filtered task views.

## Core Requirements

- Users can add a task by entering text and submitting the form.
- Users can mark a task as completed or return it to active status.
- Users can delete tasks.
- Users can filter visible tasks by All, Active, or Completed.
- Tasks persist after page refresh using `localStorage`.
- The interface is clean, responsive, professional, and animated with subtle transitions.

## Technical Requirements

- Use plain HTML, CSS, and JavaScript.
- Keep the project static with no build tooling.
- Store task data as JSON in `localStorage`.
- Render task items dynamically from JavaScript state.
- Support keyboard-friendly form submission and accessible labels.

## Data Model

Each task contains:

```js
{
  id: "unique-task-id",
  text: "Task description",
  completed: false,
  createdAt: 1710000000000
}
```

## Acceptance Criteria

- Adding a task immediately displays it in the task list.
- Completing a task updates counts and visual styling.
- Deleting a task removes it from the list and storage.
- Filter buttons show the correct task subset.
- Refreshing the page preserves existing tasks.
- The app remains usable on mobile and desktop screens.
