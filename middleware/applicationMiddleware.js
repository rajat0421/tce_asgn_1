const commonMiddleware = (req, res, next) => {
    
    console.log('Common middleware executed');
    next();
  };
  
  module.exports = {
    commonMiddleware,
  };

