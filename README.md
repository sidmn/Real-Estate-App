# Welcome to Real Estate App 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

These functionalities were implemented in this app:
- Property Listing Page (Home Page) - Display a list of 30 properties (static JSON data).
- Each property card should show: Property Name, Image, Location, Price per night, Book
Now button.
- Ensure a responsive design.
- Pagination or Infinite Scroll - Implement pagination or infinite scroll.
- Booking Modal - Users can enter Name, Check-in Check-out Dates, and Confirm Booking.
- Search Filter - Implement a search bar and price range filter (₹0 - ₹15,000).
- State Management - Use React Hooks (useState, useEffect), Context API, or Props Drilling.
- Bonus Features: Dark mode toggle, User-friendly toast notifications for successful
bookings.

Chalenges Faced and Solution:
- Implementing Date Picker Correctly - Solved by trying out different date picker libraries and configuring them with the help of docs.
- Designing app in correspondence to Figma file - Took quite some documentation reading to get around and fix issues latent to React Native but I was able to finally land upon a design that I like.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
