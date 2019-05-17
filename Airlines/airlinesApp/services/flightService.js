(function (app) {
    var testData = [
        {
            id: 1,
            airline: "United",
            flightNumber: 207,
            startTime: "12:00",
            endTime: "15:00",
            totalDuration: 3,
            price: 500,
            cities: ["BWI", "LAX"],
            approved: false
        },
        {
            id: 2,
            airline: "Southwest",
            flightNumber: 247,
            startTime: "11:00",
            endTime: "15:00",
            totalDuration: 4,
            price: 1500,
            cities: ["DUL", "LAG"],
            approved: false
        }
    ];

    var flightService = function () {
        var flightFactory = {};

        flightFactory.getFlights = function () {
            return testData;
        }

        flightFactory.selectFlight = function(id) {
            //
            // $http.put("/flights/select/3", id)
            //
            return true;
        }

        return flightFactory;
    }

    app.factory("flightService", flightService);

}(angular.module("airlineApp")));