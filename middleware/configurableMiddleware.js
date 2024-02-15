const configurableMiddleware = (config) => {
    return (req, res, next) => {
   
      console.log(`Configurable middleware executed with config: ${config}`);
      next();
    };
  };
  
  module.exports = configurableMiddleware;