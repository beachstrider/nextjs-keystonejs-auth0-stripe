<p align="center">
  <img src="https://user-images.githubusercontent.com/6391763/90599044-ca070300-e211-11ea-8b8a-89354dd30bd5.png" alt="Logo"/>
</p>

<p align="center">
  <a href="https://twitter.com/nirmalyaghosh23">
    <img alt="Twitter: Nirmalya Ghosh" src="https://img.shields.io/twitter/follow/NirmalyaGhosh_.svg?style=social" target="_blank" />
  </a>
</p>

Keystonejs and Next.js with Auth0, Stripe

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

Create a new [Google OAuth Client](https://console.developers.google.com/apis/credentials/oauthclient) and copy the credentials (Client ID and Client Secret) in your .env file.

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
