export function validateGenres(genres) {
    return genres.reduce((str, { name }) => str + name + ', ', '').slice(0, -2);
}

export function validateGameWebsiteUrl(url){
    return url.replace(/(^\w+:|^)\/\//, '');
}

export function removeHtmlTagsFromText(str) {
    return str.toString().replace(/(<([^>]+)>)/ig, '');
}

export function validateDate(date){
    return date.replaceAll('-', '/')
}