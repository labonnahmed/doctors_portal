const express = require('express');
const mongoose = require('mongoose');
const AppointmentModel = require('./Schemas/AppointmentSchema')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



//connect with mongodb...
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doctorsportal.kfgevr7.mongodb.net/${process.env.DB_MONGONAME}?retryWrites=true&w=majority`;
const connectingParams = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
    .connect(uri, connectingParams)
    .then(() => console.log('connecting successfully'))
    .catch((err) => (console.log(err)));




app.get('/', (req, res) => {
    res.send('hello doctors....')
})




app.post('/takeAppoinment', async (req, res) => {
    try {
        let appointmentModel = new AppointmentModel(req.body);
        const result = await appointmentModel.save({});
        res.status(200).send(result)
    }
    catch (err) {
        res.status(500).send(err)
    }
});

app.listen(port, () => console.log("listening to port 8000"))