import React from 'react'
import Home from './Home'
import Types from './Types';
import Recipe from './Recipe';
import SearchItems from './SearchItems';


import {Route, Routes, useLocation} from 'react-router-dom';

import {AnimatePresence} from 'framer-motion';

function Pages() {
  const loc = useLocation();
  return (
    <AnimatePresence mode='wait'>
       <Routes location={loc} key={loc.pathname}>
         <Route path="/" element={ <Home />} />
         <Route path="/type/:type" element={ <Types />} />
         <Route path="/recipe/:name" element={ <Recipe />} />
         <Route path="/search/:search" element={ <SearchItems />} />
         
       </Routes>
      </AnimatePresence>
    
  )
}

export default Pages