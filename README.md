# Qantas Code Challenge App

This React application showcases Qantas' operational airports worldwide. It features a dual-screen interface: an airports list view, and a detailed airport information view, powered by data from a JSON API.

To enhance the airport details display, the application integrates with a currency Node module with fallback to a currency API to show relevant currency information for each airport's location. While this wasn't part of the original dataset, it was required by the wireframe design and adds valuable context to each airport's profile.

Performance optimization is achieved through in-memory caching of both airport and currency data. To handle the extensive airport dataset efficiently, the application implements virtualized scrolling - rendering only the airports visible in the viewport. This approach ensures smooth scrolling and optimal performance, even with large datasets.

The airport details view is organized for maximum clarity, featuring:
- Essential information displayed prominently
- Secondary data (geographical and administrative details) tucked into expandable sections
- Clean, intuitive layout for improved user experience

A custom Boeing-747 spinner animation appears during loading states, adding a thematic touch to the application's aviation context.

## Features

- Lists all available airports.
- Shows detailed information for each selected airport.
- Responsive design for optimal viewing on various devices.

## Getting Started

### Prerequisites

- Node.js (version 20+)
- Package manager (npm or yarn)

### Installation

1. Copy to the destination folder

2. Navigate to the project directory:

   ```
   cd qantas-code-challenge
   ```

3. Install the dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

### Running the Application

To start the application in development mode, run:

```
npm start
```

or

```
yarn start
```

This will start the development server and open the application in your default web browser. You can also access it at `http://localhost:3000`. If the port is not available, the system shall offer alternative port with options yes/no.

### Running Tests

To run the unit tests, use the following command:

```
npm test
```
or
```
yarn test
```

This will execute the tests defined in the `tests` directory.

## Project Structure

- `public/index.html`: Main HTML file.
- `src/hooks/`: data hooks to fetch and cache airport data and currencies.
- `src/components/`: Contains reusable components for the application.
- `src/screens/`: Contains screen components for different views.
- `src/App.tsx`: Main application component.
- `src/index.tsx`: Entry point for the React application.
- `src/routes.tsx`: Defines application routes.
- `src/types/airport.ts`: TypeScript interfaces for airport data.
- `tests/`: Contains unit tests for components.