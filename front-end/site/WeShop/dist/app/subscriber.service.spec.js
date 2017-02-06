"use strict";
var testing_1 = require('@angular/core/testing');
var subscriber_service_1 = require('./subscriber.service');
testing_1.describe('Subscriber Service', function () {
    testing_1.beforeEachProviders(function () { return [subscriber_service_1.SubscriberService]; });
    testing_1.it('should ...', testing_1.inject([subscriber_service_1.SubscriberService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=subscriber.service.spec.js.map