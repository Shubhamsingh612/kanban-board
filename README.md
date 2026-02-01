# Kanban Board

A modern, interactive Kanban board application built with vanilla HTML, CSS, and JavaScript. Organize and manage your tasks efficiently with drag-and-drop functionality and persistent local storage.

## Features

- **Three Task Columns**: Organize tasks into "To Do", "In Progress", and "Done" columns
- **Drag and Drop**: Easily move tasks between columns by dragging and dropping
- **Add New Tasks**: Create tasks with a title and description through a modal interface
- **Delete Tasks**: Remove tasks you no longer need with a delete button
- **Task Counter**: Real-time count of tasks in each column
- **Local Storage**: All tasks are automatically saved to your browser's local storage
- **Dark Theme**: Modern dark-themed UI with smooth animations
- **Responsive Design**: Clean and intuitive user interface

## Project Structure

```
kanban Board/
├── index.html      # Main HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and theme
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

No dependencies required! This project uses only vanilla JavaScript, HTML, and CSS. Just open the `index.html` file in any modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start managing your tasks!

## Usage

### Adding a Task

1. Click the "Add New Task" button in the navigation bar
2. Enter a task title in the input field
3. Enter a task description in the textarea
4. Click "Add Task" to create the task
5. The task will appear in the "To Do" column

### Moving Tasks

1. Click and hold on any task card
2. Drag it to another column (To Do, In Progress, or Done)
3. Release to drop the task in the new column
4. The task count will automatically update

### Deleting Tasks

1. Click the "Delete" button on any task card
2. The task will be removed immediately
3. Task counts will update automatically

### Data Persistence

All your tasks are automatically saved to your browser's local storage. When you refresh the page or return later, your tasks will still be there!

## Technical Details

### Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables and flexbox
- **Vanilla JavaScript**: No frameworks or libraries required
- **Local Storage API**: Browser-based data persistence

### Key Functionality

- **Task Management**: Create, read, update (via drag-and-drop), and delete tasks
- **Drag and Drop API**: Native HTML5 drag and drop functionality
- **Event Handling**: Click, drag, and drop event listeners
- **Data Persistence**: JSON serialization for local storage

### CSS Variables

The project uses CSS custom properties for easy theming:

- `--bg-color`: Background color
- `--primary-text-color`: Text color
- `--bg-task-color`: Task card background
- `--bg-button-color`: Button and column background
- `--delete-color`: Delete button color
- Various padding and border-radius variables for consistent spacing

## Browser Compatibility

This application works in all modern browsers that support:
- HTML5 Drag and Drop API
- Local Storage API
- CSS Flexbox
- ES6 JavaScript features

## Future Enhancements

Potential features that could be added:

- Task editing functionality
- Task priority levels
- Due dates and deadlines
- Task categories or tags
- Search and filter functionality
- Export/import tasks
- Multiple boards support
- User authentication
- Cloud synchronization

## License

This project is open source and available for personal and educational use.

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Enjoy organizing your tasks with this Kanban Board!** 🎯

