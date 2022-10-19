import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import Search from "./components/Search";


import {Link, BrowserRouter} from 'react-router-dom';
import {GiMeal} from 'react-icons/gi';

import styled from 'styled-components';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
       <Navigation>
         <GiMeal color="#556B2F"></GiMeal>
         <Logo to={"/"}>Meal-Mystery</Logo>
          
       </Navigation>
        <Search></Search>
        <Categories></Categories>
        <Pages></Pages>
        
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 350;
  font-size: 1.5rem;
`;

const Navigation = styled.div`
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  jusitfy-content: flex-start;
  svg{
    font-size: 2.5rem;
  }
  
`;
export default App;
