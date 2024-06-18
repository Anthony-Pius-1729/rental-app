import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import SignIn from "./components/SignIn";
import Team from "./components/Team";
import Lease from "./components/Lease";
import About from "./components/About";
import Footer from "./components/Footer";
import CarListing from "./components/CarListing";
import Booking from "./components/Booking";
import CheckoutForm from "./components/CheckOutForm";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import JoinUs from "./components/JoinUs";
import { CarProvider } from "./contexts/CarContext";
import MyPosts from "./components/MyPosts";
// import { BookContext } from "./contexts/BookingContext";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./components/CheckOutForm"; // Make sure to put CheckoutForm in the correct path

// const stripePromise = loadStripe(
//   "pk_test_51PLXGCKXUzxBA1Jb5FErJSYL8g66Pn9jAHAQ6Bsabqx7viL2UJn7TNUUiP59L3Mrto2E5g1MVLSC9yyZJrsrAJkE00B2dSXOep"
// );

function App() {
  return (
    <React.Fragment>
      <CarProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<Signup />} />

            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/lease" element={<Lease />} />

            <Route path="/cars" element={<CarListing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/join-us" element={<JoinUs />} />

            <Route path="/cars/booking/:id" element={<Booking />} />
            <Route
              path="/cars/booking/:id/checkout"
              element={<CheckoutForm />}
            />
          </Routes>

          <Footer />
        </Router>
      </CarProvider>
    </React.Fragment>
  );
}

export default App;
