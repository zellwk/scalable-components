## Intro

The way we build websites and applications have changed over the years. It used to be okay to hack out a design and call it a day. That's not enough now.

As we build, we wonder about things like:

1. How can I reduce bloat as much as possible?
2. How can I write code that's DRYer and reusable?
3. Is my code maintainable?
4. Am I using best practices properly?
5. Am I building components the right way?
6. Should I use a framework like Bootstrap or Foundation?
7. Should I use a method like OOCSS, BEM, SMACSS, Atomic design, Atomic CSS?
8. Should I use CSS in JavaScript or the recent advancements when I build components?

The list of questions we have goes on and on.

They all point back to three major questions.

1. How can I write components that are easy to read and edit?

In other words, how can I write components that are maintainable for both my teammates and myself?

How can we have the confidence that things don't break when they're not supposed to, or when we change them?

2. How can I build components that are reusable?

How can I write DRY components? How can I plug and play components with minimal code changes?

3. How can I build components that are scalable?

How can our components look great on all devices? How can our sites and apps look great on all devices? And at the same time, be maintainable.

So we loop over these three questions over and over again, because one affects the other.

These three questions are difficult to answer. Different people have different opinions about what's the best way to handle them.

I'm happy to be here today to share with you my answers to the above questions. In this talk, I'll walk you through how I approach components.

## About me

Before we move on, let me tell you a bit about myself.

I'm Zell. I'm a freelance designer and developer from Singapore. When I'm not designing or coding, I bring teach people how to become better frontend developers through my blog and the courses I've written.

So far, I have had the privilege to help over 30,000 readers a month through the things I've wrote.

You can find out more about me, my articles and my courses through these links.

Now that's a quick bit about me. Let's come back to the topic at hand – building components.

## Back to the talk

The moment we ask the three questions above is the moment we begin to improve our code. So, asking those questions is important.

When we want to improve our code, we naturally seek help from experts. We want to see how they code. We want to understand how they solve problems. We want to integrate their solutions into our projects as much as possible.

But that is also difficult, because experts have different methodologies. Their methods may conflict with each other. As a student learning their methods, it's hard to know when to use their rules and when to break them without having the experience.

The question becomes, how do you gain the experience such that you know what methods to use?

The fastest and simplest way to gain the experience is to look at your project. Figure out what problems there are, and figure out methods to solve them. You may, or may not use the methods devised by the experts in the process.

Let's go through a example with my blog. You can follow along and resize your browsers accordingly if you head to zellwk.com/blog.

## Forming the questions

My blog is pretty simple, it contains a one-column layout. With buttons, blog titles and some text. Perfect for a simple dissection.

Let's start by saying you already know how to build the site either on the mobile or desktop version. If you can't replicate the site with your current skills, this talk might be a little too advanced for you right now.

What we're interested in is what happens when the browser size changes.

So I'm going to resize my browser and we'll look at the changes together.

(BLOG PAGE)

As I resize to certain breakpoint, you can see that there's slight change in font-size. The website looks exactly the same, except the size of all elements get bumped up a little.

This is an example where components of the site scale proportionally to a single change. In this case, the change is the body text font size.

Let's call this **proportional scaling**.

Now as I resize further, there's a second breakpoint where things change. This time, changes are not proportional.

The layout has also changed.

The "Articles" word, which is the title of the page, also changed in size, even though the body text size remains the same.

Let's call this type of change **responsive scaling**.

At this point, we already two questions to answer – how do you deal with *proportional scaling* and *how to deal with responsive scaling*.

There's one more question.

If you look around my site, you'll notice that components are reused across the site. For example, the button is used in the article page. It is also used on the frontpage, and also used in a form.

This is where we begin to be concerned creating components we can plug and play. The button is one such example. You can have many of such components on a single page.

For example, many inputs, many labels and a button combines together to create a form. This form can also be placed in different parts of the site.

So, smaller components can be combined into bigger ones. If you put this into Brad Frost's atomic design, you'll say you combine atoms to make molecules and molecules to make organisms.

Collectively, let's call this **modular scaling**.

And now we have the three main questions to answer – how do you scale proportionally, responsively, and modularly. Let's dig into each of them and find some solutions.

## Proportional Scaling

When you build a component that scales proportionally, you need to be aware of what property the component scales to. Most components scale according to their font-size.

An example of such a component would be a button.

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

To build this button, you can use relative units like `em` and `ch`. These units change in value depending on the font-size of the component.

```html
<button>Click me!</button>
```

```css
button {
  font-size: 1em;
  padding: 0.5em 0.75em;
  /* Other properties */
  display: inline-block;
  border: 0;
  background-color: #1ce;
  color: #fff;
}
```

When you write your code this way, you can change the font-size and you'll get an infinite number of button sizes, which is great!

More often than not, you don't need an infinite number of button sizes. You only need 2-3 different ones, and you can build them up by extracting common code into a mixin or a common selector.

```scss
// SCSS here
@mixin button {
  padding: 0.5em 0.75em;
  display: inline-block;
  /* Other common properties */
  border: 0;
  background-color: #1ce;
  color: #fff;
}

.small-button {
  @include button;
  font-size: 0.75em;
}

.med-button {
  @include button;
  font-size: 1em;
}

.large-button {
  @include button;
  font-size: 2em;
}
```

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

Some components scale according to size of the viewport. If your component does so, you can use `vw` and `vh` units to control it's size. For example, to build a square that's always going to be 1/4 of the screen, you can do this:

```css
.quarter-screen-square {
  width: 50vw;
  height: 50vw;
}
```

If you want to make things a little fancier, you can even scale your font-size according to your viewport, like this:

```css
html {
  font-size: calc(16px + 0.25vw)
}

h2 {
  font-size: 3em;
}
```

This is a responsive typography technique created by Mike Riethmuller. The actual formulation is more complex. If you like to find out more about this, I suggest you check out the link.

### Mistake!

One common mistake we make when building components that scale proportionally is that we focus so much on the component that we forget the component is part of the site.

We begin to use relative units for everything, and that becomes a problem.

Let's say you're building a component that has some text and a button. There needs to be a space between the text and the button. You need to consider how to build this space in.

Let's say you include the space in your button with a `margin-top` property.

```
button {
  fz
  p
  m
}
```

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

Well, that looks good right now.

But if you change this button for a large one, you'll be in for a big surprise. The space between the text and the button doubles.

The reason this happens is because you used the `em` unit. For those who are not familiar with `em`, `1em` is equal to the font-size of its current selector.

For the big button, we set the font-size to `2em`. If `1em` is 16px normally, it would become `32px` in the button.

To fix this, you need to half your margins:

```scss
.large-button {
  font-size: 2em;
  margin-top: 0.5em;
  // Other properties
}
```

That's not a very nice approach, because you write extra lines of code.

Luckily in CSS, there is a unit called `rem` whose value is calculated with the font-size in the `html` element.

So, if you used `1rem` as the margin for the button's, you can set your font-size to any value that rem value would always remain what you'd expect.

```scss
.large-button {
  font-size: 2em;
  margin-top: 1rem;
  // Other properties
}
```

In this example, you can also think of `em` as a local variable and `rem` as a global variable if you write JavaScript or other programming languages.

As developers, we're taught that local variables are always good, and global variables are bad.

But in the case of design, global variables are important to help you keep your components consistent across your entire design.

So, in CSS, don't discard global variables because they're global. There are uses for both global and local variables. You just need to know when to use each.

### End Proportional Scaling

In a quick summary, to build components that scale proportionally, you need to use relative units like `em`.

As you do, narrow your view so much that you forget how your components interact with your site design as a whole.

Remember that local and global variables have their own uses in design and CSS.

Let's move on to responsive scaling.

## Responsive Scaling

Responsive scaling happens when components change their appearance as you resize the viewport. Anything can change here. That includes colors, sizes and even layouts.

You'll use a large amount of media queries whenever you code a responsive site. It's not uncommon for each component to support one - two media queries. Multiply that by 10 and you have 20 queries to deal with.

How you write media queries determine the complexity of your code. Most people already write mobile-first design. Should you write mobile-first CSS too?

When we talk about responsive scaling, the thing we're concerned about is media queries. Specifically, min-width and max-width media queries.

Let's go through both approaches with a simple example. Say you want a component that increases its font-size from 1em to 2em at a larger viewport. With min-width media queries, this is likely the code you'll write:

```scss

```

If you use a max-width approach, this is the code you'll write:

```scss
// max-width approach
.component {
  font-size: 2em;
  @media (max-width: 600px) {
    font-size: 1em;
  }
}
```

In this simple example here, you can already see that there is an extra line of code required to "reset" the font-size back from 2em to 1em.

This extra "resetting" code makes code more complicated that it needs to be. If you create many components, these small reset lines eventually pile up to become a large headache.

Hence, I recommend writing min-width media queries as opposed to max-width media queries.

The added benefit of writing min-width media queries is that you can stack media queries across different components. Let's go through this with another example.

Let's say one of your component looks like this.

At a smaller viewport, the component has a single-column layout.

At 600px, the font-size changes as we wrote in `html`, but everything stays in proportion.

At 750px, the layout changes.

At 1000px, the font-sizes changes again, but the proportion of header and body text changes too.

How would you build this component?

Well, let's say this component is part of a website. From an accessibility standpoint, you should increase the font-size of your text at larger viewports, because larger viewports mean larger devices and people put larger devices further away from them.

The changes in font-sizes and 600px and 1000px could be consolidated to the `html` element if these changes are universal across all components:

```scss
html {
  @media (min-width: 600px) {
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    font-size: 20px;
  }
parts}
```part.

We then rely on CSS's natural cascading ability to join the pieces up.
Of course, we also want to use relative units for the `html` element to accommodate to device and user preferences. Let's do that.

```scss
html {
  @media (min-width: 600px) {
    font-size: 112.5%; // Means 18px if user uses default settings
  }
  @media (min-width: 1000px) {
    font-size: 125%; // Means 20px if user uses default settings
  }
}
```

With this code, we have already abstracted the 600px and 1000px font-size changes away to the `html`. What's left is to change the layout at 750px and the proportion of title to body text size at 1000px.

Changing the layout at 750px should be easy for you at this point.

```scss
.component {
  @media (min-width: 750px) {
    // 2 column-layout
  }
}
```

Changing the proportion of the title to body text size can be easy too. If this change in proportion is unique to this component, you could write that in a media query directly with the component.

```scss
.component-title {
  @media (min-width: 1000px) {
    font-size: 2em;
  }
}
```

If this change in proportion applies throughout the website, you can write change in another common selector, say `h2` for this header.

```scss
h2 {
  @media (min-width: 1000px) {
    font-size: 2em;
  }
}
```

With this simple example, you can see how we broke up parts of a responsive website into different parts, and each part is responsible for it's own media queries.

We then rely on CSS's natural cascading ability to join the pieces up.

## Mixing min-width and max-width queries

In some cases, you may also want to a combination of min and max-width media queries to isolate parts of your code to a specific viewport.

Let's take a look at an example.

In this example, at a smaller viewport, odd squares are colored blue while even squares are colored red.

At a larger viewport, the color sequence changes. The first, fourth, seventh and so on squares are colored red. The 2nd, 5th and 8th squares are colored blue, and the 3rd, 6th and 9th squares are transparent.

To build this component, we can isolate the pattern we need at smaller viewport with a max-width media query. This way, there's no need to "overwrite" any styles that may have cascaded downwards to our larger viewport.

```scss
.comp {
  @media (max-width: 599px) {
    &:nth-child(2n) {
      background-color: red;
    }

    &:nth-child(2n + 1) {
      background-color: blue;
    }
  }

  @media (min-width: 600px) {
    &:nth-child(3n + 1) {
      background-color: blue;
    }

    &:nth-child(3n + 2) {
      background-color: red;
    }

    // No need to set background-color to transparent for every third square.
  }
}
```

To end our discussion on responsive scaling, remember the idea is to minimize the amount of code you write to reset or overwrite other properties. The less your code overlaps, the easier it is to maintain.

Also, learn to take advantage of CSS's cascading nature as you build your site. It allows you abstract common parts of your site together so components become even simpler to build.

Next, let's move on to modular scaling.

<!-- Have time for Component queries? -->

## Modular Scaling

When we talk about Modular scaling, we're interested in writing reusing components. Can they be reused directly without any code changes? Can they be used in different forms with minimal code changes?

Well, let's take a look at examples again.

So far, we have already spoken about buttons and forms. These are examples of components that can be reused across your entire site without any code changes.

So what it means is that you should be able to take a button, plop it into any component, any location, and it should work.

When creating components like these, we need to make sure that each component does not disturb the rest of the component. It doesn't disturb the rest of the page with its styles.

Styles should be self-contained.

When we talk about self-containment, we are mostly concerned with styles that will exceed it's a component's visually. That means margins (always) and paddings (if there isn't any borders or background).

Explain with picture probably much easier. I feel so shitty now man. Like I don't want to work. This is so lousy. Hai. But let's move on and complete this section before I think of better solutions ya.

One solution is to use the adjacent sibling selector to control the whitespace. If there's an adjacent sibling, add some margins.

```
* + button {}
```

Because you can have multiple components with the same interaction, it might be worth it to write a lobotomized owl selector (named affectionately coined by Heydon Pickering a couple of years ago).

```
* + * {

}
```

So, no matter what element is present, this selector hits every adjacent element and adds a margin to the top.

Personally, I find the lobotomized owl generic for my liking. It also hits `div` + `div`. So, I opt for a more explicit version like this:

```css
* + p,
p + *,
* + button,
button + * {
  margin-top: 1rem;
}
```

To make it simpler,

```scss
@mixin lobo {
  & + *,
  * + & {
    @content;
  }
}

// How I use it
p,
ol,
ul,
pre,
blockquote,
figure {
  @include lobo { margin-top: 1rem };
}
```

Any interaction between itself and other components should be written explicitly.

And that covers part 1 of Modular scaling. Next, we want to look at how to build components that can be used in multiple places. And in its place its used, it looks different.

One great example Founder's Mantra.

On Founder's Mantra, there is a single page component that contains a quote and the name of the person who wrote the quote.

There is also a grid-page, and each component has a quote, the author of the quote, and the date.

The structure of these two pages are similar. The only difference in structure is that the component contains the date in the grid view.

So then, the question is, how would you build this component?

First of all, we know the structure quite similar. There needs to be a way for us to differentiate whether the component is in the single or grid view so we can toggle the date on or off.

One way to do so is to rely on the parent selector.

```css
.component {
  /* Shared styles */
}

.single .component {
  /* Single styles */
  .component-date {
    display: none;
  }
}

.grid .component {
  /* Grid styles */
}
```

Another way to do so is to add a modifier to the component. With BEM, which means block element modifier, a naming technique, you would add -- after the name of the component to signify that its modified.

```css
.component {
  /* Shared styles */
}
.component--single-view {
  /* Single styles */
  .component__date {
    display: none;
  }
}
.component--grid-view {
  /* Grid styles */
}
```

Both approaches work. The basic idea is the same. With the two, I prefer using the modifier style because of two reasons.

First, I find it easier to edit a components' classes compared to a parents' class, especially when working with template engines.

Second, there's lesser specificity, which makes CSS easier to handle.

Harry Roberts (csswizardry) has an excellent article on specificity and I highly recommend you read it.

Okay, let's give another quick example. The Founder's Mantra one is rather obvious.

GOG.com.
<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

Look at this page, can you tell if any of these components can be grouped together into a single one with modifiers?

Yes, the answer is you can.

These can be group together. We can call the grid ones .component--grid, .component--news, .component--list

Why? Because a lot of the styles are the same! If you look carefully, you'll the similarities are:

1. They contain an image
2. They have a title. And the size of the titile is the same.
3. All of lighten a little when you hover on them
4. 2/3 of them have a button with a price tag.
5. 2/3 of them have a platform indicator

In this case if the modifier doesn't have a part of the component, we can happily leave it out of the HTML structure. We can leave it out because there's no need any sort of interaction that is required later, unlike Founder's Mantra.

ANd in the CSS, if you used the modifier method, you can always rely on CSS Cascade and specificity to play well with each other.

```
// Unmodified
.component {
  display: grid;
}

// Modifiers
.component--grid {
  .grid-template-rows: 2;
}

.component--news {
  .grid-template-columns: 350px 1fr;
}

.component--news {
  .grid-template-columns: 100px 1fr;
}
```

And that's it for modular scaling

## Wrapping up

Building components that are maintainable, scalable and responsive can seem to be pretty complex at the start. There's so many moving parts, so its normal to be confused. Its normal to be afraid.

Once you break down the moving parts into smaller parts that have their own job, they problem becomes easier to solve.

As you can see in this talk, a great part of it isn't dedicated to any CSS methods you've probably heard of. ONce you focus on the prinicples and jobs, you can figure out what needs to be done.

Then, along the way, sprinkle experts' methods onto the your CSS and make it shine even more. An example I've used in the talk is the part where we used OOCSS for modular scaling and BEM to augment it.

There are other methods that would be great on top of what I've already mentioned here. Can you figure the rest out yourself and build a good structure for your team?

## Ending

With that, let me come to the end of this talk. Thank you for being a great audience. I loved every minute of it.

If you'd like to continue the conversation on CSS, or any other FED topics, you can find me lingering around after the talk. If you can't catch me in person, feel free to reach out over my website or twitter as well.

Thank you once again and I'm happy to answer any questions you may have now.

