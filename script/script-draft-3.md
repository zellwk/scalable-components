## Istro

As frontend developers, we are the custodians of the web. We're want to build beautiful and functional websites and applications for others to use.

While making things look nice, we also need to make sure we write our code in a way that allows us to make changes easily down the road. We need to take care of how the site behaves on different viewports.

We even need to build components that can be used universally throughout the site. These components may appear differently when used in different ways.

So, there's a ton of complexity in building a site in a maintainable way. We need to dig deep and consider the different possibilities that may happen, so we know how to deal with them.

Unfortunately, for most of us, time is a luxury. We have so much on our hands that we simply don't have the time to do the necessary research to remove this pain we experience every single day.

Pain? Pain is good. I should emphasize the pain more.

What sort of pain?

# 1 pain =  We become afraid of breaking CSS whenever we change the code.

We're afraid of breaking our CSS. We don't dare to change the code. And development speed slows. We feel restricted and frustrated for our lack of abilities.

And so the pain remains, it gets worse as you build more sites, and you feel that you could have done something better. But you don't know what, and don't know how to.

Test many approaches by different experts, but somehow they don't really fit nicely into everything.

I experience the same pains too. It look me a long time, testing, researching and integrating different methods to come to a point where I'm comfortable to build maintainable, scalable and responsive components.

And today, I'm gonna share that with you.

## Back to the Talk

First, let's take a look at what goes through our heads when we build components.

First thing we usually do is to look at the components and think about how to build them at the viewport we're looking at. You may begin with mobile, you may begin with desktop. Doesn't matter. You figure out how to build it first. This is easy.

Next, you figure out how to change the component such that, they look good at different viewports. This is where things begin to get confusing.

1. Some components change evenly. They follow a proportion (Following font-size). Like buttons. Sometimes, the entire website gets a little bigger. (Change in text size). These are all proportional changes.
2. Some components don't change proportionally. They can look completely different. You can remove or add things. You can even shift things around. Their internal layout can change.

This is the basics. And, when you get more advanced, you begin abstracting things. You see if there are components that need to be placed in wildly different areas, with the same HTML code. You want to reuse as many styles as possible. You want your components to be plug and play.

1. Plug and play becomes a problem because components can change even more when you place them into different areas.

For example, A looks like this, but can look like this in a different place. Sometimes, components are really just plug and play, You don't change anything at all.

And this is where confusion and overwhelm sets in.

So far, we identified three possible ways of change.

Things can change proportionally. Let's call it proportional scaling.

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

Things can change differently at different viewports. What happens depends on the design. Let's call it responsive scaling.

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

Things need to be plug and play. Let's call this modular scaling.

<figure>
  <img src="/images/2017/" alt="">
  <figcaption></figcaption>
</figure>

Once we've identified each set of possible change, we can form rules to code for them to make things much easier for us. We'll look at each one in turn, starting with the proportional one.

## Proportional scaling

Proportional scaling. Proportianal to what? For web design, most of the proportionality is proportional to the size of text. In other words, font-size.

If proportional to font-size, we can use ...
If not, can use vh and vw.

Sometimes, fz is proportional to viewport. Like Responsive typography method pioneered by Mike Riethmuller. Show some formula, + a demo of it.

How to link that everything else should be written in terms of relative units?

Also, is it infinitely proportional? Is the infinity part important? Or is it more important to focus on three specific sizes, for example?

And also, proportional to it's own font-size, or proportional to a base global? That's is probably the question here. Because design = repetition. If you can use a "global" variable to control everything, it's probably good.

We question this "global" aspect because in JavaScript and other programming, global = bad. Local = good. But is it really? Especially when it comes to design?

If you're a designer/developer, think about it. If you're not confident in your design skills, talk to your designer and figure out what's the best way.

## Responsive scaling
## Modular scaling

Building a modular a component depends on 2 factors:

1. The width of the viewport.
2. Where the components are placed into.