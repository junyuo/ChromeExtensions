angular.module('optionsApp', [])
    .controller('optionController', function($scope) {
      
      $scope.initialTask = '';

      $scope.addInitialTask = function () {
        var initialTask = $scope.initialTask;
        chrome.storage.sync.set({
          'initialTask' : initialTask
        }, 
        function () {
          alert("設定成功!");
        });
      }
});

function init(){
  chrome.storage.sync.get(
      'initialTask'
  , function(data) {
    document.getElementById('initialTask').value = data.initialTask;   
  });
}

// call init function as page loaded
document.addEventListener('DOMContentLoaded', init);