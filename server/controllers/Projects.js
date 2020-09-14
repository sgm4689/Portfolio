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
    Description: "A 3rd person, 2.5d dungeon crawler where you play as a man who was possessed by a fallen angel.  The angel offers the player power, in the form of powerful abilities it can use to attack the enemies.  However each gives the angel more power over the player.  As the angels begins to gain control over the player, they start to lose cotrol of their body, with the angel starting to exert its will over where the player aims, and eventually even where they move.",
    URLs: ["assets/img/pongTitle.png", "assets/img/pongTitle.png"],
    Role: "I worked in a small team for this project.  My contributions were the AI, and part of the player controls.  The AI itself is pretty simple, as it just follows the player if it gets in range.  I also implemented the 'angel controls'.  The more control the angel had, the stronger its effects and the longer they were applied."

  });
};



const bulletHell = (req, res) => {
  return res.json({
    Name: "Bullet 'Hell'",
    Description: "A top down Bullet hell shooter, set in hell.  Even more unfinished test data",
    URLs: [],
    Role: "I worked in a small team for this project.  My contributions were the AI of the various enemies.  The first enemy the player meets moves left and right, and shoots 2 bullets down at the player.  The 2nd enemy the player meets moves towards the player and shoots 3 bullets in a cone.  The 3rd and final normal enemy moves in a circle, and shoots a ring of bulltes.  Finally, boss OP"

  });
};

const graphicsEngine = (req, res) => {
  return res.json({
    Dummy: "data"
  });
};

const pong = (req, res) => {
  return res.json({
    Dummy: "data"
  });
};


const guessThatPainting = (req, res) => {
  return res.json({
    Dummy: "data"
  });
};


module.exports.ADG = angelsDangerousGame;
module.exports.BH = bulletHell;
module.exports.PGE = graphicsEngine;
module.exports.NNP = pong;
module.exports.GTP = guessThatPainting;