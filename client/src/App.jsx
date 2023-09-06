
import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import Layout from './Layout';
import JobDescription from './pages/JobDescription';
import RegisterForm from './pages/RegisterForm';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import ContactForm from './pages/ContactForm';
import JobPrep from './pages/JobPrep';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/job-description" element={<JobDescription />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/apply/:job" element={<RegisterForm />} />
          <Route path="/job-prep" element={<JobPrep/>} />

        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App
