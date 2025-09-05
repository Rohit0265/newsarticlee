// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Article from "./componenets/article"
// import { useState } from "react";
// import Tab from "./componenets/TOC/Tab"
// import "./App.css";
// import Header from "./componenets/header"

// //pagesssssfs


// // import InternationalNews from "./componenets/TOC/itNews";
// // import NationalNews from "./componenets/TOC/nNews";
// // import Games from "./componenets/TOC/Gmaes";
// // import Business from "./componenets/TOC/Business";
// // import CustomArticles from "./componenets/TOC/cArticle";


// // import HamburgerButton from "./componenets/hamburger";

// function App() {
//   const [open, setOpen] = useState(false);

//   return (
    

//     <div className="flex h-screen">
      

//       <Tab open={open} setOpen={setOpen} />


//       {/* Main Content (Right side) */}
//       <div className="flex-1 xl:w-3/4 border-2 border-gray-700  ml-0 h-screen overflow-auto ">
  
//     <Header open={open} setOpen={setOpen} />
       

//         {/* Page content goes here */}
//         <div className="p-6 text-whitel">
//           <h1 className="text-2xl font-bold">Welcome to the News App</h1>
//           <p className="mt-2 text-3xl text-black ">Trending.</p>
//           <Article/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./componenets/article";
import { useState } from "react";
import Tab from "./componenets/TOC/Tab";
import "./App.css";
import Header from "./componenets/header";

import InternationalNews from "./componenets/TOC/itNews";
import NationalNews from "./componenets/TOC/nNews";
import Games from "./componenets/TOC/Gmaes";
import Business from "./componenets/TOC/Business";
import CustomArticles from "./componenets/TOC/cArticle";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      {/* Fixed Header */}
      

      {/* Content wrapper below header */}
      <div className="flex h-screen">
        
        {/* Sidebar */}
        <Tab open={open} setOpen={setOpen} />
        

        {/* Main Content */}
        <div className="flex-1 xl:w-3/4 border-2 border-gray-700 overflow-auto">
        <Header open={open} setOpen={setOpen} />
          <Routes>
            <Route path="/international" element={<InternationalNews />} />
            <Route path="/national" element={<NationalNews />} />
            <Route path="/games" element={<Games />} />
            <Route path="/business" element={<Business />} />
            <Route path="/custom" element={<CustomArticles />} />
            {/* Default Home */}
            <Route
              path="/"
              element={
                <div className="p-6 text-black">
                  <h1 className="text-2xl font-bold">Welcome to the News App</h1>
                  <p className="mt-2 text-3xl">Trending.</p>
                  <Article />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
