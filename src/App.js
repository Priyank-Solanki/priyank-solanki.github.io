import './App.css';
import Footer from './components/footer/Footer';
import ScrollTopButton from "./components/common/ScrollTopButton";
import ToastNotification from "./components/common/ToastNotification";
import AjaxLoader from "./components/common/AjaxLoader";
import Contacts from './components/contact/Contact';

function App() {
  return (
    <>
      <Contacts />
      <Footer />
      <ScrollTopButton />
      <ToastNotification />
      <AjaxLoader />
    </>
  );
}

export default App;
