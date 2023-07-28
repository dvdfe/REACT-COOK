import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const MyRecipes = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <h2>Mes recettes</h2>
            <form className="post-form">
                <input type="text"  placeholder="Nom"/>
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default MyRecipes;