const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  //Router calls for loading web pages
  app.get('/', mid.requiresSecure, controllers.Main.about);
  app.get('/cSharp', mid.requiresSecure, controllers.Main.cSharp)
  app.get('/cPlus', mid.requiresSecure, controllers.Main.cPlus)
  app.get('/javaScript', mid.requiresSecure, controllers.Main.javaScript)
  app.get('/about', mid.requiresSecure, controllers.Main.about)

  //Router calls for loading specific information on Projects
  app.get('/ADG', mid.requiresSecure, controllers.Projects.ADG);
  app.get('/BH', mid.requiresSecure, controllers.Projects.BH)
  app.get('/PGE', mid.requiresSecure, controllers.Projects.PGE)
  app.get('/NNP', mid.requiresSecure, controllers.Projects.NNP)
  app.get('/GTP', mid.requiresSecure, controllers.Projects.GTP)
};

module.exports = router;