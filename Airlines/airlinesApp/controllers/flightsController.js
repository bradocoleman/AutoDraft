(function(app) {

    var flightsController = function($scope, flightService) {

        var init = function() {
            $scope.flights = flightService.getFlights();
        };

        $scope.selectFlight = function (flight) {

            for(var f in $scope.flights) {
                $scope.flights[f].approved = false;
            }

            flight.approved = !flight.approved;
            if (flightService.selectFlight(flight.id)) {
                $scope.status = "You have made a good decision";
            };
          
        };

        init();

    }

    app.controller("flightsController", ["$scope", "flightService", flightsController]);
    

}(angular.module("airlineApp")));