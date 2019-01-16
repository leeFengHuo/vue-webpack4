'use strict';

module.exports = {
    'getEnv': [{
        'code': 0,
        'msg': 'Success',
        'id': 'hawkeye',
        'data': {
            'list': [
                {
                    name: '湖南',
                    id: 1
                },{
                    name: '湖北',
                    id: 2
                },{
                    name: '吉林',
                    id: 3
                },{
                    name: '黑龙江',
                    id: 4
                },{
                    name: '海南',
                    id: 5
                },{
                    name: '广东',
                    id: 6
                }  
            ]

        }
    },{
        'code': 0,
        'msg': 'Success',
        'id': 'skynet',
        'data': {
            'list': [
                {
                    name: 'A国',
                    id: 11
                },{
                    name: 'F国',
                    id: 12
                },{
                    name: 'E国',
                    id: 13
                },{
                    name: 'M国',
                    id: 14
                },{
                    name: 'J国',
                    id: 15
                }
            ]

        }
    }],
    'getModule': [{
        'code': 0,
        'msg': 'Success',
        'id': 'hawkeye',
        'data': {
            'list': [{
                'id': 1,
                'name': '网络视听检测',
                'env_id': 1,
                'childList': [
                    {
                        'id': 11,
                        'name': '重点关注',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 12,
                        'name': '持证网站',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 13,
                        'name': '备案网站',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 14,
                        'name': 'ICP认证网站',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 15,
                        'name': '社会网站',
                        'env_id': 1,
                        'parent_id': 1
                    },
                ]
            },{
                'id': 2,
                'name': '直播',
                'env_id': 1,
            },{
                'id': 3,
                'name': 'app',
                'env_id': 1,
            },{
                'id': 4,
                'name': '应用市场',
                'env_id': 1,
            }]
        }
    },{
        'code': 0,
        'msg': 'Success',
        'id': 'skynet',
        'data': {
            'list': [{
                'id': 1,
                'name': '网络视听检测1',
                'env_id': 1,
                'childList': [
                    {
                        'id': 11,
                        'name': '重点关注1',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 12,
                        'name': '持证网站1',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 13,
                        'name': '备案网站1',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 14,
                        'name': 'ICP认证网站1',
                        'env_id': 1,
                        'parent_id': 1
                    },{
                        'id': 15,
                        'name': '社会网站1',
                        'env_id': 1,
                        'parent_id': 1
                    },
                ]
            },{
                'id': 2,
                'name': '直播1',
                'env_id': 1,
            },{
                'id': 3,
                'name': 'app1',
                'env_id': 1,
            },{
                'id': 4,
                'name': '应用市场1',
                'env_id': 1,
            }]
        }
    }],        
    'getModule2': [{
        'code': 0,
        'msg': 'Success',
        'id': 'hawkeye',
        'data': {
            'list': [{
                'id': 31,
                'name': '网络视听检测',
                'env_id': 1,
                'childList': [
                    {
                        'id': 311,
                        'name': '重点关注',
                        'env_id': 1,
                        'parent_id': 31
                    },{
                        'id': 312,
                        'name': '持证网站',
                        'env_id': 1,
                        'parent_id': 31
                    },{
                        'id': 313,
                        'name': '备案网站',
                        'env_id': 1,
                        'parent_id': 31
                    },{
                        'id': 314,
                        'name': 'ICP认证网站',
                        'env_id': 1,
                        'parent_id': 31
                    },{
                        'id': 315,
                        'name': '社会网站',
                        'env_id': 1,
                        'parent_id': 31
                    },
                ]
            },{
                'id': 32,
                'name': '直播',
                'env_id': 1,
            },{
                'id': 33,
                'name': 'app',
                'env_id': 1,
            },{
                'id': 34,
                'name': '应用市场',
                'env_id': 1,
            }] 

        }
    },{
        'code': 0,
        'msg': 'Success',
        'id': 'skynet',
        'data': {
            'list': [{
                'id': 41,
                'name': '网络视听检测1',
                'env_id': 1,
                'childList': [
                    {
                        'id': 411,
                        'name': '重点关注1',
                        'env_id': 1,
                        'parent_id': 41  
                    },{
                        'id': 412,
                        'name': '持证网站1',
                        'env_id': 1,
                        'parent_id': 41
                    },{
                        'id': 413,
                        'name': '备案网站1',
                        'env_id': 1,
                        'parent_id': 41
                    },{
                        'id': 414,
                        'name': 'ICP认证网站1',
                        'env_id': 1,
                        'parent_id': 41
                    },{
                        'id': 415,
                        'name': '社会网站1',
                        'env_id': 1,
                        'parent_id': 41
                    },
                ]
            },{
                'id': 42,
                'name': '直播1',
                'env_id': 1,
            },{
                'id': 43,
                'name': 'app1',
                'env_id': 1,
            },{
                'id': 44,
                'name': '应用市场1',
                'env_id': 1,
            }]

        }
    }],
    'list': {
        'code': 0,
        'msg': 'Success',
        'data': {
            'total': 111,
            'timeList': ['20171207','20171208','20171209','20171210','20171211','20171212','20171213'],
            'dataNameList': [
                {
                    'label': '入库量',
                    'prop': 'collectNum'
                },
                {
                    'label': '采集量',
                    'prop': 'storageNum'
                }
            ],
            'list': [
                {
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },
                {
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },
                {
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '华声在线',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },
            ]
        }
    },
    'list2': {
        'code': 0,
        'msg': 'Success',
        'data': {
            'total': 99,
            'timeList': ['20171207','20171208','20171209','20171210','20171211','20171212','20171213'],
            'dataNameList': [
                {
                    'label': '入库量',
                    'prop': 'collectNum'
                },
                {
                    'label': '采集量',
                    'prop': 'storageNum'
                }
            ],
            'list': [
                {
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'error',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },
                {
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'error',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'warning',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'warning',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'success',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ],
                    'childTasks': [
                        {
                            'siteName': '测试子任务1号',
                            'siteId': 12222222,
                            'status': 'warning',
                            'msgList': [
                                {
                                    'collectNum': '12',
                                    'storageNum': '12',
                                    'date': '20171207',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '29',
                                    'storageNum': '22',
                                    'date': '20171208',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '21',
                                    'storageNum': '42',
                                    'date': '20171209',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '11',
                                    'storageNum': '2',
                                    'date': '20171210',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '411',
                                    'storageNum': '122',
                                    'date': '20171211',
                                    'isUnusual': 1
                                },{
                                    'collectNum': '122911',
                                    'storageNum': '1222',
                                    'date': '20171212',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '129411',
                                    'storageNum': '1222',
                                    'date': '20171213',
                                    'isUnusual': 1
                                }
                            ]
                        },{
                            'siteName': '测试子任务2号',
                            'siteId': 21001100,
                            'status': 'error',
                            'msgList': [
                                {
                                    'collectNum': '1',
                                    'storageNum': '22',
                                    'date': '20171207',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '2',
                                    'storageNum': '22',
                                    'date': '20171208',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '211',
                                    'storageNum': '41',
                                    'date': '20171209',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '911',
                                    'storageNum': '222',
                                    'date': '20171210',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '411',
                                    'storageNum': '22',
                                    'date': '20171211',
                                    'isUnusual': 1
                                },{
                                    'collectNum': '122911',
                                    'storageNum': '1222',
                                    'date': '20171212',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '129411',
                                    'storageNum': '1222',
                                    'date': '20171213',
                                    'isUnusual': 1
                                }
                            ]
                        },{
                            'siteName': '测试子任务3号',
                            'siteId': 31001100,
                            'status': 'success',
                            'msgList': [
                                {
                                    'collectNum': '12911',
                                    'storageNum': '122',
                                    'date': '20171207',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '2911',
                                    'storageNum': '22',
                                    'date': '20171208',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '211',
                                    'storageNum': '41',
                                    'date': '20171209',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '111',
                                    'storageNum': '12',
                                    'date': '20171210',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '211',
                                    'storageNum': '12',
                                    'date': '20171211',
                                    'isUnusual': 1
                                },{
                                    'collectNum': '122911',
                                    'storageNum': '1222',
                                    'date': '20171212',
                                    'isUnusual': 0
                                },{
                                    'collectNum': '129411',
                                    'storageNum': '1222',
                                    'date': '20171213',
                                    'isUnusual': 1
                                }
                            ]
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'status': 'success',
                    'siteId': 11001100,
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'success',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'success',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'success',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'success',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'success',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },
                {
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'success',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'warning',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'warning',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'warning',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                },{
                    'siteName': '测试任务',
                    'siteId': 11001100,
                    'status': 'warning',
                    'msgList': [
                        {
                            'collectNum': '12911',
                            'storageNum': '122',
                            'date': '20171207',
                            'isUnusual': 0
                        },{
                            'collectNum': '2911',
                            'storageNum': '22',
                            'date': '20171208',
                            'isUnusual': 0
                        },{
                            'collectNum': '212911',
                            'storageNum': '4122',
                            'date': '20171209',
                            'isUnusual': 0
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171210',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171211',
                            'isUnusual': 1
                        },{
                            'collectNum': '122911',
                            'storageNum': '1222',
                            'date': '20171212',
                            'isUnusual': 0
                        },{
                            'collectNum': '129411',
                            'storageNum': '1222',
                            'date': '20171213',
                            'isUnusual': 1
                        }
                    ]
                }
            ]
        }
    }

};