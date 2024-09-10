import React from 'react'
import routes from "./routes";
import Topbar from './components/topbar/Topbar'
import { useRoutes } from "react-router-dom";

function App() {

  let router = useRoutes(routes)

  return (
    <div className="font-EstedadLight bg-cyan-50 overflow-x-hidden">
      <Topbar />
      <div>
        {router}
      </div>
    </div>
  );
}

export default App;
