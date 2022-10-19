
import { GiSandwich, GiNoodles, GiCakeSlice} from 'react-icons/gi';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';



import React from 'react'

function Categories() {
  return (
    <CategoryList>
        <StyledLink to={'/type/appetizer'}>
            <GiSandwich />
                <h4> Appetizers </h4>
        </StyledLink>

        <StyledLink to={'/type/main course'}>
            <GiNoodles />
                <h4> Mains</h4>
        </StyledLink>
        
        <StyledLink to={'/type/dessert'}>
            <GiCakeSlice />
                <h4> Desserts </h4> 
        </StyledLink>

    
    </CategoryList>
  )
}


//styling
const CategoryList = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 2rem;
    background: linear-gradient(to right, #556B2F , #BDB76B);
    text-decoration: none;
    height: 5.5rem;
    width: 5.5rem;
    transform: scale(0.8);
    cursor: pointer;

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #006400, #228B22);
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
    

`;

export default Categories