---
title: What Are Refreshable Braille Devices and What Do Devs and UX Designers Need to Know?
date: 2024-03-13
tags:
  - post
  - featured
  - css
  - design
  - a11y
image: /images/covers/03_A11y_ResourcesForDevs_1200x630.png
imageAlt: "Graphic on a black background.Pink text: Web Accessibility Wednesdayslaptop emoji + wheelchair emojiOrange text: A11y Resources for Devs!pink to orange gradient text: https://gingerkiwi.blog"
description: Web Accessibility Wednesday
layout: ../../layouts/BlogPostLayout.astro
category: a11y
draft: "false"
---
As developers screen readers are the most frequent alternative input/output (i/o) method mentioned when discussing accessibility (a11y). However, there's far more to web accessibility than screen readers. Can you imagine trying to refer to documentation during a meeting by listening to it? You'd miss most of what is being said in the meeting. For those of us that are sighted, we can just choose to read text. For people who are blind and low vision one option is a refreshable braille device. 

Keep reading to learn more about braille, and refreshable braille displays from a developer's perspective. Given that this article is aimed at sighted software developers and UX designers, I've embedded quite a few videos. As always there's a list of resources at the end.

## Contents

1. <a href=#what-is-braille>What is braille?</a>
2. <a href="#braille-displays">What are refreshable braille displays?</a>
3. <a href="#code">How to code for refreshable braille device accessibility</a>
4. <a href="#references-resources">References and resources</a>

<h2 id="what-is-braille">1. What is Braille?</h2>

Braille is a tactile written system of raised dots arranged in "cells" of six dots. Each cell is two dots across and three dots high. In the English speaking world there are two main systems of 6-dot braille that form the Unified English Braille standard (UEB):
1. Grade 1, elementary or uncontracted braille is braille that spells out each letter with one cell of braille. 
2. Grade 2 or contracted braille is a shorter form of braille that has contractions for commonly used English words.


![Braille alphabet](/images/braille-alphabet-perkins-school.png "The braille alphabet")

### How to Write Braille - The Analog Way

Braille is written by being embossed on thick paper (card stock) either by braille typewriters such as the popular Perkins brailler, or occasionally with a braille slate and stylus. 

#### Braille Writers (Typewriters)

Braille writers are very heavy typewriters that emboss braille letters onto card stock paper. They use a 9 key system. The far left key is the the carriage return that moves the paper down one line. The first three keys are dots 1, 2, 3. The middle key is the spacebar. The three keys immediately after the spacebar are the 4, 5, and 6 dots. The far right key is the backspace


Molly Burke demonstrates how she used her Perkins brailler in school in the video below. 

<iframe width="350" height="197" src="https://www.youtube.com/embed/a8AEkwtNEiM?si=Jj6OaW6vSa73gTn2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Braille Slate and Stylus

While very inexpensive ($5-25 on Amazon), and very portable, a braille slate and stylus is much more time consuming than a braille writer - and can be more confusing. Because the person writing the braille is punching down into the paper they have to write from left to right on each line and in mirror writing for each letter in order for a reader to read the raised dots. 

Braille slates come in many different sizes from almost wallet sized ones, to full braille pages that are about the size of a scrapbook page. Certified Braille Transcriber, Elizabeth Symington's excellent video on 10 different types of Braille slates is a great demonstration of the variety in this portable braille writing option. 


<iframe width="350" height="197" src="https://www.youtube.com/embed/M6mUNyj3WRM?si=MlrUPbeq6v4ttfKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### To Learn More About Classic Braille

If you would like to learn braille several organizations offer free tactile braille alphabet cards via mail:

- UK: The Royal National Institute for the Blind (RNIB) offers free tactile braille alphabet cards via royal mail (post). You can order the tactile braille alphabet card [online on the RNIB website shop](https://shop.rnib.org.uk/braille-alphabet-card).

-  USA: [National Braille Press](https://share.hsforms.com/12RVTBI5FSqWsvZXEdMHEVA1fsnq) free tactile braille alphabet cards shipped via the United States Postal Service (USPS)

[Lego has braille bricks](https://www.lego.com/en-ee/aboutus/news/2023/august/lego-braille-bricks-play-with-braille-?gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW9kV6enY5iwIje1b-5K5i0VUlYyJV6x1HOT5dDl-f68ksRq1GRj8WUaAmQKEALw_wcB&locale=en-ee&ef_id=Cj0KCQjwncWvBhD_ARIsAEb2HW9kV6enY5iwIje1b-5K5i0VUlYyJV6x1HOT5dDl-f68ksRq1GRj8WUaAmQKEALw_wcB%3AG%3As&s_kwcid=AL%21790%213%21%21%21%21x%21%21%2120535543331%21&cmp=KAC-INI-GOOGUS-GO-CA_GL-EN-RE-SP-BUY-CREATE-MB_ALWAYS_ON-SHOP-BP-PMAX-ALL-CIDNA00000-PMAX-LOW_PRIORITY&gad_source=1) that became available to the general public in 2023 (they were originally just for eductors). It's a great interactive, fun, geeky way to learn some braille. 

### Eight Dot Braille Systems

Traditional braille with its six dot cells can represent a maximum of 64 characters. Eight dots allow a maximum of 256 characters. There are two main systems of braille that use eight dots: Braille Computer Notation (BCN), and braille-8. Braille computer notation uses a single 8 dot braille cell to map to 256 unicode characters. While BCN greatly extends what braille can represent, it still can't represent Greek letters and other symbols used in maths and science such as ∆ (delta), or ß (beta). 

Instead of using every dot in a cell to represent a character, braille-8 uses dots 7 and 8 to indicate which of the four braille-8 "pallets" the first six dots are representing. Pallet A has both dot 7 and 8  off, and it displays the traditional 64 character braille code. Pallet B is (just dot 7 on) represents 10 numerals and 26 capital letters. Pallet C (both dot 7 and dot 8 on) is for trigonometry and scientific notion. Palette D (dot 8 on) is a combination braille pallet of the Universal English Braille contractions and 17 most common scientific terms. 

#### To Learn More About Eight Dot Braille Code

The senior engineer, and founder and CEO of Vistrit Gyan, [Anupam Kumar Garg](https://anupamkumargarg.com/)has an excellent, very detailed description of both 8-dot braille and braille-8 in his article [Braille-8 Unified Braille Unicode System](https://anupamkumargarg.com/products-and-initiatives/braille-8-unified-braille-unicode-system/). He's the primary inventor of 8-dot Unicode braille. The majority of the information 8 dot braille systems comes from his article. If you want to geek out and dive in to learn more it's a very well researched read. His original paper on 8-dot unicode braille [Braille-8 — The unified braille Unicode system:](https://ieeexplore.ieee.org/document/7947839/figures#figures)Presenting an ideal unified system around 8-dot Braille Unicode for the braille users world-over | IEEE Conference Publication | IEEE Xplore was presented at the Institute of Electrical and Electronics Engineers (IEEE) Conference, Bengaluru in 2016

___

## <h2 id="braille-displays">Digital Braille: What are Refreshable Braille Devices?</h2>

All refreshable braille devices are hardware that display tactile braille by moving up and down sets of pins to represent the dots in braille. Almost all braille devices have 8 dot cells allowing for both classic 6 dot braille and for 8 dot braille systems. Above each 8 dot cell are cursor indicators that allow braille users to know where the cursor is in their document.

### Keyboards on Refreshable Braille Devices

Most refreshable braille devices have a Perkins braille keyboard. Unlike on a QWERTY keyboard, the keys on a Perkins digital keyboard are oval shaped with the longest part of the oval running vertically. In the picture below the Perkins keys are the white ones. Perkins keyboards have nine keys. The key on the far left is the back key. Each of the 6 middle keys represent a dot in a braille cell. The key on the far right is the enter key. The middle key below the other 8 keys is the space bar. 

The diagram below from the Perkins School for the Blind shows additional keys commonly found on refreshable braille devices. From left to right the functions of these smaller black, horizontal oval keys are: escape (F1), tab (F2), control (F3), alt (F4), break in row for spacebar above, shift (F5), insert (F6), Windows (F7), applications (F8). You'll notice that the enter (carriage return), and backspace keys are in the opposite positions to that on a classic Perkins braille writer (typewriter). 
The digital Perkins keyboard mimics modern QWERTY keyboards with the return key being on the right instead of the left.


<figure>
    <img src="/images/braille-perkins-keyboard-diagram.webp"
         alt="Perkins brailler keyboard labeled diagram. Complete description is above in the paragraph text.">
    <figcaption>Image Credit: <a href="https://www.perkins.org/resource/so-many-braille-displays-which-one-right-my-student-part-three/">Perkins School for the Blind</a></figcaption>
</figure>

There's a newer refreshable braille display by Humanware - the [Mantis Q40 braille display](https://store.humanware.com/hus/mantis-q40.html) has a QWERTY keyboard instead of a braille keyboard above it's 40 cell braille display. 

<iframe width="350" height="197" src="https://www.youtube.com/embed/zaIjhRzc80E?si=yk9StNsoFz906gpV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Types of Refreshable Braille Devices

There are two main types of refreshable braille devices:
1. Braille display
2. Notetaker

### 1. Refreshable Braille Display

A refreshable braille display is primarily used as an  input/output device for a computer, tablet, or smart phone. It displays what is on the external device as braille. Some also have text-to-speech screen readers which can announce the word(s) currently on the braille display. 

Almost all refreshable braille displays have ebook reader functionality - users can download and save books onto both internal storage and SD card slots. Most refreshable braille displays can connect to more than one device at a time via bluetooth and/or usb connections - allowing users to read from their computers, tablets, and phones using just one output device. 

Refreshable braille displays range in size from ultra portable 12, 14, or 20 cells to 40 to 80 cell ones used in the workplace and by writers.

To see how blind and low vision adult users use their refreshable braille displays take a look at the video below by [Stuart Lawler](https://www.linkedin.com/in/stuart-lawler-1513652/overlay/about-this-profile/) on [Sight and Sound Technology's](https://www.sightandsound.co.uk ) YouTube channel

<iframe width="350" height="197" src="https://www.youtube.com/embed/s3HgWT_Ya9E?si=xd9-S0QFNiSSAVIy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Like many of us during the pandemic, blind students switched to online learning. Refreshable braille displays allowed blind and low vision students that can read braille to access Google classroom. Have a quick watch of the video below by [Dr Denise M Robinson](https://www.youtube.com/@DrDeniseMRobinsontech) to see how a student (Aubrey) accessed her Google classroom in 2020 using a Focus 40, 40 cell braille display.

<iframe width="350" height="197" src="https://www.youtube.com/embed/3mEy2QPSNgk?si=3zCtwQbgbS3uqk7z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


One of the most portable (and cute) refreshable braille displays is the HIMS Smart Beetle 14 cell braille display. The quick 2 minute video below shows Mycael an assistive technology content creator unboxing one. Though Mycael can't read braille, this is the best short and up to date video showing the Smart Beetle. (The device has been around for more than 7 years, so there's some long, really dry videos on this really cute device.)

<iframe width="350" height="197" src="https://www.youtube.com/embed/IDl148Iuhqc?si=NJcYfDeD_rM4g7de" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The [Mantis Q40 braille display](https://store.humanware.com/hus/mantis-q40.html)in the video in the keyboard section above is an example of a refreshable braille display. Humanware's cute 35 second video ad below is worth a watch as well.

<iframe width="350" height="197" src="https://www.youtube.com/embed/jdjGFMzOdjU?si=LWItcjO9n_ox54Zb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### 2. Braille Notetaker 

Braille Notetakers are more than input/output devices and ebook readers. They function as standalone digital devices for note taking, file management, and productivity applications such as calendars. Some are full functioning Windows laptop computers that can be hooked up to an external monitor - just like a laptop computer can be connected to an external display. 

There are also Android braille notetakers, that function a lot like Chrome Books for students. The majority of braille notetakers can also work as refreshable braille displays for external devices such as other computers, smart phones, and tablets. 

The B.BOOK Braille Notetaker in the short, 3 minute video embedded below is a full functioning Windows laptop computer.

<iframe width="350" height="197" src="https://www.youtube.com/embed/80NfUNLdugs?si=d4Bqqogqw9S9AMu1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Other Digital Braille Display Devices

Technology advances fast! One of the most promising cutting edge digital braille display devices are multi-line and tactile graphics displays such as the Monarch by Humanware, and Dotpad by Texas Instruments. Both allow users to read braille more like a book or a full screen of text as well as to access visual data through tactile graphics.

<iframe width="350" height="197" src="https://www.youtube.com/embed/I5JLDkWGkF0?si=kIdCMrPLxHwUEFrr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


<iframe width="350" height="197" src="https://www.youtube.com/embed/Zvg2JckxzwU?si=qs2UGBbrFlgye7rY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

___
<h2 id="code">How to Code for Refreshable Braille Device Accessibility</h2>

Writing code that's accessible for refreshable braille device users is the same as writing accessible code for text to speech screen readers, and other assistive tech devices. Devs are busy, so here's a quick scannable list. 

### Basics

- Provide a skip navigation / skip to main content link before any page content. That allows refreshable braille device users to skip hearing all the navigation menu option and just get to your main content.
- Use semantic html instead of getting lost coding an endless sea of `<div>`s.
	- Use only one `<h1>` per page.
	- Don't skip heading levels. 
		- Correct: `<h1>` , `<h2>` , `<h2>` , `<h3>` , `<h3>` , `<h2>` , 
		- Incorrect: `<h1>` , `<h2>` , `<h4>` , `<h3>` , `<h2>` , `<h2>` , 
	- Style headings with css not with html tags. If you need to have a certain heading level visually look like another use a css utility class, or change your Tailwind CSS for that element if you're using Tailwind.
- Use semantic landmarks - `<main>` ,  `<article>` , `<section>` , `<aside>` , `<nav>` , 

### ARIA

- Don't use ARIA - unless you really know what you're doing. Bad ARIA breaks things and is worse than not using it.
- If you want to start learning some ARIA  [Ben Myers](https://benmyers.dev/)'s article ["aria-label, aria-labelledby, and aria-describedby: What's the Difference?"](https://benmyers.dev/blog/aria-labels-and-descriptions/)published on Dec 7, 2020 is a great start.

### Symbols, Icons, Mathematics, Money,

- Use UNICODE characters and not images for mathematics, scientific, coding, and money characters like ß (beta), brackets / parentheses, and money symbols (e.g. the British pounds sign £).
- Use svgs for icons instead of unicode characters (e.g. the hamburger menu), and provide short alt text for them.
- Have an outline for longer articles and single page apps with in-page links or a secondary navigation menu.

### Forms

- This is a very in depth and detailed topic, and too long for this article. It's important to do it right because forms are so much a part of accessing information today.
	- One of the best resources on accessible forms is Rachele DiTullio's [Structuring Accessible Forms](https://racheleditullio.com/talks/accessible-forms/) She covers all common input fields, error handling, with an article, video (with captions and ASL), GitHub repo, codepen, and even pdf presentation.

### Emojis

- Avoid using a lot of emojis, multiple emojis in a row, and using emojis for bullet points. 
- Just like text to speech screen readers, refreshable braille devices read out the entire name for each emoji. 
- Try placing emojis at the end of lines instead of at the beginning.

___
<h2 id="references-resources">References and Resources</h2>

### Braille

- [Anupam Kumar Garg](https://anupamkumargarg.com/) [Braille-8 Unified Braille Unicode System](https://anupamkumargarg.com/products-and-initiatives/braille-8-unified-braille-unicode-system/) Article
- [Australian Braille Authority](brailleaustralia.org) [About Braille](https://brailleaustralia.org/about-braille/) Article
- The Braille Authority of New Zealand Aotearoa Trust (BANZAT) [Braille Codes and Formats](https://www.banzat.org.nz/publications/braille-codes-and-formats) Article
- Braille Authority of North America [Codebooks and Guidelines | Braille Authority of North America](https://brailleauthority.org/publications-area)
- [Braille Literacy Canada | Learn About Braille](https://www.brailleliteracycanada.ca/en/braille)  Article
- Lucy Edwards [I'm Blind, How Long Did It Take To Learn Braille?](https://youtube.com/shorts/p2VtefxSsGQ?si=ICoHyqEa_Ru0O0FZ) YouTube short
- MADA Centre Quatar - [Unified Arabic Braille Portal](mada.org.qa). [Lesson1, 8-Dot Braille Basics](https://braille.mada.org.qa/lesson-1-8-dot-braille-basics/?lang=en#:~:text=8-dot%20braille%20is%20a%20new%20format%20for%20reading,and%20dot%208%20is%20located%20below%20dot%206.)
- National Film Board of Canada [The Evolution of Braille: (nfb.org)](https://nfb.org/sites/default/files/images/nfb/publications/bm/bm11/bm1105/bm110506.htm) Article
- Perkins School for the Blind [Perkins Brailler](https://www.perkins.org/perkins-brailler/) Article
- Royal National Institute for the Blind (RNIB) [Learning braille with Jessica and Isabella](https://youtu.be/9lMpMnzNt44?si=ujlCcyLij5OtB6iU)
- [Unsightly Opinions](https://www.youtube.com/@UnsightlyOpinions) ["What is it? What does it cost? Blind braille display"](https://youtube.com/shorts/QhJO93VhuMs?si=OePX9Nwtyf3n_in3) YouTube short
### Refreshable Braille Devices

- APH American Printing House. [Introducing Chameleon 20: A 20-Cell Refreshable Braille Display (youtube.com)](https://www.youtube.com/watch?v=SlxIEPEC_Qc&t=1s)
- Brailler Depot store [Hims Smart Beetle 14 Cell Braille Display](https://braillerdepot.com/smart_beetle.html)
- Bureau of Internet Accessibility [How Braille Displays Help Users with Visual Impairments Access the Web](https://www.boia.org/blog/how-braille-displays-help-users-with-visual-impairments-access-the-web)
- Freedom Scientific shop [Braille Displays & Notetakers – Freedom Scientific eStore](https://store.freedomscientific.com/collections/braille-display-and-notetakers)
- Humanware store [Mantis Q40 braille display](https://store.humanware.com/hus/mantis-q40.html
- Humanare store [Braille Notetakers](https://store.humanware.com/hus/braille-devices/braille-notetakers)
- [Inclusive Design Research Centre](http://idrc.ocad.ca/)[OCAD University](http://ocad.ca/) [Refreshable Braille Display](https://legacy.idrc.ocadu.ca/13-resources/technical-glossary/43-refreshable-braille-display)
- MSN News [Tech I can't live without: ]([Tech I Can't Live Without: Mantis Q40 Braille display (msn.com)](https://www.msn.com/en-us/news/technology/tech-i-can-t-live-without-mantis-q40-braille-display/vi-AA18Ir6O#details))
- Perkins School for the Blind [An overview of Braille Devices](https://www.perkins.org/resource/overview-braille-devices/) Article
- Perkins School for the Blind [So Many Braille Displays, Which One is Right for My Student: ](https://www.perkins.org/resource/so-many-braille-displays-which-one-right-my-student-part-three/)Part Three

### Coding and Digital Accessibility Resources

- [A11y-101 ](a11y-101.com)Development | [Introduction to Accessibility](https://www.a11y-101.com/development)
- [Ben Myers](https://benmyers.dev/) [aria-label, aria-labelledby, and aria-describedby: What's the Difference?](https://benmyers.dev/blog/aria-labels-and-descriptions/)Dec 7, 2020
- [Geoff Graham](https://www.smashingmagazine.com/author/geoff-graham/)[A Roundup Of WCAG 2.2 Explainers](https://www.smashingmagazine.com/2023/10/roundup-wcag-explainers/) [Smashing Magazine](https://www.smashingmagazine.com/) Oct 20, 2023. Article: estimated 6 min read
- [Vitaly Friedman](https://www.smashingmagazine.com/author/vitaly-friedman/)[A Complete Guide To Accessible Front-End Components](https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/) [Smashing Magazine](https://www.smashingmagazine.com)Article with code snippets. Updated May 25, 2022
	- Documentation collection with code snippets for different UI elements and front end functionality.
	- All have code snippets and most have videos
- Jason Fox  UX Content Collective [Accessible content design for emojis]https://uxcontent.com/accessible-content-design-for-emojis/
- [David A. Kennedy](https://www.a11yproject.com/authors/#david-a-kennedy)The A11y Project [What is Semantic HTML?](https://www.a11yproject.com/posts/what-is-semantic-html/)
- Mozilla Developer Network [Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- WAI - Web Accessibility Initiative [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
- WebAIM [Screen Reader User Survey #10 Results](https://webaim.org/projects/screenreadersurvey10/)

___

Note: While I grew up around vision loss with my mom's retinas tearing for the first time when I was four, I can't read braille, and don't use refreshable braille devices. I did teach myself some braille when I was in elementary and high school because doctors told me I'd likely become low vision or blind like my mom. This article is based on my research, studying to become a certified web accessibility professional, as well as my experience in the disability community and as a developer passionate about digital accessibility ("a11y"). If you're a braille reader I welcome updates and corrections to this article!