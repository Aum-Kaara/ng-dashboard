(function () {
    "use strict";

    function e(e, a, t) {
        function o() {
            function o(e) {
                return {
                    id: e
                    , firstName: "Foo" + e
                    , lastName: "Bar" + e
                }
            }

            function r() {
                n.heroes.push(angular.copy(n.person2Add)), n.person2Add = o(n.person2Add.id + 1)
            }

            function i(e) {
                n.heroes.splice(e, 1, angular.copy(n.person2Add)), n.person2Add = o(n.person2Add.id + 1)
            }

            function l(e) {
                n.heroes.splice(e, 1)
            }
            e("data/datatable.json")
                .query()
                .$promise.then(function (e) {
                    n.persons = e
                }), n.heroes = [{
                    id: 860
                    , firstName: "Superman"
                    , lastName: "Yoda"
                }, {
                    id: 870
                    , firstName: "Ace"
                    , lastName: "Ventura"
                }, {
                    id: 590
                    , firstName: "Flash"
                    , lastName: "Gordon"
                }, {
                    id: 803
                    , firstName: "Luke"
                    , lastName: "Skywalker"
                }], n.dtOptions = a.newOptions()
                .withPaginationType("full_numbers"), n.dtColumnDefs = [t.newColumnDef(0), t.newColumnDef(1), t.newColumnDef(2), t.newColumnDef(3)
                    .notSortable()], n.person2Add = o(1), n.addPerson = r, n.modifyPerson = i, n.removePerson = l
        }
        var n = this;
        o()
    }
   
    angular.module("TaskApp")
        .controller("DataTableController", e), e.$inject = ["$resource", "DTOptionsBuilder", "DTColumnDefBuilder"]
})();