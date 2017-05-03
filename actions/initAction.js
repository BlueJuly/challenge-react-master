import 'whatwg-fetch'

function fetchTitles() {
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
			var tilesData = []
			var singlePage = json.result[0];
			var tiles = singlePage.TileDescriptions;
			tiles.forEach(function(tile) {
				tilesData.push({
					img: 'data:image/png;base64,' + tile.sImage64,
					title: tile.text
				});
			});
			return tilesData;
		});
}

export function initAction() {
	return (dispatch) => {
		return fetchTitles().then(function(tilesData) {
			dispatch({ type: "addTiles", tiles: tilesData  });
		});
	};
}