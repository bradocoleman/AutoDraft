(function(app) {

    var flightsController = function($scope) {


        $scope.selectFlight = function (flight) {

            for(var f in $scope.flights) {
                f.approved = false;
            }

            flight.approved = !flight.approved;
        };


        $scope.flights =
        [
            {
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
                airline: "Southwest",
                flightNumber: 247,
                startTime: "11:00",
                endTime: "15:00",
                totalDuration: 4,
                price: 1500,
                cities: ["DUL", "LAG"],
                approved: false
            },
            {
                airline: "JetBlue",
                flightNumber: 102,
                startTime: "12:00",
                endTime: "15:00",
                totalDuration: 3,
                price: 500,
                cities: ["BWI", "LAX"],
                approved: false
            },
            {
                airline: "US Air",
                flightNumber: 98,
                startTime: "11:00",
                endTime: "15:00",
                totalDuration: 4,
                price: 1500,
                cities: ["DUL", "LAG"],
                approved: false
            }

        ];
    }

    app.controller("flightsController", ["$scope", flightsController]);
    

}(angular.module("airlineApp")));