# Setting up Kreato AI
Below are the instructions to setup Kreato AI locally.

## Prerequisites
Node.js and NPM must be installed on the system.

## Cloning the Repository

```bash
git clone https://github.com/chiranjeevsehgal/Kreato-AI.git

cd Kreato-AI
```

## Configurations

**Environment File**: Navigate to the root folder and create `.env.local` file. Add the following content to the file:

    # Clerk variables
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=
    
    # Gemini variable
    NEXT_PUBLIC_GEMINI_API_KEY=

    # Drizzle variable
    NEXT_PUBLIC_DRIZZLE_DB_URL=

    # Razorpay variables
    NEXT_PUBLIC_RAZORPAY_KEY_ID = 
    RAZORPAY_PLAN_ID =
    RAZORPAY_KEY_ID =
    RAZORPAY_KEY_SECRET=

    
 - Create accounts at Clerk, Gemini, Drizzle and Razorpay to setup the keys.

## Running the Application

  - Navigate to the root directory.
  - Install dependencies: `npm install`.
  - Start the application: `npm run dev`.

