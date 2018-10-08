# CSS could be your friend

The code examples can be found in the code folder in this repo.

We leveraged Adrian Li's CSS notes that can be found here.

https://github.com/adrianmcli/lhl-lectures/blob/master/w3d1b-css-is-not-easy/README.md
      

## Topics covered (Summary)

- CSS Specificity
  - Rule Ordering
  - Specificity Hierarchy
  - Calculating Specificity

- CSS Combinators
  - Descendant Selector (space)
  - Direct Child Selector (>)
  - Adjacent Sibling Selector (+)
  - General Sibling Selector (~)

- CSS Gotchas
  - The `display` property
  - CSS Centering

- CSS Best Practices
  - Flexbox

- Recommendations
  - Use of !important
  - Turn cache off in browser

## Recommendations


### Use of !important

The use of important attribute in CSS styles should be reduced for troubleshooting or extreme cases.


### Turn cache off in browser

One point that I forgot to mention in the breakout is to disable the content cache. This is recommended since browsers tend to cache files, specially CSS files and when troubleshooting or testing style changes, it is often frustrating not to see these changes show. This option can be found under Development Tools, select Network and then check the option called 'Disable Cache'.


```css

/* this will overide the background colour to green regardless of other styling */

p { background: red }
div { background-color: green !important }

```

