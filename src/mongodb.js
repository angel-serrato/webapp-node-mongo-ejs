// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/hola')
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((error) => {
//         console.log(error, "Failed to connect to MongoDB");
//     });

// const LogInSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// const collection = new mongoose.model('users', LogInSchema);

// module.exports = collection;

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error, "Failed to connect to MongoDB");
    });

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model('users', LogInSchema);

module.exports = collection;