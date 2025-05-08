# Portfolio Template - Modern MERN Stack Portfolio

A fully responsive, customizable portfolio template built with React, Next.js, and Tailwind CSS featuring multiple theme options.

![Portfolio Template](https://via.placeholder.com/800x400?text=Portfolio+Template)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Theme Customization](#theme-customization)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Backend API](#backend-api)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **Multiple Theme Options**: Choose from programmerDark, programmerLight, softwareEngineerDark, and softwareEngineerLight themes
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Stack**: Built with React, Next.js, and Tailwind CSS
- **Contact Form**: Functional contact form with email integration
- **Modular Components**: Easy-to-customize component structure
- **SEO Friendly**: Built with Next.js for improved SEO capabilities
- **Fast Performance**: Optimized for speed and performance

## Installation

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

### Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

### Install Dependencies

For the client:

```bash
cd client
npm install
# or
yarn install
```

For the server:

```bash
cd server
npm install
# or
yarn install
```

## Environment Variables

### Client Environment Variables

Create a `.env.local` file in the client directory with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3500/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_THEME=programmerDark
```

### Server Environment Variables

Create a `.env` file in the server directory with the following variables:

```
PORT=3500
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-recipient-email@example.com
```

**Important Notes for Email Configuration:**
1. For Gmail, you need to use an App Password, not your regular password
2. To generate an App Password:
   - Enable 2-Step Verification in your Google Account
   - Go to Security → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Generate and copy the 16-character password

## Running the Application

### Development Mode

Start the server:

```bash
cd server
npm run dev
# or
yarn dev
```

Start the client:

```bash
cd client
npm run dev
# or
yarn dev
```

The client will be available at `http://localhost:3000` and the server at `http://localhost:3500`.

### Production Build

Build the client:

```bash
cd client
npm run build
npm start
# or
yarn build
yarn start
```

Build the server:

```bash
cd server
npm run build
npm start
# or
yarn build
yarn start
```

## Theme Customization

The application comes with four pre-built themes that can be found in `client/public/Colors.json`. You can customize these themes or add new ones by following the same structure.

### Switching Themes

Themes can be changed by updating the `NEXT_PUBLIC_DEFAULT_THEME` environment variable or by implementing a theme switcher component using the provided theme context.

### Creating Custom Themes

To create a custom theme, add a new entry to the `Colors.json` file following this structure:

```json
"yourCustomTheme": {
  "background": {
    "primary": { "class": "bg-your-color", "hex": "#YOURCOLOR" },
    "secondary": { "class": "bg-your-secondary-color", "hex": "#YOURSECONDARYCOLOR" },
    "gradient": { "class": "bg-gradient-to-r from-your-color to-your-secondary-color" }
  },
  "text": {
    "primary": { "class": "text-your-text-color", "hex": "#YOURTEXTCOLOR" },
    "secondary": { "class": "text-your-secondary-text-color", "hex": "#YOURSECONDARYTEXTCOLOR" },
    "accent": { "class": "text-your-accent-color", "hex": "#YOURACCENTCOLOR" }
  },
  // Add other theme properties following the same pattern
}
```

## Project Structure

```
portfolio-template/
├── client/                 # Frontend Next.js application
│   ├── components/         # Reusable React components
│   ├── pages/              # Next.js pages
│   ├── public/             # Static assets and theme configuration
│   ├── styles/             # Global styles
│   └── Tools/              # Utility functions and hooks
│
└── server/                 # Backend Express server
    ├── controllers/        # Route controllers
    ├── routes/             # API routes
    ├── config/             # Server configuration
    └── utils/              # Utility functions
```

## Components Overview

### NavBar
The navigation bar component that appears on all pages. It adapts to the selected theme and is responsive for mobile devices.

### AboutMe
Displays information about the portfolio owner. Edit the content in `components/AboutMe.jsx` to personalize.

### Card
Reusable component for displaying skills and expertise. Used in the Skills section.

### ProjectCard
Displays project information with image, title, description, and technology tags.

### GetInTouch
Contact form component that sends emails through the backend API.

## Backend API

The server provides the following API endpoints:

### Send Email
- **URL**: `/api/SendEmailBYgmail`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "userName": "Visitor Name",
    "userEmail": "visitor@example.com",
    "userMessage": "Hello, I'd like to connect!"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Email sent successfully"
  }
  ```

## Deployment

### Frontend Deployment (Vercel)

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy

### Backend Deployment (Heroku)

1. Create a Heroku account and install the Heroku CLI
2. Login to Heroku:
   ```bash
   heroku login
   ```
3. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```
4. Set environment variables:
   ```bash
   heroku config:set EMAIL_USER=your-email@gmail.com EMAIL_PASS=your-app-password
   ```
5. Deploy the server:
   ```bash
   git subtree push --prefix server heroku main
   ```

## Troubleshooting

### Email Sending Issues
- Verify your email credentials in the `.env` file
- For Gmail, ensure you're using an App Password, not your regular password
- Check that less secure app access is enabled for your email account

### API Connection Problems
- Ensure the `NEXT_PUBLIC_API_URL` in the client matches your server URL
- Check that CORS is properly configured on the server
- Verify the server is running and accessible

### Styling Issues
- Clear your browser cache if theme changes aren't appearing
- Check the browser console for any CSS errors
- Ensure Tailwind CSS is properly configured

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

Happy coding!
