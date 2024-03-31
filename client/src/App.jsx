import { Footer, Header, Home, Service, Transaction } from "./components";
const App = () => {
  return (
    <div className="main-container px-10 md:px-[200px]">
      <Header />
      <Home />
      <Transaction />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
