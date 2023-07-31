# MusiFy

![MusiFy](./src/assets/screenshots/screenshot.png)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Demo](#demo)
5. [Dependencies](##dependencies)
6. [Future Improvements](##FutureImprovements)
7. [Contributing](#Contributing)
8. [License](#license)

## Introduction

- This music application is a front-end React project that utilizes `shazamCore` Redux
  services for fetching song and artist data. The app provides functionalities for users to
  discover songs based on various criteria such as by country, artist, genre, and also by a specific search term. Users can also view the top charts and details of specific artists.

## Features

1. **ArtistCard**

   - Displays an artist with an image and title.
   - Clicking on the card navigates to the artist details page using the `react-router-dom` navigation.

2. **DetailsHeader**

   - Renders details like artist image, artist name, song name, and genre.
   - The header is used in both artist and song details pages, and adjusts its display content based on the given props.

3. **Error**

   - A simple error component that displays when something goes wrong in the application.

4. **Loader**

   - Displays a loader spinner along with a title, providing feedback while fetching data or processing requests.

5. **PlayPause**

   - Offers a toggle between play and pause icons for songs, providing an interactive UI experience.

6. **RelatedSongs**

   - Lists related songs in a vertical layout.
   - Each song item provides play and pause functionality.

7. **Searchbar**

   - An input bar for searching songs.
   - Redirects to the search results page upon submission.

8. **Sidebar**

   - A responsive navigation bar that contains links to various parts of the application.
   - Adjusts display based on the viewport, offering a hamburger menu on smaller screens.

9. **SongBar**

   - A horizontal bar representing a song, displaying song details and a play/pause button.
   - Each song bar is interactive, highlighting the song that is currently being played.

10. **SongCard**

    - A card layout that showcases a song's details and artwork.
    - Offers play and pause functionality and provides links to related artists.

11. **TopChartCard**

    - Similar to the `SongBar`, but designed specifically for the top chart songs.
    - Provides navigation to song details and interactive play/pause functionality.

12. **Search**

    - Provides search functionality, allowing users to find songs using specific terms.
    - Fetches search results using the `useGetSongsBySearchQuery` hook.

13. **AroundYou**

    - Fetches and showcases songs that are popular in the user's current country. The country is determined based on the user's IP address.

    - Utilizes the `useGetSongsByCountryQuery` hook to fetch songs based on the detected country.

14. **ArtistDetails**

    - Displays detailed information about a particular artist, including their top songs.
    - Fetches data using the `useGetArtistDetailsQuery` hook.

15. **Discover**

    - Enables the discovery of songs by specific genres.
    - Utilizes the `useGetSongsByGenreQuery` for data fetching based on the selected genre.

16. **SongDetails**

    - Showcases detailed information regarding a song, which includes its lyrics and related songs.
    - Fetches the necessary data using `useGetSongDetailsQuery` and `useGetSongRelatedQuery` hooks.

17. **TopArtists**

    - Presents the top artists based on the charts.
    - Fetches data with the `useGetTopChartsQuery` hook.

18. **TopCharts**
    - Displays songs from the top charts.
    - Uses the `useGetTopChartsQuery` for data fetching.

## Redux Store

The application employs Redux to manage the global state associated with the music player. This includes the currently active song and its play status. This ensures a consistent user experience across different components.

## Installation

Follow these steps to install the Film Library:

1. Clone this repository:

```
git clone https://github.com/Artur0705/musify.git
```

2. Navigate to the project folder:

```
cd musify
```

3. Create a `.env` file and add your `API keys`:

````
- `VITE_SHAZAM_CORE_RAPID_API_KEY="YOUR_API_KEY"` ```https://rapidapi.com/tipsters/api/shazam-core```

- `VITE_GEO_API_KEY="YOUR_API_KEY"`  ```https://geo.ipify.org/```
````

4. Install the project dependencies:

```
npm install
```

5. Start the application:

```
npm start
```

## Demo

- Please follow the [link](https://musi-fy.surge.sh/) or click on the image to visit the deployed application and test it. [![Demo](./src/assets/screenshots/screenshot-1.png)](https://musi-fy.surge.sh/)

## Dependencies

- react
- react-router-dom
- react-redux
- react-icons
- swiper
- axios

## Future Improvements

- Implement a playlist feature allowing users to create and manage their favorite songs.
- Integrate with other music data sources for a more comprehensive collection.
- Add user authentication for personalized experiences.

## Contributing

- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

- This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)
