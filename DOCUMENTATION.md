# Condominium Management System

## Project Overview
Condominium Management System is a web application for managing residential buildings.
The system allows users to create buildings, join them, view announcements (feeds),
and manage building-related information.

## Technologies Used
- React (Functional Components, Hooks)
- React Router
- Tailwind CSS
- SoftUni Practice Server (jsonstore)

## Project Architecture
The project follows a component-based architecture.

### Front-End
- `components/` – reusable UI components
- `pages/` – application pages (Home, Dashboard, Buildings, Details)
- `services/` – communication with the backend (fetch requests)
- `hooks/` – custom hooks

### Back-End
The backend is provided by SoftUni Practice Server and uses `jsonstore` for data persistence.
Data is stored in separate collections:
- users
- buildings
- memberships
- feeds

## Data Models

### User
- _id (UUID)
- email
- firstName
- middleName
- lastName
- role
- _createdOn

### Building
- _id (UUID)
- address
- manager
- entranceFee
- apartmentsAcc
- imageUrl
- _createdOn
- _ownerId (optional)

### Membership (connection model)
- _id (UUID)
- userId
- buildingId
- _createdOn

### Feed
- _id (UUID)
- userId
- buildingId
- message
- _createdOn

## Application Flow
1. Users can view buildings on the dashboard.
2. Buildings can be created without a manager.
<!-- 3. Users can join buildings.
4. Managers can be assigned later through editing.
5. Feeds allow communication between residents. -->