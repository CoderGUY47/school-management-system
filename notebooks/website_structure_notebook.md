# Website Structure Notebook

This document explains which file is used for which part of the website, providing a clear overview of the project's structure and how the different files and folders correspond to the different parts of the website.

## Overall Structure

The website is built with Next.js, which uses a file-based routing system. The `src/app` directory is the most important folder, as it contains all the pages, layouts, and components that make up the website.

### Main Pages

- **`src/app/page.tsx`**: This is the main entry point of the website. It renders the `SignIn` component, which is the first thing a user sees when they visit the website.

- **`src/app/profile/page.tsx`**: This page displays the user's profile information. It uses the `ProfileSettings` component to show the user's details and allow them to edit their profile.

- **`src/app/teacher/attendance/page.tsx`**: This page is for teachers to take attendance. It uses the `AttendanceSheet` component to display the list of students and allow the teacher to mark their attendance.

- **`src/app/teacher/attendance/[classId]/[section]/page.tsx`**: This is a dynamic page that shows the attendance for a specific class and section. It also uses the `AttendanceSheet` component, but it's filtered to show only the students in the selected class and section.

- **`src/app/teachers/page.tsx`**: This page displays a list of all the teachers in the school. It uses the `TeacherCard` component to show a summary of each teacher's information.

### Reusable Components

The `src/app/components` folder contains a set of reusable components that are used across different parts of the website. These components help to create a consistent look and feel and make the code easier to maintain.

- **`SignIn.tsx`**: Used on the main page (`src/app/page.tsx`) to allow users to log in.

- **`ProfileSettings.tsx`**: Used on the profile page (`src/app/profile/page.tsx`) to display and edit user information.

- **`AttendanceSheet.tsx`**: Used on the attendance pages (`src/app/teacher/attendance/...`) to manage student attendance.

- **`TeacherCard.tsx`**: Used on the teachers page (`src/app/teachers/page.tsx`) to display teacher information.

- **`DataTables.tsx`**: This is a versatile component that can be used to display any kind of data in a table. It's likely used on a dashboard page to show lists of students, teachers, and employees.

- **`StatsCards.tsx`**: This component is used to display statistics on the dashboard, such as the total number of students, teachers, and courses.

- **`Modals.tsx`**: This component provides a set of modals that can be used anywhere in the application for things like adding new students, editing teacher information, or showing notifications.

- **`ErrorBoundary.tsx`**: This component is used to wrap other components and catch errors, preventing the entire website from crashing.

### API Routes

The `src/app/api` folder contains the backend logic for the website. These API routes are used to fetch data from and save data to the server.

- **`api/attendance`**: This folder contains the API routes for managing attendance. The `GET` route is used to fetch attendance data, and the `POST` route in the `save` subfolder is used to save attendance data.
