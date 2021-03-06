import axios from "axios";
import router from "../../router/router";

export function login(store, {login, password}) {
	axios
		.post("http://138.68.74.39/api/login?email=" + login + "&password=" + password)
		.then(function (response) {
			store.commit("saveToken", response.data.token);

			router.push({name: "Home"});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}

export function register(store, {name, login, password}) {
	axios
		.post("http://138.68.74.39/api/register?name=" + name + "&email=" + login + "&password=" + password)
		.then(function (response) {
			store.commit("saveToken", response.data.token);

			router.push({name: "Home"});
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
}
