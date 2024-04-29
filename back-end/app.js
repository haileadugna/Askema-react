const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('./src/middlewares/cors');
const errorHandler = require('./src/middlewares/errorHandler');
const newsRoutes = require('./src/routes/newsRoutes');

app.use(express.json());
app.use(cors);

app.use('/news', newsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.use(errorHandler);

mongoose.connect('mongodb+srv://hordofahaile7:TsljZnlT5yvbL1N6@cluster0.l0zfpqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/news', upload.single('image'), (req, res) => {
  const saveImage = new imageModel({
  name: req.body.name,
  img: {
    data: fs.readFileSync('uploads/' + req.file.filename),
    contentType: 'image/png',
  }
  }
  );
  saveImage.save()
  .then(result => {
    console.log(result);
    res.status(200).json({ message: 'Image uploaded successfully' });
  })
  .cache(err => {
    console.log(err);
    res.status(500).json({ message: 'Image upload failed' });
  });
  res.send('Image uploaded successfully');

}
);

app.get('/news', (req, res) => {
  imageModel.find({}, (err, images) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.json(images);
    }
  });
});

const imageSchema = new mongoose.Schema({
  name: String,
  img: {
    data: Buffer,
    contentType: String
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = imageModel = mongoose.model('imageModel', imageSchema);