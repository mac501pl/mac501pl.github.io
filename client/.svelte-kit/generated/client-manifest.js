export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\portfolio.svelte"),
	() => import("..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\src\\routes\\skills.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"portfolio": [[0, 3], [1]],
	"contact": [[0, 4], [1]],
	"skills": [[0, 5], [1]]
};