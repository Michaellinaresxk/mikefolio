import {
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
	project7
} from "@/assets/img/projects";

import {
	chat_project,
	gosia_project,
	space_project,
	translator_project,
	weather_project,
	xk_project,
	jammuisk
} from "@/assets/img/projects/project-details";

export const projects = [
	{
		id: 1,
		category: "Apps",
		title: "Words Translator",
		title1: "Words",
		title2: "Translator",
		subtitle: "Learn other languages...",
		description:
			"It’s a Small project to providing translation for the most important languages around the world, I made this personal app because I wanted to learn polish, Italian and Russian languages, and to do it with one tool created by me.",
		CardImage: project1,
		projectLinks: "https://word-translator-70f04.web.app/",
		repoLink: "https://github.com/Michaelxk/Vue-Translator",
		repoProvider: "GitHub",
		technologies: [
			"Git",
			"Materialize",
			"Vue.JS",
			"Vue-Resourse",
			"API: Yandex",
			"Firebase",
		],
		whatIImprube: [
			"I learn how to integrate Vue with Vue-Resourse for to make the request to Yandex API, chanching Bootstrap CSS Framework for Materialize, trying to dont repeat myself.",
		],
		appImage: translator_project,
	},
	{
		id: 10,
		category: "Apps",
		title: "Jammusik",
		title1: "Jammusik",
		title2: "",
		subtitle: "Manage and organize your playlists...",
		description:
			"We are a useful and well thought out tool for musicians. Offering a number of features focused on the organization and management of playlists and songs, both for rehearsals and live performances.",
		CardImage: project7,
		projectLinks: "https://word-translator-70f04.web.app/",
		repoLink: "https://github.com/Michaellinaresxk/Jammusik",
		repoProvider: "GitHub",
		technologies: [
			"Git",
			"React Native",
			"Framer motion",
			"Ion icons",
			"Firebase",
		],
		whatIImprube: [
			"Clean code (DDD) implementation, DRY, KISS, and beautifull architecture with dependency injection and providers.",
		],
		appImage: jammuisk,
	},
	{
		id: 11,
		category: "Apps",
		title: "XK-Web Community",
		title1: "XK-Web",
		title2: "Community",
		subtitle: "Platform to share code snippets, articles and more...",
		description:
			"We are much more than a platform to share code snippets, we are the opportunity to improve your skills and be part of a passionate community that shares your interest in programming.",
		CardImage: project6,
		projectLinks: "",
		repoLink: "https://github.com/XKcomunity/xkweb-web-app",
		repoProvider: "GitHub",
		technologies: [
			"Next.js",
			"React",
			"Style components",
			"GraphQL",
			"Hygraph CMS",
		],
		whatIImprube: [
			"CMS Hygraph implementation with GraphQL, DRY, KISS, Styles components and NEXT.js.",
		],
		appImage: xk_project,
	},
	{
		id: 2,
		category: "Apps",
		title: "Gosia Recipe",
		title1: "Gosia",
		title2: "Recipe",
		subtitle: "Be Smart, Eat Smart...",
		description:
			"Search for recipes using natural language queries, such as 'gluten free brownies without sugar' or 'low fat vegan cupcakes.' You can automatically calculate the nutritional information for any recipe, visualize ingredient lists, etc..",
		CardImage: project2,
		projectLinks: "https://gosias-s-recipe.netlify.app/",
		repoLink: "https://github.com/Michaellinaresxk/Gosias-s-Recipe",
		repoProvider: "GitHub",
		technologies: [
			"Git",
			"Vuetify",
			"Vue.JS",
			"Axios",
			"API: Food Nutrition",
			"Netlify",
			"Pinia"
		],
		whatIImprube: [
			"This is the project that i like the most, because i enjoy a lot creating routes, bringing the recipes from Food Nutrition API, and providing to the people good and nice UI and UX experience.",
		],

		appImage: gosia_project,
	},

	{
		id: 4,
		category: "Apps",
		title: "Chat Room",
		title1: "Chat",
		title2: "Room",
		subtitle: '"Root Access" for Super Users...',
		description: "Simple testing chat room app, easy to use, is a tipical chat room hall",
		CardImage: project4,
		projectLinks: "https://ninja-chat-42d79.firebaseapp.com/",
		repoLink: "https://github.com/Michaelxk/ChatRoom",
		repoProvider: "GitHub",
		technologies: [
			"Git",
			"Vuetify",
			"Vue.JS",
			"Vue-Router",
			"Moment",
			"API: Yandex",
			"Firebase",
		],
		whatIImprube: [
			"Its a beutiful project powered by Vue as a JavaScript framework. i Use Moment helping me with 'timestamp'. how to use vue-components and good integration with vue-router.",
			"For me was so emotional the way to deal with this data. Moving from one side, to another.",
		],
		appImage: chat_project,
	},

	{
		id: 5,
		category: "Apps",
		title: "Weather App",
		title1: "Weather",
		title2: "App",
		subtitle: "When Thunder Roars, Go Indoors!",
		description:
			"Its so easy to receive the weather conditions in your current location. Weather app provides detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit.",
		CardImage: project5,
		projectLinks: "https://vue-weather-3d15c.firebaseapp.com/",
		repoLink: "https://github.com/Michaelxk/Simple-Vue-WeatherApp",
		repoProvider: "GitHub",
		technologies: [
			"Git",
			"Fetch",
			"Vue.JS",
			"API: openweathermap",
			"Firebase",
		],
		whatIImprube: [],
		appImage: weather_project,
	},
];
