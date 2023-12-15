import Sidebar from './Sidebar';
import Logo from './Img/Frame.png';
import SearchBar from './Searchbar';
import  {RolesList}  from './RolesList';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Settings} from "./Settings"

const Alert = () => (<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M16.0941 13.6185L15.168 12.6923V9.10256C15.168 6.89846 13.9905 5.05333 11.9372 4.56513V4.07692C11.9372 3.48103 11.4562 3 10.8603 3C10.2644 3 9.78335 3.48103 9.78335 4.07692V4.56513C7.72284 5.05333 6.55258 6.89128 6.55258 9.10256V12.6923L5.62643 13.6185C5.17412 14.0708 5.49002 14.8462 6.12899 14.8462H15.5844C16.2305 14.8462 16.5464 14.0708 16.0941 13.6185ZM13.7321 13.4103H7.98848V9.10256C7.98848 7.32205 9.07258 5.87179 10.8603 5.87179C12.648 5.87179 13.7321 7.32205 13.7321 9.10256V13.4103ZM10.8603 17C11.65 17 12.2962 16.3538 12.2962 15.5641H9.42438C9.42438 16.3538 10.0634 17 10.8603 17Z" fill="#474747"/>
</svg>)

const Drop = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
  <path d="M10.2875 1.00002L6.40745 4.88002L2.52745 1.00002C2.13745 0.61002 1.50745 0.61002 1.11745 1.00002C0.727451 1.39002 0.727451 2.02002 1.11745 2.41002L5.70745 7.00002C6.09745 7.39002 6.72745 7.39002 7.11745 7.00002L11.7074 2.41002C12.0975 2.02002 12.0975 1.39002 11.7074 1.00002C11.3174 0.62002 10.6775 0.61002 10.2875 1.00002Z" fill="#323232"/>
</svg>
)

export function AppContent() {

  return (
      <div>
        <header className="flex pt-4 bg-[#F4F5F9]">
          <img src={Logo} className="mb-2 ml-2" alt="Logo" />
          <h1 className="ml-[20px]">როლები</h1>
          <SearchBar />
          <div className="flex pl-[400px]">
            <Alert />
          </div>
          <div className="mt-2 ml-2">
            <Drop />
          </div>
        </header>
  
        <div className="flex">
        <Sidebar />
        <div className="m-4"> 
        < Link to="/my-project/src/Settings.jsx" className="text-[#2F74FF] bg-blue rounded-2xl text-bold border-gray-100 border-8 bg-[#EEF4FF] shadow-xs">
         დამატება 
       </Link>
          <RolesList />
        </div>
      </div>  

    </div>      
  );  
    
  }

  function App() {
    return (
      <div>
        <Router>
          <nav>
            <Link to="/roles">Roles</Link>
            <Link to="/settings">Settings</Link>
          </nav>
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/roles" element={<RolesList />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </div>
    );
  }
export default App;
  