export const Header = [

]

export function getHeader() {
	return Header
}

export function getPostDetail (id) {
   return Header.filter(x => x.id === id)
}