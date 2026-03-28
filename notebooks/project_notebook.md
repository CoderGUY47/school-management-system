# Project Notebook

This document provides an overview of the project structure and the purpose of each file and folder.

## Project Setup

The project is a Next.js application built with TypeScript and styled with Tailwind CSS.

- **Next.js:** A React framework for building server-side rendered and statically generated web applications.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

### Key Configuration Files:

- **`next.config.ts`:** Configures the Next.js application, including image optimization and remote patterns.
- **`package.json`:** Lists the project dependencies, scripts, and metadata.
- **`tailwind.config.js`:** Configures Tailwind CSS, including custom themes, fonts, and content paths.
- **`tsconfig.json`:** Configures the TypeScript compiler options, including paths, libraries, and module resolution.

## Root Directory Structure

- **`.next/`:**  A directory where Next.js stores its build output, cache, and other generated files. This directory is automatically managed by Next.js and should not be modified manually.
- **`node_modules/`:** Contains all the project's dependencies (npm packages). This directory is managed by npm or yarn and should not be version controlled.
- **`public/`:**  A directory for static assets that are publicly accessible from the root of the application. This is the ideal place for images, fonts, and other static files.
- **`src/`:**  The main source code directory for the application. It contains all the pages, components, and API routes.
- **`.eslintrc.json`:** Configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **`.gitignore`:**  A file that specifies which files and folders should be ignored by Git.
- **`next.config.ts`:** The configuration file for Next.js.
- **`package-lock.json`:**  Records the exact version of each dependency used in the project, ensuring that the same setup can be replicated across different environments.
- **`package.json`:**  The manifest file for the project, containing metadata and a list of dependencies and scripts.
- **`postcss.config.js`:** The configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.
- **`README.md`:**  A markdown file that provides a general overview of the project.
- **`tailwind.config.js`:** The configuration file for Tailwind CSS.
- **`tsconfig.json`:** The configuration file for the TypeScript compiler.

## `public` Directory

The `public` directory contains static assets that are served from the root of the application. This includes images, icons, and other files that don't need to be processed by the build pipeline.

- **`images/`:**  This folder contains images used throughout the application, such as profile pictures and course thumbnails.

## `src` Directory

The `src` directory is the heart of the application, containing all the source code.

### `src/app`

This directory contains the core application logic, including pages, layouts, and components.

- **`layout.tsx`:** The root layout for the entire application. It defines the basic HTML structure and includes the global CSS file.
- **`page.tsx`:** The main page of the application, which serves as the entry point for users.
- **`globals.css`:** A global CSS file that applies styles to the entire application.
- **`favicon.ico`:** The favicon for the application.

#### `src/app/api`

This directory contains the API routes for the application.

- **`attendance/route.ts`:**  An API route for managing student attendance.
- **`attendance/save/route.ts`:** An API route for saving attendance data.

#### `src/app/components`

This directory contains reusable React components used throughout the application.

- **`attendence.tsx`:** A component for displaying and managing attendance.
- **`DataTables.tsx`:** A component for displaying data in a tabular format.
- **`ErrorBoundary.tsx`:** A component for catching and handling errors in the application.
- **`Modals.tsx`:** A component for creating modal dialogs.
- **`ProfileSettings.tsx`:** A component for managing user profile settings.
- **`SignIn.tsx`:** A component for user authentication.
- **`StatsCards.tsx`:** A component for displaying statistics in card format.
- **`TeacherCard.tsx`:** A component for displaying teacher information.

#### `src/app/profile`

This directory contains the user profile page.

- **`page.tsx`:** The user profile page, which displays user information and allows them to update their profile.

#### `src/app/teacher`

This directory contains pages related to the teacher dashboard.

- **`attendance/page.tsx`:** A page for teachers to view and manage student attendance.
- **`attendance/[classId]/[section]/page.tsx`:** A dynamic route for displaying attendance for a specific class and section.

#### `src/app/teachers`

This directory contains a page for listing all the teachers.

- **`page.tsx`:** A page that displays a list of all teachers in the school.