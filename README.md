# F1 Info Project

This project is built using **Angular v15** and provides information about the Formula 1 season, drivers, and tracks. You can navigate between three main pages to learn more about the sport, the drivers competing, and the countries where races take place.

## Features

### 1. **Season Page**
- This page offers a detailed explanation of the Formula 1 race weekend structure, including practice sessions, qualifying, and the race day.

### 2. **Drivers Page**
- Displays the current driver lineup.
- Each driver has a **Driver Detail Page**, where more information about the selected driver is shown.
- Information is fetched dynamically using an API.

### 3. **Tracks Page**
- Shows a list of countries where the F1 races are held.
- Fetches track data and corresponding country flags from two separate APIs.

## APIs Used

- **F1 Data API**: This API is used to fetch the list of drivers and the track information.
- **Country Flags API**: This API is used to retrieve the country flags for the tracks.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/aivis-vigo/F1.git
    ```

2. Install dependencies:
    ```
   npm install
   ```

3. Start server:
    ```
   ng serve
   ```
