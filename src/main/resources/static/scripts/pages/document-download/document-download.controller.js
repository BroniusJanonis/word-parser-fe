(function (angular) {
    'use strict';

    angular.module('myApp.document-download', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/document-download', {
                templateUrl: '/scripts/pages/document-download/document-download.html',
                controller: 'DocumentDownloadController'
            });
        }])
        .controller('DocumentDownloadController', DocumentDownloadController);

    DocumentDownloadController.$inject = [
        '$scope',
        'RestService'
    ];

    function DocumentDownloadController(
        $scope,
        RestService
    ) {
        ($scope.documentDownload = function(){
            RestService.documentDownload().then(function (response) {
                $scope.documentDownload = response.data;
            });
        })();

        $scope.deleteAllDocumentsByContentType = function(contentType){
            RestService.deleteAllDocumentsByContentType(contentType).then(function (response) {
                if(response.data === true){
                    location.reload();
                }
            });
        }
    }
})
(window.angular);