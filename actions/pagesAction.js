import 'whatwg-fetch'

export function fetchTiles() {
	return fetch('https://server-qa.mozzazcare.com/rpc.ashx', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"jsonrpc": "2.0",
				"method": "GetPagesAndTiles",
				"params": {
					"Pages": [{
						"Type": "Lunch and Dinner",
						"PageId": 176,
						"CustomerId": 58263,
						"SandboxId": 58204
					}],
					"CustomerId": 58204,
					"apiVersion": "1.14",
					"appIdentifier": "MCA",
					"applicationVersion": "2.5",
					"buildNo": "0.0.0",
					"requestType": "app",
					"source": "Mozzaz Care",
					"CID": 58204,
					"Auth": "31f0a022-22b8-446a-816c-55e232fdcbb4"
				},
				"id": "28"
			})
		})
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			var pagesData = []
			var singlePage = json.result[0];
			return singlePage;
		});
}

export default function initPagesAction() {
	//dispatch({type:'FETCH_PAGE'});
	return (dispatch) => {
		return fetchTiles().then(function(singlePage) {
			dispatch({ type: "initTiles", page: singlePage  });
		});
	};
}