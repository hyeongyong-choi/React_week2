import React, { useState } from "react";
// import Router from "./shared/Router";

import { Route, Routes ,Link} from "react-router-dom";
import Main from './Page/Main'
import Subpage from "./Page/Subpage";


function App() {

  return (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Subpage/:id" element={<Subpage />} />
        </Routes>
  )

}
export default App;
