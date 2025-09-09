const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('Students.Db');

// Middleware
app.use(cors());
app.use(express.json());

// Create table if not exists
db.prepare(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        grade INTEGER NOT NULL
    )
`).run();

// GET all students
app.get('/students', (req, res) => {
    const students = db.prepare('SELECT * FROM students').all();
    res.json(students);
});

// POST add student
app.post('/students', (req, res) => {
    const { name, grade } = req.body || {};

    if (!name || grade === undefined) {
        return res.status(400).json({ error: 'Name and grade are required' });
    }

    const stmt = db.prepare('INSERT INTO students (name, grade) VALUES (?, ?)');
    const result = stmt.run(name, grade);

    const newStudent = { id: result.lastInsertRowid, name, grade };
    res.json(newStudent);
});

// DELETE student
app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    db.prepare('DELETE FROM students WHERE id = ?').run(id);
    res.json({ success: true });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
