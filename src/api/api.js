import {
	request
} from '/src/utils/request.js'

/**
 * 接口
 * @param data  请求数据
 * @@return
 * export const login = data => {
	return request({
		url: '接口',
		method: '请求方法',
		data 
	})
}
 */

// export function listOrders(query) {
//   return request({
//     url: "/Orders/list",
//     method: "get",
//     data: query,
//   });
// }
// export function getDetailOnReceived(orderId) {
//   return request({
//     url: `/Orders/getDetailOnReceived/${orderId}`,
//     method: "get"
//   });
// }
// export function addStacking(data) {
//   return request({
//     url: "/Stacking",
//     method: "post",
//     data: data,
//   });
// }



export function uaeslogin(query) {
	return request({
		url: "/iot-manager/auth/login",
		method: "post",
		header: {
		        'Content-Type': 'application/x-www-form-urlencoded' // 设置请求头为表单提交类型
		    },
		data: query,
	});
}

export function getPlanList(query) {
	return request({
		url: "/andon/pda/getPlanList",
		method: "get",
		data: query,
	});
}

export function submitResult(query) {
	return request({
		url: "/andon/pda/submitResult",
		method: "get",
		data: query,
	});
}

export function uaeslogin1(query) {
	return {
		"success": true,
		"msg": "登录成功",
		"code": null,
		"data": {
			"lineList": [{
				"id": "75b06637-de92-4232-8054-b38056b4d250",
				"workshopId": "3e4eb480-f52c-495b-84c2-422b1a65c2fd",
				"lineCode": "11111",
				"lineName": "11111",
				"lineFunctionId": null,
				"lineFunction": null,
				"shift": "早班,晚班",
				"mesLineCode": "11111",
				"productCenter": null,
				"departPosition": null,
				"project": null,
				"directorId": null,
				"lineLocation": null,
				"status": null,
				"lineTakt": null,
				"dblinkName": null,
				"schema": null,
				"smtType": null,
				"processno": null,
				"cph": null,
				"cphChangeTime": 1682299206000,
				"spiThreshold": 0,
				"aoiThreshold": 0,
				"smtIp": null,
				"smtPort": 0,
				"forThreshold": null,
				"notificationTypeId": "dbacfe75-3fee-44ad-af82-b6b74341b56e,6d169404-8438-42b0-b6c2-094405fe1a5f",
				"isonline": "1",
				"technology": null,
				"isStatistics": "1",
				"shiftType": "SAA_HYC_DN"
			},{
				"id": "75b06637-de92-4232-8054-b38056b4d111",
				"workshopId": "3e4eb480-f52c-495b-84c2-422b1a65c111",
				"lineCode": "22222",
				"lineName": "22222",
				"lineFunctionId": null,
				"lineFunction": null,
				"shift": "早班,晚班",
				"mesLineCode": "2222",
				"productCenter": null,
				"departPosition": null,
				"project": null,
				"directorId": null,
				"lineLocation": null,
				"status": null,
				"lineTakt": null,
				"dblinkName": null,
				"schema": null,
				"smtType": null,
				"processno": null,
				"cph": null,
				"cphChangeTime": 1682299206000,
				"spiThreshold": 0,
				"aoiThreshold": 0,
				"smtIp": null,
				"smtPort": 0,
				"forThreshold": null,
				"notificationTypeId": "dbacfe75-3fee-44ad-af82-b6b74341b56e,6d169404-8438-42b0-b6c2-094405fe1a5f",
				"isonline": "1",
				"technology": null,
				"isStatistics": "1",
				"shiftType": "SAA_HYC_DN"
			}],
			"user": {
				"id": "40a86547-a910-49e8-82a1-5dbed52671bb",
				"personCode": "HYZD0372",
				"personImg": null,
				"duty": "D2EE工程师",
				"tel": "19818328636",
				"mail": "XIAOXIONG.YAO@AMPHENOLMCP.COM",
				"username": "HYZD0372",
				"password": "E10ADC3949BA59ABBE56E057F20F883E",
				"name": "工程师",
				"positionId": "87dfbd59-df9f-4816-8bdf-afd833f5d2dc",
				"workshopId": "3e4eb480-f52c-495b-84c2-422b1a65c2fd",
				"lineId": "75b06637-de92-4232-8054-b38056b4d250,41a...",
				"dept": null,
				"isAuditPerson": null,
				"is5sAuditPerson": null,
				"technologicalProcessId": null,
				"technological": null,
				"cardNo": null,
				"isTpm": "0",
				"notificationTypeId": "df6926f4-8ad4-4ce3-896a-aafc0a82a568,898e...",
				"isLpa": "0",
				"roleCode": "9",
				"positionName": null
			}
		}
	}
}


export function getPlanList1(query) {
	return {
		"success": true,
		"msg": "更换项目查询成功",
		"code": null,
		"data": [{
				"id": "1d703dd6146f0bc1e0630d0810ac96fc",
				"consumablesId": "66c539eb-71d5-4142-8d57-f4789f0b80e1",
				"workshopId": "3e4eb480-f52c-495b-84c2-422b1a65c2fd",
				"lineId": "75b06637-de92-4232-8054-b38056b4d250",
				"lineCode": "11111",
				"lineName": "11111",
				"trackId": "0d7b1c81-0eff-47b9-8bb6-da6751a70f29",
				"trackCode": "19-1",
				"trackName": "RF",
				"macId": "573a3a1e-5efd-4e6d-95dc-d7ad05ec5931",
				"macCode": "TK2021033102",
				"macName": "RF",
				"macMesCode": "TESTINPUT01",
				"partNumber": "NPM-001",
				"materialName": "上料盘",
				"serviceLife": "50",
				"qty": "2",
				"reason": "1",
				"positionId": "87dfbd59-df9f-4816-8bdf-afd833f5d2dc",
				"positionName": "MES",
				"operator": "System",
				"operatingTime": 1720540800000,
				"operationType": "2",
				"expirationTime": 1720532335000,
				"serial": 1
			},
			{
				"id": "1d703dd6146d0bc1e0630d0810ac96fc",
				"consumablesId": "0b2e29e9-af4e-49ae-9134-130af6ca9633",
				"workshopId": "3e4eb480-f52c-495b-84c2-422b1a65c2fd",
				"lineId": "75b06637-de92-4232-8054-b38056b4d250",
				"lineCode": "22222",
				"lineName": "22222",
				"trackId": "0d7b1c81-0eff-47b9-8bb6-da6751a70f29",
				"trackCode": "19-1",
				"trackName": "RF",
				"macId": "573a3a1e-5efd-4e6d-95dc-d7ad05ec5931",
				"macCode": "TK2021033102",
				"macName": "RF",
				"macMesCode": "TESTINPUT01",
				"partNumber": "NPM-002",
				"materialName": "上料盘2",
				"serviceLife": "24",
				"qty": "1",
				"reason": "1",
				"positionId": "87dfbd59-df9f-4816-8bdf-afd833f5d2dc",
				"positionName": "MES",
				"operator": "System",
				"operatingTime": 1720540800000,
				"operationType": "1",
				"expirationTime": 1720611982000,
				"serial": 1
			},
			{
				"id": "1d703dd6146d0bc1e0630d0810ac96fc",
				"consumablesId": "0b2e29e9-af4e-49ae-9134-130af6ca9633",
				"workshopId": "3e4eb480-f52c-495b-84c2-422b1a65c2fd",
				"lineId": "75b06637-de92-4232-8054-b38056b4d250",
				"lineCode": "33333",
				"lineName": "33333",
				"trackId": "0d7b1c81-0eff-47b9-8bb6-da6751a70f29",
				"trackCode": "19-1",
				"trackName": "RF",
				"macId": "573a3a1e-5efd-4e6d-95dc-d7ad05ec5931",
				"macCode": "TK2021033102",
				"macName": "RF",
				"macMesCode": "TESTINPUT01",
				"partNumber": "NPM-003",
				"materialName": "上料盘3",
				"serviceLife": "24",
				"qty": "1",
				"reason": "1",
				"positionId": "87dfbd59-df9f-4816-8bdf-afd833f5d2dc",
				"positionName": "MES",
				"operator": "System",
				"operatingTime": 1720540800000,
				"operationType": "3",
				"expirationTime": 1720611982000,
				"serial": 1
			}
		]
	}
}

export function submitResult1(query) {
	return {
		"success": true,
		"msg": "更换项目查询成功",
		"code": null,
		"data": []
	}
}