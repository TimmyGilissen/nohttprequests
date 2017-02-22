"use strict";
var testing_1 = require('@angular/core/testing');
var publisher_service_1 = require('./publisher.service');
testing_1.describe('Publisher Service', function () {
    testing_1.beforeEachProviders(function () { return [publisher_service_1.PublisherService]; });
    testing_1.it('should ...', testing_1.inject([publisher_service_1.PublisherService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=publisher.service.spec.js.map