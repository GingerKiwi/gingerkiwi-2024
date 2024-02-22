---
layout: ../../layouts/BlogPostLayout.astro
title: Resources from Quick Accessibility Tips for Devs Tech Talk
date: 2024-02-21
tags:
  - code
  - design
  - tools
  - tips
  - a11y
description: This is a list of resources to accompany my tech talk "Quick Accessibility Tips for Devs".  It includes extensive "Disability 101" resources, as well as developer specific coding resources.
image: /images/covers/03_A11y_CodingTips_1200x630.png
imageAlt: "Rectangular graphic with hot pink and orange text on a black background. The top text says A11y Coding Tips for Devs. Then there's a row of emojis with plus signs between them: happy cat face + cup of coffee + laptop _ active wheelchair user symbol. The bottom text says With Cat and Coffee themed code examples! in orange text. Underneath in a rectangle with with a thick white border and rounded corners is the text www.gingerkiwi.dev in an orange to pink gradient text"
category: a11y
draft: "false"
---

This is a list of resources to accompany my tech talk "Quick Accessibility Tips for Devs". It includes extensive "Disability 101" resources, as well as developer specific coding resources.

## Contents

1. <a href="#disability-101">Disability 101</a>
	1. <a href="#disability-culture">Disability Culture</a>
	2. <a href="#disability-isnt-bad">Disability Isn't a Bad Word</a>
	3. <a href="#disability-fluid">Disability Is Fluid not Static</a>
	4. <a href="#inspiration-porn">Inspiration Porn</a>
	5. <a href="#deaf-deafblind">Deaf/deaf, and DeafBlind</a>
	7. <a href="#neurodivergent">Neurodivergent</a>
	8. <a href="#disability-isnt-bad">Disability Isn't a Bad Word</a>
	9. <a href="#braille">Braille</a>
	10. <a href="#service-dogs">Service Dogs</a>
2. <a href="#a11y-principals">Accessibility Principals</a>
3. <a href="#wcag">WCAG: Web Content Accessibility Guidelines</a>
4. <a href="#aria">ARIA</a>
5. <a href="#overlays">Accessibility Overlays - Don't Use Them!</a>
6. <a href="#assistive-tech">Assistive Technology</a>
	1. <a href="#refreshable-braille-displays">Refreshable Braille Displays</a>
	2. <a href="#low-vision-blind-tech">Low Vision and Blind Tech Use</a>
	4. <a href="#mobility-assistive-tech">Mobility and Assistive Technology</a>
	5. <a href="#disabilities-prefering-reduced-motion">Disabilities Preferring Reduced Motion</a>
7. <a href="#code-resources-for-devs">A11y Code Resources for Devs</a>
	1. <a href="#general-a11y-code-resources">General and Comprehensive Coding Resources</a> 
	2. <a href="#prefers-reduced-motion">Prefers Reduced Motion - Accessible Animations</a> 
	3. <a href="#keyboard-a11y">Keyboard Accessibility</a> 
	4. <a href="#skip-nav">Skip Navigation / Skip to Main Content</a>  
	5. <a href="#neurodiverse-code">Neurodiversity Code Resources</a>  
8. <a href="#a11y-dev-tools-dev-resources">A11y Dev Tools and Dev Specific Resources</a>
9. <a href="#companies-to-follow">Accessibility Companies and Organizations to Follow</a>
10. <a href="#a11y-courses-cert">A11y Courses and Certification Resources</a>


___
<h2 id="disability-101">Disability 101</h2>


audi-nissen-u1CAj5HJzO4-unsplash.jpg

![womens wheelchair basketball. primarily decorative image](/images/audi-nissen-u1CAj5HJzO4-unsplash.jpg)
<h3 id="disability-culture">Disability Culture</h3>

Culture includes the shared ways of life, customs, and beliefs of a particular group of people at at particular time. Many disabled people have shared experiences living with disability and confronting ableism and inaccessible environments on a daily basis. Also, many of us feel the connection to the history of the disability rights movement. It's important to remember that not every disabled person is the same, nor has the same views! Disability is part of the diversity of humankind. 

[Disability vs. The Apocalypse with Jessica Kellgren-Fozard](https://youtu.be/g7qNyf3qcpg?si=0AeyOa5O5fMig1b-) 
- [Hannah Witton](https://www.youtube.com/@hannahwitton)
- 11:57
<iframe width="350" height="197" src="https://www.youtube.com/embed/g7qNyf3qcpg?si=r65wi9IjI3yOuCt6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[3 Ways Disability Culture Has Been Changing](https://www.forbes.com/sites/andrewpulrang/2021/09/23/3-ways-disability-culture-has-been-changing/?sh=26d65f335955)
- Forbes.com
- [Andrew Pulrang](https://www.forbes.com/sites/andrewpulrang/?sh=cd920634e257)
- Sep 23, 2021,01:10pm EDT

[Crip Camp -the movie](https://youtu.be/OFS8SpwioZ4?si=mWlDz6LxVFgDWHI-) 
- 1hr:46min  
- 2021 Oscar-nominated film.
- On the heels of Woodstock, a group of teen campers are inspired to join the fight for disability civil rights. This spirited look at grassroots activism is executive produced by President Barack Obama and Michelle Obama.

<iframe width="350" height="197" src="https://www.youtube.com/embed/XRrIs22plz0?si=Qq7HIGBZ53H1F2tS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


[Am I Disabled Enough? // ft. Hannah Witton](https://youtu.be/YorlAb3q_hs?si=UMY91SZX_nRlDgY5)
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset)
- 16:34

[Disability Social History Project – Disability History, Culture, Art, and Media](https://disabilityhistory.org/)
- Website
- Strong American focused project, with attention paid to Black disabled American culture and history.
	- The intersectionality of disability with race is an often overlooked topic in disability rights, culture, and history. 
- The [resources page](https://disabilityhistory.org/resources/) has an extensive list of resources on disability history and culture in multiple formats.
#### Deaf Culture

Deaf culture is one of the strongest, and the most referred to examples of disability culture as there is also a shared language between Deaf people who use the same sign language (e.g. American Sign Language, AusLang - Australian Sign Language, BSL - British Sign Language). There is a dedicated section below for Deaf culture.

[Marlee Matlin on Cochlear Implants and Deaf Culture](https://youtu.be/S2Dqvd1Zk3M?si=klSxYRlBG7cl3sjH) 
- World Science Festival 
- 3:07
<iframe width="350" height="197" src="https://www.youtube.com/embed/S2Dqvd1Zk3M?si=gV_wal_R-wiyXXPL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[What is the difference between deaf and Deaf?](https://signhealth.org.uk/resources/learn-about-deafness/deaf-or-deaf/) 
- Article
- Sign Health UK

[Deaf culture | Canadian Hearing Services (chs.ca)](https://www.chs.ca/deaf-culture)
- [Canadian Hearing Services](https://chs.ca)
- Very short article with definitions


[What is Black American Sign Language?](https://youtu.be/yidM5HSPFAs?si=uAM7YsNL1_GX37s-)
- [The Language & Life Project](https://www.youtube.com/@TheLanguageLifeProject)
- 1:27

[13 Things My Hearing Friends Should Know](https://youtu.be/xQFuL2KYRdc?si=lBl0dP1Ohhr8j9MK) International Week of the Deaf CC  
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset) 
- 8:16. 
- Jessica is signing in BSL (British Sign Language)

[Deaf vs Hard of Hearing - What's the Difference?](https://youtu.be/aHHF27d3JAs?si=xBkrqnbSTh_9o0Py) 
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset) 
- 6:06

#### Spoonie Culture

Many disabled, neurodiverse, and/or chronically ill people also identify as "spoonies" - those that have to ration their energy throughout the day. The term "Spoonie" comes from [The Spoon Theory](https://butyoudontlooksick.com/articles/written-by-christine/the-spoon-theory/) by author and activist Christine Miserandino who used spoons while at a diner with her friend to answer her friend's question on what it is like to live with Lupus.

[Spoon Theory](https://www.youtube.com/shorts/Z4uQ3_EB6kk)
- [Lucy Edwards](https://www.youtube.com/@lucyedwards)
- YouTube short

[What Is A Spoonie? // The Spoon Theory](https://youtu.be/a2NGaG8mhjU?si=_yb2t0g8QQZrqZtB) 
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset) 
- 11:42 
- Uses the Sims to explain Spoon Theory!

<iframe width="350" height="197" src="https://www.youtube.com/embed/a2NGaG8mhjU?si=LTQxh_NLR2-VSA-F&amp;start=261" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Ehlers-Danlos Syndrome - Zebra Culture

Many of us with one of the 13 forms of Ehlers Danlos Syndrome or Hypermobile Spectrum disorder also have a strong disability culture because of the extremely long time to diagnosis (average of 10-12 years), prevalence of medical PTSD and medical gaslighting, the fluctuating nature of EDS symptoms (somedays it's visible, some days our EDS is invisible), and the use of the Zebra as our mascot and name for ourselves. See the article and video below about EDS and Zebras. Also 90% of people with EDS are biologically female, so there's the shared experience of women dealing with the medical field, and also wanting mobility aids to be fashionable and not boring beige.

[Why the Zebra?](https://www.ehlers-danlos.com/why-the-zebra/)
- People with the Ehlers-Danlos syndromes (EDS) and hypermobility spectrum disorders (HSD) often identify themselves as zebras.
- [The Ehlers-Danlos Society](https://www.ehlers-danlos.com/)
- Article

[We Are Zebra Strong]( https://youtu.be/AdY6btr4zyk?si=jEAnhKTyvEkvZ9kp)
- [Chronically Jenni](https://www.youtube.com/@ChronicallyJenni)
- 2:25

[Where does the EDS Zebra Come From?](https://youtu.be/AWs2qloeg_s?si=Ih05EnjnFxmhLDLh)
- [Ehlers Danlos and I](https://www.youtube.com/@ehlersdanlosandi)
- 1:59

<iframe width="350" height="197" src="https://www.youtube.com/embed/AWs2qloeg_s?si=YW4_yYZo31d800rP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

['I got online hate for not being disabled enough'](https://youtu.be/u2NOeP2vxwE?si=2jXjM_uvgPOgyQq7) 
- Sky News UK
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset)
- Note: Like many people with Ehlers-Danlos Syndrome it took years for Jessica to be correctly diagnosed. She didn't have her EDS diagnosis at the time of this video.

[Living with Hypermobile Ehlers Danlos Syndrome + Our Mobility Aids ft. Martina](https://youtu.be/JlUJ1fLPxnU?si=D5eLcP_jNI9vT5xd)
- [Annika Victoria](https://www.youtube.com/@AnnikaVictoria24)
- 17:56

#### CODA - Child of Deaf Adults

A CODA is a Child of Deaf Adults. About 90% of children of Deaf adults are hearing. They navigate the hearing and Deaf cultures and languages. They often don't identify with either the Deaf or the hearing community as they sign with their families and talk with the outside hearing world. Some report their experiences are akin to second generation immigrant children.

[Deaf Parents Explain the Meaning of CODA](https://www.parents.com/parenting/dynamics/coda-deaf-parents-raising-a-hearing-child/)  
- [Samantha Lande](https://www.parents.com/author/samantha-lande/) 
- Updated on February 27, 2023 
- Parents Magazine. 
- Article with embedded video (6:46)

[ASL Teacher Breaks Down CODA Movie](https://youtu.be/3j3eP-fJUAw?si=QoS_ZxDSzDjuRLZt) 
- [Learn How to Sign](https://www.youtube.com/@LearnHowtoSign)
- 12:49
<iframe width="350" height="197" src="https://www.youtube.com/embed/3j3eP-fJUAw?si=F3i-IsSWUzAxTKp_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Improving Deaf Representation In Hollywood](https://youtu.be/LFXhHMq_f-g?si=QBlPcAWv8mxeQtBT) Is A Lifelong Mission For "CODA" Star Marlee Matlin. 
- The Late Show with Stephen Colbert 
- 6:00

<h3 id="disability-isnt-bad">Disability Isn't a Bad Word</h3>

Disability and disabled are neutral adjectives used to describe people - just like red hair, tall, freckled are. However, there's been a move by non-disabled people to remove the words disabled and disability from everyday discourse because wider society sees these words as negatives. They are not.

[“I don’t even think of you as disabled!”](https://youtu.be/evj4RJDr-JI?si=FY45JE4xmMV2l4MQ) 
-  [Footless Jo](https://www.youtube.com/@FootlessJo)
- 9:22
<iframe width="350" height="197" src="https://www.youtube.com/embed/evj4RJDr-JI?si=q3X6n4BTU29rEXm7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Disability is not negative](https://youtube.com/shorts/UU8O7EEb4n0?si=zvz01N4Tir5FVbn_) 
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset)
- YouTube short

[“Disabled” isn't what you think it is](https://youtube.com/shorts/OkPGy2nL7zE?si=c5VwrhN8iVLsg27w) 
- [Footless Jo](https://www.youtube.com/@FootlessJo)
- YouTube short

[‘Disabled’ is not a bad word. Stop telling people with disabilities it is](https://www.irishtimes.com/life-and-style/health-family/disabled-is-not-a-bad-word-stop-telling-people-with-disabilities-it-is-1.4857377) 
- Sacha Dekker
- The Irish Times 
- Tue Apr 26 2022 

<h3 id="disability-fluid">Disability is Fluid, not Static</h3>

Disability symptoms and the required assistive tech, mobility and other aids, vary day to day, hour to hour and in different environments. 

[Ambulatory Wheelchair Users Exist!](https://youtu.be/tOpkLv1bobw?si=jZNrflaKZqMwk66D) Why I use a wheelchair when I can walk! wheelchair = giving up? 
- [Elinor Brown](https://www.youtube.com/@ElinorBrown)
- 17:14

[My Mobility Aids as an Ambulatory Wheelchair User](https://youtu.be/yfMv78kqE00?si=iu_M0RIKUsdYdlAo)
- [Stela Sulzdorf](https://www.youtube.com/@stelasulzdorf)
- 17:40

[Spoon theory: What it is and how I use it to manage chronic illness](https://www.washingtonpost.com/wellness/2023/01/14/spoon-theory-chronic-illness-spoonie/#) 
- Perspective by Fortesa Latifi 
- The Washington Post 
- January 14, 2023 at 6:00 a.m. EST

[The Spoon Theory written by and spoken by Christine Miserandino](https://youtu.be/jn5IBsm49Rk?si=Sj4vttd0J2rhF1Hm) 
- [Christine Miserandino](https://www.youtube.com/@ChristineMiserandino)
- 13:33

[The Spoon Theory](https://butyoudontlooksick.com/articles/written-by-christine/the-spoon-theory/) 
- The original Spoon Theory article by Christine Miserandino

<h3 id="inspiration-porn">Inspiration Porn</h3>

> Inspiration Porn is the term used to classify the portayal of people with disabilities as inspirational solely or in part on the basis of their disability.
> ~ Stella Young

Inspiration porn is the objectification of disabled people for the benefit of able bodied people.

[Inspiration porn and the objectification of disability: ](https://youtu.be/SxrS7-I_sMQ?si=S2Di1vBeo_A-D-kp) 
- Stella Young at TEDxSydney 2014
- 9:26
- Highly recommended. 
- This is one of the most referred to talks on inspiration porn. 
<iframe width="350" height="197" src="https://www.youtube.com/embed/SxrS7-I_sMQ?si=PbfeSCLs5Rhimp42" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Can We Stop Saying People With Disabilities Are Inspirational?](https://youtu.be/n1v5LLI10LQ?si=gOBPPtHd8fNPNwOV) 
- [BBC Three](https://www.youtube.com/@bbcthree)
- 1:20

[Inspiration P-rn: Oscar Bait!](https://youtu.be/WxefTlluqMM?si=wslPN-mmToDzZcMV)  
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset) 
- 37:36

<h3 id="deaf-deafblind">Deaf/deaf, Deaf culture, and DeafBlind</h3>

You will see many people in the disability and Deaf/deaf communities using both "Deaf" with a capital "D" and deaf with a lowercase d. Capitalized Deaf refers to members of the Deaf culture who use a sign language to communicate.

Lower case "deaf" refers to the medical condition of being deaf. 

"Hard of hearing" refers to people with some hearing loss and/or tinnitus (ringing in the ears) that gets in the way of hearing clearly in some or all environments.

[I'll Scream Later | Marlee Matlin | Talks at Google](https://youtu.be/KrQmBKPCBMg?si=3Bz1pYP7ftF2Z6--) 
- 39:47
- Marlee Matlin
#### Communicating with Deaf/deaf and Hard of Hearing People

If you're a hearing person without experience with Deaf/deaf and Hard of Hearing people here are some resources to help you communicate with Deaf/deaf and Hard of Hearing people.

[25 ASL Signs You Need to Know](https://youtu.be/0FcwzMq4iWg?si=lCCiBxLQHZ3nGBoD)  | ASL Basics | American Sign Language for Beginners. 
- [Learn How to Sign](https://www.youtube.com/@LearnHowtoSign)
- 6:33

<iframe width="350" height="197" src="https://www.youtube.com/embed/0FcwzMq4iWg?si=Oz6BmDsCvbxfSlaO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Cardzilla app](http://www.cardzilla.ws) 
- Text to speech and typing in large text. 
- Designed by and for the Deaf community for use with hearing people that don't know sign language. Free 
- Because the text automatically resizes to fill the screen, Cardzilla decreases the need to hand your phone to other people to read.
- Also very good to have at loud events such as developer conference after parties!

[Things Not To Say To A Deaf Person](https://youtu.be/SarMSwv_aHI?si=2w1jvDphWlJIobLh) 
- BBC Three
- 5:58

<iframe width="350" height="197" src="https://www.youtube.com/embed/SarMSwv_aHI?si=quBVezIrQvybUt-m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Dos and Don'ts of Interacting with the Deaf Community](https://youtu.be/pDA_EXFTpxo?si=_YVTr5O4Vd2sbJMq) 
- [Crissy Marshall](https://www.youtube.com/@ChrissyMarshall_)
- _Turn on closed captions!_ Crissy only uses ASL (American Sign Language)
- 7:02

[Sign Language Myth Busters -Meeting a Deaf Person](https://youtu.be/--57W_bo6Rw?si=9gKijNfQ_HEGT8cA) 
- [Merge NZ](https://www.youtube.com/@mergenz5157) - New Zealand Sign Language
- 3:36

[Learn How to Sign - ASL](https://www.youtube.com/@LearnHowtoSign)
- YouTube channel dedicated to teaching ASL American Sign Language

#### Deaf Culture

[Lesser-known things about deafness](https://www.bbc.com/news/blogs-ouch-28658895) 
- Article
- Charlie Swinbourne 
- BBC 
- 6 August 2014

[The Limping Chicken](https://limpingchicken.com) 
- "The world's most popular deaf blog! Laying eggs since 2012" 
- Charlie Swinbourne 

[ASL Grammar and the Deaf Community](https://www.youtube.com/watch?v=dvpqNA8jJ6o)
- [Rogan Shannon](https://www.youtube.com/@RoganShannon13)
- 6:29
- _Turn on closed captions!_ Video is in American Sign Lanuage.

['Am I Deaf Enough?' Short Documentary Film](https://youtu.be/zMQQzY5eGvc?si=BWEEZmWXkh22WTjw)
- [Leah Byrne](https://www.youtube.com/@leahbyrne3104)
- 16:38
- A documentary following a journey to self-acceptance. 
- In collaboration with CDM Dublin & TU Dublin University
- [Leah Byrne on LinkedIn](www.linkedin.com/in/leahbyrne12)

#### DeafBlind

[My braille computer died. It’s more difficult than you think](https://youtu.be/J2sjWbQYajg?si=VJ120Fja5OXYlR9R) 
- [Haben Girma](https://www.youtube.com/@haben_girma) 
- 7:36

<iframe width="350" height="197" src="https://www.youtube.com/embed/J2sjWbQYajg?si=Ubt3fFcCbPFFFIf7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[DeafBlind people are creating a new language](https://youtu.be/ney1gZ1iN_k?si=pX4yvvkNAehjHJ3K) | 
- American Masters | PBS 
- 17:59

[Deaf, Blind and Awkward // Helen Keller](https://youtu.be/uhgpcvwtes8?si=kt4i0N4n-LZrzGxN)
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset) 
- 17:34

[Meet the Deaf-Blind Lawyer Fighting For People With Disabilities](https://youtu.be/Nh1oxkdI7KA?si=Byn19jW117EbsHQ4)
- [PopSugar](['Selling the OC' Cast Reveals What Reality TV Won’t Show You | POPSUGAR (youtube.com)](https://www.youtube.com/@POPSUGAR)) 
- 4:52

[An interview with Haben Girma](https://youtu.be/MOw8CgbFiuY?si=C0cAev1TbbLS8He3), 
- the first deaf-blind person to graduate from Harvard Law - New Day NW.  
- KING 5 Seattle 
- 12:08 
- Shows Haben using her braille computer and translator

#### Hard of Hearing and Tinnitus

People who are hard of hearing and/or have tinnitus (ringing in the ears), often use technology differently than those that are Deaf/deaf.

[What is Tinnitus and How is it Treated?](https://www.chs.ca/blog/what-tinnitus-and-how-it-treated)
- [Canadian Hearing Services](chs.ca)

[8 Facts About Hearing Disabilities and Web Accessibility](https://www.boia.org/blog/8-facts-about-hearing-disabilities-and-web-accessibility)
- [Bureau of Internet Accessibility)](https://www.boia.org/)
- Article
<h3 id="neurodivergent">Neurodivergent</h3>

Neurodivergent refers to people with Autism, ADHD, post traumatic stress disorder (PTSD), and learning disabilities such as dyslexia, dysgraphia, and dyscalculia. It is a non-medical umbrella term referring to people who's brains work and/or are structured differently than "neurotypical" brains. 

[What Exactly is Neurodiversity?]( https://youtu.be/ALJ3CFRRZpo?si=eqX3X1hBUD0NxMfX)
- Jessica from [How to ADHD](https://www.youtube.com/@HowtoADHD) 
- 6:03
- Note: 
	- Research provided by: Farah Mahmud, M.S. Doctoral Candidate, Clinical Psychology 
	- Research consultant: Dr. Patrick LaCount

<iframe width="350" height="197" src="https://www.youtube.com/embed/ALJ3CFRRZpo?si=mCmp3FJ_GJAjjbUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[What is ADHD?](https://youtu.be/xMWtGozn5jU?si=53ndR9PxNz30WsFb) 
- Jessica from [How to ADHD](https://www.youtube.com/@HowtoADHD) 
- 3:27

[Demystifying autism and overstimulation](https://youtu.be/-1aTVfKstrs?si=Ow1u3VOJPZOvp2G0) | Inside Our Autistic Minds
- BBC
- 4:14

[Tensions build between autism researchers and the autistic community](https://youtu.be/FbR3K4L2XnA?si=IR61jvkA3fnGthZJ) 
- BBC Newsnight
- 6:34

[Not Stimming is MORE dangerous than you think...](https://youtu.be/RTw-32j0vm0?si=4F4yETisvrpqE-WR)
- Meg from [I'm Autistic, Now What](https://www.youtube.com/@imautisticnowwhat)
- 26:58
[The Best Theory of Autism you've probably NEVER heard of...](https://youtu.be/3mBbOOzhoGQ?si=lNZWckFcwTE-DM5x)
-  Meg from [I'm Autistic, Now What](https://www.youtube.com/@imautisticnowwhat)
- 36:18

[I Have ADHD - "My Own Worst Enemy" Parody](https://youtu.be/0Cw51gLry_I?si=BhrOctqNHPRpG8fd)
- [Holderness Family Music](https://www.youtube.com/@theholdernessfamily)
- 4:58

[What it's like having Dyscalculia Dyslexia with numbers](https://youtube.com/shorts/0b--mYJg7EM?si=_f5IDQ4TYNogNT69)
- [Jeremy Andrew Davis](https://www.youtube.com/@jeremyandrewdavis)
- YouTube Short

[Dealing with app Accessibility](https://youtu.be/7-17TgfijLM?si=3ViXaiwaU28X4UXv)
- [Jeremy Andrew Davis](https://www.youtube.com/@jeremyandrewdavis)
- 2:28

<h3 id="braille">Braille</h3>

[TEACHING KARLIE KLOSS HOW TO READ BRAILLE!](https://youtu.be/uUEdjGTIB9Y?si=GrWdzIJSOPIDhROP)
- [Molly Burke](https://www.youtube.com/@MollyBurkeOfficial)
- 17:21
- Karlie is the founder of Kode With Klossy, a coding initiative that works to increase access to computer science education and opportunities for young women. She's also a supermodel and entrepreneur.
- This video is looks at learning braille just like you'd learn other coding languages.

<iframe width=width="350" height="197" src="https://www.youtube.com/embed/uUEdjGTIB9Y?si=aVUVGSZcnAX5y1ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Braille: What is it like to read without sight? – BBC REEL](https://youtu.be/_mzhn7InWDg?si=zk4qsXOS04WNm3Pf)
- [BBC Reel](https://www.youtube.com/@BBCReel)
- 6:22

[The incredible story of the boy who invented Braille](https://youtu.be/o9BOQ6IpTSE?si=FFYy652fCFe2cxhp)
- BBC Ideas
- 3:30

[Introducing LEGO Braille Bricks – Play with Braille](https://youtu.be/QLsP-qr_At8?si=2FTtLSPZuEQ_6cuR)
- Lego
- 4:12

[Lucy Edwards: Is it hard to learn braille?](https://youtube.com/shorts/S3q9DSEHYNY?si=Qgn9vOJK7H7iIyRm) 
- [Lucy Edwards](https://www.youtube.com/@lucyedwards)
- YouTube short

[Lucy Edwards: How do you type on a braille keyboard?](https://youtube.com/shorts/CoD9fMk2534?si=kupKfSyC45bT_NkG) 
- [Lucy Edwards](https://www.youtube.com/@lucyedwards)
- YouTube Short

[How To Read & Write Braille + The History of Braille!](https://youtu.be/a8AEkwtNEiM?si=ZsJe5bSXlAKbIjUX) 
- [Molly Burke](https://www.youtube.com/@MollyBurkeOfficial)
- 21:07min

[How the braille alphabet works](https://www.perkins.org/how-the-braille-alphabet-works/) 
- [Perkins School for the Blind](https://www.perkins.org/)
- Article with graphics

<h3 id="blind-low-vision">Blindness and Low Vision</h3>

[What can my blind husband see? (detailed simulation)](https://youtu.be/m--afD6HB88?si=e9LoqJCp_-7zvewt)
- [Mathew and Paul](https://www.youtube.com/@MatthewandPaulOfficial)
- 10:52

<iframe width="350" height="197" src="https://www.youtube.com/embed/m--afD6HB88?si=oTx27X9UZ7fUeD4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


[Stargardt Disease / Macular Degeneration - How I See](https://youtu.be/BWICh2sqxjs?si=yVOKUfAsLYtk_z4O)
- [The Blind Life](https://www.youtube.com/@theblindlife)
- 9:16

[Scent Of A Woman - "Are you blind?!"](https://youtu.be/gRnzkvU4nFA?si=TvtCRbWnzMsPKAgw)
- 0:47
- Shows how to do sighted guide

[How Blind People ... YouTube Playlist](https://www.youtube.com/playlist?list=PLf8y9uNTbO6lUx4yKJ2_IPN8TYCoK4UTE)
- [James Rath](https://www.youtube.com/@jamesrath)
- 23 Videos

[7 Benefits of a White Cane - Blind & Visually Impaired](https://youtu.be/7NTmBHLsI6w?si=cqSjlezG9M3eD9J5)
- [Blind on the Move](https://www.youtube.com/@Blindonthemove)
- 6:09
- Note: White canes are also called "long canes" as they now come in different colours (just like shoes and clothes!)

[How to use Siri on iPhone to Confirm and Check Location](https://youtu.be/RBHpPBrDxL0?si=_7zOYYgNWq6a0uI6)
- [Blind on the Move](https://www.youtube.com/@Blindonthemove)
- 2:58

[Eye Floaters and Flashes, Animation](https://youtu.be/2aadrXH6oic?si=LFqsGAfPnXl2X5q3)
- [Alila Medical Media](https://www.youtube.com/@Alilamedicalmedia)
- 3:17
- Can be caused by retinal detachment and holes.
- Note: I have these in my right eye after my retinal surgery. 
- It's the main reason I prefer dark mode, and one of the reasons I at times prefer reduced motion.

[What are those floaty things in your eye? - Michael Mauser](https://youtu.be/Y6e_m9iq-4Q?si=2UtNvyr2Ls3JQPys)
- TED-Ed
- 4:04

[A (Blind-Accessible) History of Blind Gaming](https://youtu.be/oKgN4va-gas?si=6o6OzGUImPc4T8bV)
- [Paper Will](https://www.youtube.com/@PaperWill)
- 16:41

[How Blind Gamers Play Nintendo Switch](https://www.youtube.com/watch?v=wZx63C60rRw)
- [James Rath](https://www.youtube.com/@jamesrath)
- 7:49


<h3 id="service-dogs">Service Dogs</h3>

[Realities of Working a Service Dog](https://youtu.be/pgV76N9comw?si=WVuAiWGMzYZSV5_g) 
- [DOGGY•U](https://www.youtube.com/@DoggyU)
- 10:01

[Breaking down Ontario’s service animal laws after violent dispute at Kitchener restaurant](https://toronto.citynews.ca/2021/11/12/service-dogs-animals-ontario-law/) 
- CityNews article with embedded video

[Guide Dog Legislation](https://www.cnib.ca/en/guide-dog-legislation?region=on) 
- CNIB Canadian National Institute for the Blind.
- Covers all 10 provinces and 3 territories

___
<h2 id="a11y-principals">Accessibility Principals: P.O.U.R.</h2>

![milk being poured from a glass bottle into a mason jar mug of coffee](/images/alberto-bogo-LpLGzfo1JjY-unsplash.jpg)

The four accessibility principals that WCAG is based on and that the majority of A11y professionals user are summed up by the acronym "P.O.U.R.":
- Perceivable, 
- Operable, 
- Understandable,
- Robust

[POUR: The 4 principles of accessibility](https://youtu.be/hs8sykCaf3E?si=kzLDAHvVkRSdNqVN)
- [Government Digital Service](https://www.youtube.com/@GovernmentDigitalService) UK
- 2:27

<iframe width="350" height="197" src="https://www.youtube.com/embed/hs8sykCaf3E?si=mJWHT4Oyz8zHI2-L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Accessibility Fundamentals Overview](https://www.w3.org/WAI/fundamentals/)
- WC3

City University of New York. Accessibility Toolkit for Open Educational Resources (OER): [Accessibility Principles](https://guides.cuny.edu/accessibility/whyitmatters)
- Article with links and embedded video

[Usability Guidelines for Accessible Web Design](https://media.nngroup.com/media/reports/free/Usability_Guidelines_for_Accessible_Web_Design.pdf) 
- Kara Pernice and Jakob Nielsen
- PDF report - 152 pages

[Keys To An Accessibility Mindset](https://www.smashingmagazine.com/2023/02/keys-accessibility-mindset/)
- [Daniel Yuschick](https://www.smashingmagazine.com/author/daniel-yuschick/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
- Feb 20, 2023
- Article - 14 min estimated read


___

<h2 id="wcag">WCAG: Web Content Accessibility Guidelines</h2>

https://www.w3.org/WAI/standards-guidelines/wcag/glance/

[A Roundup Of WCAG 2.2 Explainers](https://www.smashingmagazine.com/2023/10/roundup-wcag-explainers/)
- [Geoff Graham](https://www.smashingmagazine.com/author/geoff-graham/)
- [Smashing Magazine](https://www.smashingmagazine.com/
- Oct 20, 2023
- Article: estimated 6 min read

___

<h2 id="aria">ARIA</h2>

[ARIA Landmarks Example: WC3](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html)

https://benmyers.dev/blog/aria-labels-and-descriptions/

https://www.lullabot.com/articles/what-heck-aria-beginners-guide-aria-accessibility


___

<h2 id="overlays">Accessibility Overlays - Don't Use Them!</h2>

Accessibility overlays are website add-ons that claim to fix A11y issues. However, they are horrid for users of assistive technology, slow websites down, don't protect against lawsuits, plus a host of other issues.

[7 reasons accessibility overlays SUCK](https://youtu.be/l4E11IAN-8Q?si=20uHf1mkmEIo43OQ)
- [Silktide](https://www.youtube.com/@silktide)
- 3:02

[The Myth of Accessibility Overlays: Why They Are Not the Answer ](https://tammaninc.com/learn/overlay-myth/)
- Steve Levine
- [Home - Tamman Inc](https://tammaninc.com/)

[Should I use an accessibility overlay?](https://www.a11yproject.com/posts/should-i-use-an-accessibility-overlay/)
- [The A11Y Project](https://www.a11yproject.com/)
- March 8, 2021

___

<h2 id="assistive-tech">Assistive Technology</h2>

![Refreshable Braille Display connected to a black laptop:](/images/elizabeth-woolner-9xxNZCJZ8bA-unsplash.jpg)



[The Lows of High Tech](https://99percentinvisible.org/episode/the-lows-of-high-tech/)
- [99% Invisible](99percentinvisible.org)
- Podcast, article, with multiple embedded videos

<h3 id="refreshable-braille-displays">Refreshable Braille Displays</h3>

[Introducing Chameleon 20: YouTube Video](https://youtu.be/SlxIEPEC_Qc?si=07V0pPLsAY1ueSAZ) 
- A 20-Cell Refreshable Braille Display by APH 
- [American Printing House for the Blind](https://www.youtube.com/@AphOrg)
- 2:27

[An Introduction to the Focus 40 Blue Refreshable Braille Display](https://youtu.be/uA6RWbORCzQ?si=0qHzUDORpHxmBe7y)  
- [Challenge Solutions](https://www.youtube.com/@challengesolutions5236)
- 15:47
- Detailed video on how refreshable braille displays work.


<h3 id="low-vision-blind-tech">Low Vision and Blind - Assistive Tech</h3>

[How Blind People Use Technology](https://youtu.be/tTg8QT4NjvA?si=qVyWdTi9kOq5QsPM) (My Apple Products - An Introduction to Voice Over)
- [Unslightly Opinions](https://www.youtube.com/@UnsightlyOpinions)
- 14:41

<iframe width="350" height="197" src="https://www.youtube.com/embed/tTg8QT4NjvA?si=VgE2tgNdLOrQAGsr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Be My Eyes](https://youtu.be/6GRfFuWsjNU?si=zc0UzR3NdJvwKbSk)
- OG app - connecting blind and low vision people with sighted volunteers via smart phone video.
- [Be My Eyes](https://www.youtube.com/@bemyeyes)
- 1:35

[Be My Eyes - New AI](https://youtu.be/cUSeFnZGIzY?si=excwshR_vuhM2z1z) 
- How ChatGPT4 is helping visually impaired people picture what they can't see | 
- ITV News 
- Featuring Lucy Edwards
	- Note: Lucy and her husband are in the middle of home renovations

[How I Use My iPhone Legally Blind | A's Accessibility Tips #1](https://youtu.be/NQMPDVa0TNg?si=INHM_OtT5EJVsN_s) 
- [Alisha B](https://www.youtube.com/@alishainc) 
- 6:32

[How To: Work While Blind | Tech You Need](https://youtu.be/g0VRMai2Pm0?si=m6hiC98F4asCj6--) 
- [Alisha B](https://www.youtube.com/@alishainc) 
- 15:00

[RNIB Assistive aids and technology](https://www.rnib.org.uk/living-with-sight-loss/assistive-aids-and-technology/)
- Website - list of more resources

<h3 id="mobility-assistive-tech">Mobility and Assistive Technology</h3>

[Controlling a computer using a "mouth mouse"](https://youtu.be/D_Siea79t4M?si=zGWC64FGFIgU1jfh) 
- a "sip and puff" device

[Work Setup as a C5/C6 Quadriplegic](https://youtu.be/6X6CMhJh9T4?si=e2fEMFy2dLVPG_kf ) 
- Journey with the Fosters

[How I Move My Mouse with My Head](https://youtu.be/v2wuJPV3--E?si=_agYBHEYesUyVUli) 
- ALS 411

YouTube Playlist [Computer Control: Full Computer Access via Eye Gaze](https://youtube.com/playlist?list=PLs_sIekvATdzJduawcClIJsLuD8n4VECX&si=VnUfGtfodRFJd7lR) 
- 3 videos. 
- Total playtime under 30 minutes

[What's Wrong With My Hands?! | All About Ring Splints for EDS](https://youtu.be/2Y6BM-1tP4o?si=22AWSiYPODokIlDr) 
- Robin Hahn (hEDS)

<h3 id="disabilities-prefering-reduced-motion">Disabilities Preferring Reduced Motion: <br>Migraines, Dysautonomia, Epilepsy, Seizure Disorders, Vestibular Disorders, Chronic Fatigue/ME</h3>

There are many underlying reasons that users would prefer reduced or no motion on their sites and apps. Motion can trigger migraines and cause pain and discomfort for people experiencing a migraine. Note that migraines are not "bad headaches". They are a neurological condition that causes numerous symptoms including: "brain fog", pain, dizziness, light and/or sound sensitivity, nausea, blurred vision, and more.

Motion can trigger epilepsy and other seizure disorders. Though not as common as other disabilities, seizures can be life threatening so it's important to have an alternative to web animations.

Dysautonomia is the autonomic nervous system not working properly. There's many symptoms of dysautonomia, but the main ones developers should be concerned about is dizziness and vertigo. The vestibular system is responsible for balance and spatial orientation. Vestibular disorders cause people to be dizzy and in some cases vertigo.

[What is Dysautonomia?](https://youtu.be/TGB_cK0olRY?si=kph9DG7Rc7aHOyEo)
- [DINET - Dysautonomia Information Network](https://www.youtube.com/@DysautonomiaInformationNetwork)
- 3:24

[Web accessibility for seizures and physical reactions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Seizure_disorders)
- Mozilla Developer Network

[FOUR STAGES of a MIGRAINE ATTACK](https://youtu.be/oL-OjsXExUQ?si=rETnuWev-8AJqlhK) 
- Momming with Migraine 
- 13:22

[History of the Disability Pride Flag](https://www.weinberg.cuimc.columbia.edu/news/history-disability-pride-flag) 
- Colour contrast and migraines
- Article

[Day in the Life With POTS](https://youtu.be/cGr0qu_Yetw?si=WpiRjsvszbM8Pjzc) 
- Izzy K DNA 
- (POTS is postural orthostatic tachycardia syndrome - dysautonomia). 
- Izzy is a Board-Certified Cardiovascular Genetic Counselor. 
- She has hEDS, POTS (dysautonomia), and other common EDS comorbitities.

[I Filmed My Chronic Migraine](https://youtu.be/gUTeH7G8JAw?si=A6E2EWyyg54m-K6l) 
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset) 

[The Reality of Migraine:](https://youtu.be/KdTR7VbkQls?si=1qWW9U73paszM0pE) 
- RAW FOOTAGE & my Real Reaction to Seeing a Migraine for the First Time
- Jen from Momming with Migraine. 
	- (Yes, yet another woman with EDS, and dysautonomia / POTS)
- Note: Jen finally has a correct diagnosis (high cranial pressure). The symptoms are very similar to migraines, and she still has migraines.  This is one of the only videos out there showing someone going through a migraine.

[The Most Prevalent Illness You’ve Never Heard Of! // Severe ME/CFS](https://youtu.be/0lqZ8YchbdM?si=5Q9cNqBGepKeXlaD) 
- [Jessica Kellgren-Fozard](https://www.youtube.com/@jessicaoutofthecloset) 


___

## A11y Code Resources for Devs

Here are some dev specific resources to make your code more accessible. Almost all of the resources below are articles with code snippets.

<h3 id="general-a11y-code-resources">General / Comprehensive</h3>

[A Complete Guide To Accessible Front-End Components](https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/)
- [Vitaly Friedman](https://www.smashingmagazine.com/author/vitaly-friedman/)
- [Smashing Magazine](https://www.smashingmagazine.com
- Updated May 25, 2022

[Structuring Accessible Forms](https://racheleditullio.com/talks/accessible-forms)
- Rachele DiTullio
- Talk, video, blog post, codepen, GitHub repo
- Very comprehensive accessible forms resource
- Video from 2023 has live ASL and captions
- Cat themed!
- Covers:
	- Create and label form fields of different types
	- Group related form fields, like radio buttons
	- Mark form fields as required
	- Handle input errors
	- Verify data integrity
<iframe width="350" height="197" src="https://www.youtube.com/embed/hc_mWh4T2bE?si=AgE2y8LpGcvTmBBf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Development | Introduction to Accessibility](https://www.a11y-101.com/development)
- [A11y-101](a11y-101.com)
- Documentation collection with code snippets for different UI elements and front end functionality.
- All have code snippets and most have videos

[How to Build Accessible Vue.js Applications](https://dev.to/vuemastery/how-to-build-accessible-vuejs-applications-12nn)
- [Vue Mastery team - DEV Community](https://dev.to/vuemasteryteam)
- Dec 28, 2023
- [DEV Community](https://dev.to)

[The A11y Webring Club](https://a11y-webring.club)
- A web ring for digital accessibility professionals.
- Tons of coding resources. 
- This site is a member

<h3 id="prefers-reduced-motion">Prefers Reduced Motion - Accessible Animations</h3>

[Creating Accessible UI Animations](https://www.smashingmagazine.com/2023/11/creating-accessible-ui-animations/)
- [Oriana García](https://www.smashingmagazine.com/author/oriana-garcia/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
-  Nov 10, 2023

[What is Motion Sensitivity? How to Design Accessible Web Animations](https://dev.to/ilizette/what-is-motion-sensitivity-how-to-design-accessible-web-animations-5dej)
- [Elizabeth - DEV Community](https://dev.to/ilizette) (Not me. She's another Elizabeth)
- [DEV Community](https://dev.to)
- Feb 08, 2024
- Top post of the week at Dev.to

[Disable any animations in Angular by prefers-reduced-motion ](https://dev.to/misterion96/advanced-animation-in-angular-part-2-disable-any-animations-by-prefers-reduced-motion-5629)
- [Maksim Dolgih - DEV Community](https://dev.to/misterion96)
-  [DEV Community](https://dev.to)
- Jan 08, 2024

<h3 id="keyboard-a11y">Keyboard Accessibility</h3>

[A Guide To Keyboard Accessibility: HTML And CSS (Part 1)](https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/)
- [Cristian Díaz](https://www.smashingmagazine.com/author/cristian-diaz/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
- Nov 14, 2022
- Article - 28 min estimated read

[A Guide To Keyboard Accessibility: JavaScript (Part 2)](https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-javascript-part2/)
- [Cristian Díaz](https://www.smashingmagazine.com/author/cristian-diaz/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
- Nov 14, 2022
- Article - 28 min estimated read

[How to build an accessible navigation menu](https://dev.to/ilizette/how-to-build-an-accessible-navigation-menu-1omk)
- [Elizabeth - DEV Community](https://dev.to/ilizette) (Not me. She's another Elizabeth)
- [DEV Community](https://dev.to)

<h3 id="skip-nav">Skip Navigation / Skip to Main Content</h3>

[How-to: Use skip navigation links](https://www.a11yproject.com/posts/skip-nav-links/)
- [Cameron Cundiff](https://www.a11yproject.com/authors/#cameron-cundiff)
- [The A11Y Project](https://www.a11yproject.com/)

[Skip link | Introduction to Accessibility](https://www.a11y-101.com/development/skip-link)
- [A11y-101](a11y-101.com)
- Article with code snippets

[A11Y 101: Adding skip links](https://dev.to/dailydevtips1/a11y-101-adding-skip-links-425d)
- [Chris Bongers](https://dev.to/dailydevtips1)
- [DEV Community](https://dev.to)
- May 30, 2022

[How to Create a “Skip to Content” Link](https://css-tricks.com/how-to-create-a-skip-to-content-link/)
- [Paul Ryan](https://css-tricks.com/author/paulryan/) 
- Mar 17, 2020 (Updated on Aug 25, 2021)
- [CSS Tricks](https://css-tricks.com)

<h3 id="neurodiverse-code">Neurodiversity Code Resources</h3>

[Neurodiversity Design System](https://neurodiversity.design/)
- The NDS is a coherent set of standards and principles that combine neurodiversity and user experience design for Learning Management Systems. Design accessible learning interfaces to support success and achievement for everyone.
- Covers: 
	- Numbers, 
	- font, 
	- typography, 
	- colour, 
	- buttons, links, inputs
	- interface
	- communication
	- Animations

### ARIA Code Resources

[aria-label, aria-labelledby, and aria-describedby: What's the Difference?](https://benmyers.dev/blog/aria-labels-and-descriptions/)
- [Ben Myers](https://benmyers.dev/)
- Article with code snippets

[ARIA - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [Mozilla Developer Network](mozilla.org)

___

## A11y Dev Tools and Dev Specific Resources

[Axe VS Code A11y Linter](https://docs.deque.com/linter/4.0.0/en/linter-home)
- Deque.com

[Free trial of axe DevTools Pro | Deque Systems](https://www.deque.com/axe-devtools-accessibility-testing/?branded=&utm_term=deque%20fireeyes&utm_campaign=Search+-+axe+DevTools+-+Branded&utm_source=bing&utm_medium=ppc&hsa_src=o&hsa_ad=&hsa_tgt=kwd-82189107871899:loc-32&hsa_mt=p&hsa_ver=3&hsa_acc=7854167720&hsa_kw=deque%20fireeyes&hsa_grp=1315017054931810&hsa_cam=12428499999&hsa_net=adwords&msclkid=1bf23fcea7931f1e8ef75a18953adf1f&utm_content=axe%20DevTools)
- "Start testing your web app in just minutes. Join over 400k users and try the axe DevTools browser extension for free today."

[Assistiv Labs 14 Day Free Trial](https://assistivlabs.com/sign-up)
- "Instantly test how **accessible** your experience is with the real assistive technologies your disabled users rely on — screen readers, magnifiers, and more — from any computer."

[Lighthouse  |  Chrome for Developers](https://developer.chrome.com/docs/lighthouse)
- [Docs: Accessibility Audit](https://developer.chrome.com/docs/lighthouse/accessibility/scoring)

[Storybook.js.org](https://storybook.js.org/)
-  Frontend workshop for building UI components and pages in isolation.
- [A11y addon](https://storybook.js.org/addons/@storybook/addon-a11y/)
	- Helpful to make your UI components more accessible.
- [Accessibility tests • Storybook docs](https://storybook.js.org/docs/writing-tests/accessibility-testing)

[Cauldron React: Accessible Components Library](https://cauldron.dequelabs.com/)
- [Deque Systems](dequelabs.com)
- Open source
- "Friends don’t let friends ship inaccessible code! Cauldron is designed with accessibility in mind, including styles covering everything from typography to colors, and React components that are designed to be inclusive of all users. Additionally, Cauldron's React components are designed to include full screen reader and keyboard navigation support."

[WAVE](https://wave.webaim.org/)
- by [Web AIM](https://webaim.org/)
- "a suite of evaluation tools that helps authors make their web content more accessible"
- "can identify many accessibility and Web Content Accessibility Guideline (WCAG) errors, but also facilitates human evaluation of web content."

[Web Disability Simulator - Chrome Web Store (google.com)](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla/)

[ARC Platform - TPGi](https://www.tpgi.com/arc-platform/)
- "Empowerment across the accessibility workflow in a single, extendable, unified platform. Built to create efficiencies, effectiveness, and collaboration."

[Getting started with web accessibility with Ashlee Boyer](https://youtu.be/qr0ujkLLgmE?si=OnvYt0_Gv3BJRR4W)
- [Kevin Powell](https://www.youtube.com/@KevinPowell)
- 30:28
[You Suck At Accessibility (But You Don't Have To)](https://youtu.be/1A6SrPwmGpg?si=tNjsOAKhjkD3267)
- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
- 13:22

___

## Accessibility Companies and Organizations to Follow

Fable
https://makeitfable.com

Deque
https://www.deque.com/blog/save-the-date-for-axe-con-2024/

Assistiv Labs
https://assistivlabs.com

Tetralogical
https://tetralogical.com

[TPGi - Your Digital Accessibility Solutions Partner!](https://www.tpgi.com/)

Level Access
- [Level Access](https://www.levelaccess.com/)
- [Level Access: Resources overview page](https://www.levelaccess.com/resources/)
- _Note: Level Access just bought an accessibility overlay company so there's been great (and often heated) debates on Level Access' current and future role in the professional A11y community._

CNIB Canadian National Instutite for the Blind
- [CNIB Website](https://www.cnib.ca/)
- [CNIB LinkedIn]()

RNIB Royal National Instutite of Blind People
- [RNIB Website](https://www.rnib.org.uk)
- [RNIB Assistive aids and technology](https://www.rnib.org.uk/living-with-sight-loss/assistive-aids-and-technology/)

Canadian Hearing Services
- [Canadian Hearing Services](https://www.chs.ca/)
- Has online ASL (American Sign Language) courses several times a year.

___

## A11y Courses and Certifications

### Courses

[Digital Accessibility Foundations](https://www.w3.org/WAI/courses/foundations-course/) 
- Free

[React Accessibility](https://www.linkedin.com/learning/react-accessibility/accessibility-in-react) 
- by Kiara Contreras LinkedIn Learning 
- free with LinkedIn Premium  

[Deque University](https://dequeuniversity.com)  Digital Accessibility Courses & Accessibility Reference Library
- Paid.  [Subscription options](https://dequeuniversity.com/online-courses/)
- 1 year scholarship available for disabled, neurodivergent, and Deaf/deaf applicants.
	- [Scholarship application](https://dequeuniversity.com/scholarships)

### Certification

1. [Certified Professional in Web Accessibility (CPWA)](https://www.accessibilityassociation.org/s/certified-professional-web-accessibility) International Association of Accessibility Professionals (IAAP)
	1. Fee for two exams
	2. Study resources (free):
		1. Certified Professional in Accessibility Core Competencies [CPACC Body of Knowledge](https://www.accessibilityassociation.org/resource/IAAP_CPACC_BOK_March2020)
		2. IAAP Web Accessibility Specialist (WAS) [WAS Body of Knowledge](https://www.accessibilityassociation.org/resource/WAS_Certification_FInal_2020_FINAL)

2. [Section 508 Trusted Tester certification](https://www.dhs.gov/trusted-tester) Free, but a lot of work. Covers a very broad range of in depth digital accessibility topics, not just web accessibility.
	1. [Section 508 Trusted Tester enrollment portal](https://training.section508testing.net)
	2. Required: Microsoft Windows 10, and one of MS Edge, Mozilla Firefox, Google Chrome
	3. ** New standards are being implemented in 2024. Enrollment starts sometime after April 01, 2024.













https://www.dhs.gov/trusted-tester



