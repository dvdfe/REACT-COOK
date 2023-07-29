import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

const MyRecipes = () => {
const [commentData, setCommentData] = useState([])


    const getData= ()=>{
        axios.get("http://localhost:3004/comments")
        .then((res) => setCommentData(res.data))
    }   
    
    useEffect(()=>{
        getData()
    }, [])

    return (
        <div>
            <Header/>
            <Navigation/>
            <h2>Mes recettes</h2>
            <form className="post-form">
                <input type="text"  placeholder="Nom"/>
                <input type="text"  placeholder="Nom du plat"/>
                <textarea placeholder="Message"></textarea>
                <input type="text"  placeholder="Url de l'image ..."/>
                <input type="submit" value="Envoyer" />
            </form>
            <ul className="post-display">
               {commentData && commentData.map((post) =>(
                   <Posts key={post.id} post={post}/>
               ))}
            </ul>
        </div>
    );
};

export default MyRecipes;