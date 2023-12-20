import Sidebar from './Sidebar';
import Logo from './Img/Frame.png';
import SearchBar from './Searchbar';
import  {RolesList}  from './List/RolesList';
import './index.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Alert from '../Icons/AlertIcon'
import DropDownIcon from '../Icons/DropDownIcon';
import Settings from './Settings/Settings'

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
            <DropDownIcon />
          </div>
        </header>
  
        <div className="flex">
        <Sidebar />
        <div className="m-4"> 
        <Link to="/Settings" className="text-[#2F74FF] bg-blue rounded-2xl text-bold border-gray-100 border-8 bg-[#EEF4FF] shadow-xs">
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
  