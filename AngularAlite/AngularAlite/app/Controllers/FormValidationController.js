(function () {
    "use strict";

    function Controller() {
        function e() {
            vm.notBlackListed = function (e) {
                var a = ["some@mail.com", "another@email.com"];
                return -1 === a.indexOf(e)
            }, vm.words = function (e) {
                return e && e.split(" ")
                    .length
            }, vm.submitted = !1, vm.validateInput = function (e, t) {
                var o = vm.formValidate[e];
                return (o.$dirty || vm.submitted) && o.$error[t]
            }, vm.submitForm = function () {
                return vm.submitted = !0, vm.formValidate.$valid ? void console.log("Submitted!!") : (console.log("Not valid!!"), !1)
            }, vm.saveUser = function () {
				console.log("saveUser!!")
				console.log(vm.userForm)
                if (vm.userForm.$invalid) {
                    angular.forEach(vm.userForm.$error, function (field) {
                        angular.forEach(field, function (errorField) {
							console.log(field)
                            errorField.$setTouched();
                        })
                    });
                }

            }
        }
        var vm = this;
        e()
    }

    angular.module("TaskApp")
        .controller("FormValidationController", Controller)
})();
