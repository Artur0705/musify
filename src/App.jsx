// Import necessary dependencies and components.
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sidebar from "./components/Sidebar";
import TopPlay from "./components/TopPlay";
import ArtistDetails from "./pages/ArtistDetails";
import TopArtists from "./pages/TopArtists";
import AroundYou from "./pages/AroundYou";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import SongDetails from "./pages/SongDetails";
import TopCharts from "./pages/TopCharts";

// Main application component
function App() {
  // Retrieve the active song from the Redux store.
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar /> {/* Render the sidebar component */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#4a148c]">
        <Searchbar /> {/* Render the search bar at the top */}
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            {/* Define the application routes and their corresponding components */}
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay /> {/* Display the top play component on the side */}
          </div>
        </div>
      </div>
      {/* Render the music player at the bottom if there is an active song */}
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

// Export the main App component for use in other parts of the project.
export default App;
