# Chatbot GenAI Project

## Overview

The **Chatbot GenAI** project is a conversational AI chatbot built using **Google's Gemini API**. This project features a frontend developed with **React** and **Vite**, providing an intuitive, fast, and user-friendly interface. The chatbot interacts with users, delivering intelligent, context-aware responses powered by Gemini's AI capabilities.  This project emphasizes secure API key handling by requiring a backend component (implementation not included in this repository example).

## Technologies Used

- **Frontend**:
    - **React**: JavaScript library for building user interfaces.
    - **Vite**: A next-generation, fast build tool for modern web projects.

- **Backend**: (Implementation Required - See Backend Considerations)
    - **Google Gemini API**: Google's conversational AI API used to generate responses based on user input.  **API key must be handled securely on the backend.**

## Features

- **Conversational AI**: The chatbot generates responses using Google's Gemini API, making the interaction feel natural and dynamic.
- **React Frontend**: The frontend is built with React for a responsive and smooth user interface.
- **Fast Development**: Vite is used for quicker builds and live reloading during development.
- **Secure API Key Handling**:  This project design emphasizes the critical need for a backend to protect your Gemini API key.
**output Images**
  ![Screenshot 2025-02-18 073253](https://github.com/user-attachments/assets/cc7d6475-fdd6-4a1f-885f-28bd1889242c)
  
![Screenshot 2025-02-18 073328](https://github.com/user-attachments/assets/39c8d0c5-3873-44bb-bd33-86aa67b7b555)


## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
2. Install Dependencies (Frontend)
Bash

npm install
3. Configure Gemini API Access (Backend - Required)
Backend Implementation:  You must create a backend service (e.g., Node.js, Python, serverless function) to handle communication with the Gemini API.  This repository only provides the frontend.

Obtain API Key: Go to aistudio.google.com and create a project (if needed). Enable the Gemini API and obtain your API key.  Follow Google Cloud's official documentation for creating credentials or a service account.

Backend Environment: Store your API key securely in your backend environment.  Do not expose the API key in the frontend code.  Use environment variables or a secure configuration mechanism.  Example (Node.js):

JavaScript

// In your backend code (e.g., server.js)
const geminiApiKey = process.env.GEMINI_API_KEY; // Get from environment
4. Frontend Configuration (Environment Variables)
Create a .env file in the root of your frontend project.  This file will hold the URL of your backend:

VITE_BACKEND_URL=http://localhost:3000  // Example: Replace with your backend URL
The VITE_ prefix is essential for Vite.

5. Run the Development Server (Frontend)
Bash

npm run dev
This will start the frontend development server. Open your browser and navigate to the provided URL (usually http://localhost:5173).

6. Run Your Backend
Start your backend service according to its specific instructions.  Make sure it's listening on the URL you configured in the frontend's .env file.
