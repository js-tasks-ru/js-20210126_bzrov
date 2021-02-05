/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

	function compareStrings(arr, direction){
		return arr.slice().sort((str1,str2)=>  str1.localeCompare(str2, ['ru', 'en'], {caseFirst: "upper"}) * direction );
	}

  if (param === 'asc') {
  	return compareStrings(arr, 1);
  } else if(param === 'desc') {
  	return compareStrings(arr, -1);
  } else {
  	return arr;
  }
}
