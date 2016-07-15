angular.module('todoApp', [])
    .controller('todoController', function($scope) {

        $scope.tasks = [];
        
        $scope.addTask = function() {
            if(isNotEmptyOrUndefined($scope.task)){
                $scope.tasks.push($scope.task);
                $scope.task = '';
            } else {
                alert('task name cannot be null');
            }           
        }
        
        $scope.deleteTask = function() {
            $scope.tasks.splice(this.$index, 1);
        }

});
    
// 檢查是串是否不為空值且不為undefined
function isNotEmptyOrUndefined(str) {
    return str != '' && !angular.isUndefined(str) && str != null;
}