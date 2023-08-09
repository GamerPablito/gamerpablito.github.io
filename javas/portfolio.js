var daSection = document.getElementById('works');

/**
 * @typedef {Object} proyect - Just a type to parse portfolio correctly
 * @prop {string} title - The name of the project
 * @prop {string} image - The link of the project image
 * @prop {string} link - The link to the project showup
 */

/** @type {proyect[]} */
var projects = [
    {
        title: "GameJolt Client for HaxeFlixel",
        image: "haxegjclient.png",
        link: "https://github.com/GamerPablito/HaxeGJClient"
    },
    {
        title: "FNF Weekend Excitin'",
        image: "https://images.gamebanana.com/img/ss/mods/649f2854abc43.jpg",
        link: "https://gamebanana.com/mods/453296"
    },
    {
        title: "Sunday Morning Sunshine",
        image: "https://images.gamebanana.com/img/ss/mods/638b83c6c840e.jpg",
        link: "https://gamebanana.com/mods/415138"
    }
];

for (var i = 0; i<projects.length; i++)
{
    var daLink = document.createElement('a');
    daLink.href = projects[i].link;
    
    var daTitle = document.createElement('h2');
    var daUTitle = document.createElement('u');
    daUTitle.innerText = projects[i].title;
    daTitle.appendChild(daUTitle);
    daLink.appendChild(daTitle);

    var daImage = document.createElement('img');
    daImage.src = projects[i].image;
    daLink.appendChild(daImage);
    daSection.appendChild(daLink);
}