const createTravel = [{
        "c_id": 2322,
        "c_name": "刘小二",
        "c_phone": "13825484651",
        "c_start": "广州",
        "c_end": "惠州",
        "c_deadTime": "2021-05-30",
        "c_goTime": "2021-06-30",
        "c_auditPrice": "",
        "c_childPrice": "",
        "c_limit": 30
    },
    {
        "c_id": 2323,
        "c_name": "刘小二",
        "c_phone": "13825484651",
        "c_start": "广州",
        "c_end": "惠州",
        "c_deadTime": "2021-05-30",
        "c_goTime": "2021-06-30",
        "c_auditPrice": "",
        "c_childPrice": "",
        "c_limit": 40
    },
    {
        "c_id": 2324,
        "c_name": "刘小二",
        "c_phone": "13825484651",
        "c_start": "广州",
        "c_end": "惠州",
        "c_deadTime": "2021-05-30",
        "c_goTime": "2021-06-30",
        "c_auditPrice": "",
        "c_childPrice": "",
        "c_limit": 50
    }
]
const sureTravel = [{
    "c_id": 2322,
    "c_name": "刘小二",
    "c_phone": "13825484651",
    "c_start": "广州",
    "c_end": "惠州",
    "c_deadTime": "2021-07-30",
    "c_goTime": "2021-06-30",
    "c_auditPrice": "1000",
    "c_childPrice": "500",
    "c_limit": 30,
    "c_current": 0
},
{
    "c_id": 2323,
    "c_name": "刘小二",
    "c_phone": "13825484651",
    "c_start": "广州",
    "c_end": "惠州",
    "c_deadTime": "2021-06-30",
    "c_goTime": "2021-06-30",
    "c_auditPrice": "2000",
    "c_childPrice": "100",
    "c_limit": 40,
    "c_current": 10
},
{
    "c_id": 2324,
    "c_name": "刘小二",
    "c_phone": "13825484651",
    "c_start": "广州",
    "c_end": "惠州",
    "c_deadTime": "2021-05-30",
    "c_goTime": "2021-06-30",
    "c_auditPrice": "3231",
    "c_childPrice": "323",
    "c_limit": 50,
    "c_current": 20
}
]
const cancelTravel = [{
    "c_id": 2322,
    "c_name": "刘小二",
    "c_phone": "13825484651",
    "c_start": "广州",
    "c_end": "惠州",
    "c_deadTime": "2021-05-30",
    "c_goTime": "2021-06-30",
    "c_auditPrice": "1000",
    "c_childPrice": "500",
    "c_limit": 30,
    'c_cancelReason': '不够火爆'
},
{
    "c_id": 2323,
    "c_name": "刘小二",
    "c_phone": "13825484651",
    "c_start": "广州",
    "c_end": "惠州",
    "c_deadTime": "2021-05-30",
    "c_goTime": "2021-06-30",
    "c_auditPrice": "2000",
    "c_childPrice": "100",
    "c_limit": 40,
    'c_cancelReason': '不够好玩'
},
{
    "c_id": 2324,
    "c_name": "刘小二",
    "c_phone": "13825484651",
    "c_start": "广州",
    "c_end": "惠州",
    "c_deadTime": "2021-05-30",
    "c_goTime": "2021-06-30",
    "c_auditPrice": "3231",
    "c_childPrice": "323",
    "c_limit": 50,
    'c_cancelReason': '就是想取消'
}
]
module.exports = {
    createTravel,
    sureTravel,
    cancelTravel
}