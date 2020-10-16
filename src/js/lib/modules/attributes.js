import $ from '../core';

$.prototype.addAttr = function (attrName, attrVal) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(attrName)) {
            continue;
        }

        this[i].setAttribute(attrName, attrVal);
    }

    return this;
};

$.prototype.remAttr = function (attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attrName)) {
            continue;
        }

        this[i].removeAttribute(attrName);
    }

    return this;
};

$.prototype.refreshAttr = function (attrName, attrVal) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(attrName)) {
            this[i].setAttribute(attrName, attrVal);
        } else {
            continue;
        }
    }

    return this;
};

$.prototype.getAttr = function (attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attrName)) {
            continue;
        }

        this[i].getAttribute(attrName);
    }

    return this;
};