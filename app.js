const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const  middleware = require('./middleware/applicationMiddleware')

app.use(bodyParser.json());
app.use(middleware.commonMiddleware)

const authorsRoutes = require('./routes/authors');
const blogsRoutes = require('./routes/blogs');


app.use('/authors', authorsRoutes);
app.use('/blogs', blogsRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
