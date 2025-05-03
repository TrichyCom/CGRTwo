import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddWorkerOne from "./Components/Admin/WorkerMng_Admin/AddWorker_Admin/AddWorkerOne/AddWorkerOne"
import AddWorkerTwo from './Components/Admin/WorkerMng_Admin/AddWorker_Admin/AddWorkerTwo/AddWorkerTwo'
import AddWorkerThree from './Components/Admin/WorkerMng_Admin/AddWorker_Admin/AddWorkerThree/AddWorkerThree'
import WorkerTable from './Components/Admin/WorkerMng_Admin/WorkerTable/WorkerTable'
import ViewWorker_Admin from './Components/Admin/WorkerMng_Admin/ViewWorker_Admin/ViewWorker_Admin'
import Login from './Components/Login/Login'
import DymanicValue_Admin from './Components/Admin/WorkerMng_Admin/DynamicValue_Admin/DynamicValue_Admin'
// import '../public/assets/css/Admin/Admin.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
{/* login */}
<Route path='/' element={<Login />} ></Route>

          {/* Admin start*/}

          {/* worker_mng start */}
          {/* AddWorker */}
          <Route path='/addworkerone' element={<AddWorkerOne />} ></Route>
          <Route path='/addworkertwo' element={<AddWorkerTwo />} ></Route>
          <Route path='/addworkerthree' element={<AddWorkerThree />} ></Route>
          {/* worker table */}
          <Route path='/workertable' element={<WorkerTable />} ></Route>
          {/* View worker */}
          <Route path='/viewworker' element={<ViewWorker_Admin />} ></Route>
          {/* Dymanic value add */}
          <Route path='/DynamicValue' element={<DymanicValue_Admin />} ></Route>

          {/* worker_mng end */}


           {/* Admin start*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
