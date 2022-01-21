//const api_url = "<heroku_app_url>"
const api_url = "https://hrgrp.herokuapp.com/user"

function loadData(records = []) {
	var table_data = "";
	for(let i=0; i<records.length; i++) {
		table_data += `<tr>`;
		table_data += `<td>${records[i].name}</td>`;
		table_data += `<td>${records[i].age}</td>`;
		table_data += `<td>${records[i].city}</td>`;
		table_data += `<td>${records[i].house_no}</td>`;
		table_data += `<td>${records[i].no_of_rooms}</td>`;
		table_data += `<td>${records[i].duration_in_months}</td>`;
		table_data += `<td>${records[i].rent}</td>`;

		table_data += `<td>`;
		table_data += `<a href="edit.html?id=${records[i]._id}"><button class="btn btn-primary">Edit</button></a>`;
		table_data += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i]._id}')>Delete</button>`;
		table_data += `</td>`;
		table_data += `</tr>`;
	}
	//console.log(table_data);
	document.getElementById("tbody").innerHTML = table_data;
}

function getData() {
	fetch(api_url)
	.then((response) => response.json())
	.then((data) => { 
		console.table(data); 
		loadData(data);
	});
}


function getDataById(id) {
	fetch(`${api_url}/${id}`)
	.then((response) => response.json())
	.then((data) => { 
	
		console.log(data);
		document.getElementById("id").value = data._id;
		document.getElementById("name").value = data.name;
		document.getElementById("age").value = data.age;
		document.getElementById("city").value = data.city;
		document.getElementById("house_no").value = data.house_no;
		document.getElementById("no_of_rooms").value = data.no_of_rooms;
		document.getElementById("duration_in_months").value = data.duration_in_months;
		document.getElementById("rent").value = data.rent;

	})
}


/*function postData() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var city = document.getElementById("city").value;
	var house_no = document.getElementById("house_no").value;
	var no_of_rooms = document.getElementById("no_of_rooms").value;
	var duration_in_months = document.getElementById("duration_in_months").value;
	var rent = document.getElementById("rent").value;
	
	data = {name: name, age: age, city: city, house_no: house_no, no_of_rooms: no_of_rooms, duration_in_months: duration_in_months, rent: rent};
	
	fetch(api_url, {
		method: "POST",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.log(data); 
		window.location.href = "index.html";
	})
}	
*/
function postData() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var city = document.getElementById("city").value;
	var house_no = document.getElementById("house_no").value;
	var no_of_rooms = document.getElementById("no_of_rooms").value;
	var duration_in_months = document.getElementById("duration_in_months").value;
	var rent = document.getElementById("rent").value;
	
	data = {name: name, age: age, city: city, house_no: house_no, no_of_rooms: no_of_rooms, duration_in_months: duration_in_months, rent: rent};
	
	fetch(api_url, {
		method: "POST",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.log(data); 
		window.location.href = "index.html";
	})
}	


function putData() {
	
	var _id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var city = document.getElementById("city").value;
	var house_no = document.getElementById("house_no").value;
	var no_of_rooms = document.getElementById("no_of_rooms").value;
	var duration_in_months = document.getElementById("duration_in_months").value;
	var rent = document.getElementById("rent").value;

	data = {_id: _id, name: name, age: age, city: city, house_no: house_no, no_of_rooms: no_of_rooms, duration_in_months: duration_in_months, rent: rent};

	fetch(api_url, {
		method: "PUT",
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((data) => { 
		console.table(data);
		window.location.href = "index.html";
	})
}


function deleteData(id) {
	user_input = confirm("Are you sure you want to delete this record?");
	if(user_input) {
		fetch(api_url, {
			method: "DELETE",
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({"_id": id})
		})
		.then((response) => response.json())
		.then((data) => { 
			console.log(data); 
			window.location.reload();
		})
	}
}