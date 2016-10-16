(function() {
var app = angular.module("combobox", ['ui.bootstrap']);

app.controller('ComboBoxCtrl',['$scope', function($scope) {
  var vm = this;
  vm.selected = undefined;
  vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  vm.comboOpen = true;
}]);

app.directive('comboClick', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
        element.bind('click', function(e) {
          var comboGroup = angular.element(e.target).parents('div.comboBox')[0];
          var comboInp = angular.element(comboGroup).find('input')[0];
		  comboInp.value="";
		  
     	  setTimeout(function() {
			angular.element(comboInp).trigger("focus");
			angular.element(comboInp).trigger("change")
		  }, 1);
        });
    }
  };
});

})();
