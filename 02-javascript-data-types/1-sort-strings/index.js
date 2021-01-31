/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
	return arr.slice().sort( function (str1, str2) {
	  	if (param === 'asc') {
	    	return str1.localeCompare(str2, undefined, {caseFirst: "upper"});
	    } else if (param === 'desc') {
	    	return str1.localeCompare(str2, undefined, {caseFirst: "upper"}) * -1;
	    }
	});
}
