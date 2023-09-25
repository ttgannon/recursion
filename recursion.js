/** product: calculate the product of an array of numbers. */

function product(nums, start=0, end=nums.length-1) {
  //base case
  if (start > end) {
    return 1;
  }
  //recursive case
  return nums[start] * product(nums, start+1, end);
  
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, start=0, end=words.length-1) {
//base case
if (start === end) {
  return words[start].length;
}
//recursive case
let currentLength = words[start].length;
let maxLengthinRest = longest(words, start+1, end);
return Math.max(currentLength, maxLengthinRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  //base case 
  if (i >= str.length) {
    return '';
  }
  //recursive case
  return str[i] + everyOther(str, i+2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  const middleIndex = Math.floor(str.length/2);
  //base case
  if (i >= middleIndex) {
    return true;
  }
  if (str[i] !== str[str.length - 1 - i]) {
    return false;
  }
  //recursive case
  return isPalindrome(str, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  //base case 
  if (i >= arr.length) {
    return -1;
  }
  //recursive case
  if (arr[i] === val) {
    return i; 
  }
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1) {
  //base case
  if (i <= 0) {
    return str[i];
  }
  return str[i] + revString(str, i-1)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      stringArray.push(obj[key]);
    } else if (typeof obj[key] ==='object') {
      stringArray = stringArray.concat(gatherStrings(obj[key]));
    }
  }
  return stringArray;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length-1) {
  //base case
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end)/2)
  
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, mid+1, end);
  } else {
    return binarySearch(arr, val, start, mid-1)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
