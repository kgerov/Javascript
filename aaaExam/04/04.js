function solve(arr) {
	function sortObject(o) {
	    var sorted = {},
	    key, a = [];

	    for (key in o) {
	    	if (o.hasOwnProperty(key)) {
	    		a.push(key);
	    	}
	    }

	    a.sort();

	    for (key = 0; key < a.length; key++) {
	    	sorted[a[key]] = o[a[key]];
	    }
	    return sorted;
	}
	var stats = {};
	for (var i = 0; i < arr.length; i++) {
		var row = arr[i];
		//Extract Team 1
		var team1 = "";
		for (var j = 0; j < row.indexOf("/"); j++) {
			team1 += row[j];
		}
		team1 = team1.trim();
		//Extract Team 2
		var team2 = "";
		for (var j = row.indexOf("/")+1; j < row.indexOf(":"); j++) {
			team2 += row[j];
		}
		team2 = team2.trim();
		//Extract Result 1
		var team1Res = "";
		for (var j = row.indexOf(":")+1; j < row.indexOf("-"); j++) {
			team1Res += row[j];
		}
		team1Res = team1Res.trim();
		team1Res = Number(team1Res);
		//Extract Result 2
		var team2Res = "";
		for (var j = row.indexOf("-")+1; j < row.length; j++) {
			team2Res += row[j];
		}
		team2Res = team2Res.trim();
		team2Res = Number(team2Res);


		if (!stats[team1]) {
			stats[team1] = {};
			stats[team1]["goalsScored"] = team1Res;
			stats[team1]["goalsConceded"] = team2Res;
			stats[team1]["matchesPlayedWith"] = [];
			stats[team1]["matchesPlayedWith"].push(team2);
		} else {
			stats[team1]["goalsScored"] += team1Res;
			stats[team1]["goalsConceded"] += team2Res;
			if (stats[team1]["matchesPlayedWith"].indexOf(team2) == -1) {
				stats[team1]["matchesPlayedWith"].push(team2);
			}
		}

		if (!stats[team2]) {
			stats[team2] = {};
			stats[team2]["goalsScored"] = team2Res;
			stats[team2]["goalsConceded"] = team1Res;
			stats[team2]["matchesPlayedWith"] = [];
			stats[team2]["matchesPlayedWith"].push(team1);
		} else {
			stats[team2]["goalsScored"] += team2Res;
			stats[team2]["goalsConceded"] += team1Res;
			if (stats[team2]["matchesPlayedWith"].indexOf(team1) == -1) {
				stats[team2]["matchesPlayedWith"].push(team1);
			}
		}
	}

	//var teams = [];

	for (var index in stats) {
		stats[index]["matchesPlayedWith"].sort();
	}

	stats = sortObject(stats);

	return JSON.stringify(stats);
	//return stats;
}

console.log(solve(["Germany / Argentina: 1-0", "Brazil / Netherlands: 0-3", "Netherlands / Argentina: 0-0", "Brazil / Germany: 1-7", "Argentina / Belgium: 1-0", "Netherlands / Costa Rica: 0-0", "France / Germany: 0-1", "Brazil / Colombia: 2-1"]));
