# Main Page Notebook (`src/app/page.tsx`)

This document provides a detailed breakdown of the `src/app/page.tsx` file, which serves as the main entry point and primary dashboard for the application after a user logs in.

## Overview

This file is the heart of the administrative dashboard. It's a complex component that manages the application's main state, handles user authentication, and brings together various smaller, reusable components to build the complete user interface.

## Core Responsibilities

### 1. Authentication Handling

- **Login Gate**: The first thing this component does is check if the user is authenticated by looking for a flag in the browser's local storage.
- **Renders `SignIn` Component**: If the user is *not* authenticated, it renders the `SignIn` component, which displays the login form. The rest of the dashboard is hidden until the user successfully signs in.
- **Sign Out**: It contains the `handleSignOut` function, which clears the authentication status from local storage and returns the user to the `SignIn` page.

### 2. State Management

This component acts as a central hub for managing the application's state. It uses React's `useState` hook extensively to manage:

- **Authentication Status**: `isAuthenticated` and `isLoading` to track the login state.
- **Modal Visibility**: State variables like `showEditStudentModal`, `showAddTeacherModal`, and `showSettings` control when to show or hide the various pop-up modals.
- **Form Data**: It holds the data for the "add" and "edit" forms for students, teachers, and employees (e.g., `studentFormData`, `newTeacherFormData`).
- **Search and Filter Terms**: Manages the text that users type into the search bars to filter the data tables.
- **User Profile & Settings**: Holds the current user's profile information and settings like `darkMode` and `notifications`.
- **Local Data**: It holds the arrays of data for students, teachers, and employees that are displayed in the data tables.

### 3. Component Composition

This page is a perfect example of a "container" component. It doesn't have much of its own visible UI, but instead, it assembles other, smaller components to build the page:

- **`SignIn`**: Used for the login screen.
- **`StatsCards`**: Used at the top of the dashboard to show key statistics.
- **`DataTables`**: Used to display the main tables of students, teachers, and employees.
- **`Modals`**: This component is included to provide all the pop-up functionality for adding, editing, and showing notifications.

### 4. Data Handling and CRUD Operations

- **CRUD Functions**: It contains all the functions for **C**reating, **R**eading, **U**pdating, and **D**eleting (CRUD) students, teachers, and employees.
- **Local Data**: For this version of the application, the data is stored locally within the component's state (e.g., `studentsData`, `teachersData`). The CRUD functions directly modify these arrays.
- **Example**: The `handleDeleteStudent` function filters the `studentsData` array to remove a student, and the `handleUpdateTeacher` function maps over the `teachersData` array to update a specific teacher's information.

### 5. UI and Interactivity

- **Header**: Renders the main header of the dashboard, which includes the application title, navigation links (`Teachers`, `Attendance`, `Profile`), and user information.
- **Settings Panel**: Manages the opening and closing of the settings modal, where the user can toggle dark mode, notifications, and other preferences.
- **Scroll to Top**: Includes a button that appears when the user scrolls down the page, allowing them to quickly jump back to the top.
