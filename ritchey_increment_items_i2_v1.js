function ritchey_increment_items_i2_v1(array_arr, item_list_arr) {
	console.log(array_arr);
	document.getElementById("developer_data_ele").innerHTML += 'Array: [' + String(array_arr) + ']<br>';	
	//Reverse the array
	var array_arr = array_arr.reverse();
	//Increment the first value. When it exceeds the last value in item_list_arr it loops back to item_list_arr[0], and the next value is incremented, and so on. If a next value doesn't exist create it as item_list_arr[0].
	///Check if array is empty, and if it is increment.
	var check_if_empty = false;
	if (array_arr.length == 0) {
		console.log('First Unmaxed Position:0');
		console.log('First Unmaxed:' + '');
		console.log(array_arr);
		document.getElementById("developer_data_ele").innerHTML += 'First Unmaxed Position: [0]<br>';
		document.getElementById("developer_data_ele").innerHTML += 'First Unmaxed:\'\'<br>';
		document.getElementById("developer_data_ele").innerHTML += 'Reversed Array: [' + String(array_arr) + ']<br>';
		array_arr[0] = item_list_arr[0];
		document.getElementById("developer_data_ele").innerHTML += 'All Maxed: false<br>';
		console.log('All Maxed: false');	
		console.log(array_arr);
		document.getElementById("developer_data_ele").innerHTML += 'New Reversed Array: [' + String(array_arr) + ']<br>';
		var check_if_empty = true;
	}
	///Find the first value that isn't maxed. Keep in mind, they could all be!
	if (check_if_empty == false) {
		var check_if_all_maxed_var = true;
		var max_item_var = item_list_arr.length;
		var max_item_var = max_item_var - 1;
		var max_item_var = item_list_arr[max_item_var];
		console.log('Max Item:' + max_item_var);
		document.getElementById("developer_data_ele").innerHTML += 'Max Item: [' + max_item_var + ']<br>';
		for (var i = 0; i < array_arr.length; i++) {
			if (array_arr[i] != max_item_var) {
				if (check_if_all_maxed_var == true) {
					var first_unmaxed_var = i;
					console.log('First Unmaxed Position:' + first_unmaxed_var);
					console.log('First Unmaxed:' + array_arr[first_unmaxed_var]);
					console.log(array_arr);
					document.getElementById("developer_data_ele").innerHTML += 'First Unmaxed Position: [' + first_unmaxed_var + ']<br>';
					document.getElementById("developer_data_ele").innerHTML += 'First Unmaxed: [' + String(array_arr[first_unmaxed_var]) + ']<br>';
					document.getElementById("developer_data_ele").innerHTML += 'Reversed Array: [' + String(array_arr) + ']<br>';
				}
				var check_if_all_maxed_var = false;
			}
		}
	}
	///If all maxed add item_list_arr[0], and change the rest to item_list_arr[0]
	if (check_if_empty == false) {
		if (check_if_all_maxed_var == true) {
			document.getElementById("developer_data_ele").innerHTML += 'All Maxed: true<br>';
			console.log('All Maxed: true');
			for (var i2 = 0; i2 < array_arr.length; i2++) {
				array_arr[i2] = item_list_arr[0];
			}
			array_arr.push(item_list_arr[0]);
			console.log(array_arr);
			document.getElementById("developer_data_ele").innerHTML += 'New Reversed Array: [' + String(array_arr) + ']<br>';
		} else {
			document.getElementById("developer_data_ele").innerHTML += 'All Maxed: false<br>';
			console.log('All Maxed: false');	
		}
	}
	///If not all maxed increment the first unmaxed by 1, and then minimize out all the preceeding values.
	if (check_if_empty == false) {
		if (check_if_all_maxed_var == false) {
			////Increment first unmaxed
			var next_item_in_list_var = item_list_arr.indexOf(array_arr[first_unmaxed_var]);
			var next_item_in_list_var = next_item_in_list_var + 1;
			array_arr[first_unmaxed_var] = item_list_arr[next_item_in_list_var];
			////Minimize out preceeding values
			for (var i3 = 0; i3 < array_arr.length; i3++) {
				if (i3 < first_unmaxed_var) {
					array_arr[i3] = item_list_arr[0];
				}
			}
		
			console.log(array_arr);
			document.getElementById("developer_data_ele").innerHTML += 'New Reversed Array: [' + String(array_arr) + ']<br>';	
		}
	}
	//Unreverse the array
	var return_var = array_arr.reverse();
	console.log(array_arr);
	console.log(" ");
	document.getElementById("developer_data_ele").innerHTML += 'Completed Array: [' + String(array_arr) + ']<br>';
	document.getElementById("developer_data_ele").innerHTML += '<br>';
	//Return
	return return_var;
}