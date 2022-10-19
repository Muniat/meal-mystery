import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";



function Popular() {

  let[popular, setPopular] = useState([]); //to detect changes in data

  useEffect(() => {
    getPopularRecipes();
  }, []); //runs only when the array gets mounted

  //fetch data from the API
  const getPopularRecipes = async () => {

    //storing fetched items in local storage
    const checkStorage = localStorage.getItem('popular');

    if(checkStorage){
      setPopular(JSON.parse(checkStorage));
    }
    else{
      const recipeApi = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
      const dataItems = await recipeApi.json();

      localStorage.setItem('popular', JSON.stringify(dataItems.recipes));

      setPopular(dataItems.recipes);
      console.log(dataItems);
   }
    
   
  }

  return (
    <div>
      
        
          <Wrapper>
            <h3>Popular Today</h3>

            <Splide options = {{
              perPage: 3,
              pagination: false,
              gap: "5rem"

            }}>
            { popular.map((recipes) => {
              return(
                <SplideSlide key={ recipes.id }>
                 <Card>
                   <Link to={ "/recipe/" + recipes.id}>
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


const Wrapper = styled.div`
    margin: rem 0 rem;
    `;
const Card = styled.div`

    margin-left: 35px;
    margin-right: 25px;
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    p{
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 1 rem;
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

export default Popular