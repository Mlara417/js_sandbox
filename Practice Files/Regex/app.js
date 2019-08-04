let re;
//Literal characters
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/i; //Must start with(^) h and case insensitive(i)
re = /d$/i; //Must end with($)
re = /^hello$/i; //must begin and end with
re = /^h.llo$/i; //matches any ONE character (.)
re = /^h*llo$/i; //matches any character 0 or more times (*)
re = /gre?a?y/i;  //Optional character (?) placed after 
re = /gre?a?y\?/i;  //Escape character(\) when trying to use as a literal instead of regex

//String to match
const str = 'Gray?';

//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}