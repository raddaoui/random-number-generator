# Random Number Generator API

This is a simple Node.js and Express application that provides a random number generator API. Users can specify a range by providing `start` and `end` query parameters in the URL. If these parameters are not provided, the API generates a random number within a default range.

## Usage

### Prerequisites

- Node.js installed on your machine
- npm package manager

### Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/raddaoui/random-number-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd random-number-generator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

    The server will start at http://localhost:3000.

### API Endpoints

- **Random Number Endpoint:**
  
  - `GET /random`: Get a random number within the specified range.

    - Example: `GET http://localhost:3000/random?start=10&end=50`

## Docker

You can also run the application using Docker. Build the Docker image and run the container:

```bash
docker build -t random-number-generator .
docker run -p 3000:3000 random-number-generator


### Headers
The API response includes the following headers:

- X-Powered-By: Express
- X-Node-Version: Node.js version