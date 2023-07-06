---
title: 'Fixing flexbox child element overflows — the power of min-width'
date: '2021-05-25'
---
In modern day web development, it is common for flex boxes to be embed and nested deep within each other.

For example, to create a layout such as this:
![image](https://github.com/yiheinchai/yiheinchai.github.io/assets/76833604/54253fba-b572-4e8a-8cd5-bfd3d45ddd7f)

Example Layout
A possible solution would be the following:
![image](https://github.com/yiheinchai/yiheinchai.github.io/assets/76833604/0f199aef-b375-4d06-ac95-50f767a6067e)

Here, we have the following structure:

Flex Row -> Flex Column -> Flex Row

Now, what happens if we add more chips such that the innermost flex row overflows?
![image](https://github.com/yiheinchai/yiheinchai.github.io/assets/76833604/86df7eae-8a68-47dd-bcf5-62f1dc6497e2)

We can see that by adding more chips, causes the innermost flex row to overflow. This overflow then cascades up: causing flex column to increase in width, which in turns causes the outermost flex row to increase in width. Now the width of the layout is much wider than the desired width.

The simple and most straight-forward solution is to set the innermost flex row with the following CSS rule:

flex-flow: row wrap;

Enabling wrapping causes it to look like this,
![image](https://github.com/yiheinchai/yiheinchai.github.io/assets/76833604/4c17bc33-9248-4ed0-b507-5f90ec04e7d2)

However, with the chips wrapping over the next line, this isn’t the most aesthetically pleasing design.

Another solution would be to use overflows. For example, we can apply the following CSS rules to the innermost flex row instead:

overflow: scroll;

whitespace: nowrap;

However, here we encounter our first gotcha. Applying “overflow: scroll;” still results in overflow.
![image](https://github.com/yiheinchai/yiheinchai.github.io/assets/76833604/9187d00d-d53d-4b42-854e-6d8c6d97196e)

After applying “overflow: scroll”
In Firefox dev tools, analysis of the outermost flex row looks like this:
![image](https://github.com/yiheinchai/yiheinchai.github.io/assets/76833604/fc43b917-fcd8-47c2-9277-9bf20708ef0f)


A Postulation of Why this Phenomenon Occurs

The reason why “overflow: scroll” does not work is because all our flexboxes have implicit widths. The outermost flex row is implying its own width from flex column. The width of the flex column follows the width of its child — the innermost flex row. And because the overflow property is processed AFTER the widths of parent elements are determined, “overflow: scroll” will not apply in this case.

The following provides a more detailed outline of the processes that occur under the hood, keeping in mind the inside-out nature of flexboxes:

When there are no explicitly declared widths, width determination starts from the innermost flex-box.

The innermost flex row sums up the minimum width of all its child elements. The innermost flex row sets this value as its minimum width.
The outermost flex row looks at the minimum width of the innermost flex row. The outermost flex row looks at the minimum width of the image. The outermost flew sums to two widths together and sets this value as its own minimum width.
The outermost flex row looks at the width of its parent element. If the width of the parent element is smaller than its own minimum width, the outermost flex row will set its width to its minimum width. If the width of the parent element is larger than its minimum width, the outermost flex row will set is width according to the width of the parent element. In this case, the minimum width of the outermost flex row is larger than its parent element.
The innermost flex row checks the width of its parent — the outermost flex row. If the width of the outermost flex row is greater than itself, it will activate “overflow: scroll”. Else, there is no need to activate “overflow: scroll”. In this case, because the width of the outermost flex row has expanded, it is now wider than the innermost flex row. Hence, the innermost flex row does not activate “overflow: scroll”
And that is why our content is now overflowing and why “overflow: scroll” does not fix it.
*Note: that since flex columns do not have any width calculations, and are always passive in following the width of its parent or child, it is not included in these steps.

Now, while simply defining an explicit width on the innermost flex row will resolve the issue, we don’t always want to do that. Having implicit widths is important to enable our flexboxes to scale according to the parent’s width and never exceed the viewport width.

THE SOLUTION

If you notice that in steps 1–4 of the cascading process, the minimum width is passed from the innermost element to the outer elements. The presence of the minimum widths essentially overrides any parent element widths which are smaller than itself.

Therefore, the solution is simply apply the following rule on the outermost flex row:

min-width: 0;

With no minimum width set for the outermost flex row, it now follows the width of its parent element. Now, the process looks something like this:

The innermost flex row sums up the minimum width of all its child elements. The innermost flex row sets this value as its minimum width.
The outermost flex row looks at the minimum width of the innermost flex row. The outermost flex row looks at the minimum width of the image. The outermost flex row sums the two widths together and sets this value as its own minimum width.
Due to the CSS rule “min-width: 0”, the minimum width of the outermost flex row is now overridden.
The outermost flex row looks at the width of its parent element. In this case, since the minimum width is 0, the outermost flex row will follow the width of its parent element.
The innermost flex row checks the width of its parent — the outermost flex row. In this case, the width of the outermost flex row is smaller than itself. Hence, “overflow: scroll” is activated.
And that is how you fix overflowing child flexboxes!

