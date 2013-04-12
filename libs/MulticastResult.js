/**
 * Author: Ismael Gorissen
 * Date: 12/04/13 11:37
 * Company: PinchProject
 * Website: http://pinchproject.com/
 *
 * Copyright (C) 2013 PinchProject
 * MIT Licensed
 */

var util = require('util');

function MulticastResult() {
    this.multicast_id = null;
    this.success_length = 0;
    this.failures = {};
    this.failures_length = 0;
    this.canonical_ids = [];
    this.canonical_ids_length = 0;
}

MulticastResult.prototype = {
    setMulticastId: setMulticastId,
    setFailures: setFailures,
    setCanonicalIds: setCanonicalIds,
    addCanonicalIdObject: addCanonicalIdObject,
    addFailureValueWithKey: addFailureValueWithKey,
    toJSON: toJSON,
    setSuccessLength: setSuccessLength,
    setFailuresLength: setFailuresLength,
    setCanonicalIdsLength: setCanonicalIdsLength
};

/**
 * Create a multicast result object with useful
 * information and return it.
 *
 * @returns {{}}
 */
function toJSON() {
    var json = {};

    if (this.multicast_id) {
        json['multicast_id'] = this.multicast_id;

        json['success_length'] = this.success_length;

        if (this.failures_length > 0) {
            json['failures'] = this.failures;
        }
        json['failures_length'] = this.failures_length;

        if (this.canonical_ids_length > 0) {
            json['canonical_ids'] = this.canonical_ids;
        }
        json['canonical_ids_length'] = this.canonical_ids_length;
    } else {
        json = null;
    }

    return json;
}

/**
 * Set multicast_id.
 *
 * @param id
 */
function setMulticastId(id) {
    if (typeof id === 'number') {
        this.multicast_id = id;
    }
}

/**
 * Set failures.
 *
 * @param obj
 */
function setFailures(obj) {
    if (typeof obj === 'object' && !util.isArray(obj)) {
        this.failures = obj;
    }
}

/**
 * Set canonical_ids.
 *
 * @param obj
 */
function setCanonicalIds(obj) {
    if (util.isArray(obj)) {
        this.canonical_ids = obj;
    }
}

/**
 * Add new canonical_id object.
 *
 * @param obj
 */
function addCanonicalIdObject(obj) {
    if (typeof obj === 'object' && !util.isArray(obj)) {
        this.canonical_ids.push(obj);
    }
}

/**
 * Add new value to the specified key.
 *
 * @param key
 * @param value
 */
function addFailureValueWithKey(key, value) {
    if (typeof value === 'string') {
        if (!this.failures.hasOwnProperty(key)) {
            this.failures[key] = [];
        }

        this.failures[key].push(value);
    }
}

/**
 * Set success length.
 *
 * @param length
 */
function setSuccessLength(length) {
    if (typeof length === 'number') {
        this.success_length = length;
    }
}

/**
 * Set failures length.
 *
 * @param length
 */
function setFailuresLength(length) {
    if (typeof length === 'number') {
        this.failures_length = length;
    }
}

/**
 * Set canonical_ids length.
 *
 * @param length
 */
function setCanonicalIdsLength(length) {
    if (typeof length === 'number') {
        this.canonical_ids_length = length;
    }
}

module.exports = MulticastResult;