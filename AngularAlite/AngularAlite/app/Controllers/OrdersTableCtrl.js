// create the controller and inject Angular's $scope
angular.module('TaskApp')
.controller('OrdersTableCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder','DTColumnBuilder', '$resource',function (a, b, c, d, e) {
		 var f = this;
        f.orders = [], f.dtOptions = b.newOptions()
            .withBootstrap()
            .withOption("order", [[1, "asc"]])
            .withDOM('<"row"<"col-md-8 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"pull-right"f>>>t<"row"<"col-md-4 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"inline-controls text-center"i>><"col-md-4 col-sm-12"p>>')
            .withLanguage({
                sLengthMenu: "View _MENU_ records"
                , sInfo: "Found _TOTAL_ records"
                , oPaginate: {
                    sPage: "Page"
                    , sPageOf: "of"
                }
            })
            
            , f.dtColumnDefs = [c.newColumnDef(0)
                .notSortable(), c.newColumnDef(8)
                .notSortable()], f.selectedAll = !1, f.selectAll = function () {
                a.selectedAll = a.selectedAll ? !1 : !0, angular.forEach(f.orders, function (b) {
                    b.selected = a.selectedAll
                })
            }, e('http://www.filltext.com/?rows=300&id={index}&date={date|01-01-2012,01-01-2015}&placedby={firstName}~{lastName}&status=["pending","closed","sent","cancelled"]&quantity={number|20}&total={numberLength|3}}&shipto={streetAddress}~{city}&selected=false&pretty=true')
            .query()
            .$promise.then(function (a) {
                f.orders = a
            })
}]);// end TabsDemoCtrl
