'use strict'

angular.module('myApp.services', []).factory('RestService',
		[ "$http", function($http) {
			var service = {};

			service.documentDownload = function () {
                return $http({
                    method: 'GET',
                    url: '/api/parser-api/document-download'
                });
            }

            service.deleteAllDocumentsByContentType = function (contentType) {
                return $http({
                    method: 'DELETE',
                    url: '/api/parser-api/file-upload/' + contentType
                });
            }

            service.documentUpload = function (files) {
                var fd = new FormData();
                angular.forEach(files, function (file) {
                    fd.append("files", file);
                });
                return $http({
                    method: 'POST',
                    url: '/api/parser-api/file-upload',
                    data: fd,
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
            }

			return service;
		} ]);