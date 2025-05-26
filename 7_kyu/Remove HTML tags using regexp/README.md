# DESCRIPTION:

## Remove HTML tags and return string without:

1. &lt;tag> and &lt;/tag>
2. &lt;tag/>
3. &lt;tag />
4. html tags with attributes.  
   Don't trim space, tab etc.

### You have to use regexp.

Tests are using function:  
`String.prototype.replace(your regexp, "")`

## Have fun :)
