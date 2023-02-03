export function validateGenres(genres) {
    let str = '';
    const genresNames = genres.map(({ name }) => name);
    str = genresNames.join(', ');
    return str;
}

export function validateGameWebsiteUrl(url){
    return url.replace(/(^\w+:|^)\/\//, '');
}

export function removeHtmlTagsFromText(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
        
    return str.replace( /(<([^>]+)>)/ig, '');
}

export function validateDate(date){
    return date.replaceAll('-', '/')
}