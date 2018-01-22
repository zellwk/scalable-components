## Intro

I used to think CSS is easy. All I had to do was to hack out a design and call it a day. The quality of the code that I produced didn't matter to me when I first started.

But somehow, somewhere along the way, it started to matter. And that is when CSS got hard. I started to ask myself the questions that you probably asked yourself; questions like:

1. Is my CSS good enough?
2. Am I doing the right things?
3. Am I using the best practices?
4. Is my CSS clean and maintainable?
5. Is it DRY?
6. Is it scalable?
7. How do I improve? And what can I improve on?

I tried to find an expert to give me answers. This was my expert (google). The good news is, I found answers. But I found too many of them, and I got confused.

I started to ask questions like:

1. What I framework should I use? Should I use Bootstrap or Foundation?
2. Then I questioned myself regarding the use of frameworks. Why should I use them in the first place? I decided against frameworks and started my search again.
3. This time, I found other methods, like OOCSS, BEM, Namespacing, Atomic-CSS, Atomic design, etc.
4. Which one should I use?
5. ...

The questions go on and on, but the question remained the same. How can I keep my CSS clean, scalable, and maintainable? I have some thoughts, and I'd like to share them with you.

But before I share my thoughts, let me tell you a bit more about myself.

## About me

I'm Zell. I'm kind of whacky whenever I'm in good company. Here's a picture of me in a desert, attempting to look cool.

When I'm not designing or coding, I teach frontend development through my blog and my courses. I help around 40,000 developers through by blog each month.

I produced four courses so far, one that's closely related to our topic today is Mastering Responsive Typography. The latest one I launched, just a week ago, is Learn JavaScript.

!!! Add MRT and LJS !!!

## Back to the topic

How do you keep your CSS clean, scalable, and maintainable? Let me share what I think needs to happen through my the design of my blog.

## Blog

<!-- Proportional -->

If you resize the browser on my site, you'll come to a breakpoint.

Notice the font-size of the site changes; the size of all other elements on the page change at the same time. The change in sizes between elements is proportional.

So one thing to consider is whether your components change proportionally to something else? Let's call it proportional scaling. We'll come back to it later.

<!-- Responsive -->

If you resize further, you'll come to another breakpoint.

This time, everything changed at once. The layout is different, the body font-size is different, the article title got a lot smaller compared to the body text size.

When you build responsive layouts, you need to consider breakpoints when everything change at once. Let's call it responsive scaling.

<!-- Modular -->

If you poke around further, you'll find components that appear components in different areas. For example, you'll see a button this article that looks exactly like this button in the form.

But at the same time, the components that are reused can look different too. For example, on mobile, you'll see a menu button. It looks like the green button, but it's smaller, and it's pink.

When you build your sites, you also want to think about reusing your components. They may or may not look differently when used in different places.

Let's call this modular scaling.

## Proportional Scaling

When you build a component, consider if it should scale proportionally to something. If your components scale according to its font-size, you can use relative units like `em`, `ch` and `%`.

For example, if you want to scale the `padding` property of a button according to it's own font-size, you can use the `em` unit like this.

Here's how you would write your component. In this example, the button has a padding written in `em`. With this, you can scale your button infinitely, to millions of sizes.

But we don't need so many buttons in a real website. To be realistic, you might need a maximum of three. One way to create these three buttons is to write a base button selector. Then, create other selectors to modify the font-size.

Another way is to get Sass to abstract the base button into a mixin. If you do this, you use write one class instead of two in your HTML.

Both ways can work. The important thing here is the component scales proportionally.

Another property the component can scale to is the viewport. If your component scales to the viewport, you can use viewport units like vw, vh, vmin and vmax.

If you want to build a rectangle that always taks up a quarter of a viewport, you can write 50vw and 50vh. You can also use viewport units for typography if you wish to do so.

A quick recap before we move on.

When you build components, you want to consider if they scale proportionally. If they scale proportionally, what do they scale to? Font size or viewport?

If they scale according to the font-size property, you'd want to use `em`, `ch` or `%`. IF they scale according to the viewport, you'd want to use viewport units.

Because components should scale according to the root font-size, you should refrain from using pixels.

When you built several small components, you'd want to think about combining them into something bigger, like lego blocks.

## Lego blocks

With Lego, you can put smaller blocks together to form bigger blocks. Our components should behave the same way. We should be able to combine smaller components into larger components.

When we create larger components, there's two things we want to watch out for.

1. Components should not contain whitespace on the outside
2. Components should manage internal whitespace

### Remove External whitespace

Imagine putting lego blocks together. Each lego block is visible. You can put things together on top of each other without problems.

On the web, it's slightly different. Sometimes, whitespace is invisible. If you have outer whitespace that's invisible, you can't piece components together. There will be whitespace between them. If there is extra whitespace, you need to reset them.

An classic example is this component that contains a title and paragraph. If you look at this component, you'll notice that there's extra whitespace at the bottom of the paragraph tag. This happens by default, since browsers add a margin-bottom to the `p` tag. To make the component look right, you need to remove the margin.

You can remove the margin through a last-child property. But, if you do it multiple times, it becomes an overkill.

A better way to remove these whitespace is to reset all whitespaces from the start. Once you do so, you can create whitespace with the adjacent sibling selector.

In this example, the selected components are blue in color. If you use `.block + .block`, the first element doesn't get selecting; everything else does. You can then create whitespace with a margin top property.

If you want to write more generic code, you can use the lobotomized owl selector. In practice, I often use a localized version of the lobotomized owl.

We've already removed outer whitespace and allowed components to manage inner whitespace with the adjacent sibling selector, but there's something more.

## Manage internal whitespace while scaling

It's tempting to use the `em` property to build components that scale. Some developers actively say you should only use `em`, but I beg to differ.

If you create a button with margins in `em`, like this case, the whitespace around the button changes depending on the font-size of the button.

If you use a bigger button on a component, you'll see a different whitespace. This difference in whitespace is jarring. It makes us uncomfortable in you view component in the context of the entire design, because you need consistency in design. Consistency breeds familiarity. Once something is not consistent, like the extra whitespace, the design feels off.

In this case, if you want to normalize the whitespace, you'll have to write extra lines of code.

But if you used the `rem` unit, you don't have to. You can just write `1rem` in the base button selector. In case you don't know what rem is, it stands for root em. It takes its font-size value from the root font-size.

One easy way to differentiate between `em` and `rem` is this: you can think of `em` as a local variable, while a `rem` is a global variable.

### Summary

You want to be able to combine components like lego blocks. If you want to combine components easily, your components should not have external whitespace.

Your larger components should also manage internal whitespace. Use your discretion and choose the correct unit. `em` is not always better than `rem`. The reverse is also true.

## Responsive Scaling

When you build a responsive website, there are points where you need to change your design to match the viewport. These changes are often introduced by media queries.

In this talk, let's focus on just two of the many media queries available. We'll talk about `min-width` and `max-width` media queries.

Let's say you want to increase your text from `1em` to `2em` at a breakpoint. Here's the code you'll create if you use `min-width` media queries. There's no need to set font-size to 1em because 1em is the default font-size value.

If you create the same code with `max-width` media queries, you will need to reset the font-size from `2em` to `1em` at the breakpoint. This means you write an extra line of code.

With this simple example, you can see why min-width media queries are better than max-width media queries for responsive scaling.

However, that doesn't mean you should ONLY use min-width media queries. Sometimes, you need to use a combination of the two of them. Sometimes, you want to only use max-width queries.

### Using min-width and max-width

To understand how and why, let's work through an example together. Let's say you have a 3x3 grid. On mobile, every square is blue. On a medium viewport, alternate squares are red. On a large viewport, the first, fourth and seventh squares are blue; 2nd, 5th and 8th squares are red while the last three squares are green.

If you build this component from a mobile perspective, you'll write a CSS that says all squares should be blue.

When you go into the medium viewport, it's you change the even squares to red. This is still simple and normal.

When you go to the large viewport, a first instinct is to set 2nd, 5th and 8th squares to red using `nth-child`. This should be `3n + 2`. You can also set the 3rd, 6th and 9th squares to green. That'll be `3n + 3, or 3n`.

When you look at the results, you'll notice the 4th square remains red. This style has bled from the medium viewport into the large viewport. The easiest way to fix this bleed is to limit the medium viewport styles with a `max-width` query.

### Summarize

For Responsive scaling, you want to be aware of the media queries you use. Favor min-width queries over max-width queries as much as possible, but don't hesitate to use `max-width` queries to isolate parts of your code.

## Modular Scaling Part 2 (Morphable components)

Earlier in the talk, I showed you the green and pink buttons on my site. Both of them are basically buttons; they look similar, but they're different.

One way to code these buttons is to create buttons of different sizes and colors, like this. In my case, I only needed the pink button as a standalone entity. I never use it anywhere else, so I didn't bother about the extra font-size property.

Once I created a these two buttons, I can switch between the components with a single change class change. I call these types of components morphable components, because they seem to morph from one form into another.

Let's take a look at another example. This is a site called Founder's mantra. I came across it previously when I taught a student, and I felt that this site was a perfect example of the concept of a morphable component.

If you click the grid view on Founder's mantra, you can see the component change from a single view into a grid view. You can create something like that with a single class change too.

To do so, you'll want to identify parts of the component that are similar. In Founder mantra's case, both components have a quote and an author. The grid-view component contains a date too, but the single view component doesn't contain one.

You can then write a best-fit HTML for both components. In this case, the best fit component contains a message, an author and a date. You can then style your components through CSS, depending on how you structure your HTML.

[DEMO]

### May not be obvious

Sometimes, morphable components may not be as obvious as the one found on Founder's Mantra. Consider this page from gog.com. Can you see which components can be grouped together into a single, moprhable component?

These three things.

All three of them have a title..., an image, background color that's the same, hover effect.

Two of them have tags and a platform indicator.

But what's unique about them are the comments, the description, the list counter and the layout.

I'm pretty sure you can figure it yourself. Give it a try :)

### Summary

Build morphable components whenever you can find them. When you do so, you reduce the number of components you need to account for.

As much as possible, you want to morph your components with a single class change.

## Other quick tips

- Use Bem to Name components
- Use namespaces
- Manage specificity

With that, I have come to the end of this talk. Thank you for being such a great audience. I hope you enjoyed the talk as much as I did giving it.

If you'd like to continue the conversation about this talk or anything related to FED, you can find me lingering around the front of the venue. If you can't catch me in person, feel free to reach out over email or twitter, and I'll get back to you as soon as I can.

Thank you once again, and I'm happy to answer any questions you may have.