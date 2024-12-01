# AI Chatbot with OpenAI API

This project is a simple AI chatbot built using React, powered by OpenAI's GPT-3.5-turbo model. The chatbot interacts with users, generates responses based on input, and displays messages in a beautiful UI.

## Features
- **AI-powered conversation**: Utilizes OpenAI's GPT-3.5-turbo to generate responses.
- **Interactive UI**: Clean and responsive chat interface with smooth animations.
- **Syntax Highlighting**: Supports markdown and code syntax highlighting in messages.
- **Responsive Design**: Optimized for mobile and desktop devices.

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **OpenAI API**: Provides AI-based responses via GPT-3.5-turbo.
- **Axios**: Used to send HTTP requests to the OpenAI API.
- **Material-UI**: Provides React components such as buttons and icons.
- **React Markdown**: Renders markdown content for code and other rich-text formats.
- **Framer Motion**: For animation effects in the chat messages.
- **Tailwind CSS**: A utility-first CSS framework for building responsive layouts.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [Yarn](https://yarnpkg.com/) (alternative package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/onehubai/oneaichat
   cd oneaichat
   ```

2. Install the dependencies:

   If you're using npm:

   ```bash
   npm install
   ```

   Or if you're using Yarn:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root of the project and add your OpenAI API key:

   ```bash
   REACT_APP_OPENAI_API_KEY=your-openai-api-key-here
   ```

   Replace `your-openai-api-key-here` with your actual OpenAI API key.

4. Start the development server:

   ```bash
   npm start
   ```

   Or, if using Yarn:

   ```bash
   yarn start
   ```

   This will start the application and open it in your default web browser at `http://localhost:3000`.

## Usage

- Type your message in the input box and press **Send** to interact with the chatbot.
- The bot will respond with AI-generated text.
- You can **clear** the chat using the "Clear" button.
- The application supports markdown and code syntax highlighting in responses.

## Environment Variables

The application requires an OpenAI API key to function. To provide the key, add it to a `.env` file in the root directory of the project:
