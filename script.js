let allPokemons = [];
let searchArray = [];
let allTypes = [];


/**
 * Initializes the application by loading the first 60 Pokémon from the PokeAPI and rendering them.
 */
async function init() {
	for (let i = 1; i <= 60; i++) {
		await loadPokemon(i);
	}
	rednerPokemons();
}

/**
 * Loads a Pokémon from the PokeAPI and adds it to the allPokemons array.
 *
 * @param {number} i - The ID of the Pokémon to be loaded.
 * @return {Promise} - A promise that is resolved when the Pokémon has been successfully loaded.
 */
async function loadPokemon(i) {
	let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
	let response = await fetch(url);
	let responseAsJS = await response.json();
	allPokemons.push(await responseAsJS);
}

/**
 * Renders all Pokémon from the allPokemons array.
 * Each Pokémon is rendered as an HTML card and their types are also displayed.
 * The loadingScreen function is called to remove the loading screen.
 */
function rednerPokemons() {
	for (let i = 0; i < allPokemons.length; i++) {
		document.getElementById("cardMenu").innerHTML += renderCardHTML(i);
		renderPokemonTypes(i);
	}
	loadingScreen();
}

/**
 * Renders the next 30 Pokémon from the allPokemons array.
 *
 * @param {number} newLength - The index at which to start rendering the Pokémon.
 */
function loadmorePokemons(newLength) {
	newLength--;
	for (let i = newLength; i < allPokemons.length; i++) {
		document.getElementById("cardMenu").innerHTML += renderCardHTML(i);
		renderPokemonTypes(i);
	}
	document.getElementById("loadeMoreButton").style.display = "flex";
	document.getElementById("loadingButton").classList.add("d-none");
}
/**
 * Renders the types of a Pokémon.
 *
 * @param {number} i - The index of the Pokémon in the allPokemons array.
 */
function renderPokemonTypes(i) {
	for (let j = 0; j < allPokemons[i].types.length; j++) {
		document.getElementById(`pokemonTyps${i}`).innerHTML += renderTypeImg(i, j);
	}
}
/**
 * Removes the loading screen from the page.
 */
function loadingScreen() {
	document.getElementById("loadingScreen").style.display = "none";
}

/**
 * Clears the Pokémon info card.
 */
function closePokemonInfos() {
	document.getElementById("pokemonInfoCard").innerHTML = "";
}

/**
 * Loads the next 30 Pokémon from the PokeAPI and renders them.
 */
async function loadmore() {
	document.getElementById("loadeMoreButton").style.display = "none";
	document.getElementById("loadingButton").classList.remove("d-none");
	let length = allPokemons.length + 1;
	let newLength = length + 30;
	for (let i = length; i <= newLength; i++) {
		await loadPokemon(i);
	}
	loadmorePokemons(length);
}
/**
 * Opens the Pokémon info card and displays information about the Pokémon with the given index.
 *
 * @param {number} i - The index of the Pokémon in the allPokemons array.
 */
function openPokemonInfos(i) {
	document.getElementById("pokemonInfoCard").innerHTML = openPokemonInfosHTML(i);
}

/**
 * Filters the displayed Pokémon based on the search term entered by the user.
 * Only Pokémon whose names include the search term will be displayed.
 */
function searchPokemon() {
	let search = document.getElementById("search").value;
	search = search.toLowerCase();
	document.getElementById("cardMenu").innerHTML = "";

	for (let i = 0; i < allPokemons.length; i++) {
		let name = allPokemons[i].name;
		if (name.toLowerCase().includes(search)) {
			document.getElementById("cardMenu").innerHTML += renderCardHTML(i);
		}
	}
}

/**
 * Renders an image representing the type of a Pokémon.
 *
 * @param {number} i - The index of the Pokémon in the allPokemons array.
 * @param {number} j - The index of the type in the Pokémon's types array.
 * @return {string} - The HTML for the type image.
 */
function renderTypeImg(i, j) {
	const typeName = allPokemons[i].types[j].type.name;
	const type = `imgs/${typeName}.png`;
	return renderPokemonTypsHTML(type);
}
