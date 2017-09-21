## Intro

I used to think CSS is easy. All I had to do was to hack out a design and call it a day. The quality of the code that I produced didn't matter to me when I first started.

But somehow, somewhere along the way, it started to matter. And that is when CSS got hard.

I started to ask myself the questions that many of you ask yourselves as well. Questions like:

1. Is my CSS good enough?
2. Am I doing the right things?
3. Am I using the best practices?
4. Is my CSS clean and maintainable?
5. Is it DRY?
6. Is it scalable?
7. How do I improve? And what can I improve on?

Armed with the question, I tried to find an expert to give me answers. (Google).

I wanted to find out how other people write write their code, and I wanted to imitate them so I become a better frontend developer.

The good news is, I found some answers. The bad news is, I found too many. That is when I started to get a little confused.

I started to ask questions like:
(I had some adlib improvements here which were :thumbsup: )

1. What I framework should I use?
2. Should I use frameworks in the first place?
3. Should I use What methods like CSS, OOCSS, BEM, etc?
4. Which one should I use?
5. ...

The list of questions I had goes on and on. But the main question still remains! And that question is:

How do you build components that are scalable and maintainable, and at the same time keep your CSS clean? I do have some answers, and I'm happy to share them with you today.

But before we go into my answers, let me tell you a bit more about myself.

## About me

I'm Zell.

That's a picture of me.

I'm a freelance designer and developer from Singapore.

When I'm not designing or coding, I teach people Frontend development, mostly through my blog and courses. Sometimes I also share what I know in trainings and talks like this one.

So far, I had the privilege to help over 30,000 people every month on my blog.

If you're interested to find out what I have to say, feel free to check out my blog or my courses.

And that's the quick bit about me. Let's come back to our topic for today the topic.

## Back to the topic

So how do you build components that are maintainable, scalable, and at the same time, keep your CSS clean?

Today, let me use my blog as an example to share with you what I think you need to do to build components for a responsive website.

## Blog

<!-- Proportional -->

If you head to my website and resize the browser, you'll see a breakpoint like this. At this breakpoint, the font-size of the site changes. All other elements on the page change in accordance to the change in font-size. The change in proportional.

When you build components, you want to consider if your components changes proportionally to something else. And, how do you code such a component?

For now, let's call this kind of scaling, proportional scaling.

We'll go into the specifics of proportional scaling in a while, so let's continue to see what needs to happen.

<!-- Responsive -->

If you resize the website further, you'll come across a breakpoint like this one here.

This time round, at the breakpoint, many different things change at the same time. The layout changed, the font-size changed, and the proportion between font-size also changed.

When you build your components, you want to consider how your components change at different breakpoints. Do they change together? Do they change separately? Do the changes interfere with other components? How do you build something like that?

Let's call this type of change responsive scaling.

We'll also look at responsive scaling and how to deal with it.

<!-- Modular -->

Last but not least, if you poke around the site a bit more, you'll find that components can appear in many different places. For example, the button can be used as a read more button, in a form, and in another form.

You'd also notice that the input elements can be used in different forms and they look slightly different.

The button can also look slight different when used in a specific part of the site.

When you build your components, you want to think of you can move them around like lego blocks. You also want to think about combining small components into bigger components.

You also wan to consider if the components that look different when you use them in different places.

Let's collectively call this kind of change, modular scaling.

Now, we know that we need to deal with these three forms of scaling somehow in our code. Proportional, responsive and modular scaling.

<!-- 8 mins -->

## Proportional

Let's start with proportional scaling.

When you build a component that scales proportionally, you want to consider what property the component scales to.

Does it scale according to its own font-size like this button over here? Or does it scale according to something else?

If it scales according to its font-size, you can use relative units like `em`, `ch` and `%`.

So you can write your component like this. Here, the padding would change according to the components' font-size. Once you do this, you get a button that scales infinitely.

Most of the time, you don't need so many buttons. You need only say, three of them.  So you choose the sizes you'll use and create classes for each size.

You can then use these classes to get the right button size in your HTML.

If you get fancy, you can use Sass to abstract part of the code into a mixin, so you can write one class instead of two.

Either way works. The important thing here is to use relative units.

So, we already talked about components that scale according to the font-size. Another property components can scale according to is the viewport sizes.

If the component scales according to viewports, you can use viewport units like vw, vh, vmin, vmax.

For example, if you want to build a rectangle that's always a quarter of the viewport, you can write code like this:

And you can see from this demo that when I resize the viewport, the width and height changes accordingly.

If you get a little fancier, you can also use viewport units for fluid typography, like this:

So, when you build components that scale proportionally, you want to consider what property the component scales to. Does it scale to its font-size? Or does it scale to the viewport?

To build these components, you'd want to use relative units like `em` and `vw`.

So if you recall the first breakpoint on my site, everything changes according to the body font-size. That means you should use relative units as much as possible, and refrain from using px.

Once you've built several of these components, you want think about how you can combine them together like lego blocks. So let's talk about building lego blocks.

<!-- Lego blocks -->

When you think about building components like lego blocks, you want to think about how you can combine smaller components into bigger components and use them throughout your site.

This thought process is exactly the same as Brad Frost's Atomic Design, where you combine small components called atoms into medium sized ones called molecules and into larger ones called organisms and so on.

One thing that stands out the most is what happens visually outside the component? In other words, we're looking at how components interact with each other and how you manage the whitespace.

This whitespace is often created with the margin property. If you used relative units from what we've learned so far, you may write something like this.

The result of this code is a button that scales proportionally to its font-size. However, the whitespace of the button scales proportionally to its font-size as well.

This is not ideal because we want to manage whitespace across components to create a consistent design.

If you created component with different sizes, you would have to change the margin property at different sizes to make sure the whitespace remains the same.

This is not ideal because you have to perform extra calculations which makes code harder to understand.

To combat the extra calculations, we have a unit called `rem` in CSS. REM is called root em. It is a unit whose value is always tied to the `html` font-size.

This means you can safely use rem across your components without worrying whether they scale proportionally or not.

Like in this case, even though the font-size of the button is increased, the margin always stays the same.

To quickly differentiate between `em` and `rem`, you can consider `em` to be a local variable and `rem` to be a global variable.

As developers, we're inclined to think that local variables are good, and global variables are bad.

But in the case of design, we need global styles to make sure the entire site remains consistent. So, you may want to reconsider if local variables are always good and if global variables are always bad.

And that's the first thing to consider when you create lego blocks. The second thing is to remove unwanted spaces.

### Unwanted spaces

When we combine components, we may accidentally create components with uneven spaces like this. Its irritating.

The cause of this extra space, is often the margin-bottom on the last element. We want to remove it.

To do so, you can use :last-child psuedo selector. If you want to remove the margin-bottom from every last element, you might have to do something like this, which is a losing battle.

Essentially, when you think of lego blocks, you want to create components that do not disturb the whitespace around them.

But when components get joined together, they may have some whitespace between them.

A simple way to create this behavior is to use the adjacent sibling selector.

In this example, each `.block` refers to a component. The currently selected one is colored blue. When use an adjacent sibling selector, you can see that only the second third and fourth elements are selected. The first one isn't. You can then remove the margin-bottom from each block and you'll get the interaction you wanted.

Now, because this interaction is used in many places, you might want to use the lobotomized owl selector that was first introduced by Heydon Pickering.

You may want to read the article if interested to learn more.

To quickly summarize, when you create lego blocks, you'd want to use both local and global variables.

Your components should not disturb the surrounding whitespace when they're alone. When you need to consistently add whitespace between components, consider using the adjacent sibling selector.

Now let's move on to responsive scaling.

## Responsive Scaling

If you remember the example earlier, Responsive scaling happens when your create a breakpoint. Anything can change at that breakpoint.

The focus for responsive scaling is media queries. When we talk about media queries, we are mostly concerned with `min-width` and `max-width` queries. Although we do use the other ones as well, let's scope our discussion to these two.

A quick show of hands: how many of you use max-width media queries? How many of you use min width media queries? Are the rest having a hangover?

There is a difference between min-width and max-width media queries. Let's go through a quick example and you'll see why.

Let's say you want to build a component that increases its font-size from 1em to 2em at a specific breakpoint. Simple stuff.

This is the code you'll write with min-width media queries. Here, you only need to set the font-size to 2em at the specific breakpoint. There is no to set the font-size property to 1em before the breakpoint because its already the default size.

For a max-width media query, you first set your font-size to 2em, then within a breakpoint, you reset your font-size to the default 1em.

With this simple example, you can already see that you need extra lines of code when you use max-width media queries. And, this is only one property. Imagine if you had to change the layout and other properties for every component you build.

That would be a lot of lines of unnecessary code. So, I recommend you use min-width media queries as much as you can.

## Stacking Media queries (keep the media queries close by. No performance downside).

When you build components.

<!-- ... -->

### Combining media queries

Although I recommend you use min-width media queries as much as possible, there are certain occasions where you can combine min-width and max-width media queries to make your code simpler.

For example, let's say you want to build a 3x3 grid like this. On a small viewport, all 9 squares are blue.

On a medium viewport, odd squares are blue and even squares are red.

On a large viewport, the first, 4th and 7th squares are blue, the 2nd, 5th and 8th squares are red and the last three squares are green.

To code this component, you begin by setting all squares to blue on the small viewport. Then, at a medium viewport, you set even squares to red. So far so good.

At a larger viewport, you can use your nth-child-fu to set the 2nd, 5th and 8th square to red. That would be 3n + 2. You can also set the 3rd, 6th and 9th squares to green. That would be 3n.

But if you stop at this code, you'll see that the 4th square still remains red from the previous breakpoint. One way to fix this is to set another nth-child for 3n + 1 to blue. This method works kinda okay, but I don't really recommend it because you're writing extra lines of code to overwrite a style that you mistakenly overwrote when you styled the medium viewport.

A simpler way to fix this is to limit your styles with max-width.

In summary, for responsive scaling, you want to be aware of the media queries you're using. Favor min-width queries over max-width queries as much as you can because it allows you to write lesser code. If you need to, don't hesitate to use max-width to isolate parts of your code.

Now, let's move on to the final part on modular scaling.

## Modular Scaling

As you may recall, modular scaling happens when you build your components like lego blocks. We have already talked about lego blocks earlier.

What's left is for us to find out how to deal with your components that look different when you use them in specific parts of your site. I call these kinds morphable components.

A simple example would be the green and pink button that you've already seen. This is probably too simple an example, so let's use another one I found on Founders mantra.

When you open up Founders mantra, you immmediately see a quote. When you click on the archives section, you see many other quotes. If you only look at one specific quote, you'll can see that the components are actually quite similar to each other.

That means you can build these two seemingly different components as one component.

To do so, you first look at what content is similar between these two versions of the component. Here, you can see that both versions have a quote. Both versions also have the author name. A small difference here is that the single view has a "shared by" word.

The one major difference between the two components is the that the grid view has the date, while the single view doesn't.

Once you've identified the commonalities and differences, you'd want to write a HTML that you can use to style both components. In this case, your HTML might look like this:

The next step is to determine how to style you CSS such that these two components can look different from each other. Here, you need to decide how you want to make your components look different. The first approach you can use is to add a class to the parent element of the quote.

For example, in the single view, the parent class might be single-view and in the grid view, the parent class might be grid-view.

If you do this, you can write shared styles in the component class itself, and the modified styles specifically for each view.

Another way is to change the components' class name with a modifier class. If you do so, your HTML may resemble this one:

The nice thing about this method is that you don't have to care about where the component is placed. You just need to change the class for the component itself for the different styles to take effect.

Your CSS would look quite similar to the previous case.

If you have noticed, I used double dashes while creating a modifier. This is a naming convention called BEM. You can look it up. It's really useful for naming components.

The double underscore here is a BEM element. This is how you know that "date" is child element of the quote.

Here's an example of the same component at work. When I click on the button, you can see component change between the grid view and the single view. All it takes to switch between views is a swap in the components' class.

In this example, I used `quote--single` as the single view modifier. All I had to do with my JavaScript was to change quote--single to quote--grid and the component changes automatically.

### May not be obvious

Now the foundersmantra example is fairly obvious for most of us. Sometimes, morphable components may not be as obvious as the one on founders mantra.

Here's an example. Can you see what can be grouped together into a single component on this site?

These three things.

At a first glance they look very different from each other, so you may not notice they are actually quite similar.

They all have the 1 image. Although it looks abit different, which means the layout is different for these three components.

They have a title. This is the title. The font-size and weight for all three titles are the same.

They have the same background color. And when you hover on each of them, the background color changes. It also shows you that each one of them is a link.

2 out of three of them have a price tag. When you hover over the component, the price tag changes color in both instances.

2 of them have the discount tag.
2 of them have the platform indicator.

What's unique between these three components is the comments, the description, and the list counter.

Can you see how they can be styled as one component now? The next question is can you figure out how to code this component? Shouldn't be too difficult for you, so I'll leave you to it.

In summary, when you build morphable blocks, you find the similarities and differences between the different views. Once you located the similarities and differences, you craft a HTML that best fits all possible views, and modify how it looks with CSS.

As much as possible, you want to modify using only a single class so its easy for you to switch how the component looks.

<!-- Other quick tips. ?  -->

Building components that are maintainable, scalable in a responsive site with clean CSS can seem challenging and complicated at first.

But this seemingly huge task can be broken into smaller problems – how to scale proportionally, responsively and modularly.

Once you found the technique to handle all three cases, your CSS naturally becomes maintainable and scalable.

Once you found a way to handle each type three types of scaling, these  three smaller problems  case. Once you learned how to handle them individually,

With that, I have come to the end of this talk. Thank you for being such a great audience. I hope you enjoyed the talk as much as I did giving it.

If you'd like to continue the conversation about this talk or anything related to FED, you can find me lingering around the front of the venue. If you can't catch me in person, feel free to reach out over email or twitter, and I'll get back to you as soon as I can.

Thank you once again, and I'm happy to answer any questions you may have.