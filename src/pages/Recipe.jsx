import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {motion} from 'framer-motion';
import StarRating from "../components/StarRating";
import toast, { Toaster } from 'react-hot-toast';



import styled from 'styled-components';

import React from 'react'

function Recipe() {

  let params = useParams(); //saving the parameters passed in the browser
  const [details, setDetails] = useState([]); //to detect changes in data
  const [activeTab, setActive] = useState('instructions');

  const recipeDetails = async () => {
    const recipeApi = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const dataItems = await recipeApi.json();
    setDetails(dataItems);
  };

  useEffect(() => {

    recipeDetails();
  },[params.name]); //runs only when the array gets mounted 
  
  const [input, setInput] = useState("");
  const submitEvent = () => toast.success("Feedback received!");

  return (
    //fade-in and fade-out
    <Wrapper animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration: 1.5}}>
      <div>
        <h3> {details.title}</h3>
        <img src= {details.image} alt={details.title}></img>
      </div>
      <Information>
      <Buttons className={activeTab === 'instructions' ? 'active' : ''} 
        onClick={() => setActive('instructions')}>Instructions</Buttons>
        <Buttons className={activeTab === 'ingredients' ? 'active' : ''} 
        onClick={() => setActive('ingredients')}>Ingredients</Buttons>
        <p>Rating: </p>
        <StarRating></StarRating>
        <StyledForm onChange={ (e) => setInput(e.target.value)}
            id="input" 
            value = {input} 
            placeholder='Any Feedback?'></StyledForm>
            <Buttons onClick={submitEvent}>Submit</Buttons>
            <Toaster 
             toastOptions={{
              
              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
             }}
            />
        
        
        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map((i) => (
            <li key={i.id}>{ i.original }</li>
          ))}
          </ul>
        )}
        {activeTab === 'instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
        )}
      </Information>
    </Wrapper>
  )
}

//styling

const Buttons = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: #BDB76B;
  border: 2px solid #228B22;
  margin-right: 2rem;
  font-weight: 600;

`;


const Wrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(to right, #556B2F , #BDB76B);
    color: white;
  }
  h3{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Information = styled.div`
  margin-left: 10rem;
`;
const StyledForm = styled.textarea`
   
    margin-top: 5px;
    margin-bottom: 5px;
    width: 70%;
    position: relative;
    background: linear-gradient(to right, #556B2F , #BDB76B);
    color: white;
    margin-right: 2rem;
    font-weight: 600;

    padding: 1rem 2rem;
  
  border: 2px solid #228B22;
  
    
    }
  `;

export default Recipe