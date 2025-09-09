# Student Manager (EN)

A simple **Angular + Node.js + SQLite** web application to manage students and their grades.
This project is designed as a learning exercise for **Angular standalone components**, **HTTP client communication**, and **database integration**.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [How It Works](#how-it-works)
* [Getting Started](#getting-started)
* [Usage](#usage)

---

## Features

* Add new students with name and grade
* Display a list of students with their grades
* Remove students from the list
* Persists data in a local **SQLite database**
* Live updates using **Angular signals** and `ngModel`

---

## Tech Stack

* **Frontend:** Angular 17 (Standalone Components, Signals, HttpClient)
* **Backend:** Node.js + Express
* **Database:** SQLite (via `better-sqlite3`)
* **Communication:** HTTP REST API (`GET`, `POST`, `DELETE`)

---

## Project Structure

```
angular-crash/
├── src/
│   ├── app/
│   │   ├── hello.html       # Component template
│   │   ├── hello.css        # Component styles
│   │   └── hello.ts         # Angular component logic
│   ├── main.ts              # Angular entry point
│   └── app.module.ts        # App module (if not standalone)
├── student-api/
│   ├── server.js            # Express backend
│   └── Students.Db          # SQLite database
└── package.json
```

---

## How It Works

1. **Frontend:**

   * `Hello` component uses **signals** to store the list of students.
   * `ngModel` is used for two-way binding with the input fields (`name` and `grade`).
   * `HttpClient` sends requests to the backend (`GET` to load students, `POST` to add, `DELETE` to remove).

2. **Backend:**

   * Express server exposes REST endpoints:

     * `GET /students` → fetch all students
     * `POST /students` → add a new student
     * `DELETE /students/:id` → remove a student by ID
   * Data is stored in SQLite via `better-sqlite3`.

3. **Database:**

   * Table `students` with columns `id`, `name`, `grade`.
   * Auto-incremented `id` ensures unique student IDs.

---

## Getting Started

1. **Clone the repository:**

```bash
git clone <repo-url>
cd angular-crash
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the backend:**

```bash
node student-api/server.js
```

Server will run at `http://localhost:3000`

4. **Start the frontend:**

```bash
ng serve
```

Frontend will run at `http://localhost:4200`

---

## Usage

1. Open the app in your browser at `http://localhost:4200`.
2. Add a student by typing a name and grade, then click `Add`.
3. Students appear in a list below the input.
4. Remove students by clicking `Remove` next to their name.
5. The total number of students is displayed dynamically.

---

**This project demonstrates:**

* Angular standalone components and signals
* RESTful API communication using HttpClient
* Simple SQLite CRUD operations with Node.js/Express

---
---
# Student Manager (DE)

Eine einfache **Angular + Node.js + SQLite** Webanwendung zur Verwaltung von Schülern und deren Noten.
Dieses Projekt dient als Lernübung für **Angular Standalone-Komponenten**, **HTTP-Client-Kommunikation** und **Datenbankintegration**.

---

## Inhaltsverzeichnis

* [Funktionen](#funktionen)
* [Technologien](#technologien)
* [Projektstruktur](#projektstruktur)
* [Funktionsweise](#funktionsweise)
* [Installation](#installation)
* [Benutzung](#benutzung)

---

## Funktionen

* Neue Schüler mit Name und Note hinzufügen
* Eine Liste aller Schüler mit ihren Noten anzeigen
* Schüler aus der Liste entfernen
* Daten werden in einer lokalen **SQLite-Datenbank** gespeichert
* Live-Aktualisierung mit **Angular Signals** und `ngModel`

---

## Technologien

* **Frontend:** Angular 17 (Standalone-Komponenten, Signals, HttpClient)
* **Backend:** Node.js + Express
* **Datenbank:** SQLite (via `better-sqlite3`)
* **Kommunikation:** REST API (`GET`, `POST`, `DELETE`)

---

## Projektstruktur

```
angular-crash/
├── src/
│   ├── app/
│   │   ├── hello.html       # Component Template
│   │   ├── hello.css        # Component Styles
│   │   └── hello.ts         # Angular Component Logic
│   ├── main.ts              # Angular Entry Point
│   └── app.module.ts        # App Module (falls nicht Standalone)
├── student-api/
│   ├── server.js            # Express Backend
│   └── Students.Db          # SQLite Datenbank
└── package.json
```

---

## Funktionsweise

1. **Frontend:**

   * Die `Hello` Komponente nutzt **Signals**, um die Liste der Schüler zu speichern.
   * `ngModel` ermöglicht die Zwei-Wege-Bindung für die Eingabefelder (`Name` und `Note`).
   * `HttpClient` sendet Anfragen an das Backend (`GET` zum Laden, `POST` zum Hinzufügen, `DELETE` zum Entfernen).

2. **Backend:**

   * Express Server stellt REST-Endpunkte bereit:

     * `GET /students` → Alle Schüler abrufen
     * `POST /students` → Neuen Schüler hinzufügen
     * `DELETE /students/:id` → Schüler nach ID entfernen
   * Daten werden in SQLite über `better-sqlite3` gespeichert.

3. **Datenbank:**

   * Tabelle `students` mit Spalten `id`, `name`, `grade`
   * Automatisch inkrementierte `id` garantiert eindeutige Schüler-IDs

---

## Installation

1. **Repository klonen:**

```bash
git clone <repo-url>
cd angular-crash
```

2. **Abhängigkeiten installieren:**

```bash
npm install
```

3. **Backend starten:**

```bash
node student-api/server.js
```

Server läuft unter `http://localhost:3000`

4. **Frontend starten:**

```bash
ng serve
```

Frontend läuft unter `http://localhost:4200`

---

## Benutzung

1. Öffne die App im Browser unter `http://localhost:4200`
2. Füge einen Schüler hinzu, indem du Name und Note eingibst und auf `Add` klickst
3. Schüler erscheinen in einer Liste unter den Eingabefeldern
4. Schüler können über den `Remove` Button entfernt werden
5. Die Gesamtanzahl der Schüler wird dynamisch angezeigt

---

**Dieses Projekt demonstriert:**

* Angular Standalone-Komponenten und Signals
* REST API-Kommunikation mit HttpClient
* Einfache CRUD-Operationen mit SQLite und Node.js/Express
