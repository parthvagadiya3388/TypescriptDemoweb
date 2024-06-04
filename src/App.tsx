import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Welcome from "./components/welcome-page";
import AboutUs from "./components/about-us";
import Forbuissness from "./components/for-buissness";
import ForworkSpace from "./components/for-workspace";
import CustomerPage from "./components/customer-page";
import EmployePage from "./components/employe-page";
import AuthProvider from "./context/AuthContext";
import Profile from "./components/profile";
import ProfileHeader from "./components/profile-header";
import Employelist from "./components/employee-list";
import Searchpage from "./components/search-page";
import OrderConform from "./components/order-conform";
import { ProductProvider } from "./context/Productcontext";


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* <Navbar /> */}
        </header>
        <ProductProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/Navbar" element={<Header />} />
              <Route path="/Welcome" element={<Welcome />} />
              <Route path="/Aboutus" element={<AboutUs />} />
              <Route path="/Forbussiness" element={<Forbuissness />} />
              <Route path="/ForWorkSpace" element={<ForworkSpace />} />
              <Route path="/yourCustomer" element={<CustomerPage />} />
              <Route path="/yourEmployee" element={<EmployePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profileheader" element={<ProfileHeader />} />
              <Route path="/employelist" element={<Employelist />} />
              <Route path="/search" element={<Searchpage/>} />
              <Route path="/order" element={<OrderConform/>} />



              <Route path="/footer" element={<Footer />} />
            </Routes>

          </AuthProvider>

        </ProductProvider>
      </div>

      <footer className="bg-dark text-secondary fixed-bottom">
        {/* <Footer /> */}
      </footer>
    </Router>
  );  
}

export default App;
