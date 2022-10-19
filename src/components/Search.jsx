import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigation = useNavigate();

    const submitEvent = (e) => {
        e.preventDefault();
        navigation("/search/" + input);
    };

  return (
    <StyledForm onSubmit={submitEvent}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={ (e) => setInput(e.target.value)}
            id="input" 
            type="text" 
            value = {input} 
            placeholder='Search'></input>
        </div>
    </StyledForm>
  )
}


//styling
const StyledForm = styled.form`
    margin: 0rem 12rem;

    div{
    width: 100%;
    position: relative;
    }

    input{
        background: linear-gradient(to right, #556B2F , #BDB76B);
        border-radius: 1rem;
        font-size: 1.6rem;
        color: white;
        padding: 1rem 3rem;
        width: 90%;
    }


    svg{
        position: absolute;
        color: white;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
    }
`;
export default Search