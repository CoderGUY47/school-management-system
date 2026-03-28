# API Attendance Notebook

This document explains how to use the API endpoints in the `api/attendance` folder.

## Fetching Attendance Data

To get the attendance data for a specific class and section on a given date, you need to send a `GET` request to the `/api/attendance` endpoint with the following query parameters:

- `date`: The date for which you want to fetch the attendance data (e.g., `2025-08-16`).
- `classId`: The ID of the class (e.g., `1`).
- `section`: The section of the class (e.g., `A`).

Here's an example of how you can fetch the data in a React component using the `fetch` API:

```typescript
async function getAttendanceData(date: string, classId: number, section: string) {
  const response = await fetch(`/api/attendance?date=${date}&classId=${classId}&section=${section}`);
  const data = await response.json();
  return data.students;
}

// Example usage:
const students = await getAttendanceData('2025-08-16', 1, 'A');
console.log(students);
```

## Saving Attendance Data

To save the attendance data, you need to send a `POST` request to the `/api/attendance/save` endpoint with a JSON body containing the following properties:

- `date`: The date of the attendance.
- `classId`: The ID of the class.
- `section`: The section of the class.
- `statuses`: An object where the keys are the student IDs and the values are their attendance status (`present`, `absent`, or `late`).

Here's an example of how you can save the data in a React component:

```typescript
async function saveAttendanceData(date: string, classId: number, section: string, statuses: Record<string, 'present' | 'absent' | 'late'>) {
  const response = await fetch('/api/attendance/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date, classId, section, statuses }),
  });
  const result = await response.json();
  return result;
}

// Example usage:
const result = await saveAttendanceData('2025-08-16', 1, 'A', {
  '1-A-1': 'present',
  '1-A-2': 'absent',
  '1-A-3': 'late',
});
console.log(result);
```

These API routes are designed to work with a backend cache server running on `http://localhost:4000`. The `GET` route fetches data from the cache and merges it with dummy data, while the `POST` route saves the data to the cache.
