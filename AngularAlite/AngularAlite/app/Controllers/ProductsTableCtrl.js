// create the controller and inject Angular's $scope
angular.module('TaskApp')
.controller('ProductsTableCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder','DTColumnBuilder', '$resource',function (a, b, c, d, e) {
		 var f = this;
        f.products = [], f.dtOptions = b.newOptions()
            .withBootstrap()
            .withOption("order", [[1, "asc"]])
            .withDOM('<"row"<"col-md-8 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"pull-right"f>>>t<"row"<"col-md-4 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"inline-controls text-center"i>><"col-md-4 col-sm-12"p>>')
            , f.dtColumnDefs = [c.newColumnDef(0)
                .notSortable(), c.newColumnDef(7)
                .notSortable()], f.selectedAll = !1, f.selectAll = function () {
                a.selectedAll = a.selectedAll ? !1 : !0, angular.forEach(f.products, function (b) {
                    b.selected = a.selectedAll
                })
            }, e('http://www.filltext.com/?rows=300&id={index}&name={lorem|2}&category=["Food","Drinks","Accesories","Electro","Kitchen","Bathroom"]&price={numberLength|3}}&date={date|01-01-2012,01-01-2015}&status=["published","not published","deleted"]&pretty=true')
            .query()
            .$promise.then(function (a) {
                f.products = a
            })
}]);// end TabsDemoCtrl
