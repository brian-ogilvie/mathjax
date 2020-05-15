# MathJax in React

With a simple import of the MathJax library via a CDN, we can render mathematical expressions easily in a React app.

## Setup

Add the following script tag to your `index.html` to import MathJax from the CDN:

```
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

If you know for sure that your input will contain only TeX and not MML, you can use a smaller file from the CDN:

```
<script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
```

## A String parser function

Most TeX strings out there are delineated by `$` on both ends. Unfortunately, MathJax is looking for strings delineated by escaped parens `\\(` and `\\)`. So we need to create a regex replace to let MathJax know which content we would like rendered:

```
function parseTex(str) {
  return str.replace(/\$([^$]+)\$/g, (_, content) => {
    return '\\(' + content + '\\)';
  });
}
```

All this does is replace the leading and closing `$` in each expression with an escaped open or close paren, where appropriate. 

## The Result

Given an input string of:

```
"Determining the astrophysical $^{20}$Ne($\\alpha$,p)$^{23}$Na reaction rate"
```

We get:

<img alt="output" src="https://res.cloudinary.com/brian-ogilvie/image/upload/v1589568260/Random%20GitHub/Screen_Shot_2020-05-15_at_2.42.21_PM.png" />

Our regex function will find and replace all sections appropriately.