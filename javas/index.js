// Main Icon Implementation
const pfpUrl = "https://pbs.twimg.com/media/FreRm5jXoAE4-pQ.jpg";
var favicon = document.getElementById('pfp1');
var mainIcon = document.getElementById('pfp2');

favicon.href = pfpUrl;
mainIcon.src = pfpUrl;
mainIcon.width = mainIcon.height = 200;
mainIcon.title = "PFP by: Mari_chan1401";
mainIcon.onclick = (ev) => window.open('https://twitter.com/GamerPablito1');

// Creation of Main Buttons
const buttonLinks = ['portfolio', 'coolpeople', 'fanarts'];
const buttonNames = ['Portfolio', 'Cool People', 'Fanarts'];
var buttonNav = document.getElementById('buttons');

for (var i = 0; i < buttonLinks.length; i++) {
    var daAnchor = document.createElement('a');
    var daButton = document.createElement('button');

    daButton.type = "button";
    daButton.innerText = buttonNames[i];

    daAnchor.href = buttonLinks[i] + ".html";
    daAnchor.appendChild(daButton);

    buttonNav.appendChild(daAnchor);
}