# Rick & Morty API Challenge

## Technologies Used

- **Frontend:** React, TypeScript, Next.js, Tailwind CSS
- **Backend:** NextJS (Client-side application with localStorage for persistence)
- **API:** Rick & Morty API (REST Endpoint)

## Implementation Details

### Choice of Endpoint

The project utilizes the REST endpoint of the Rick & Morty API. This decision was made because the project requirements did not necessitate complex querying or real-time data updates, which are better suited for a GraphQL endpoint. The REST endpoint provides sufficient data for the application's needs and simplifies the implementation process.

### Technology Stack

The chosen technology stack includes React for building user interfaces, TypeScript for static type-checking, Next.js for server-side rendering and routing, and Tailwind CSS for rapid UI development with utility-first CSS.

### Frontend Design and Implementation

The frontend is designed to be user-friendly and intuitive, with a responsive layout for seamless viewing on different devices. Location data, including residents and their statuses, is displayed in a visually appealing manner. Users can easily search or filter location results by various criteria.

### Persistence Mechanism

To implement persistence for adding notes about characters, the application uses localStorage. This choice was made because it provides a simple and convenient way to store small amounts of data locally in the user's browser. By utilizing localStorage, users can add and view notes about characters, which persist even after refreshing the page or closing the browser tab.

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Access the application in your browser at `http://localhost:3000`.

## Future Improvements

- Implement server-side pagination and filtering for improved performance with large datasets.
- Enhance the UI with additional animations and transitions for a smoother user experience.

## Conclusion

By leveraging the REST endpoint of the Rick & Morty API and implementing client-side persistence with localStorage, the project achieves its objectives while providing a seamless user experience. With potential future improvements, the application can be further enhanced to offer additional features and functionality.
