'use strict';

var Ajv = require('ajv');
var assert = require('assert');

var serviceGroupsData = require('./data');
var serviceGroupsSchema = require('./schema');

var ajv = Ajv({ allErrors: true });

var validate = ajv.compile(serviceGroupsSchema);
assert(test(validate));

console.log('serviceGroups schema OK');

function test(validate) {
    var valid = validate(serviceGroupsData);

    if (valid) {
        console.log('serviceGroups data is valid!');
    } else {
        console.log('serviceGroups data is INVALID!');
        console.log(validate.errors);
    }

    return valid;
}
