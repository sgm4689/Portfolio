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
      caption: "Angel's Dangerous Game",
      description: "Made in Unity",
      URL: "/ADG",
      active: true
    }, {
      image: "assets/img/bulletDisplay2.png",
      caption: "Bullet 'Hell'",
      description: "Made in MonoGame",
      URL: "/BH",
      active: false
    }]
  });
};



const misc = (req, res) => {
  return res.render('projects', {
    title: "Miscellaneous Projects",
    Projects: [{
      image: "assets/img/mergerTitle.png",
      caption: "Excel File Merger",
      description: "Made in R",
      URL: "/merger",
      active: true
    },
    {
        image: "assets/img/dashboardTitle.png",
        caption: "Power BI Dashboards",
        description: "Made in Power BI",
        URL: "/dashboard",
        active: false
      },]
  });
};

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
module.exports.misc = misc;
module.exports.javaScript = javaScript;
module.exports.about = aboutMe;
