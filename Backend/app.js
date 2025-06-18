const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const { BulkRoute } = require('./api/v1/bulk-data/routes/bulk-route');

const { predictRoute } = require('./api/v1/predict/routes/predict-route');

const app = express();

const PORT = 3000;


app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

app.use(cors());

app.use(morgan('dev'));

app.use('/api/v1/bulkInput',BulkRoute);

app.use('/api/v1/predict',predictRoute);



app.listen(PORT, ( )=>{
    console.log('server is started');
})