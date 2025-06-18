

const csv_reader = require('csv-parser');

const { Readable } = require('stream');


const parseCSVBuffer = (buffer) =>{
    return new Promise((resolve, reject) => {
    const results = [];
    const readable = Readable.from(buffer.toString());
    readable._read = () => {}; 
    readable.push(buffer);
    readable.push(null); 

    readable
      .pipe(csv_reader())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
}


const BulkDataController = async(req,res)=>{

    console.log('Uploaded file:', req.file);


 try {
    const csvBuffer = req.file.buffer;

    const data = await parseCSVBuffer(csvBuffer);

    res.status(201).json({
      success: true,
      message: 'Uploaded and parsed CSV',
      data: data
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

module.exports = {
    BulkDataController
}