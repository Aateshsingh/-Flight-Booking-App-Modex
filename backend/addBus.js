const mongoose = require('mongoose');
const Bus = require('./models/Buses');

const DB_URL = require('./config/keys').MongoURI;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB")
        addBuses();
    })
    .catch(err => {
        throw err
    })

async function addBuses() {
    const buses = [
        {
            companyName: "RedBus",
            busType: "AC",
            busNumber: "TN01AB1234",
            startCity: "Chennai",
            destination: "Bangalore",
            totalSeats: "50",
            availableSeats: "50",
            pricePerSeat: "500"
        },
        {
            companyName: "RedBus",
            busType: "Non-AC",
            busNumber: "TN01AB1235",
            startCity: "Chennai",
            destination: "Hyderabad",
            totalSeats: "50",
            availableSeats: "50",
            pricePerSeat: "600"
        },
        {
            companyName: "GreenBus",
            busType: "AC",
            busNumber: "KA01AB1236",
            startCity: "Bangalore",
            destination: "Chennai",
            totalSeats: "50",
            availableSeats: "50",
            pricePerSeat: "500"
        },
        {
            companyName: "BlueBus",
            busType: "AC",
            busNumber: "TN01AB1237",
            startCity: "Coimbatore",
            destination: "Chennai",
            totalSeats: "50",
            availableSeats: "50",
            pricePerSeat: "400"
        },
        {
            companyName: "BlueBus",
            busType: "Non-AC",
            busNumber: "TN01AB1238",
            startCity: "Chennai",
            destination: "Coimbatore",
            totalSeats: "50",
            availableSeats: "50",
            pricePerSeat: "400"
        },
        {
            companyName: "YellowBus",
            busType: "AC",
            busNumber: "KA01AB1239",
            startCity: "Bangalore",
            destination: "Coimbatore",
            totalSeats: "50",
            availableSeats: "50",
            pricePerSeat: "450"
        }
    ];

    for (let busData of buses) {
        const bus = new Bus(busData);
        await bus.save();
        console.log("Added bus:", busData.busNumber);
    }

    console.log("All buses added");
    mongoose.connection.close();
}
