import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

const MyRecipes = () => {
const [commentData, setCommentData] = useState([])
const [author, setAuthor] = useState("")
const [plateName, setPlateName] = useState("")
const [content, setContent] = useState("")
const [image, setImage] = useState("")

const handleImageChange = (e) =>{
    const imageUrl = e.target.value;
    setImage(imageUrl !== ("") ? imageUrl : "https://stock.wikimini.org/w/images/c/c7/Point-d%27interrogation.png")
}


    const getData= ()=>{
        axios.get("http://localhost:3004/comments")
        .then((res) => setCommentData(res.data))
    }   
    
    useEffect(()=>{
        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3004/comments", {
            author,
            plateName,
            content,
            image,
            date: Date.now(),
        })
        .then(()=>{
            setAuthor("");
            setPlateName("");
            setContent("");
            setImage("");
            getData();
        })
    }

    return (
        <div>
            <Header/>
            <Navigation/>
            <h2>Mes recettes</h2>
            <form className="post-form" onSubmit={(e)=> handleSubmit(e)}>
                <input type="text"  placeholder="Nom" onChange={(e) => setAuthor(e.target.value)}/>
                <input type="text"  placeholder="Nom du plat" onChange={(e) => setPlateName(e.target.value)}/>
                <textarea placeholder="Message" onChange={(e) => setContent(e.target.value)}></textarea>
                <input type="text"  placeholder="Url de l'image ..." onChange={handleImageChange}/>
                <input type="submit" value="Envoyer" />
            </form>
            <ul className="post-display">
               {commentData && commentData
               .sort((a, b) => b.date - a.date)
               .map((post) =>(
                   <Posts key={post.id} post={post}/>
               ))}
            </ul>
        </div>
    );
};

export default MyRecipes;