import axios from "axios";

export function login(store, {login, password}) {
	axios
		.post("http://138.68.74.39/api/login?email=" + login + "&password=" + password)
		.then(function (response) {
			// handle success
			console.log(response);
			store.commit("saveToken", response.data.token);

			store.dispatch("getTodoList");
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}

export function getTodoList(store) {
	axios
		.get("http://138.68.74.39/api/todolists", store.getters.getHeader)
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}

