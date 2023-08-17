const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema([{
    Name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    // booking: {
    //     type: String,
    //     require: true
    // },
    // VisitingHour: {
    //     type: String,
    //     require: true
    // },
    // totalSpace: {
    //     type: String,
    //     require: true
    // },
    date: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
}]);


const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);

module.exports = AppointmentModel;