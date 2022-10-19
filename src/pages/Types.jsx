import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';



function Types() {

    const [types, setTypes] = useState([]); //to detect changes in data
    let params = useParams(); //saving the parameters passed in the browser

    let getMealType = async (name) => {
        const recipeApi = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&type=${name}`);
        const dataItems = await recipeApi.json();

        setTypes(dataItems.results);

    };

    useEffect ( () => {
        getMealType(params.type);
        console.log(params.type);
    }, [params.type]); //runs only when the array gets mounted 
  return (
      //fade-in and fade-out
    <Grid animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration: 1.5}}>

        {types.map((i) => {
            return( 
            <Card key={i.id}
            animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration: 1.5}}>
                <Link to={'/recipe/'+i.id}>
                <img src={i.image} alt={i.title}></img>
                <h4>{i.title}</h4>
                </Link>

            </Card>
            );
        })}

    </Grid>
  );
}


//styling
const Card = styled(motion.div)`
    h4{
        text-align: center;
        padding: 1rem;
    }
    img{
        width: 90%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-grap: 3rem;

`;


export default Types