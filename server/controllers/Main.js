/* Data Format:  Array of JS literals that hold information needed for render
  let Projects = [{
    image: "assets/img/CarouselImage",
    Caption: "Project Name",
    Description: "brief overview",
    URL: "Link for more information",
    active: true  //Is this the first project to be displayed in the carousel
  }]
*/

const cSharp = (req, res) => {
  return res.render('projects', {
    title: "C# Projects",
    Projects: [{
      image: "assets/img/angelTitle.png",
      caption: "Angels Dangerous Game",
      description: "Made in Unity",
      URL: "/ADG",
      active: true
    }, {
      image: "assets/img/bulletDisplay2.png",
      caption: "Bulle 'Hell'",
      description: "Made in MonoGame",
      URL: "/BH",
      active: false
    }]
  });
};

//
//
// const cPlus = (req, res) => {
//   return res.render('projects', {
//     title: "C++ Projects",
//     Projects: [{
//       image: "assets/img/placeholder1.png",
//       caption: "Prototype Graphics Engine",
//       description: "Made with DirectX11",
//       URL: "/PGE",
//       active: true
//     }]
//   });
// };

const javaScript = (req, res) => {
  return res.render('projects', {
    title: "JS Projects",
    Projects: [{
        image: "assets/img/pongTitle.png",
        caption: "Neural Network Pong",
        description: "Tensorflow.js, Canvas",
        URL: "/NNP",
        active: true
      },
      {
        image: "assets/img/paintingTitle.png",
        caption: "Guess that Painting",
        description: "Express, Canvas, Socket.io, React, Handlebars, MongoDB",
        URL: "/GTP",
        active: false
      }
    ]
  });
};
const aboutMe = (req, res) => {
  return res.render('about', {
    title: "About Me",
  });
};


module.exports.cSharp = cSharp;
//module.exports.cPlus = cPlus;
module.exports.javaScript = javaScript;
module.exports.about = aboutMe;