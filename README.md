## Weather Checker
This is a Next.js application for checking the weather. It shows the current weather and a 5-day forecast based on your current location.

![Weather checker image](images_for_readme/weather-checker.png)

## Demo
You can try the app here.  
[Weather Checker on AWS Amplify](https://main.d29yly3drdj0zh.amplifyapp.com/)

## Technologies Used
- Next.js (App Router)
- TypeScript
- tailwindcss
- shadcn/ui
- GitHub
- AWS Amplify

## External API
- OpenWeather API

## Getting Started
Follow these steps to get this project up and running locally.

### Prerequisites
- Node.js and npm

### Installation
1. Clone this repository
  ```bash
  git clone https://github.com/dino0320/weather-checker.git
  cd weather-checker
  ```
2. Create an .env file with the following content
  ```env
  OPEN_WEATHER_API_KEY=<Your OpenWeather API key>
  ```

3. Install dependencies
  ```bash
  npm ci
  ```

4. Start the development server
  ```bash
  npm run dev
  ```

5. Access the app at http://localhost:3000