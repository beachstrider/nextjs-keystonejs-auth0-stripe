# Keystonejs and Next.js with Auth0, Stripe

1. [**frontend**]: Next.js application
2. [**backend**]: Keystonejs application

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/jasonmz/nextjs-keystonejs-auth0-stripe
```

### 2. **Install necessary dependencies for the frontend application**

```sh
cd frontend && yarn install
```

### 3. **Create a .env file and copy the contents from .env.example (present in frontend directory)**

We might need to run the following command:

```sh
source .env
```

### 4. **Create and copy the Auth0 credentials**

Create a new Auth0 client(https://auth0.com) and copy the credentials (Client ID and Client Secret) in your .env file.

### 5. **Start the frontend application**

From the frontend directory, we can run the following command to start our Next.js frontend application:

```sh
yarn dev
```

The above command will start the frontend application on [http://localhost:3000/](http://localhost:3000).

### 6. **Go inside the directory of the backend package on another terminal window**

```sh
cd backend
```

### 7. **Start keystonejs backend**

```sh
yarn dev
```
