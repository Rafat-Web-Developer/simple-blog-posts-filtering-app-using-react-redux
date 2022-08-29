import BlogMaster from "./components/BlogMaster";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div>
      <Navbar />

      <SearchBox />

      <BlogMaster />

      <Footer />
    </div>
  );
}

export default App;
