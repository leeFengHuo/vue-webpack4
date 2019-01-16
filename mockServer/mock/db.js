'use strict';
const faker = require('faker');
faker.locale = 'zh_CN';
var list = require('./list.js');
module.exports = function() {
    let data = {
        user_info: {
            'code': 0,
            'msg': 'Success.',
            'data': {
                'avatar': faker.internet.avatar(),
                'name': faker.name.findName(),
                'role': ['admin']
            }
        }
    };
    Object.assign(data, list);
    return data;
};