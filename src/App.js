import { Provider } from "react-redux";
import BlogMaster from "./components/BlogMaster";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />

      <SearchBox />

      <BlogMaster />

      <Footer />
    </Provider>
  );
}

export default App;
