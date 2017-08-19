var app = angular.module('WeekendChallengeApp', []);

//Weekend Challenge Controller
app.controller('WeekendChallengeController',['$http', function ($http){
    console.log('Weekend Challenge Controller loaded');

    var self = this;

    self.employee = [];

    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employee'
        }).then(function (response) {
            console.log(response.data)
            self.employee = response.data;
        }); // end of http
    }; // end of getEmployees

    self.getEmployees();

}]);//End of Weekend Challenge Controller