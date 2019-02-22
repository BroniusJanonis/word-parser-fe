(function (angular) {
'use strict';

angular.module('myApp.document-upload', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/document-upload', {
            templateUrl: '/scripts/pages/document-upload/document-upload.html',
            controller: 'DocumentUploadController'
        });
    }])
    .controller('DocumentUploadController', DocumentUploadController);

    DocumentUploadController.$inject = [
    '$scope',
    'RestService'
];

function DocumentUploadController(
    $scope,
    RestService
) {
    $scope.uploadFile = function(files) {
        RestService.documentUpload(files);
    };
}
})(window.angular);