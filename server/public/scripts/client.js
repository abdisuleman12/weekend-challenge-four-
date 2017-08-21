var app = angular.module('WeekendChallengeApp', []);

//Weekend Challenge Controller
app.controller('WeekendChallengeController', ['$http', function ($http) {
    console.log('Weekend Challenge Controller loaded');

    var self = this;


    self.employee = [];
    self.monthlyAvg;

    var total = 0;
    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employee'
        }).then(function (response) {
            console.log(response.data)
            self.employee = response.data;
            for (var i = 0; i < self.employee.length; i++) {
                employeeAvg = self.employee[i].annual_salary / 12
                total += employeeAvg;
                self.monthlyAvg = total;
            }
        }); // end of http
    }; // end of getEmployees


    self.getEmployees();

    self.postNewEmployee = function () {
        $http({
            method: 'POST',
            url: '/employee',
            data: self.newEmployee
        }).then(function (response) {
            console.log(response);
            self.getEmployees();
            self.newEmployee = {};
        });
    };

}]);//End of Weekend Challenge Controller