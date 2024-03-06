---
title: An Introduction to Text to Speech and Screen Readers for Developers
date: 2024-01-24
tags:
  - post
  - featured
  - a11y
image: /images/covers/03_A11y_ResourcesForDevs_1200x630.png
imageAlt: "Graphic on a black background.Pink text: Web Accessibility Wednesdays laptop emoji + wheelchair emojiOrange text: A11y Resources for Devs!pink to orange gradient text: https://gingerkiwi.dev"
description: "Web Accessibility Wednesday:  This week I was asked by other developers about how they could go about experiencing what it's like to use a screen reader and text to speech (TTS). Here's a shorter article with links and resources to get you started. We'll go over the built-in text to speech in MacOS and Windows 10 and 11, the read aloud and focus reader in the Edge browser, and give you some resources to try out the open source, free NVDA screen reader."
layout: ../../layouts/BlogPostLayout.astro
category: a11y
draft: "false"
---
During my online tech talk on Monday I was asked about how developers could go about experiencing what it's like to use a screen reader and text to speech (TTS). So here's a guide with links and resources to get you started. We'll go over the built-in text to speech in MacOS and Windows 10 and 11, the read aloud and immersive reader in the Edge browser, and give you some resources to try out the open source, free NVDA screen reader. 

<h2 id="#contents">Contents</h2>

1. <a href="#introduction">Introduction</a>
2. <a href="#mac-os">MacOS Text-to Speech</a>
3. <a href="#windows">Windows 10 and 11 Text to Speech</a>
4. <a href="#edge">Edge Browser</a>
5. <a href="#nvda">NVDA: Non-Visual Desktop Access</a>
6. <a href="#resources">Resources</a>


<h2 id="#introduction">Introduction</h2>

You may be wondering what the difference is between text to speech and screen readers. Text to speech is exactly that a computer reading the text on the screen to the user. With the rare exception, text to speech functionality includes automatic scrolling. Many can also highlight the sentence, paragraph, and/or the word being read. Screen readers have much more functionality than text to speech. They read alt text of images, and allow users to navigate web pages applications and operating systems.

Text to speech is useful for a wide range of people: 

- Those with low vision who can still use a mouse and prefer to do so, 
- People with dyslexia or other reading based disabilities. This includes ADHD as the focus issues that come with ADHD can affect reading.
- Busy people (e.g. developers!) who want to do housework, workout, or other tasks while reading.
- Those who learn best while listening
- People who enjoy doing crafts such as knitting and/or need to fidget while learning. 
- People with an injury that limits them from interacting with the mouse or pointer. For example, sore wrists from coding all day, sprained wrists or fingers, broken bones. 

Screen readers and are used by people who:
- Are blind or low vision
	- Some blind or low vision people use refreshable braille displays allowing them to read instead of listen. 
	- Refreshable braille displays have pins that pop up or down to display braille letters and words. I'm working on another article about braille and refreshable braille displays. But if you'd like to learn more now, this [article by the American Federation for the Blind](https://www.afb.org/node/16207/refreshable-braille-displays) has more information about refreshable braille displays.
- Cannot use a mouse pointer

Two screen readers dominate the market: 

1. NVDA - "Non-Visual Desktop Access"
2. JAWS  - "Job Access With Speech"
   
NVDA is free and open source, so that's the one we're using here.

MacOS, Windows, iOS, and Android have other built in accessibility features, including the MacOS and iOS VoiceOver screen reader. However, we'll be keeping things simple and focusing on desktop OS and applications: three built in text to speech options, and the most popular free and open source screen reader.

Developers will also want to check out the <a href="#resources">Resources</a> section at the bottom, and try out a free trial of [Assistiv Labs](https://assistivlabs.com/) remote accessibility testing. *"Assistiv Labs remotely connects you to real assistive technologies, like NVDA, JAWS, and Windows High Contrast Mode, using any modern web browser."*

### Note: Applications Need to be Coded for Accessibility for Assistive Technology to Work!

Text to speech will not work on websites that use images of text, instead of actual text - like the code blocks on HackerRank or other DSA technical interview prep platforms. If you have a Hackerrank, Leetcode, AdaFace, or other DSA platform account login and try using MacOS text to speech to read any challenge. You'll notice it skips over reading variables and other essential information. 

This isn't a limitation of text to speech. It's an accessibility fail of the websites, not of the assistive technology. There's also no alt text. Don't write applications like this. It's a class action lawsuit waiting to happen. There's also numerous other reasons to not write inaccessible applications - but if you're reading this article you likely want to make your apps accessible. `< /rant>`

<h2 id="mac-os">MacOS Text to Speech</h2>

MacOS has built in text to speech, as well as the VoiceOver screen reader. We're going to turn on just the text to speech. 

**To enable text to speech on MacOS:**
1. Go to "Settings" > "Accessibility" > "Spoken Content"
2. Go to "Speak selection" and switch the toggle on
3. Click on the "i" on the right.
4. A small window will pop up with more options:
	1. The default short-cut is "Option + Escape"
	2. Click on "highlight content"
		1. Choose "words and sentences"
	3. In "Sentence style" choose the "background colour" radio button
5. Click "Ok"

Text to speech is now enabled with the default system voice, reading speed, and your default system language. It will highlight sentences and the individual words it's reading.

**To hear a sample of the default voice and reading speed:**
1. Go to the main "Spoken Content" menu.
2. Click play sample.

**To change the voice, and/or reading speed:**
1. Go to "System voice" and click on the name near the double up down arrows.
2. Scroll down and select a new voice. 
	1. For humours sake we're going to first try out "Bruce" under "English (U.S.)".
	2. Click outside the list of voices or press escape.
	3. Now click "play sample"
	4. Bruce will say "I sure like playing inside this fancy computer." in a very robot sounding voice. 
		1. _Don't worry, Bruce is an exception to the voice quality!_ 
		2. He's just a funny option that made my students laugh.
	5. Try changing the speaking rate by moving the slider towards the rabbit or turtle icon.
3. To choose a much nicer voice than Bruce:
	1. Navigate back to the list of voices
	2. Find your country or region
	3. Choose an enhanced version of a voice
	4. Repeat the process of going back up to change the speech rate.

To use MacOS text to speech:

1. Using any browser except Edge, go to a web page of your choice. 
	1. For simplicity try navigating to the A11y Study Group's <a href="https://www.a11ystudygroup.com" rel="noopener noreferrer" target="_blank">Accessible Websites Project homepage</a>
2. Press "Option and Esc"
3. Wait for a few seconds
4. Reading will start at the first paragraph.

MacOS text to speech will also work in (most) PDFs and VS Code. It will not work in Microsoft desktop applications such as MS Word. 

<h2 id="windows">Windows 10 and 11 Text to Speech</h2>

When I first started using assistive technology with my former students in 2012, Apple had the best built in accessibility. This included a wide range of human sounding voices for text to speech. At the time Windows voices were robotic and annoying. However, that's changed as Microsoft ramped up its accessibility efforts. Now Windows accessibility surpassed MacOS. Also, as you'll see in the next section the Edge browser has some really great text to speech and reading features.


"Narrator" is Windows text to speech. It has more features than Apple's spoken content, including being able to be used with refreshable braille displays. As Microsoft has an easy to follow [Complete guide to Narrator - Microsoft Support](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) we'll just cover turning Narrator on.

To turn Narrator on:

1. Press Windows logo key + Ctrl + N
2. This will open Narrator setting menu. 
3. Toggle on "Use Narrator".

To use Narrator:

1. Press "Windows logo key" + "Ctrl "+ "Enter".
2. This both starts and stops Narrator.

<h2 id="edge">Edge Browser</h2>

Edge has two built in functions that I use everyday: 
1. Read aloud: text to speech
2. Immersive reader: shows only the text on the screen and can be used with or without read aloud


I find these especially useful when I'm studying for my Microsoft certified AI Engineer exam, and reading long articles.

To turn on read aloud:
1. Go to the address bar on Edge
2. Click on the capital "A" with the round lines over it.
3. The page will start to be read aloud

To turn on immersive reader:

1. Go to the address bar on Edge
2. On the far right of the address bar click on the open book with the speaker icon on it.
3. Immersive reader is now on. You have several options on the toolbar:
	1. Read aloud - activates text to speech
	2. Text preferences - you can change the font and theme of immersive reader
	3. Reading preferences - you can turn on focusing on 1, 2, or 3 lines of text at a time, and translation
4. To turn off immersive reader click on the open book with the speaker icon on it again.


To change voices in read aloud.
1. Turn on read aloud. You can have immersive reader turned on or turned off.
2. Go to "Voice options" on the right side of the toolbar. 
3. Change the reading speed or voice.
	1. Note: Immersive reader is the only text to speech I've seen that has New Zealand English voices. So it's become my favourite text to speech.

Note: If you're using read aloud and navigate to the next page in a series of pages, the speech may continue from the location you finished at on the first page. Just refresh the page. This happens on websites such as Microsoft Learn.

<h2 id="nvda">NVDA: Non-Visual Desktop Access Screen Reader</h2>

NVDA is a full featured screen reader for Windows PCs. It allows blind and low vision users to access and interact with WindowsOS and both built in and some 3rd party applications. NVDA can be and is entire sets of courses, especially when you get into testing applications NVDA and fixing the code so things are more accessible. So this section is more of a list of resources to get other developers started. 

A full list of features is is listed in the  [NV Access | About NVDA](https://www.nvaccess.org/about-nvda/) page. Unlike text to speech in MacOS, Windows, or Edge, NVDA allows users to install it on a USB thumb drive and use with any computer. It can announce text formatting such as size and bold, supports refreshable braille displays including ones that input braille. NVDA also has a talking installer - something essential for blind and low vision users to install it independently.

**Tip: Make sure you have at least a couple or hours to half a day to get started! Using a screen reader is a steep learning curve, but well worth it.**

You can [download NVDA](https://www.nvaccess.org/download/) for free. Follow the [NVDA 2023.3.2 User Guide (nvaccess.org)](https://www.nvaccess.org/files/nvda/documentation/userGuide.html?) to get started setting up NVDA and learning how to use it.

I believe in not reinventing the wheel. So here's a well done video by Matt Isner, a JavaScript developer from [Deque Systems: Web Accessibility Software, Services & Training](https://www.deque.com/) on [Accessibility Testing with the NVDA Screenreader](https://youtu.be/Vx1vSd5uYS8?si=65RcHOSA99nnW5cZ) focused on developers. Though it's from 2016, it's still relevant. 

<iframe width="320" height="180" src="https://www.youtube.com/embed/Vx1vSd5uYS8?si=qQoizMiwaKMKASLC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



<h2 id="#resources">Resources</h2>

Here's a list of more resources to get you started with screen readers, text to speech, coding accessible components, accessibility testing and learning more about web accessibility (a11y).

1. [WebAIM: Screen Reader User Survey #9 Results](https://webaim.org/projects/screenreadersurvey9)
2. [NVDA GitHub repo](https://github.com/nvaccess/nvda/)
3. [Web Content Accessibility Guidelines (WCAG)2.2](https://www.w3.org/TR/WCAG22/)
4. [Fable blog](https://makeitfable.com/accessibility-resources/)
	1. "Fable shares in-depth articles on accessibility and usability informed by both technical expertise and the lived experience of people with disabilities."
5. [Fable blog: JAWS (Job Access With Speech) defined](https://makeitfable.com/glossary-term/jaws-job-access-with-speech/#:~:text=JAWS%2C%20an%20acronym%20for%20Job,and%20efficient%20for%20blind%20users.)
6. [Fable: # Assistive Technology Glossary](https://makeitfable.com/glossary/)
7. [Deque: AxeCon 2024 accessibility conference](https://www.deque.com/axe-con/)
8. [Deque: Blog](https://www.deque.com/blog/)
9. [Deque: Accessibility Webinars](https://www.deque.com/resources/type/webinars/)
10. [Deque: Accessible Components Library](https://cauldron.dequelabs.com/)
11. [Assistiv Labs](https://assistivlabs.com/) remote accessibility testing
12. [Assistiv Labs: Free trial signup page ](https://assistivlabs.com/sign-up)