## Intro

The way we build websites and applications over the years have changed. Its not enough to hack out a design and call it a day. It's more complicated now.

We think of more things. As we build, we wonder:

1. Am I building our components the right way?
2. Can I be more DRY, more reusable?
3. Can my teammates understand my code?
4. Can I understand my code if I come back in 3 months?
5. Is my code bloated?
6. Am I using best practices correctly?
7. Must I write CSS in JavaScript?
8. Must I use styled components?
9. Should I use OOCSS, BEM, SMACSS, Atomic design, Atomic CSS etc.
10. Should I write my own CSS or use frameworks like Bootstrap, Foundation or others?

... And many other similar questions.

These questions all point back to the same questions –

How can I write build components that are maintainable, that are easy to read and edit. And that I have the confidence my components don't break when I build more components later.

How can I build components that are reusable, so I can plug and play everywhere on the site with minimal changes, so I write less code, with better quality?

How can I build components that are scalable? That look great on all devices?

I'm happy to be here today to share with you my answers to above questions by showing you how I approach components.

## About me

Before we move on, let me tell you a bit about myself.

I'm Zell, a freelance designer and developer from Singapore. I help over 30,000 readers a month bridge the beginner-advanced gap regarding Frontend Development through my blog and my courses.

You can find out more about my blog if you visit zellwk.com, and more about my courses through these sites as well (LS, AYW, MRT, JSR).

That's a quick bit about me, let's come back to building components.

## Back to the talk

When we want to improve our code, we naturally seek help from experts. We want to see how they code, and we want to integrate their solutions into our projects.

So far, you may have heard or tried methods like BEM, SMACSS, Atomic CSS, Atomic Design, Intuit CSS and many others.

All of them are solid methods that experts came up with. They're all good. You may agree with some, you may disagree with some. I do too.

To effectively use these methods in your project, you need to understand your own project. You need to think about what problems you need to solve and how each method comes into play.

Let's go through a simple example with my website and list a few problems we often encounter when developing websites:

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

When you build a website, you often start by considering only the mobile or desktop version. Whichever you start with doesn't matter yet. You need to figure out how to build it first. This should be easy for you at this point.

Next, you observe how components change when you resize the browser width. This is where things begin to get a little confusing.

Notice that some components change evenly, following a proportion. Like the button sizes changes according to the text size. In turn, the paddings on the button changes according to the text size as well. Because the changes are proportional, let's call this proportional scaling.

Some components don't change evenly. They can look completely different. Sometimes, the layout changes, like in the case where the date goes up. Sometimes, the sizes changes, like when you resize, the header text changes in size, but not in proportion to the rest of the text. Since this kind of change only happens when you resize the viewport, let's call it responsive scaling.

At this point, we already have questions to answer – how do you building components that need to scale proportionally? Also, how do you build components that need to scale responsively? These two sets of rules should be different, because they have different effects. We'll look at them in a short while. Let's continue for now.

After you've built your components, you may combine components together to make a bigger one. In the words of Brad Frost's atomic design, you combine atoms to make molecules and molecules to make organisms.

One example here is a form element on a page. You combine multiple inputs and buttons to create a form. Then, you should be able to "plug and play" this form anywhere on your website with minimal code changes.

Of course, you also need to be able to "plug and play" you buttons and other components as well. This is where all hell break loose. When you try to attach a "plug and play" mentality, things begin to break. You get extra spaces here and there that you don't intend to have, etc etc. Many problems can occur here. We'll look at it later too. Let's call it modular scaling.

So now, we've identified three possible problems you'll encounter when building your sites – proportional scaling, responsive scaling and modular scaling. Let's dig into each of them and find some solutions. How you code for each of them is going to be different.

## Proportional scaling

When you build a component that scales proportionally, you need to be aware what property the components scales proportionally to. Most components that scale proportionally scales according to the font-size.

If a component scales according to its font-size, you can use relative units like `em`, `%` and `ch`.

An example of a component that may scale according to font-size is a button.

```css
button {
  font-size: 1em;
  padding: 0.5em 0.75em;
  display: inline-block;
  border: 0;
  background-color: #1ce;
  color: #fff;
}
```

When you write your code this way, you can change your font-size and get an infinite number of possible component sizes.

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

The question is, do we need so many possibilities? Most of the time, we don't. Maybe a need two are three different sizes, and we can build them up easily by creating abstracting common code, like this:

```scss
// Note: Sass here
@mixin button {
  padding: 0.5em 0.75em;
  display: inline-block;
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

If you component scales according to the size of the viewport, you can use `vw` and `vh` units to control its size. For example, to build a square that's always going to be 1/4 of the screen, you can do this:

```css
.quarter-screen-square {
  width: 50vw;
  height: 50vw;
}
```

You can even set your font-size to be proportional to the viewport with `vw` units.

```
```

This is a responsive typography technique method discovered by Mike Riethmuller. If you're interested to find out more, I suggest you check out this articles.

### Mistake!

One mistake we commonly make when we build components is we isolate the components too much. We don't think about how this component interacts with it's surrounding components.

Let's say you're building a component that includes some text plus a large button. There needs to be space between the text and the button, so you add some margins in `em`, according to how the component scales with font-size.

```scss
.large-button {
  font-size: 2em;
  margin-top: 1em;
  // Other properties
}
```

Now, that's not really nice. When you put in the component, you realize that the margin is actually twice the size you expect, because `em` takes its size from the component itself. To fix this, you need to half the margin.

```scss
.large-button {
  font-size: 2em;
  margin-top: 0.5em;
  // Other properties
}
```

Luckily, in CSS, there's a better alternative. We can use a unit called `rem`, whose value is calculated from the root font-size (any font-size determined in the HTML), so we con write `1rem` as usual.

```scss
.large-button {
  font-size: 2em;
  margin-top: 1rem;
  // Other properties
}
```

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

When you build components, always consider how your components interact with other components. Web design is more global. You need to open your eyes and decide where to use local variables (like em) or global variables (like rem). In CSS, local ≠ good. Global ≠ bad. It all depends on context.

And that's all you think about when you build components that scale proportionally. Let's move on to responsive scaling.

## Responsive scaling

Previously, we noted that some components change abruptly at specific breakpoints. For some components, their layouts change. For others, parts of the components change in different proportions.

For these components, the common factor that affects change is the width of the viewport. The solution to these components is hence media queries.

When we write media queries for responsive components, we want to write them in a way that allows us to change as little code as possible. In other words, we take advantage of the natural CSS cascading ability.

There are two main ways of writing media queries. The min-width approach and the max-width approach.

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

Of these two, the min-width approach is favored because it allows you to take advantage of CSS's cascading ability. It naturally follows a mobile-first approach to writing CSS.

```scss
// min-width approach
.component {
  @media (min-width: 600px) {
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    font-size: 20px;
  }
}
```

```2scss
// max-width approach
.component {
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 18px
  }
  @media (max-width: 600px) {
    // Extra properties required in this media query to reset to a mobile viewport
    font-size: 16px
  }
}
```

Of course, you can also use max-width media queries to restrict properties that may be a hassle to overwrite in specific cases. This works especially well with hard-to-overwrite things like nth-child psuedo selectors.

```scss
.component {
  // Some example
}
```

By making use of cascade effectively, you can "stack" media queries together in different components and make them look great without too much intertwining code. Each component takes care of what it needs to do.

Let's use an example to illustrate this point.

When you begin creating a website, the #1 thing to get right is the typography. In typography, there are three things that are most important – font-size, line-height and measure. That forms the base of your entire website.

We only talk about font-size here. From an accessibility standpoint, you want to change the font-size of all your text elements on your design. To make things simple, you can switch the font-size in the `html` element, something similar to this.

```scss
html {
  font-size: 16px;
  @media (min-width: 600px) {
    font-size: 18px;
  }
  @media (min-width: 1000px) {
    font-size: 18px;
  }
}
```

Of course, we'll want to use relative units to accommodate to all devices and user preferences.

```scss
html {
  font-size: 100%; // Means 16px if user uses default settings
  @media (min-width: 600px) {
    font-size: 112.5%; // Means 18px if user uses default settings
  }
  @media (min-width: 1000px) {
    font-size: 125%; // Means 20px if user uses default settings
  }
}
```

Now, let's say you have a component that looks like this.

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

From mobile to 600px, it changes proportionally as font-size changes. At 750px, layout changes, while font-sizes remain the same. At 1000px, font-sizes changes.

Building this component is simpler than you may imagine. We already have the basic changes in place with our initial CSS code. That means we don't need to do anything at all from 0 to 750px.

```
```

At 750px, we need to change the layout, so kinda change... Decide on what the component is first.

```
```

At 1000px, the font-sizes change. This time, the component title changes at a different rate from the rest of the components. So we can leave everything else and focus on just the header changes.

```
```

Combined together, we build a semi-complicated interaction with just a few lines of code.

```
```

<!-- Optionally include Mashable? Example here on component queries if got time -->

## Modular scaling

This is the mother of all a-holes. Fuck this shit