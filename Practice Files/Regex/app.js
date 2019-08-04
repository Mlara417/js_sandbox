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

//Brackets [] - character sets
re = /gr[ae]y/i;  //Must be an a or e
re = /[GF]ray/;  //Must be a G or F
re = /[^GF]ray/i;  //Match anything except a G or F
re = /[A-Z]ray/;  //Match any uppercase letter
re = /[a-z]ray/;  //Match any lowercase letter
re = /[A-Za-z]ray/;  //Match any letter
re = /[0-9]ray/;  //Match any digit

//Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly (m) amount of times
re = /Hel{2,4}o/i; //Must occur between range m - n (m, n) amount of times
re = /Hel{2,}o/i; //Must occur at least (m) times

//parentheses () - Grouping
re = /^([0-9]x){3}$/; //Must be exactly 3x 3 times

//Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-word character
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/;  //match whitespace char
re = /\S/;  //match non-whitespace char
re = /Hell\b/i; // Word boundary

//Assertions
re = /x(?=y)/; //match x only if followed by y
re = /x(?!y)/; //match x only if not followed by y

//String to match
const str = 'Hello';

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