/* Data Format:  Array of JS literals that hold information needed for render
  let Projects = [{
    image: "assets/img/CarouselImage",
    Caption: "Project Name",
    Description: "brief overview",
    URL: "Link for more information",
    active: true  //Is this the first project to be displayed in the carousel
  }]
*/

const angelsDangerousGame = (req, res) => {
  return res.json({
    Name: "Angels Dangerous Game",
    Description: "A 3rd person, 2.5d dungeon crawler where you play as a man who was possessed by a fallen angel. " +
      "The angel offers the player power, in the form of powerful abilities it can use to attack the enemies. " +
      " However each gives the angel more power over the player. " +
      " As the angels begins to gain control over the player they start to lose cotrol of their body. " +
      " As this happens the angel starting to exert its will over where the player aims and eventually even where they move.",
    URLs: ["assets/img/pongTitle.png", "assets/img/pongTitle.png"],
    Role: "I worked in a small team for this project.  My contributions were the AI, and part of the player controls. " +
      " The AI itself is pretty simple, as it just follows the player if it gets in range.  I also implemented the 'angel controls'. " +
      " The more control the angel had, the stronger its effects and the longer they were applied."

  });
};



const bulletHell = (req, res) => {
  return res.json({
    Name: "Bullet 'Hell'",
    Description: "A top down Bullet hell shooter, set in hell.  You play as a fighter pulot trying to fight is way out",
    URLs: ["assets/img/bulletBoss.png", "assets/img/bulletLvl1.png", "assets/img/BulletLvl2.png"],
    Role: "I worked in a small team for this project.  My contributions were to the AI of the various enemies. " +
      " The first enemy the player meets moves left and right, and shoots 2 bullets down at the player. " +
      " The 2nd enemy the player meets moves towards the player and shoots 3 bullets in a cone. " +
      " The 3rd and final normal enemy moves in a circle, and shoots a ring of bulltes.  Finally, the boss had a variety of attacks it could randomly choose from. " +
      " These attacks ranged from filling the screen with hundreds of bullets, to summoning some of the earlier enemies as minions. " +
      " The bosses attacks were mostly random, but there was some rules preventing him from summoning too many enemies at once, or from constantly using the same attacks." +
      " This project started as a school project, however I did extensive work on it afterwards, adding in different player characters, power ups, and the 3rd enemy listed above."

  });
};

// const graphicsEngine = (req, res) => {
//   return res.json({
//     Name: "Prototye Graphics Engine",
//     Description: "A prototype graphics engine, capable of rendering 3D models, particle effects, and shaders.",
//     URLs: [],
//     Role: "I worked in a small group for this project, working with DirectX11. " +
//       " The goal of the engine was to help get an understanding of the fundamentals of Graphics Engines. "+
//       " I did this by starting with rendering simple shapes, and simple transforms." +
//       " Afterwords more support for "
//   });
// };

const pong = (req, res) => {
  return res.json({
    Name: "Neural Network Pong'",
    Description: "A game of pong against a neural network, trained using NeuroEvolution",
    URLs: [],
    Role: "I worked solo on this project, with my main goal being to learn more about machine learning. " +
      " In order to bring the Machine Learning opponent to life, I used Tensorflow.js, a library built for creating neural networks. " +
      " The AI was trained through NeuroEvolution, a process in which you create hundreds of randomly generated Neural Networks" +
      " and run them through a test and then choose the best ones to move on. " +
      " For this specific project, the networks were set up against a paddle that would never miss the paddle, but always hit it on a different point. " +
      " This meant that the AI would keep going, until they finally missed a ball.  The AI were then given a score based on the number of volleys they hit." +
      " The resulting AI wasn't perfect, however it gave me some valuable insight into how Neural Networks functioned."

  });
};


const guessThatPainting = (req, res) => {
  return res.json({
    Name: "Guess That Painting'",
    Description: "A guessing game where one player is given a randomly generated word, and all other players need to guess what it is",
    URLs: ["assets/img/paintingDrawing.png", "assets/img/paintingGuess.png"],
    Role: "I worked in a solo for this project, with my main goal learning more on networking, and databases. " +
      " To allow for multiple people to connect to the game, I used Socket.io. " +
      " In order to play, players were given a javascript canvas, along with some pre-built drawing tools.  They would then be given a word which they had to draw." +
      " All other players would have to try and guess what the person was drawing, with the first person to get it right getting to go next. " +
      " The words were all stored in a MongoDB database, which the players were communicating with through an express server. In addition, the site uses react to render itself" +
      " Some other features were that players could create an account on the site, which allowed them to save some of their favorite drawings."

  });
};


module.exports.ADG = angelsDangerousGame;
module.exports.BH = bulletHell;
//module.exports.PGE = graphicsEngine;
module.exports.NNP = pong;
module.exports.GTP = guessThatPainting;