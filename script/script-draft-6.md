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

1. How can I write components that are easy to understand?

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

I'm Zell. I'm a freelance designer and developer from Singapore. When I'm not designing or coding, I teach people how to become better frontend developers through my blog and the courses I've written.

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

<!-- Insert Lego block here, reduce examples -->

This is where we begin to be concerned creating components we can plug and play. The button is one such example. You can have many of such components on a single page.

For example, many inputs, many labels and a button combines together to create a form. This form can also be placed in different parts of the site.

So, smaller components can be combined into bigger ones. If you put this into Brad Frost's atomic design, you'll say you combine atoms to make molecules and molecules to make organisms.

Collectively, let's call this **modular scaling**.

And now we have the three main questions to answer – how do you scale proportionally, responsively, and modularly. Let's dig into each of them and find some solutions.

## Proportional Scaling

When you build a component that scales proportionally, you need to be aware of what property the component scales to. Most components scale according to their font-size.

An example of such a component would be a button.

To build this button, you can use relative units like `em` and `ch`. These units change in value depending on the font-size of the component.

When you write your code this way, you can change the font-size and you'll get an infinite number of button sizes, which is great!

More often than not, you don't need an infinite number of button sizes. You only need 2-3 different ones, and you can build them up by extracting common code into a mixin or a common selector.

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

Always keep in mind how your components interact with your site as a whole. Remember that local and global variables have their own uses in design and CSS.

Let's move on to responsive scaling.

## Responsive Scaling

Responsive scaling happens when you resize the viewport. As you do so, any property on any component can change. That includes colors, sizes and even layouts.

To handle responsive scaling effectively, we need to be able to write good media queries. For this talk, let's focus on the two queries we commonly write – min-width and max-width media queries.

Now, there's a difference between writing min-width media queries and max-width media queries. Let's go through a quick example and you'll see what I mean.

Say you want to make a component that increases its font-size from 1em to 2em at a larger viewport. Simple stuff.

With min-width media queries, this is the code you'll write:

```
.component {
  @media (min-width: 600px) {
    font-size: 2em;
  }
}
```

You can skip the font-size: 1em declaration because that's already the default.

With max-width media queries, this is the code you'll write:

```scss
// max-width approach
.component {
  font-size: 2em;
  @media (max-width: 600px) {
    font-size: 1em;
  }
}
```

Notice how you have to write one extra line of code to overwrite the font-size back to its default setting on a smaller viewport. The extra "reset" code makes your code more complicated than it needs to be. If you create more components, these reset lines eventually pile up to become a headache.

Therefore, I recommend you use min-width media queries predominantly in your CSS. It helps make CSS a little simpler.

### Mixing min-width and max-width media queries

In some cases, you can use both min-width and max-width media queries together to isolate parts of your code to make it easier for yourself.

For example, let's say you have a grid with squares colored blue on a mobile viewport.

At a larger viewport, the color sequence changes such that odd squares colored blue and even squares colored red.

At an even larger viewport, the color sequence changes such that the 1st, 4th, 7th and so on are colored blue; the 2nd, 5th, 8th and so on are colored red, the 3rd, 6th, 9th and so on are colored green.

To code this component, you can begin with the mobile version, stating squares to be colored blue.

```
.component {
  background-color: blue;
}
```

At a larger viewport, you can set even squares to be colored red with nth-child:

```
.component {
  background-color:blue;

  @media min-width(600px) {
    &:nth-child(even) {
      background-color: red;
    }
  }
}
```

At an even larger viewport, you would imagine that you can set red and green colored squares with another nth-child

```
.component {
  background-color:blue;

  @media min-width(600px) {
    &:nth-child(even) {
      background-color: red;
    }
  }

  @media min-width(1000px) {
    &:nth-child(3n) {
      background-color: green;
    }
    &:nth-child(3n + 2) {
      background-color: red;
    }
  }
}
```

Unfortunately, the red background from 600px min-width query bleeds into the 1000px query and colors all squares red.

One way to fix this is to add a nth-child selector in the 1000px query to the rightful squares back to blue.

```
.component {
  background-color:blue;

  @media min-width(600px) {
    &:nth-child(even) {
      background-color: red;
    }
  }

  @media min-width(1000px) {
    &:nth-child(3n) {
      background-color: green;
    }
    &:nth-child(3n + 1) {
      background-color: blue;
    }
    &:nth-child(3n + 2) {
      background-color: red;
    }
  }
}
```

But as you have learned earlier, whenever to see a "reset line" of code, there's something you can do to improve it. In this case, we can isolate the 600px media query to between 600px and 1000px with a max-width query:

```
.component {
  background-color:blue;

  @media (min-width:600px) and (max-width: 999px) {
    &:nth-child(even) {
      background-color: red;
    }
  }

  @media (min-width:1000px) {
    &:nth-child(3n) {
      background-color: green;
    }
    &:nth-child(3n + 1) {
      background-color: blue;
    }
    &:nth-child(3n + 2) {
      background-color: red;
    }
  }
}
```

In summary, to deal with responsive scaling, you need to be aware of the media queries you're using. As much as possible, use min-width media queries. If you need to, you can also use max-width to isolate parts of your code.

Let's move on to modular scaling.

## Modular Scaling

When we think about modular scaling, we want to treat the components we built like Lego blocks. We build them once, and we want to use them directly in multiple components.

One example of such a lego block is a button. On my site, I used the button as a READ MORE button and at the footer of my site and other areas.

We also want to combine lego blocks to form larger blocks. For example, the button can combined with inputs and labels to make a form. We then use the form in many areas. For example, I created a newsletter form on the homepage and in my articles.

We also want to build larger blocks and use them in multiple places as well. For example, on my website, I combined input with labels and buttons into a form. This form can then be used anywhere on the site.

If you've heard about Brad Frost's Atomic design, modular scaling would sound very familiar to you. It's exactly the same thing.

If you haven't heard of atomic design, I suggest you check out his excellent book, which gives you further food for thought.

When we create modular components, we need to make sure each component governs its internal spaces. They do not disturb the rest of the page.

In an earlier example with a button, I mentioned you could use `rem` for margins, and I placed the property directly in the button selector:

```css
button {
  margin-top: 1rem;
}
```

If you went ahead with these styles, using the button alone would be a problem, because there's an extra spaces at the top that shouldn't be there.

This is what I mean by disturbing the surroundings. When used alone, the button should not protrude out of its visual boundaries and affect the components around it.

At the same time, this 1rem of margin works incredibly well when the button is placed as a second object. We need it to visually separate components. Having this margin-top property effectively saves us from having to write a margin-top every time we use the button.

<figure>
   <img src="/images/2017/" alt="">
   <figcaption></figcaption>
 </figure>

One solution is to use the `:first-child` pseudo selector to make sure `margin-top` gets reset to 0 when the button is used first.

```
button {
  &:first-child {
    margin-top: 0;
  }
}
```

Another method is to use adjacent sibling selectors

```
* + .button {
  margin-top: 1rem;
}
```

Of the two, I prefer the adjacent sibling selector approach because you only add the margin-top when you need it. You don't reset any lines of CSS.

I first found out about this approach by reading Heydon Pickerings article on a lobotomized owl selector that looks like this:

```
* + * {
  margin-top: 1rem;
}
```

I suggest you take a look at [his article]() if this concept is new to you.

### Morphing blocks

Besides components that can be used directly like Lego blocks, we also need to consider components that morph visually when we put them in different places.

Think of it like Power Rangers, where the bots of each power ranger changes shape and form a different part of the huge robot.

One example is this at work is Founder's Mantra.

If you open up Founder's Matra, you can immediately see a quote. If you click on the archives button on the top right hand side, you'll see a list of quotes. These quotes are similar to the single quote you've just seen.

This a good example of a component morphing from a single-view into a grid view.

To build such a component, you need to consider the differences in both the HTML and CSS. In Founder's Mantra's case, the HTML of both views are quite similar. They both have a quote and an author. In the grid view, there's also a date.

This means you can use the same HTML for both views if you hide the date in the single view.

```html
```

The next step is to consider a way for us to know which is active – the single or the grid view. One way to do this is to rely on the parent selector:

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

To toggle between single and grid views, you just need to change the parent class, similar to this:

```html
<div class="grid">
  <div class="component"></div>
  <div class="component"></div>
  <div class="component"></div>
</div>

<div class="single">
  <div class="component active"></div>
  <div class="component"></div>
  <div class="component"></div>
</div>
```

Another way to do so is to change the component's class itself. Here, you can use BEM, a popular naming technique, which means block element modifier to signify if the component is in a grid or single view.

```
<!-- Single view -->
<div class="parent">
  <div class="component component--single is-active"></div>
  <div class="component component--single"></div>
  <div class="component component--single"></div>
</div>

<!-- Grid view -->
<div class="parent">
  <div class="component component--grid"></div>
  <div class="component component--grid"></div>
  <div class="component component--grid"></div>
</div>
```

Both approaches work. The basic idea is to be able to differentiate the component at different states.

In my projects, I use the BEM convention to name my components because it makes it easier for me to add modifiers the ones you've just seen.

Sometimes, morphing lego blocks aren't as obvious as the one in Founder's Mantra. Consider this screenshot of gog.com

Can you tell if any of these components can be grouped together into a single morph-able component?

Take a look. Have a think. Well?

The answer is yes.

This one in a grid, this in the news section and this in the list section "component".

They can be called `.component--grid`, `component--news` and `.component--list` respectively.

We can group them together because they share similar styles.

1. They all contain an image, even though the image is different in each case.

code:
.component--grid {
  // grid layout
}

.component--news {
  // News layout
}

.component--list {
  // List layout
}

2. They have a title and the styles of the title is the same.
3. The background of them all lightens up a little when you hover onto them.
4. 2 out of 3 of them have a price tag.
5. 2 out of 3 of them have a platform indictator
...

That's a lot of similarities components. Now let's look at some differences and how to handle them.

First of all, the news view contains a description while the rest doesn't. Here, you can style the descrption in the news modifier if you need to.

```
.component--news .component__description {
  // styles
}
```

Since its not present on the two other components, you can omit it entirely, and they'll work fine.

This approach can be used for other parts like comments and genre.

Second, the list view contains a counter. You can use the CSS directly with the list view only, like this:

```
.component--list {
  counter-reset: list-number;
}

.component--list .component__title::before {
  counter-increment: list-number;
  content: counter(list-number) ". ";
}
```

I can go on with the example, but I think you catch the drift.

So, in modular scaling, you want to be aware of components that can be used directly like lego blocks. You also want to be aware of components that morph visually when you place them in different parts of your site.

For lego blocks, make sure the styles are self-contained and do not disturb the surroundings.

For morphable blocks, take note of the similarities and difference between different parts of the code and style them accordingly. As much as possible, you'll want to use one modifier to create the change. (to make things simple)

## Wrapping up

Building components that are maintable, scalable, responsive and responsive and putting them altogether into a site can seem challenging and complicated at first.

There are so many moving parts that its normal to be confused and afraid when you're building the site.

As you can tell by now, each moving part, each requirement can be broken down into smaller problems. When you solve these smaller problems, the site comes together as a whole without any major hiccups.

What's important is to thoroughly understand the challenges you're facing so you know how to combat them. The methods that different experts have taught us over the years have their uses. You need to know where to apply them and where not to.

## Ending

With that, I have come to the end of this talk. Thank you for being such a great audience. I hope you enjoyed the talk as much as I did giving it.

If you'd like to continue the conversation, you can fin me lingering around after the talk. If you can't catch me in person, feel free to reach out over email or twitter, and I'll get back to you as soon as I can.

Thank you nice again and I'm happy to answer any questions you may have now.