import http from "./httpService";
import { apiUrl } from "../config.json";

const createPost  = apiUrl + "/post/add";
const uploadImage = apiUrl + "/post/uploadImage";
const sliderPost  = apiUrl + "/post/slider";

export function create(post) {
  return http.post(createPost, {
  	title : post.title,
  	image : post.image,
  	category : post.category,
  	tags : post.tag,
  	private : post.status,
  	content : post.description,
  	author : post.authorId,
  	authorName : post.author
  });
}

export function Upload( Image ) {
	const config = {headers: {'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','Cache-Control': 'max-age=0','Cookie': document.cookie}}
  let data = new FormData();
  data.append('image', Image);
  return http.post(uploadImage,data,config);
}

export function carousel ( ) {
	return http.get(sliderPost)
}

export const posts = [
	{
		id :  1,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  2,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  3,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  4,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  5,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  6,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  7,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  8,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  9,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  10,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  11,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  12,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  13,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  14,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  15,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  16,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  17,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  18,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  19,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    },
    {
		id :  20,
		image : "https://noonpost.netlify.app/html/template/assets/img/blog/25.jpg",
		category : "Angular",
		title : "7 Dinner Recipes for a Date Night at Home",
		description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...",
		authorImg : "https://noonpost.netlify.app/html/template/assets/img/author/1.jpg",
		author : "David smith",
		date : "January 12, 2021",
    }
]


export function getPosts () {
	return posts
}