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
                <input type="text"  placeholder="Nom du plat"/>
                <textarea placeholder="Message"></textarea>
                <input type="text"  placeholder="Url de l'image ..."/>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default MyRecipes;