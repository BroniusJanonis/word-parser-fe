'use strict'

angular.module('myApp.services', []).factory('RestService',
		[ "$http", function($http) {
			var service = {};

			service.documentDownload = function () {
                return $http.get('http://157.230.27.96:7001/parser-api/document-download');
            }

            service.deleteAllDocumentsByContentType = function (contentType) {
                return $http.delete('http://157.230.27.96:7001/parser-api/file-upload/' + contentType);
            }

            service.documentUpload = function (files) {
                var fd = new FormData();
                angular.forEach(files, function (file) {
                    fd.append("files", file);
                });
				return $http.post("http://157.230.27.96:7001/parser-api/file-upload", fd, {
                    withCredentials: true,
                    headers: {'Content-Type': undefined },
                    transformRequest: angular.identity
                });
            }

			return service;
		} ]);