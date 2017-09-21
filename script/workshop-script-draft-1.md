## Opening

Hello everyone! Good morning! And welcome to the workshop on building scalable components.
First of all, I'd like to thank you for spending your Wednesday with me, over here, learning how to build scalable components with CSS. I am your instructor for today. My name is Zell.

Just a quick show of hands, how many of you are from the UK?

What about the rest? Where are you from?

(Listen to some).

Nice! Looks like we have diverse group here.

We’re going to spend the entire day together as a group, so let’s get comfortable with each other first. I'll go first.

I am a freelance designer/developer from Singapore.

When I'm not designing or coding, I teach people Frontend development, mostly through my blog and courses. Sometimes I also share what I know in trainings like this one.

So far, I had the privilege to help over 30,000 people every month on my blog.

If you're interested to find out what I have to say, feel free to check out my blog or my courses.

And that's a short intro of me.

Now, I would like to invite you everyone to go around the room and talk to people you don’t know yet. If you already know everyone here for some reason, you can come and talk to me.

We’re going to do this for 5 mins.

When you go around the room, feel free to use these questions to introduce yourselves.

Any questions? If not, let's begin!

Alright, and time.

Now, I also want to get to know you a little better, but I don't have the luxury of time to know each of you indivually right now. So let me have a show of hands who is

1. a designer?
2. a frontend developer?
3. a backend developer?

Okay cool. Looks like we have a great mix of people in the room. For this workshop, you're going to be working in groups of three. I'm going to help assign your groups. 1 2 3

Now, I'd like you to move into your groups. Group 1 will be here, 2, 3, 4, 5, 6, all the way till group 10. Alright?

Great! Thanks for being so cooperative and awesome! The workshop is definitely going to be a blast from how you guys are moving so far! Before we start, there are a few admin stuff I want you to know about.

First, if you want to go to the toilets, they are this way. You'd have three breaks in today's workshop session. The first one is at 11, a lunch break at 12:30 and a tea break at 3:00. Food will be provided for the second and third breaks.

Please make sure you wash up and get back to this room on time. We'll start the workshop punctually. Aside from that, please also be nice to each other. We're here to learn together.

Feel free to interrupt me at any time during the workshop if you have questions. Finally, have fun while you learn!

Any questions before we begin? Anyone needs a toilet break now? Okay, great! Let's start!

## Intro

The first exercise I'd like you to do today is to look at the handouts in front of you. There should be 2 questions. Fill them in. This is to help you speed up your learning your learning as you go through the workshop so lets take a few minutes and jot down your answers right now.

Now, I'd like you to turn to your group members and discuss what you know about building scalable components. What questions do you have about building scalable components. Discuss that within your group so everyone is on the same page. ALso, share about what practices you're currently using to help you build componentns.

Let's do a 10 min discussion within the group, then we'll invite a few groups to share with us.

Alright time!

Now let's hear from the groups. What do you understand about building scalable components so far? What do you think you need to be aware of?

Which groups have other questions that are not already mentioned?

(5 mins)

Alright. Looks like we have some consensus that scalable components are about building things that scale and writing clean code.

So we need to build components that are modular, scalable and clean. These three things mean something on their own, bet together the form a such a big question that we don't even know how to begin doing it.

After getting lost for a long time, I realize the answer is to start with the code that you have. Figure out what needs to happen, what's not working, and how to fix them.

So, let me use my blog as an example to share with you what I think you need to do to build components for a responsive website.

### Blog

<!-- Proportional -->

If you head to my website and resize the browser, you'll see a breakpoint like this. At this breakpoint, the font-size of the site changes. All other elements on the page change in accordance to the change in font-size. The change in proportional.

When you build components, you want to consider if your components changes proportionally to itself and something else. And, how do you code such a component?

For now, let's call this kind of scaling, proportional scaling.

We'll go into the specifics of proportional scaling in a while, so let's continue to see what needs to happen.

<!-- Responsive -->

If you resize the website further, you'll come across a breakpoint like this one here.

This time round, at the breakpoint, many different things change at the same time. The layout changed, the font-size changed, and the proportion between font-size also changed.

When you build your components, you want to consider how your components change at different breakpoints. Do they change together? Do they change separately? Do the changes from one component interfere with other components?

Let's call this type of change responsive scaling.

We'll also look at responsive scaling and how to deal with it.

<!-- Modular -->

Last but not least, if you poke around the site a bit more, you'll find that components can appear in many different places. For example, the button can be used as a read more button, in a form, and in another form.

You'd also notice that the input elements can be used in different forms and they look slightly different.

The button can also look slight different when used in a specific part of the site.

When you build your components, you want to think of you can move them around like lego blocks. You also want to think about combining small components into bigger components.

You also want to consider if the components that look different when you use them in different places.

Let's collectively call this kind of change, modular scaling.

Now, we know that we need to deal with these three forms of scaling somehow in our code. Proportional, responsive and modular scaling. That's three things we're going to cover today. We're also going to touch on two more, and that's naming components and handling CSS Specificity. These two are additional things that can really help you simplify your code.

That's what we're covering for today. Any questions before we move on?

## Proportional scaling,

When you think about proportional scaling, what comes to mind for you?

When you build proportional components, you want to identify what the component scales to. With CSS, components can scale to the font-size property and viewport sizes.

Now, a quick question. How do you build components that scale with the font-size? Yup, you use relative units.

What about components that scale with viewport units? You use viewport units.

Now, I'd like you to try your hand at building some scalable components. As an example, you can build buttons of different sizes, you can try something like this (devfest). You can try something like this (website).

Take 15 mins to do so. Feel free to discuss if you need to. You can also go through your own projects or other websites out there for inspiration. Think of and build as many things as you can within 15 mins.

Okay, time.

Let me show you the code for a simple component like the button. It should look something like this:

But in actual websites, you don't really need so many sizes. More often than not, you only need three. Can anyone tell me how you would write the HTML and CSS if you need buttons of three different sizes?

If so, you can abstract similar styles into a class and reuse them like this:

If you use Sass, you can also use a mixin, like this.

So, to sum off, you want to ... (summary of relative)

Great. Let's have a quick 15 min break now. As you go for your break, please hand in the first page of the handout you filled in. I want to take a look and your questions and do adjustments to the workshop if necessary.

## Break 15 min

Welcome back! I hope everyone is refreshed after the break and ready to get your hands dirty with code again.

## Lego blocks

Once you have a few components you built, you want to combine them like lego blocks to make a bigger component, something liket his:

Here's a quick question. What do you have to look out for when you combine components together?

Whitespace.

When you build a component, you want to be able to control the whitespace of around the component to be a value that you want.

In CSS, whitespace is usually built with margins. Let's say you built a button with 1em margin top and bottom. The result would be a button that looks like this.

I want you to notice the whitespae at the top and bottom of the button. What happened? Is this ideal?

More often than not, what you want is something like this. Notice how when I change the size of the button, the whitespace remains the same. The question is, how do you build something like this?

There is another problem when it comes to combining components together. Can anyone see the problem in this component?

Thank you, uneven spaces.

When we build a component, we want to make sure the component doesn't disturb the surronding space when its alone. That's how we can plug and play it in other components. We know it will not mess things up.

But when smaller components come together to form a big one, we need to be able to control the whitespace between the small component to make sure the big one looks alright. The question is, how do you do this?

In your groups, I'd like you to combine your lego blocks into bigger components. For the next 15 mins. As you do so, try to find an answer to both the whitespace questions.

Time!

Earlier, I showed you an example where I created margins on a button, like this. This resulted in a button whose margin changes size when the button font-size changes.

But as we have already established earlier, there's no need for so many button sizes. We only have a few, which means we only need to manage the margins for these sizes.

One thing we can do is to recalculate the margins whenever font-size changes, like this. But this isn't nice because you're doing more math.

In CSS, there is a unit called `rem` that can be used to help resolve this situation. `rem` stands for root `em`. It is like em, but its value is always tied to the root, or HTML selector. If the font-size of the root is 16px, 1rem is always going to be 16px anywhere in your code. If the font-size in the root is 20px, 1rem is always going to be 20px.

This is how you maintain the margin across different font-sizes.

To help you differentiate between `em` and `rem` you can think of `em` like a local variable since its value changes once the font-size in the current selecetor change. `rem` is like a global variable because its always the value of the root font-size.

Now, as developers, we are inclined to think that local variables are always good and global variables are always bad. But that's not the same when it comes to web design and CSS? Global variables are important for consistency.

Now, the second question I wanted you to explore was the unwanted whitespace problem. One way you can solve it is to remove the margin bottom from the last element.

Although you can do so, it's going to be a losing battle if you have to remove the last margin for every selector. It's also not very nice to overwrite a margin and set it to 0. It feels hackish.

If the component is alone, you want to make sure there isn't any whitespace around, so you can drop it anywhere and the component would work.

A better way to solve the problem is through the adjacent sibling selector. In this demo, you'll notice that the selected elements are colored blue, and they have margin top and bottom of 1rem.

Once I add the adjacent sibling selector, I only target the second, third and subsequent elements. The first one is not touched.

So, in this case, I can simply remove the margin-bottom property and I'll get the whitespace between components, with just one line of code.

If you use the adjacent sibiling selector like this, you may find that you'll use this pattern heavily. So, you might want to use the universal selector to add the margin.

Now I'd like you to try the solutions you just learned. Take 10mins and give them a try.

In summary, to build lego blocks, you want to control the whitespace around components. It should not disturb the whitespace outside, but it should control the whitespace inside.
use both global and local variables to help you out. You can also use the adjacent sibling selector.

## Responsive Scaling

Next, we talk about responsive scaling.

What do you think is the most important thing when it comes to responsive scaling?

(Media queries)

Great. What kind of media queries do you use?

Who use min-width?
Who use max-width?

I'd like you to take 5 mins to talk about the difference between min-width and max-width mq. When do you use which?

Let's hear what you think. Would anyone like to share?

There is a difference between min-width and max-width media queries. Let's go through a quick example and you'll see why.

Let's say you want to build a component that increases its font-size from 1em to 2em at a specific breakpoint. Simple stuff.

This is the code you'll write with min-width media queries. Here, you only need to set the font-size to 2em at the specific breakpoint. There is no to set the font-size property to 1em before the breakpoint because its already the default size.

For a max-width media query, you first set your font-size to 2em, then within a breakpoint, you reset your font-size to the default 1em.

With this simple example, you can already see that you need extra lines of code when you use max-width media queries. And, this is only one property. Imagine if you had to change the layout and other properties for every component you build.

That would be a lot of lines of unnecessary code. So, I recommend you use min-width media queries as much as you can.

Now, for another exercise. I want you to build this component:

On a small viewport, all 9 squares are blue.

On a medium viewport, odd squares are blue and even squares are red.

On a large viewport, the first, 4th and 7th squares are blue, the 2nd, 5th and 8th squares are red and the last three squares are green.

Take 10 mins.

Most of you managed to get this. Show demo code and explain.

## Lunch break (1h)

## Modular Scaling

Welcome back! I hope you had a great lunch! (And that you didn't eat so much to induce food coma). We have a lot more things to cover in the next few hours to come.

Now, we want to talk about modular scaling. Modular scaling happens when you build your components like lego blocks. We have already talked about lego blocks earlier.

What's left is for us to find out how to deal with your components that look different when you use them in specific parts of your site. I call these kinds morphable components.

A simple example would be the green and pink button that you've already seen. This is probably too simple an example, so let's use another one I found on Founders mantra.

When you open up Founders mantra, you immmediately see a quote. When you click on the archives section, you see many other quotes. If you only look at one specific quote, you'll can see that the components are actually quite similar to each other.

That means you can build these two seemingly different components as one component.

How do you build a component like this? Any ideas?

To do so, you first look at what content is similar between these two versions of the component. Here, you can see that both versions have a quote. Both versions also have the author name. A small difference here is that the single view has a "shared by" word.

The one major difference between the two components is the that the grid view has the date, while the single view doesn't.

Then, you style your CSS to make them look different. I'd like you to try your hand at building this component. Minimally, you'd want to make just one of the grid view, and one of the single view.

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

Can anyone tell me what's the similarities between them? The differences?

Now, I'd like you to try your hand at building this one component from gog.com. Take 30 mins to do so.

## Naming components

Who has a hard time naming things in CSS, besides simple things like buttons. What problem did you have?

Yep, those are very common problems. There are too many things to name, CSS is global, its easy to have conflicting names.

Anyone has a good solution?

Naming conventions!

Who uses a naming convention here? Who doesn't? Why don't you use a naming convention? Can you share it with us?

For those who use naming conventions, what conventions do you use?

Why do you use X? What's good about X?
Why do you use Y? What's good about Y?

We've heard from three people and each of them have a different solution so far. What about you? Do you have an idea on what you'd do?

I'd like you to share your thoughts about naming compoents with your group.

Time! Any group wants to share your opinions?

Interesting! My preferred method is slightly different. Would you like to hear?

BEM.

Modifiers. Double dashes. I like the double dashes because its different from single dashes. I often make stupid naming decisions that require two words. So the double dashes help to differentiate modifiers from long component names.

BEM Elements. Double underscores. Make it clear that its a children. This is quite straight forward.

Most people have problems with BEM grandchildren elements. They take the __ too literally and add too many __, which results in code like this. Too unweidly and long.

Use only one layer of nesting, even if it digs deeper into the component.

If your component is a list, things may be abit more challenging, so you may want to differentiate things with singular and plural forms.

If I can't use singular or plural forms, I always default to item__, and I style the class with the `.item__`.

## Namespacing

Here's another question for you. If you want to change the button color from pink to green, sohuld you change the .button class or .main-nav > button?

It's quite hard to decide, right?

As you can see, we already have different opinions in this class. That's not good when it comes to CSS. If you want to quickly make changes, but don't want to break the site, how can you do so without being completely sure what you can change and what you can't?

So, in addition to BEM, I recommend you use namespaces to differentiate the purpose of each class you use. With namespacing, you add a prefix to a component names.

Does anyone have an example of a namespace they use?

Atomic design.

I use these namespaces.

Exercise: Refactor the components you've coded in this workshop so far so they use namespaces and BEM. Take 15 mins.

If you're done with the components you've coded up in this course, you may want to do the same for your projects.

## Specificity

Another important thing to take note in CSS is the specificity curve. Can I have someone explain to me what specificity is?

Great!

Quick quiz. What are is the specificity of these selectors?

If you're ever confused about specificity, you can use this specificity calculator to help you out.

So, why is specificity important? Anyone?

Yes, it determines what styles take dominance and show up in your code. The more specific CSS would show up.

What happens if two classes have the same specificity?

Yep.

And what implications does cascade have with your code?

You want to put generic things upfront.

The CSS Specificity curve.

So, when you think about CSS specificity, you want to write your CSS such that the generic things come up first in your CSS. So your specificity curve should look like this:

Then, as you build components, your specificity would spike up a little.

Now here's another question. Should you style components with the id selector? Why yes? Why no?

Id = spike. So it makes it hard to correct your specificity.

At the end of your specificity curve, you can have utilitiy classes that contain the !important keyword, like `u-text-center`, which you can use anytime in your HTML to force text to be aligned center.

Now, I'd like you to refactor the code you have thus far, considering specificity.

## Wrapping up

With that, we're almost at the end of the workshop. Do you have any final questions that I've yet to answer?

If not, I'd like you to turn to your groups and share what you've gotten out of this session to help you crystalize the learnings for the day. Please take 5 mins to do so.

Alright. Thank you so much for attending this workshop, and for being great participants. I hoped you had fun and learned a lot!

Before you go, I'd appreciate it if you can fill up a feedback form. You can find this form on the last page of your handout.

If you have any questions, you can stick around and ask me. If you think of questions in future, you can find me on my blog, or through twitter.

Thank you once again for attending this workshop! One final question from me. Anyone wants to grab dinner together?
