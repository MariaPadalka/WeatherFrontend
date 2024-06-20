### Weather App Frontend

This is the frontend component of a weather application that displays weather data fetched from a server using the OpenWeather API. The frontend is built using React.js and integrates with the server-side API.

---

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
  - [Configuration](#configuration)
  - [Installation](#installation)
- [Running the Frontend](#running-the-frontend)

---

## Requirements

- Node.js (version 14 or higher)
- NPM (Node Package Manager)
- Weather App Server (running and accessible)

---

## Setup

### Configuration

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/MariaPadalka/WeatherFrontend.git
   cd WeatherFrontend
   ```

2. **Environment Variables**:

   There is a file named `.env.example` provided in the root of the project. This file contains the template for the necessary environment variables:

   ```bash
   REACT_APP_API_PORT=5000
   ```

   - **REACT_APP_API_PORT**: The port on which the Weather App Server is running. Update this value if your server is running on a different port.

   To configure the environment variables:

   - **Create a new `.env` file**:

     ```bash
     cp .env.example .env
     ```

   - **Edit the `.env` file** and set the `REACT_APP_API_PORT` according to your server configuration:
     ```bash
     REACT_APP_API_PORT=5000
     ```

### Installation

1. **Install Dependencies**:

   Make sure you are in the root directory of the project and run:

   ```bash
   npm install
   ```

   This command will install all the necessary dependencies specified in the `package.json` file.

---

## Running the Frontend

To start the frontend development server, run:

```bash
npm start
```
