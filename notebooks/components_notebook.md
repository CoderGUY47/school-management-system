# Components Notebook

This document provides a detailed overview of the reusable React components in the `src/app/components` folder and their specific roles within the school management system website.

## `attendence.tsx`

- **Purpose**: Displays and manages the attendance sheet for a class.
- **Usage**: This is the core component for the attendance feature. It fetches the list of students for a specific class and date, allows the teacher to mark each student as 'present', 'absent', or 'late', and then saves this information back to the database via an API call. It's the primary component used in the `teacher/attendance` pages.

## `DataTables.tsx`

- **Purpose**: Renders data in organized, interactive tables.
- **Usage**: This component is used to display lists of students, teachers, and other staff members. It includes features like search, pagination, and columns for various details. It also has buttons for adding, editing, and deleting entries, which trigger the corresponding modals.

## `ErrorBoundary.tsx`

- **Purpose**: Catches JavaScript errors in the components it wraps.
- **Usage**: This component acts as a safety net. It is wrapped around major parts of the application (or the entire application) to prevent it from crashing if an unexpected error occurs. When an error is caught, it displays a user-friendly fallback message instead of a broken page.

## `Modals.tsx`

- **Purpose**: Provides various popup dialogs (modals) for user interaction.
- **Usage**: This single component contains the logic for several different modals to keep the UI clean and focused. It's used for:
    - Adding, editing, or deleting students, teachers, and employees.
    - Displaying system settings and user preferences.
    - Showing success, error, or informational pop-up messages to the user.

## `ProfileSettings.tsx`

- **Purpose**: Displays and allows editing of a user's profile.
- **Usage**: This component is the main view for the user profile page. It shows detailed information about the logged-in user, such as their name, email, contact information, and professional details. It includes an "edit" mode to allow users to update their own information.

## `SignIn.tsx`

- **Purpose**: Handles user authentication.
- **Usage**: This is the first component a user interacts with. It provides the login form for administrators to enter their username and password to access the dashboard. It is the main component on the website's homepage.

## `StatsCards.tsx`

- **Purpose**: Displays key statistics in a visually appealing card format.
- **Usage**: This component is used on the main dashboard to give administrators a quick overview of important metrics like the total number of students, teachers, employees, and active courses.

## `TeacherCard.tsx`

- **Purpose**: Displays a summary of a single teacher's information.
- **Usage**: This component is used on the 'Teachers' page to show a list of all teachers. Each teacher is represented by a card that shows their photo, name, subject, and other key details, with buttons to view their full profile or send them a message.
