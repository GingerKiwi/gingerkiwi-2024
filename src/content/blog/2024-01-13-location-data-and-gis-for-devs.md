---
title: Location Data and Geographical Information Systems GIS for Devs
date: 2024-01-13
tags:
  - post
  - featured
  - history
  - throwback-thursdays
image: /images/covers/02_GIS-Spatial-Location-Data-For-Devs_Cover_1200x630.png
imageAlt: Text says Location (Spatial) Data and Geographical InformationSystems (GIS)for Devs. Rectangular graphic with blue background with white text. There's a graphic of a map with 3 location icons. The largest is red. The one in the front is orange. The location icon in the back is green. There's a thick white border around the graphic.
description: Here's some information and links for developers to learn more about spatial (location) data, spatial data analysis, and geographical information systems (GIS). I have a background in GIS and geomatics (the collection, analysis, and interpretation of data relating to the earth's surface). There's a lot of similarities between how large geographic data sets are analyzed and large Artificial Intelligence databases like LlamaIndex work.
layout: ../../layouts/BlogPostLayout.astro
category: ai
draft: "false"
---
A recent [LinkedIn repost](https://www.linkedin.com/posts/elizabethmccready_save-the-date-march-1-2024-arcmap-is-activity-7151286657097388032-JU2h?utm_source=share&utm_medium=member_desktop) of mine has gone a wee bit viral with over 4,000 views in a day. The original post by [Juliana McMillan-Wilhoit](https://www.linkedin.com/in/julianamapper/overlay/about-this-profile/) was a comment on the end of ArcMap - a Geographical Information Systems (GIS) software by ESRI that has been around since 1999. My take on it was to share the similarities between artificial intelligence databases and what know from years of geomatics, GIS, and spatial data analysis - and to write alt text for the really awesome graphic. 

I've also seen several threads on TorontoJS Slack asking for help finding location data sets and dealing with spatial data analysis for Javascript applications. While I share some quick links, a Slack thread isn't detailed enough to give all the information and resources I'm sharing here.

**Tip:** JavaScript developers look for "location datasets" or sometimes "map dataset" when looking for free data for web dev projects. But there's really no such thing as a "location dataset" in the field that has that information. Those datasets are called either spatial datasets or geospatial datasets. Location is a characteristic of individual data points in spatial datasets.

```javascript
'location dataset' || 'map dataset' !=== 'spatial dataset' || 'geospatial dataset'

```

Here's some information and links for developers to learn more about spatial (location) data, spatial data analysis, and geographical information systems (GIS). I've also included some resource on AI, especially Large Language Models (LLMs) and vector databases.

There's many references from ESRI (Earth Science Research Institute) because ESRI is like the Microsoft of GIS. It's Canadian headquartered in the Don Mills area of Toronto!

## Contents

1. <a href="#definitions">Definitions</a>
2. <a href="#ai-vector-db">Similarities between AI vector Databases and GIS</a>
	1. <a href="#what-are-ai-vector-dbs">What are AI vector databases?</a>
	2. <a href="#learn-gis-to-learn-ai">How learning GIS and spatial data analysis fundamentals can help you learn AI</a>
3. <a href="#industry-standard-and-opensource-gis">Industry Standard and Open Source GIS</a>
	1. <a href="#esri">ESRI Industry Standard GIS</a>
	2. <a href="#qgis">QGIS Open Source</a>
	3. <a href="#avenza">Avenza Innovative Toronto GIS Company</a>
4. <a href="#free-gis-spatial-data-analysis-training">Free GIS and spatial data analysis training</a>
	1. <a href="esri-training">Free Training by ESRI </a>- Includes general GIS training, not just ESRI products
	2. <a href="qgis-training">QGIS Free Training</a>
	3. <a href="#avenza-training">Avenza Free Training</a>
	4. <a href="#javascript-gis-training">JavaScript Specific Free GIS Training</a>
	5. <a href="#postgis-training">Postgres (PostGIS)</a>
	6. <a href="#python-gis-training">Python and GIS Free Training</a>
	7. <a href="#Statistics and Maths Refreshers">Statistics and Maths Review Materials</a>
	8. <a href="#other-free-training">Other Free Training Resources</a>
5. <a href="#free-spatial-datasets">Free Spatial Datasets</a>
6. <a href="#references-and-resources">References and more resources </a>- including my favourite statistics book
	1. <a href="references">References</a>
	2. <a href="#stats-book">Awesome Statistics Book</a>
	3. <a href="#gis-resources">GIS Resources</a>
	4. <a href="#ai-resources">Artificial IntelligenceResources - Focus on Large Language Models (LLMs) and accessibility.</a>
	5. <a href="#a11y-and-ai">Accessibility and AI</a>

---

<h2 id="definitions">1. Definitions</h2>

Some of the definitions below are quoted directly from industry sources. Others are my own definitions from years of post-secondary geography and geomatics education, and from doing environmental surveying. Industry sources are referenced with accessible in-page links to the reference section. 

- **Geographical Information Systems (GIS)**
	- Computer software that stores, analyzes and displays spatial (location) data. 
- Spatial data types can include:
	- **Point data:** eg location of a utility pole, bird nesting site, feral cat colony,
	- **Vector (line) data:** eg a road, hiking trail, bird migration route
	- **Raster / shape file (area / pixel) data: **eg a land parcel, footprint of a building, national park area
	- **Non-spatial data: **eg 
		  1. Who owns the utility pole, 
		  2. What species of bird, and how many eggs it laid
		  3. How many people used the hiking trail last year, 
		  4. Number of people infected with covid in a postal code
	- Note that this is a  _very_ simple overview of data types and examples.
- **Geomatics:**
	- The science of the collection, storage, and analysis of spatial data, data relating to the earth's surface. This also includes space, especially in relation to satellites and space craft in earth orbit. 
- **Spatial data:** 
	- Any data with a location attached.
- **Spatial data analysis:**
	- "The process of examining the locations, attributes, patterns, and relationships of features in spatial data in order to address a question or gain useful knowledge." ~ ESRI  <a href="#ref-esri-spatial-data-analysis" aria-label="link to reference"><sup>1</sup></a>
- **Layer:**
	- "Layers are the mechanism used to display geographic datasets in ArcMap, ArcGlobe, and ArcScene. Each layer references a dataset and specifies how that dataset is portrayed using symbols and text labels. When you add a layer to a map, you specify its dataset and set its map symbols and labeling properties." ~ ESRI  <a href="#ref-esri-layers" aria-label="link to reference"><sup>2</sup></a>
- **Images / Imagery:**
	- Refers to non-map data such as aerial photographs (taken from planes or drones) and photographs taken from satellites.

---

<h2 id="ai-vector-db">2. Artificial Intelligence Vector Databases and GIS</h2>

Sometimes it takes a non-typical professional background to make connections between seemly separate fields. I have a background in GIS and geomatics, did environmental surveying for the Ontario Ministry of Natural Resources, and had student jobs in spatial analysis in university. In 2019, I changed careers from education as an assistive technology specialist to going back to school for a postgrad program in Urban and Environmental Planning. 

Though the twists and turns of the pandemic I discovered that software development was a way to use my passion and experience in accessibility, without all the things that led to my burning out in my education career. The developer community is hands down the most supportive, fun, and engaging!

I'm working on my web accessibility certification. There's a lot of potential for AI to improve the lives, user experience, and developer experience of disabled people. So I'm also working on my [Microsoft Azure AI Engineer Associate certification](https://learn.microsoft.com/en-ca/credentials/certifications/azure-ai-engineer/). 

<h3 id="#what-are-ai-vector-dbs"> 2a. What Are AI Vector Databases?</h3>

This past Tuesday I watched a [Microsoft Reactor live stream](https://www.youtube.com/live/_iltJI1nnaA?si=6cNW8RLOMZFL-jiW) with LlamaIndex on _"Building AI-powered Retrieval-Augumented Generation apps with LlamaIndex and Azure Cosmos DB"_. Laurie Voss, developer relations at LlamaIndex covered how Large Language Models (LLMs) work. LLMs convert data into numbers, specifically numbers that exist in vector space.

<iframe width="560" height="315" src="https://www.youtube.com/embed/_iltJI1nnaA?si=A5n5UF0f0k1qnli-&amp;start=1132" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="play video from Microsoft Reactor about LLamaIndex AI and Cosmos DB"></iframe>

Link to the section of the video that [talks about vector db and LLMs](https://www.youtube.com/live/_iltJI1nnaA?si=cz_WRGuAMyl50PtG&t=1132)

### 2b. Similarities Between AI Vector Databases and GIS?

<img src="/images/2024-01-13_Screenshot_VectorAI.png"  alt="graphic: cartoon like globe on the left showing a city, farms, fields, and bodies of water. There are arrows pointing from the globe to one of the layers on the right. The right side has a set of six squares one on top of the other with space in between. The top has dots and is labeled customers. Second one is a street map and is labeled streets. Third is an outline of land areas. It's labeled parcels. Fourth layer is a grid with squares different colours. It looks like a river is running diagonally across it. Fifth layer is similar to the fourth, but has different colours. It's labeled land usage. The bottom layer shows different land heights, There's a river running though the middle with a city on one side and trees and rocks on the other. "/>

<img src="/images/2024-01-13_GIS-land-to-layers.jpeg" alt="graphic Title: Vector embeddings. Turning words into numbers. Shows 3 phrases of words on the left side of the graphic The cat sat on the mat in red text, The dog sat on the frog in blue, and The centipede sat wherever it wanted in pink. Each phrase has an arrow pointing to a rectangle labeled LLM. There's a single arrow linking the LLM to a grid on the right. The grid is labeled vector space. There are three points on the grid in colours matching the text. Red dot is in upper right. Pink is on the left above centre, and the blue is at the bottom almost in line with the red dot."/>

The two graphics above shows how AI vector databases looked identical to a graphic of a GIS layer. Laurie Voss's explanation of how AI's answer questions using vector databases had so many similarities with spatial data analysis. 
1. Which answer is more likely depends on how spatially close the question or phrase is to the piece of data the AI uses to answer the user's question or complete a sentence. 
2. Even though Voss didn't explain the mathematics of vector space, it should be the same or almost the same as that used in spatial data analysis. 

**There's only two main differences:**

1. Locations of data points in AI vector data bases are human constructs, and not locations people could visit. 
2. Artificial Intelligence vector DBs are a flat surface. 
	- Therefor there's no need to deal with data on a sphere, and what happens when you reach the geographic edge of your dataset but the actual data (that's not in your dataset) continues on over the surface of a sphere past the edges of your map. 
	- (If you're curious ask me about the _**"PacMan" spatial data sampling method**_ .)

<h3 id="#learn-gis-to-learn-ai">2c. How learning GIS and Spatial Data Analysis Fundamentals Can Help You Learn AI</h3>

With all the similarities between LLM data storage and analysis in vector data bases and GIS, learning one can help you learn the other. There's other benefits too. Using programming languages that are popular in both AI and Geomatics (e.g. Python) in different contexts helps level up your coding skills.  Also, there's overlap with smart devices and the internet of things (IoT), and autonomous vehicles.

---

<h2 id="industry-standard-and-opensource -gis">3. Industry Standard and Open Source GIS</h2>

A Canadian company, ESRI, dominates the global GIS market. GIS started in Canada in 1963 with Roger Tomlinson's work for the Canadian government. Canada has continued to be world leaders in GIS and geomatics ever since. Which makes some sense considering the size of our country! <a href="#ref-esri-history-of-gis" aria-label="link to reference"><sup>3</sup></a> There are open source GIS. There's a Toronto company with three interesting products - one that makes GIS available in Adobe Creative Cloud products.

Note that links to training are in the "where to get <a href="#free-gis-spatial-data-analysis-training">free GIS and spatial data analysis training</a>" section after this one.

<h3 id="#learn-gis-to-learn-ai">3a. Industry Standard: ESRI</h3>

<img src="/images/2024-01-13_ESRI-ArcGIS-banner.gif" alt="Logo: ArcGIS ESRI. There's a stylized line drawing of a blue and green globe on the left. " />

ESRI was founded in 1969. It went though many versions, different software architecture, and platforms. Like Apple uses "i" before many of it's products (iPhone, iPad, ...) ESRI uses "Arc". In my first university degrees I used ArcMap on workstations, ArcINFO on UNIX, and ArcView on Windows workstations. The current version is ArcGIS.

#### ESRI Links for Developers: APIs, SDKs, Docs

##### Global Links
1. [ArcGIS home page](https://www.arcgis.com/index.html)
2. [ArcGIS REST JS](https://developers.arcgis.com/arcgis-rest-js/)
3. [ArcGIS API for Python](https://developers.arcgis.com/python/)
4. [ArcGIS Developers home page](https://developers.arcgis.com/)
5. [Mapping APIs and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/)
6. [Signup page for a free developer account](https://developers.arcgis.com/sign-up/)
1. [21 day free trial of ArcGIS Online: ](https://www.esri.com/en-us/arcgis/products/arcgis-online/trial)
2. [21 day free trial of ArcGIS Pro](https://www.esri.com/en-us/arcgis/products/arcgis-pro/trial)

##### Canada Specific Links
1. [ESRI Canada home page](https://www.esri.ca/en-ca/home)
2. [Canadian pricing for individuals](https://www.esri.ca/en-ca/store/products/buy/arcgis-online#for-individuals)

<h3 id="qgis">3b. QGIS: Open Source GIS</h3>

<img src="/images/2024-01-13_QGIS_Logo-transparent.webp" alt="Logo: QGIS. Very simple green all capital letters. The Q has a bit of orange and yellow stripes on the inner part of the line. " />

While there are many open source GISs, QGIS is the major open source GIS. It's the one with good documentation and with the largest community. QGIS  runs on Windows, macOS, Linux, BSD and mobile devices, making it really flexible. That's where I suggest other devs start with open source GIS. I've included a list of other open-source GISs for the curious.

#### Open Source GIS Links

1. [QGIS home page](https://qgis.org/en/site/)
2. [QGIS docs](https://qgis.org/en/docs/index.html)
3. [QGIS Community](https://qgis.org/en/site/getinvolved/index.html)Contribute to open source GIS
4. [13 Free GIS Software Options](https://gisgeography.com/free-gis-software/): Map the World in Open Source. by [GIS Geography](https://gisgeography.com). Last Updated:October 1, 2023
5. [Open Source Options](https://opensourceoptions.com/)
	1. Site listing open source GIS options
	2. Also has a [YouTube channel](https://www.youtube.com/@opensourceoptions)

<h3 id="avenza">3c. Avenza Systems: Innovative Toronto GIS Company</h3>

<img src="/images/GIS_AvenzaSystemsInc-logo_800x300.png" alt="Logo: Avenza Systems Inc. There's a stylized line drawing of a globe with a letter A on it at the top." />

Avenza is [located close to Davisville station](https://maps.app.goo.gl/SQKK4oK5LLa6LpTN9) in Toronto. The staff and work culture is really awesome. I got to get to know some of them in 2020 when I was volunteering for GoGeomatics Canada and writing GeoIgnite conference materials. They've invented GIS products that work inside Adobe Illustrator and Photoshop - which might interest some UX designers. They also have a mobile solution that works offline.

**Avenza has three products:**

1. **MAPublisher**: brings over 50 GIS integrations into Adobe Illustrator. 
	- This is a huge benefit for book, brochure, and other publishers. 
	- Functions include: data import, transformations, geoprocessing, design, label, and export
1. **Geographic Imager:** Allows users to work with satellite and aerial photographs inside photoshop.
	- Functions include: georeference, transform, mosaic, tile, style, export
1. **Avenza Maps:** Mobile apps for fieldwork and recreation. It uses mobile devices built in GPS without needing a cellular data connection.
	- Features include: Offline use, a map store of professionally produced maps, record GPS tracks, view location on GPS, drop placemarks
##### Avenza Links

1. [Avenza home page](https://maps.app.goo.gl/SQKK4oK5LLa6LpTN9)
2. [MAPublisher](https://www.avenza.com/mapublisher/)
3. [Geographic Imager](https://www.avenza.com/geographic-imager/)
4. [Avenza Maps](https://www.avenza.com/avenza-maps/)
5. [Avenza free product trials](https://www.avenza.com/download/)
6. [Docs for Desktop software](https://support.avenza.com/hc/en-us?_gl=1*cnmde3*_ga*MTYyOTQ4MTcwNC4xNzA1MTU3NTQw*_ga_WG2SH89V1F*MTcwNTE3NDExMi4yLjEuMTcwNTE3NTQ4MS4zOS4wLjA.)
7. [Docs: Avenza Maps](https://support.avenzamaps.com/hc/en-us)The cover photo is so awesome!
8.  GeoIgnite conference Avenza talk summary I wrote in 2020 for GoGeomatics Canada. It has a Tolkien theme!
	1. GeoIgnite 2020 Video: Cartographic Journeys with the Avenza Platform ~ Nick Burchell – Director- Avenza
	2. [Conference talk summary and recording](https://gogeomatics.ca/geoignite-2020-cartographic-journeys-with-the-avenza-platform-nick-burchell-director-avenza/)

---
<h2 id="free-gis-spatial-data-analysis-training">4. Free Training</h2>
There's so many GIS and spatial data analysis training options. Here's a few to get you started. The ESRI ones require a software licence. Use the free 21 day trials listed above to get started. I've listed both top level sites that have multiple courses and a few individual courses that might interest other developers.

<h3 id="esri-training">4a. Free GIS Training by ESRI</h3>

**These free training resources from ESRI includes general GIS and spatial data analysis training.** They're worth a good look even if you're going the open source GIS route.

1. [ESRI Self-paced training for individuals](https://www.esri.com/training/unlimited-esri-training/)
2. [ESRI Free Web Courses](https://www.esri.com/training/catalog/5e8f3919e5fd2c111c84cfac/esri-free-web-courses-/)18 free courses
3. [ESRI: Basics of JavaScript Web Apps](https://www.esri.com/training/catalog/580fc1dea4a46d172b116049/basics-of-javascript-web-apps/) 1 hour, 15 minutes. Includes intro to ArcGIS API for JavaScript
4. [ESRI: Python for Everyone](https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/) 4 hours, 15 minutes
5. [Map Projections tutorials by ESRI](https://learn.arcgis.com/en/paths/map-projections/)
	- **This is *_essential_* if you're going to be using spatial data!**
		- The Earth being a sphere affects data truth. 
		- Depending on the projection distances, areas, or shapes of areas are distorted.
		- This collection of articles, videos, and an interactive "story" (made in a GIS) can be **finished in half a day**.

<h3 id="qgis-training">4b. QGIS Free Training</h3>

1. [QGIS Training manual (html)](https://docs.qgis.org/3.28/en/docs/training_manual/index.html)
2. [PyGIS Cookbook](https://docs.qgis.org/3.28/en/docs/pyqgis_developer_cookbook/index.html) PyGIS is part of QGIS
3. [Developers Guide for QGIS](https://docs.qgis.org/3.28/en/docs/developers_guide/index.html)
4. [A Gentle Introduction to GIS](https://docs.qgis.org/3.28/en/docs/gentle_gis_introduction/index.html) Part of the QGIS docs.
5. [Open Source Options YouTube channel](https://www.youtube.com/@opensourceoptions)

<h3 id="avenza-training">4c. Avenza Systems Free Training</h3>
1. [Avenza Systems Webinars list](https://www.avenza.com/resources/webinars-videos/)
2. [Avenza Systems YouTube](https://www.youtube.com/@AvenzaSystems)

<h3 id="javascript-gis-training">4d. JavaScript Specific GIS Training , Docs and Resources</h3>

Some of these courses are listed in other subsections of this section. 
But being a TorontoJS member it's nice to have a specific section to refer people to!
JavaScipt is one of the most under utilized programming languages in GIS and geospatial analysis.

1. [5 Best Web Mapping Platforms](https://gisgeography.com/web-mapping/) – The Battle of Web GIS
	1. This is more an overview of Web GIS, but given that most JS devs aren't familiar with GIS it's also an intro to how we can use GIS in web apps.
	2. By: [GISGeography](https://gisgeography.com/author/gisgeo/)
	3. Last Updated:January 6, 2024
2. [PD-32 - JavaScript for GIS](https://gistbok.ucgis.org/bok-topics/javascript-gis)
3. [ESRI: Basics of JavaScript Web Apps](https://www.esri.com/training/catalog/580fc1dea4a46d172b116049/basics-of-javascript-web-apps/) 
	1. 1 hour, 15 minutes. 
	2. Includes intro to ArcGIS API for JavaScript
4. [ArcMaps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/)
	1. ESRI
	2. Updated October 2023
5. [Awesome Frontend GIS](https://joewdavies.github.io/awesome-frontend-gis/)
	1. _"A compilation of geospatial-related web frameworks, tools, demos, applications, data sources and more."_
	2. **HUGE** list of resources** by category
		1. JS Libraries: Mapping, data processing, LiDAR, Remote Sensing
		2. Data sources: Downloads, web APIs, Collections
		3. Notebooks: Beginner, intermediate, advanced
		4. Web maps
		5. Web Apps
		6. Colour advices
		7. Icons
		8. Videos
		9. Further reading
	3. [Github repo](https://github.com/joewdavies/awesome-frontend-gis)
	4. Author's Twitter/X: [@joewdavies](https://twitter.com/joewdavies)
6. [Open Layers: Geospatial JavaScript Library](https://www.geographyrealm.com/openlayers-geospatial-javascript-library/)
	1. By [Geography Realm](https://www.geographyrealm.com/)
7. [JavaScript for Geospatial applications](https://geoawesomeness.com/javascript-for-geospatial-applications-an-overview/)
8. [How can you integrate JavaScript with GIS?](https://www.linkedin.com/advice/0/how-can-you-integrate-javascript-gis-5ldde)
	1. LinkedIn article
9. [Open Source WebGIS Online Tutorial](http://webgis.pub/)
10. [U Penn: GEOG 585: Open Web Mapping](https://www.e-education.psu.edu/geog585/)
	1. Free university course
	2. U Penn College of Earth and Mineral Sciences has a lot of free open courses.


<h3 id="postgis-training">4e. Postgres GIS (PostGIS) Free Training</h3>

1. [Introduction to PostGIS](https://postgis.net/workshops/postgis-intro/)
2. [PostGIS Docs](https://postgis.net/documentation/manual/)
3. [PostGIS Videos](https://postgis.net/community/video/)
4. [Spatial Data Analysis Using Postgis  ](https://www.linkedin.com/learning/advanced-postgresql/spatial-data-analysis-using-postgis) LinkedIn Learning:
	1. Note: Free with LinkedIn premium or Toronto Public Library card. 
	2. (TPL had a ransomware  in October, 2023 and full digital services are still not available)
5. [Geographical Data Management with PostGIS](https://github.com/dkakkar/Geospatial-data-management-with-PostGIS)
	1. Github repo

<h3 id="python-gis-training">4f. Python and GIS Free Training</h3>
1. U Penn [GEOG 489 - Advanced Python Programming for GIS](https://www.e-education.psu.edu/geog489/node/1776) 
	1. 10-12 weeks, 4 x 20-30 minute lessons per week
2.  [ESRI: Python for Everyone](https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/) 4 hours, 15 minutes
3. [Get started with PyQGIS Series' Articles](https://dev.to/bordoray/series/24614)
	1. Dev.to !
	2. [Raymond Lay](https://dev.to/bordoray) - French geospatial engineer
4. U. Penn [GEOG 865 Cloud and Server GIS](https://www.e-education.psu.edu/geog865/node/25)
	1. 10-12 hours/week for 10 weeks 
	2. Master’s level elective course. 
	3. Software used includes: ESRI ArcGIS Pro/Arcpy, Jupyter Notebook, ESRI ArcGIS API for Python, QGIS, GDAL/OGR.
5. [Best Courses for Geospatial Python](https://mapscaping.com/best-online-courses-for-geospatial-python/)
	1. A list of courses from the [Mapscaping](https://mapscaping.com/) blog and podcast
	2. Updated October 02, 2022 - sStill definitely worth a look.
6. [Automating GIS Processes 2023](https://autogis-site.readthedocs.io/en/latest/)
	1. [GitHub repo](https://github.com/Automating-GIS-processes/site/)
	2. Emphasis on automating with Python
7. [QGIS Python Tutorial (PyQGIS Tutorial)](https://youtu.be/X-LvGvNor4E?si=BRGogOmp8kRhSEZQ) YouTube - Open Source Options
8. [QGIS Python Programming (PyGIS) Playlist](https://www.youtube.com/watch?v=W5_3H2UWYms&list=PLzHdTn7Pdxs7bWcdXMaaf3Wpz-W8q0Lbj&pp=iAQB) by Open Source Options
9. [PyGIS Developer Cookbook](https://docs.qgis.org/3.28/en/docs/pyqgis_developer_cookbook/index.html) by QGIS docs

<h3 id="other-free-training">4g. Other Free GIS Training Resources</h3>

1. [# Automating GIS Processes 2023](https://autogis-site.readthedocs.io/en/latest/)
	1. [GitHub repo](https://github.com/Automating-GIS-processes/site/)
2. U. Penn [GEOG 865 Cloud and Server GIS](https://www.e-education.psu.edu/geog865/node/25)
	1. 10-12 hours/week for 10 weeks 
	2. Master’s level elective course. 
	3. Software used includes: ESRI ArcGIS Pro/Arcpy, Jupyter Notebook, ESRI ArcGIS API for Python, QGIS, GDAL/OGR.
3. [McMaster Library GIS Services](https://library.mcmaster.ca/services/gis)
	- A list of free webinars and other training available to the public. 
	- Also resources, software, and workstations, available to McMaster staff and students
4. [GISGeography](https://gisgeography.com/learn-gis/) Learn GIS
	- A list of well illustrated articles and written tutorials.
	- [Cartography: Data Classification](https://gisgeography.com/choropleth-maps-data-classification/) 
		- Is worth a good look. At first glance devs might not find it relevant because it's about traditional maps and not specifically GIS. But it's important to know about your data before you use it!
5. [Harvard Centre for Geographic Analysis](https://gis.harvard.edu/page-type/teaching) 
	1. List of several free courses on a wide range of topics
6. [U of Buffalo: Free Online GIS Training](https://research.lib.buffalo.edu/gis-courses/gis-training)
	1. List of free online GIS Training
	2. Maintained by the University of Buffalo Libraries
	3. Last updated Jan 08, 2024

<h3 id="statistics-and-maths">4h. Statistics and Maths Refreshers</a>
1. [U Penn:Math and Statistics Review Materials ](https://online.stat.psu.edu/statprogram/)
2. [Cartoon Guide to Statistics](https://www.larrygonick.com/titles/science/the-cartoon-guide-to-statistics/) by  Larry Gonick and Woollcott Smith
	1. This is an amazing statistics book both if you've never done statistics, if you need a refresher, or would just like a good reference book.
	2. Yes, there's "free" pdfs floating around, but it's well done.


---

<h2 id="free-spatial-datasets">5. Free Spatial Datasets</h2>
One of the best places to find open data is the [master list by GoGeomatics Canada](https://gogeomatics.ca/resources/open-data). 
Most of the other references below are on that list.

1. [GoGeomatics: Open Data sources list](https://gogeomatics.ca/resources/open-data/)
2. [Free GIS Data](https://freegisdata.rtwilson.com/) Categorized List of over **500 different data sources** 
	1. All listed sources are ready to go into a GIS database.
	2. [https://rtwilson.com](rtwilson.com)
3. [Open Street Map](https://www.openstreetmap.org/export#map=5/51.500/-0.100)
4. United States Geological Survey [USGS EarthExplorer](https://earthexplorer.usgs.gov)
	1. Note: for teachers and parents the [USGS Educational Resources](https://www.usgs.gov/educational-resources) also has great geography, earth sciences materials for kids and teens.
5. [Open Data Inception](https://opendatainception.io) Global listing of open spatial data sources. 
	1. The listing is a map with a search field at the top right of the site.
6. [Transit land](https://www.transit.land) Community edited data source of transit data
7. [Transit feeds](https://transitfeeds.com) Archived public transit data. 
	1. It has an API and you can login with GitHub.
8. [Open Mobility.org Twitter account](https://twitter.com/OpenMobilityOrg)
9. [Canadian Open Data](https://canadiangis.com/data.php) and Free Geospatial data resources
10. [World Atlas](https://gisgeography.com/world-atlas/) by GISGeography.
	1. *"Get a blueprint of all countries of the world with 200+ maps. Explore the world atlas with political, satellite, and topographic maps."*
11. Totiū Te Whenua / Land Information New Zealand [LINZ Data Service](https://data.linz.govt.nz/data/)
12. UK [Open Geography Portal](https://geoportal.statistics.gov.uk/) Office for National Statistics
13. [10 Free GIS Data Sources: ](https://gisgeography.com/best-free-gis-data-sources-raster-vector/) Best Global Raster and Vector Datasets - GIS Geography
14. Maps for Europe [EuoGeographics](https://eurogeographics.org/maps-for-europe/)
15. [Geospatial Data collection](https://mdl.library.utoronto.ca/collections/geospatial-data) Map and Data Library University of Toronto

---
<h2 id="references-and-resources">6. References and Resources</h2>

<h3 id="references">6a. References</a>

1. <span id="ref-esri-spatial-data-analysis"><a href="https://support.esri.com/en-us/gis-dictionary/spatial-analysis#:~:text=%20The%20process%20of%20examining%20the%20locations%2C%20attributes%2C,to%20address%20a%20question%20or%20gain%20useful%20knowledge.">ESRI: spatial analysis | GIS Dictionary </a></span>
2. <span id="ref-esri-layers"><a href="https://desktop.arcgis.com/en/arcmap/latest/map/working-with-layers/what-is-a-layer-.htm">ESRI: What is a layer?—ArcMap | Documentation (arcgis.com)</a></span>
3. <span id="ref-esri-history-of-gis"><a href="https://www.esri.com/en-us/what-is-gis/history-of-gis">ESRI: History of GIS | What is GIS (esri.com)</a></span>

<h3 id="stats-book">6b. Statistics Book</h3>

1. [Cartoon Guide to Statistics](https://www.larrygonick.com/titles/science/the-cartoon-guide-to-statistics/) by  Larry Gonick and Woollcott Smith
	1. This is an amazing statistics book both if you've never done statistics, if you need a refresher, or would just like a good reference book.
	2. Yes, there's "free" pdfs floating around, but it's well done.

<h3 id="gis-resources">6c. GIS Resources</h3>

1. **Mapscaping Podcast** [JavaScript and GIS](https://mapscaping.com/javascript-for-gis/)
	1. Highly recommend the Mapscaping podcast! The host Daniel is a Kiwi! (From New Zealand)
	2. [Mapscaping blog](https://mapscaping.com/blog/)
	3. [Mapscaping podcast](https://mapscaping.com/podcasts/)
2. [What is GIS?](https://www.esri.com/en-us/what-is-gis/overview) Geographic Information System Mapping Technology (esri.com)
3. [GIS Dictionary (esri.com)](https://support.esri.com/en-us/gis-dictionary)
4. [Geoanalytics 101:](https://gisgeography.com/geoanalytics/#:~:text=With%20the%20rise%20of%20real-time%20sensors%20and%20the,machine%20learning%20methods%20to%20the%20analysis%20of%20information.) Exploring Spatial Data Science - GIS Geography
5. [Spatial Analysis Articles](https://gogeomatics.ca/subjects/spatial-analysis/) – GoGeomatics Canada
6. [Artificial intelligence article list ](https://gogeomatics.ca/?s=artificial+intelligence) – GoGeomatics Canada
7. [GoGeomatics Meetups ](https://gogeomatics.ca/gogeomatics-meetups/) – GoGeomatics Canada
8. Volunteer to write a technical article on "software dev/ JavaScript / C#, Git, GitHub or other introductory dev topis for GIS professionals" 
	- [Editors & Writers Group – GoGeomatics](https://gogeomatics.ca/editors-writers-group/)
9. Canadian Geospatial Schools & Programs.
	- [GoGeomatics schools and programs list](https://gogeomatics.ca/resources/schools-programs/)
	- These are "going back to school" type programs at universities and colleges, so they're not listed in the training section above.
10. [GIS Stack Exchange](https://gis.stackexchange.com/)
	1. This would be a good place to ask where you could find a particular type of data set.
11. [Open Source GIS Foundation](https://www.osgeo.org/)
	1. Get involved in open source projects
	2. Find training and more!


<h3 id="ai-resources">6d. Artificial Intelligence Resources</h3>

These are a few I've been referring to as I work on my AI Engineer cert. There's a ton of really good information out there. My focus is on Natural Language Processing (NLP) and Large Language Models (LLMs) because of the intersection of AI and accessibility. 

1. [LlamaIndex: Typescript Docs](https://ts.llamaindex.ai)
2. [LlamaIndex: Python Docs](https://docs.llamaindex.ai/en/stable/)
3. Building AI-powered Retrieval-Augumented Generation apps with LlamaIndex and Azure Cosmos DB [LlamaIndex on Microsoft Reactor](https://www.youtube.com/live/_iltJI1nnaA?si=qmp3Fjo9unEkA1i9)YouTube
4. My [AI Engineer Collection](https://learn.microsoft.com/en-us/collections/48zjtj6kk2mewn) of courses on Microsoft Learn
5. Develop natural language processing solutions with Azure AI Services [Microsoft Learn, Learning Path](https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/) 7 hours 9 minutes 
6. Free Microsoft credential. Build a natural language processing solution with Azure AI Language  [AI Applied Skills credential](https://learn.microsoft.com/en-us/credentials/applied-skills/build-natural-language-solution-azure-ai/?ns-enrollment-type=Collection&ns-enrollment-id=48zjtj6kk2mewn) Microsoft Learn. 
	- This is an at home assessment completed after the list of courses at the bottom of the page.
	- [Disability accommodations](https://learn.microsoft.com/en-ca/credentials/support/appliedskills-assessment-lab-accommodations) including use of NVDA and extra time are available.


<h3 id="a11y-and-ai">6e. Accessibility and AI Resources</h3>
There's great potential for AI to positively impact disabled, neurodivergent, and deaf/Deaf people. It's already being realized as the video below from Be My Eyes shows.

1. LinkedIn post commenting about AI and accessibility: [Assistive technology is AI's next billion-person market](https://www.linkedin.com/feed/update/urn:li:activity:7151728939554496512?utm_source=share&utm_medium=member_desktop) Includes a link to the article.
2. [Be My Eyes and AI](https://youtu.be/dIImXx1C7_g?si=JXjF3gORQnVoL4tZ) Integrates accessibility into it's app. The video is embedded below.


<iframe width="560" height="315" src="https://www.youtube.com/embed/dIImXx1C7_g?si=JXjF3gORQnVoL4tZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="watch video about Be My Eyes AI"></iframe>

I hope you find this a valuable resource. It's always awesome when different tech fields come together to develop something new and interesting.

---
