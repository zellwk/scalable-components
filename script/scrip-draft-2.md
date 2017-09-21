As frontend developers, we're the custodians of the web. We all want to build beautiful websites and web applications. Yet, at the same time, we find it difficult.

We find it difficult to design nice-looking websites. Sometimes, we get a designer's help, but communications run awfully awry. Designers and developers end up hating each other. They solve the problem most of the time, but sometimes, designers and developers can really get on each others' nerves.

We also find it difficult to code up a nice design. How can you be confident that you don't break CSS when making changes? At the same time, you don't bloat your CSS?

How can you build responsive websites that are maintainable, easy to scale and responsive at the same time?

There are many jargons in the sentence I just used – maintainable, easy to scale, responsive. What do they mean to us? What do they mean in code? Do we understand what we're looking for when we build components? Or are we blindly trying to follow other peoples' advice?

That's a problem I struggled with constantly when I first began to code. There were so many opinions flying around. It was hard for a beginner like me to understand what was important and what wasn't.

The turning point for me was throwing away all the jargons and look at what needs to happen on a responsive website.

Let's do that together.

Before we move on, lemme tell you a little bit about myself. I'm Zell. I'm a freelance designer/developer from Singapore. I've help over 30,000 readers a month with the articles on my blog, I've also created in-depth courses to teach people how to code effectively. And in all my work, I follow the same principle – figure out what the first principles are, then apply it to my work, then teach it.

Now, let's get back to what needs to happen when building a responsive website. We'll begin by looking at the smallest piece of a website – Text.

Letters form words, and words form paragraphs. The first thing we need to handle when creating great websites is thus, the typography. We begin by setting the base font-size of a page.

If 16px is too small, we use 18px.

Heading sizes need to be proportional to the body text to a certain extent. To keep the proportionality, we can change the base font-size on the html and everything would scale naturally (to a certian extend)

```
```

And this is where the problem begins. Text doesn't scale proportionally infinitely. At a specific viewpoint width, the design and change. The proportionality can be broken.

<!-- ... --> Maybe should switch to talking about buttons first.

Text can also stand on it's own, or even be surrounded by borders. That makes a button.
