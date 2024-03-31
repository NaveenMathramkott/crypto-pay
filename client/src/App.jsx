import { Footer, Header, Home, Service, Transaction } from "./components";
const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Home />
      <Transaction />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
