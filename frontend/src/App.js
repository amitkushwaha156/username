import 'bootstrap/dist/css/bootstrap.min.css';
import Paginations from './component/Paginations'
import Tablee from './component/Tablee';


//import ReactModal from './component/ReactModal';
import Userhome from './component/Userhome';

function App() {
  return (
    <div >
   
     <Userhome></Userhome> 
    <Tablee></Tablee>
   <Paginations className='ml-auto'></Paginations>
    </div>
  );
}

export default App;
