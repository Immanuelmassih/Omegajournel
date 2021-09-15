import http from "./httpService";
import { apiUrl } from "../config.json";

const category       = apiUrl + "/category/";
const categoryDetail = apiUrl + "/category/detail/";

export function categoryList ( ) {
  return http.get(category);
}

export function categoryDetails ( id ) {
  return http.get(`${categoryDetail}${id}`);
}

export const categories = [

	{
		id : 1,
		name : "Angular",
		posts : 50,
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 2,
		name : "Vue",
		posts : 40,
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 3,
		name : "React js",
		posts : 30,
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 4,
		name : "React Native",
		posts : 20,
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 5,
		name : "Angular js",
		posts : 10,
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 6,
		name : "Redex",
		posts : 65,
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 7,
		name : "RXWeb",
		posts : 65,
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	}

]


export function CategoriesList() {
	return categories
}


export const tags = [

	{
		id : 1,
		name : "Angular",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 2,
		name : "Vue",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 3,
		name : "React js",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 4,
		name : "React Native",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 5,
		name : "Angular js",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 6,
		name : "Redex",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	},
	{
		id : 7,
		name : "RXWeb",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit"
	}

]

export function TagsList() {
	return tags
}