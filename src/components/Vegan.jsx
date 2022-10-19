import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";


function Vegan() {

  let[vegan, setVegan] = useState([]); //to detect changes in data

  useEffect(() => {
    getVeganRecipes();
  }, []); //runs only when the array gets mounted

  //fetch data from the API
  const getVeganRecipes = async () => {

    //storing fetched items in local storage
    const checkStorage = localStorage.getItem('vegan');

    if(checkStorage){
      setVegan(JSON.parse(checkStorage));
    }
    else{
      const recipeApi = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegan`
        );
      const dataItems = await recipeApi.json();

      localStorage.setItem('vegan', JSON.stringify(dataItems.recipes));

      setVegan(dataItems.recipes);
      console.log(dataItems);
    }
    
   
  }

  return (
    <div>
      <Wrapper>
            <h3>Vegan Recipes</h3>

            <Splide options = {{
              perPage: 3,
              pagination: false,
              gap: "5rem"

            }}>
            { vegan.map((recipes) => {
              return(
                <SplideSlide key={ recipes.id }>
                 <Card>
                   <Link to={"/recipe/" +recipes.id}> 
                   <p> { recipes.title }</p>
                   <img src={ recipes. image } alt={ recipes.title }></img>
                   </Link>
                   
                 </Card>
                </SplideSlide>
              );
            })}
            </Splide>
          </Wrapper>
    </div>
  );
}


//styling
const Wrapper = styled.div`
    margin: rem 0 rem;
    `;
const Card = styled.div`

    margin-left: 35px;
    margin-right: 25px;
    margin-bottom: 10px;
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    p{
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 0.9 rem;
      display: flex;
      position: relative;
      z-index: 10;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, 0%);
      color: black;
      width: 100%;

    }

    img{
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width: 90%;
      height: 90%;
      object-fit: cover;
    }
   
    `;

export default Vegan