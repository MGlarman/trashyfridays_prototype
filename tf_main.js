const body = document.body
const indexContainer = document.createElement('section')
indexContainer.setAttribute('id', 'index-container')
body.append(indexContainer)

function initView() {
    createNav(indexContainer)
    createHeroSection(indexContainer)
    createWelcome(indexContainer)
    createBanner(indexContainer)
    createAbout(indexContainer)
    createNewsLetter(indexContainer)
    createProgressSection(indexContainer)
    initBlog(indexContainer)
    createFooter(indexContainer)
}

const samplePosts = [
    {
        img: './public/images/post-images/blog-image_000.png',
        title: 'Blog: Trashy Fridays! The Making of ... ',
        date: 'February 6, 2025',
        excerpt: 'I only find it appropriate that my first post on this site should be about the site itself. I built this site as a fully functional responsive website to feature literary and academic content. This post covers the initial case and design choices.',
        fullContent: 'I built this page both as a hobby project and portfolio to showcase my ability to create functional and responsive web applications. This blog serves as a platform for my interest in literature and academia while also demonstrating my personal approach to optimized and modular web development.<br><br>The page was inspired by a concept developed during a master’s course in project management.<br>The case: creating the prototype for a fully functional, responsive website with independent and reusable sections, to showcase the development of an online blog with the potential for furthering the online presence of literary and academic content. <br><br> For the sake of simplicity, the initial version of this site was developed using vanilla HTML5, CSS3, and JavaScript. However, the architecture allows the opportunity for further optimization by implementing frameworks like jQuery, react.js, Bootstrap, and Tailwind CSS, further down the line. <br><br>Modules are built as JavaScript functions to be called in the order designated by the developer. Instead of a monolithic structure, this modular approach makes it easier to update individual parts, without compromising the overarching structure. This allows for improved scalability, maintainability, and efficiency.<br><br>Next possible steps include dynamically reading posts from separate files by using fs in Node.js, rather than hard-coding posts into the JavaScript file. Furthermore, the back-end compatibility provided by Node.js could allow for uploading posts real-time. I would also like to introduce an interactive roadmap, which would feature short-term, mid-term, and long-term goals, such as improving the code organization and optimizing site performance. Finally, I would like to introduce viable CSS and JS libraries to the site architecture.<br><br>Final thoughts: this project took about two to three weeks to complete (including content creation). Through this process, I’ve advanced by knowledge about modular architecture and application responsiveness, as well as the trade-offs caused by design choices.',
        tags: ['blog', 'webDev', 'roadMap'],
    }
    ,
    {
        img: './public/images/post-images/blog-image_002.png',
        title: 'Book Review: Stephen King’s The Institute',
        date: 'February 20, 2025',
        excerpt: 'Luke Ellis is a gifted child. Unfortunately, his gifts include telekinesis, making him a target for the Institute, a black-site facility where young children with extraordinary abilities are experimented upon.',
        fullContent: 'Whenever I get the idea, the urge even, that I simply must have more King in my life, I start rummaging through his vast bibliography. And in my search for books, what I buy is often sporadic and spur-of-the-moment. Buying the Institute was no different but what really won me over was the feeling that here was a spiritual successor to King\'s 1980 novel, Firestarter. However, the novel quickly turns into a pastiche of some of King\'s other greatest hits; The Dead Zone (1979), IT (1986), and Doctor Sleep (2013). <br><br>As usual, King is a masterclass in writing.Wonderfully paced, the Institute reads almost like a movie. Cross-cuts between sections serve to ramp up the action, intensifying the suspense as the narrative progresses, making it harder and harder to put down.<br><br>Add to that the stellar showcasing of a tough world, seen through innocent eyes, and the kind of unbreakable coming-of-age bonds that sometimes solidify between people (part of what makes IT so endearing). The Institute should be a definite top read for any King fan. Because it\'s not King\'s portrayal of horror that makes him great. It\'s his portrayal of humanity.',
        tags: ['literature', 'review', 'fiction', 'stephenKing']
    },
    {
        img: './public/images/post-images/blog-image_003.png',
        title: 'Book Review: Stephen King’s 11/22/63',
        date: 'February 27, 2025',
        excerpt: 'In 2011, high school teacher Jake Epping is convinced by local diner owner Al Templeton to climb into the rabbit hole of time through the anomaliy in his basement. The reason? Preventing the assassination of President John F. Kennedy in 1963.',
        fullContent: '11/22/63 is King at his very best. <br><br>I think that just about anyone who knows me also knows how much I adore the works of Stephen King, and 11/22/63. In fact, it was the first King novel I ever read, so go ahead and color me biased. <br><br>Finding himself back in the middle of the twentieth century, Jake inevitably finds himself leading two lives tat are soon to converge - one glazed by the rose-tint of the classical American Dream, and one in which he must face the grim realities of life and the realization that time chips away all. <br><br>If you want time paradoxes and physics equations, this book may not be for you. Instead, King neatly skips over these conundrums in favor of something far more human.<br>Sure, it\'s about time travel, it\'s about romance and nostalgia and all the butterflies - the ones in your stomach and the ones that cause hurricanes. But mostly 11/22/63 is about life, the good times and the bad times, in all its wholeness. <br>And while Jake Epping may not be a crying man, by the end he\'ll have you bawling your eyes out.',
        tags: ['literature', 'review', 'fiction', 'stephenKing']
    }
]


/*==================================================================================================*/
/* __________________________________ NAV_SECTION_MODULE - START __________________________________ */
/*==================================================================================================*/

function createNav(parentNode) {
    const navContainer = document.createElement('section')
    navContainer.setAttribute('id', 'nav-container')
    parentNode.append(navContainer)

    const navHeader = document.createElement('div')
    navHeader.setAttribute('id', 'nav-header')
    navContainer.append(navHeader)

    navHeader.innerHTML = `<div id="hamburger">&#9776;</div>
    <div id="blog-name"><img src="logo.png" alt="Matty's Trashy Fridays"></div>`

    const navMenu = document.createElement('div')
    navMenu.setAttribute('id', 'nav-menu')
    navContainer.append(navMenu)

    navMenu.innerHTML = 
    `<ul>
        <li><a href="#hero-section">Home</a></li>
        <li><a href="#welcome-container">About</a></li>
        <li><a href="#progress-container">Blog</a></li>
    </ul>`

    const hamburger = navHeader.querySelector('#hamburger')

    function toggleMenu() {
        navMenu.classList.toggle('show')
        hamburger.classList.toggle('active')
        
        if (navMenu.classList.contains('show')) {
            hamburger.innerHTML = '&times;'
        } else {
            hamburger.innerHTML = '&#9776;'
        }
    }
    
    hamburger.addEventListener('click', toggleMenu)
}

/*==================================================================================================*/
/* ______________ NAV_SECTION_MODULE - END ________________________________________________________ */
/*==================================================================================================*/
/*________________________________________________________HERO SECTION MODULE - START______________ */
/*==================================================================================================*/

function createHeroSection(parentNode) {
    // Create the hero-section element
    const heroSection = document.createElement('section')
    heroSection.setAttribute('id', 'hero-section')
    parentNode.appendChild(heroSection)

    // Hero section data (banner images, headings, and text)
    const heroBannerData = [
        { imageUrl: 'public/images/portfolio-banner.png', heading: "", text: "" },
        { imageUrl: 'public/images/blog-banner1.png', heading: "", text: "" }
    ]

    let currentIndex = 0

    // Loop through banner data and create the banners dynamically
    heroBannerData.forEach((bannerData, index) => {
        const banner = document.createElement('div')
        banner.classList.add('hero-banner')
        banner.classList.add(`banner-${index}`) // Unique class for each banner
        banner.style.backgroundImage = `url(${bannerData.imageUrl})`
        banner.style.display = index === 0 ? 'block' : 'none' // Only show the first banner
        heroSection.appendChild(banner)
    
        const heading = document.createElement('h1')
        heading.classList.add('hero-heading')
        heading.textContent = bannerData.heading
        banner.appendChild(heading)
    
        const text = document.createElement('h2')
        text.classList.add('hero-text')
        text.textContent = bannerData.text
        banner.appendChild(text)
    })

    // Create navigation buttons (left and right)
    const leftButton = document.createElement('button')
    leftButton.id = 'left-banner-btn'
    leftButton.textContent = '<'
    heroSection.appendChild(leftButton)

    const rightButton = document.createElement('button')
    rightButton.id = 'right-banner-btn'
    rightButton.textContent = '>'
    heroSection.appendChild(rightButton)
        
    // Function to go to the next banner
    function goToNextBanner() {
        const banners = document.querySelectorAll('.hero-banner')
        banners[currentIndex].style.display = 'none'  // Hide the current banner
        currentIndex = (currentIndex + 1) % banners.length // Loop back to the first banner
        banners[currentIndex].style.display = 'block'  // Show the next banner
    }

    // Function to go to the previous banner
    function goToPreviousBanner() {
        const banners = document.querySelectorAll('.hero-banner')
        banners[currentIndex].style.display = 'none'  // Hide the current banner
        currentIndex = (currentIndex - 1 + banners.length) % banners.length // Loop back to the last banner
        banners[currentIndex].style.display = 'block'  // Show the previous banner
    }

    // Event listeners for the buttons
    rightButton.addEventListener('click', goToNextBanner)
    leftButton.addEventListener('click', goToPreviousBanner)

    // Automatic banner change every 10 seconds
    setInterval(goToNextBanner, 10000)

    // Button styles (using inline styles for this example)
    leftButton.style.position = 'absolute'
    leftButton.style.top = '0'
    leftButton.style.bottom = '0'
    leftButton.style.left = '20px'
    leftButton.style.width = 'auto'  // Set width to auto to fit the arrow
    leftButton.style.fontSize = '36px';
    leftButton.style.color = 'white'
    leftButton.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
    leftButton.style.border = '2px solid white'
    leftButton.style.padding = '0 20px'
    leftButton.style.cursor = 'pointer'
    leftButton.style.display = 'flex'
    leftButton.style.alignItems = 'center'
    leftButton.style.justifyContent = 'center'
    
    rightButton.style.position = 'absolute'
    rightButton.style.top = '0'
    rightButton.style.bottom = '0'
    rightButton.style.right = '20px'
    rightButton.style.width = 'auto'  // Set width to auto to fit the arrow
    rightButton.style.fontSize = '36px'
    rightButton.style.color = 'white'
    rightButton.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
    rightButton.style.border = '2px solid white'
    rightButton.style.padding = '0 20px'
    rightButton.style.cursor = 'pointer'
    rightButton.style.display = 'flex'
    rightButton.style.alignItems = 'center'
    rightButton.style.justifyContent = 'center'

    // Hover effects
    function addHoverEffect(button) {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = 'rgba(233, 51, 6, 0.8)'; // Darker color on hover
        })

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // Reset to original color
        })
    }

    addHoverEffect(leftButton)
    addHoverEffect(rightButton)

    // Apply styles to text elements
    const headings = document.querySelectorAll('.hero-heading')
    const texts = document.querySelectorAll('.hero-text')

    headings.forEach(heading => {
        heading.style.position = 'absolute'
        heading.style.top = '28%'
        heading.style.left = '50%'
        heading.style.transform = 'translate(-50%, -50%)'
        heading.style.color = 'white'
        heading.style.fontSize = '3rem'
        heading.style.fontWeight = 'bold'
        heading.style.textAlign = 'center'
        heading.style.textShadow = '4px 4px 8px rgba(0, 0, 0, 1), 0 0 15px rgba(0, 0, 0, 0.8)'
    })

    texts.forEach(text => {
        text.style.position = 'absolute'
        text.style.top = '50%'
        text.style.left = '50%'
        text.style.transform = 'translate(-50%, -50%)'
        text.style.color = 'white'
        text.style.fontSize = '2rem'
        text.style.fontWeight = 'bold'
        text.style.textAlign = 'center'
        text.style.padding = '10px 20px'
        text.style.borderRadius = '8px'
        text.style.textShadow = '5px 5px 10px rgba(0, 0, 0, 1), 0 0 20px rgba(0, 0, 0, 0.9)'
    })
}

/*==================================================================================================*/
/* ______________ HERO_SECTION_MODULE - END _______________________________________________________ */
/*==================================================================================================*/
/*_____________________________________________________NEWS LETTER SECTION MODULE - START__________ */
/*==================================================================================================*/

function createNewsLetter(parentNode) {
    const newsletter = document.createElement('section')
    newsletter.setAttribute('id', 'newsletter-container')
    parentNode.append(newsletter)

    // Create the close button (x)
    const closeButton = document.createElement('button')
    closeButton.setAttribute('id', 'close-newsletter')
    closeButton.textContent = '×'  // Set the text to "×" (the close icon)
    newsletter.appendChild(closeButton)

    // Add event listener to close the newsletter when the button is clicked
    closeButton.addEventListener('click', function () {
        newsletter.style.display = 'none'  // Hide the newsletter section
    })

    const newsletterHeading = document.createElement('h1')
    newsletter.appendChild(newsletterHeading)
    newsletterHeading.textContent = "Subscribe to My Newsletter"

    const newsletterDescription = document.createElement('p')
    newsletter.appendChild(newsletterDescription)
    newsletterDescription.textContent = "Get any updates - real-time - straight into your inbox!"

    const newsletterForm = document.createElement('form')
    newsletter.appendChild(newsletterForm)

    const newsletterInput = document.createElement('input')
    newsletterForm.appendChild(newsletterInput)
    newsletterInput.type = 'email'
    newsletterInput.placeholder = 'Enter your email'
    newsletterInput.required = true;  // Make sure it's required

    const newsletterBtn = document.createElement('button')
    newsletterForm.appendChild(newsletterBtn)
    newsletterBtn.type = 'submit'
    newsletterBtn.textContent = 'Subscribe'

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault()
        alert('Thank you for subscribing!')
        // You could send the email data to a backend here if needed.
    })

    // Optional: Style the close button with CSS (you can do this in a stylesheet, but I'll add it inline for demonstration)
    closeButton.style.position = 'absolute'
    closeButton.style.top = '10px'
    closeButton.style.right = '50px'
    closeButton.style.fontSize = '24px'
    closeButton.style.backgroundColor = 'transparent'
    closeButton.style.border = 'none'
    closeButton.style.color = 'black'
    closeButton.style.cursor = 'pointer'
    closeButton.style.zIndex = '1000'
}

/*==================================================================================================*/
/* ______________ NEWS_LETTER_SECTION_MODULE - END ________________________________________________ */
/*==================================================================================================*/
/*_____________________________________________________WELCOME_SECTION_MODULE - START______________ */
/*==================================================================================================*/

function createWelcome(parentNode) {
    // Create the welcome section container
    const welcomeContainer = document.createElement('section')
    welcomeContainer.setAttribute('id', 'welcome-container')
    parentNode.appendChild(welcomeContainer)

    // Create the welcome title
    const welcomeTitle = document.createElement('h1')
    welcomeTitle.textContent = 'hi, welcome to my blog!'
    welcomeContainer.appendChild(welcomeTitle)

    // Create the welcome description
    const welcomeDescription = document.createElement('p')
    welcomeDescription.textContent = 'this is my own little corner of the internet, where I can show off my current passion projects. Feel free to take a look around and enjoy your time here.'
    welcomeContainer.appendChild(welcomeDescription)

    // Create the explore button
    const exploreButton = document.createElement('button');
    exploreButton.textContent = 'Explore Now';

    // Create a link (anchor tag)
    const exploreLink = document.createElement('a');
    exploreLink.setAttribute('href', '#progress-container');  // Change this to the desired URL or ID
    exploreLink.appendChild(exploreButton);  // Append the button inside the anchor tag

    // Add the anchor tag to the container
    welcomeContainer.appendChild(exploreLink);
}

/*==================================================================================================*/
/* ______________ WELCOME_SECTION_MODULE - END ____________________________________________________ */
/*==================================================================================================*/
/*_____________________________________________________ABOUT_ME_MODULE - START_____________________ */
/*==================================================================================================*/

function createAbout(parentNode) {
    const aboutContainer = document.createElement('section')
    aboutContainer.setAttribute('id', 'about-container')
    parentNode.appendChild(aboutContainer);

    // Create Toggle Button (Always Visible at the Top)
    const toggleButton = document.createElement('button')
    toggleButton.setAttribute('id', 'toggle-about-btn')
    toggleButton.textContent = '< Show More About Me >'
    aboutContainer.appendChild(toggleButton)

    // Style the Toggle Button
    toggleButton.style.width = '100%'
    toggleButton.style.padding = '15px'
    toggleButton.style.backgroundColor = '#333'
    toggleButton.style.border = 'none'
    toggleButton.style.cursor = 'pointer'
    toggleButton.style.transition = 'background-color 0.3s ease-in-out'

    // Hover effect
    toggleButton.addEventListener('mouseenter', () => {
        toggleButton.style.backgroundColor = '#444'
    });
    toggleButton.addEventListener('mouseleave', () => {
        toggleButton.style.backgroundColor = '#333'
    });

    // Collapsible Content Container
    const aboutContent = document.createElement('div')
    aboutContent.setAttribute('id', 'about-content')
    aboutContainer.appendChild(aboutContent)

    // About Banner (Inside collapsible section)
    const aboutBanner = document.createElement('div')
    aboutBanner.setAttribute('id', 'about-banner')
    aboutContent.appendChild(aboutBanner)

    // About Image
    const aboutImg = document.createElement('div')
    aboutImg.setAttribute('id', 'about-img')
    aboutBanner.appendChild(aboutImg)

    // About Title
    const aboutTitle = document.createElement('h1')
    aboutTitle.setAttribute('id', 'about-title')
    aboutTitle.textContent = 'Hello, World!'
    aboutContent.appendChild(aboutTitle)

    // About Description
    const aboutDescription = document.createElement('p')
    aboutDescription.setAttribute('id', 'about-description')
    aboutDescription.innerHTML = `I'm <span>Mathias</span>, a passionate and self-driven literature enthusiast with a broad scope of interests.
        I thrive on tackling complex tasks and puzzles that balance creativity against practicality.
        <br><br>
        I created this page as a curriculum vitae, a portfolio for potential employers, and a platform for my thoughts and interests.
        <br><br>
        Inspired by thinkers like <a href="#">Socrates</a>, <a href="#">Bruno Latour</a>, and <a href="#">Michel Callon</a>, 
        I approach every situation with fresh curiosity. I enjoy literature, film, and gaming but balance them with time in nature.`
    aboutContent.appendChild(aboutDescription)

    // Adding Sections for Qualifications
    const sections = [
        { title: "Education:", content: "- MSc in Information Studies (Digital Living), Aarhus University. </br> - BA in English & Communication and Digital Media, Aalborg University." },
        { title: "Skills:", content: "Communication & Writing, Digital Media Competency, Problem Solving & Creativity, Information Studies Expertise." },
        { title: "Technical Skills:", content: "Frontend: HTML, CSS, JavaScript. Backend: Node.js, PHP. UX/UI: Design heuristics. Graphic Design: Photoshop, GIMP." },
        //{ title: "Experience:", content: "2022-2025: Aarhus University (including a semester at Örebro University, Sweden). 2023 (Fall): Volunteer writer for Lösnummer (Örebro Student Journal). 2018-2019: Lionbridge Technologies (Independent Transcriber)." },
        //{ title: "Contact:", content: "Email: [Your Email] <br> LinkedIn: [Your LinkedIn]" }
    ]

    // Create a section for each qualification
    const qualificationSection = document.createElement('div')
    qualificationSection.classList.add('qualification-section')
    aboutContent.appendChild(qualificationSection)

    sections.forEach(section => {
        const qualificationDiv = document.createElement('div')
        qualificationDiv.classList.add('qualification')
        qualificationSection.appendChild(qualificationDiv)

        const sectionContent = document.createElement('p')
        sectionContent.innerHTML = `<strong>${section.title}</strong><br>${section.content}`
        qualificationDiv.appendChild(sectionContent)
    });

    // Initially hide the aboutContent
    aboutContent.style.display = 'none'

    // Toggle functionality
    toggleButton.addEventListener('click', function () {
        if (aboutContent.style.display === 'none') {
            aboutContent.style.display = 'block'
            toggleButton.textContent = '< Show Less >'
        } else {
            aboutContent.style.display = 'none'
            toggleButton.textContent = '< Show More About Me >'
        }
    })
}


/*==================================================================================================*/
/* ______________ ABOUT_ME_MODULE - END ___________________________________________________________ */
/*==================================================================================================*/
/*_____________________________________________________PROGRESS_SECTION_MODULE - START_____________ */
/*==================================================================================================*/


function createProgressSection(parentNode) {
    const progressContainer = document.createElement('section')
    progressContainer.setAttribute('id', 'progress-container')
    parentNode.appendChild(progressContainer)

    // Section Title (on the left)
    const progressLeft = document.createElement('div')
    progressLeft.setAttribute('id', 'progress-left')
    


    progressContainer.appendChild(progressLeft)

    const progressTitle = document.createElement('h2')
    progressTitle.textContent = 'Project Progress'
    progressLeft.appendChild(progressTitle)

    // Progress Bars Wrapper (on the right)
    const progressBarsWrapper = document.createElement('div')
    progressBarsWrapper.setAttribute('class', 'progress-container-wrapper')
    progressContainer.appendChild(progressBarsWrapper)

    // Progress Bars Container
    const progressBars = document.createElement('div')
    progressBars.setAttribute('class', 'progress-container')
    progressBarsWrapper.appendChild(progressBars)

    const projects = [
        { title: '1. Blog: Roadmap for future blog content', progress: 30 },
        { title: '2. Blog: Create back-end compatibility', progress: 20 },
        { title: '3. Blog: Implement viable light mode', progress: 10 },
        { title: '4. Blog: Implement English/Danish language option', progress: 5 }
    ]

    // Create Progress Bars for each project
    projects.forEach(project => {
        const progressDiv = document.createElement('div')
        progressDiv.setAttribute('class', 'progress')

        // Project Info Section
        const progressInfo = document.createElement('div')
        progressInfo.setAttribute('class', 'progress-info')

        const projectTitle = document.createElement('p')
        const projectLink = document.createElement('a')
        projectLink.textContent = project.title
        projectLink.href = '#progress-container' // Link target, can be updated later.

        projectTitle.appendChild(projectLink)
        progressInfo.appendChild(projectTitle)
        progressDiv.appendChild(progressInfo)

        // Progress Bar
        const progressBar = document.createElement('div')
        progressBar.setAttribute('class', 'progress-bar')

        const progressValue = document.createElement('div')
        progressValue.setAttribute('class', 'progress-value')
        progressValue.style.width = '0%'

        const progressText = document.createElement('span')
        progressText.setAttribute('class', 'progress-text')
        progressText.textContent = `${project.progress}%`

        progressValue.appendChild(progressText)
        progressBar.appendChild(progressValue)
        progressDiv.appendChild(progressBar)

        // Append to Progress Bars Container
        progressBars.appendChild(progressDiv)

        // Animate the Progress Bar
        setTimeout(() => {
            progressValue.style.width = `${project.progress}%`
        }, 200)
    })

    // Earlier Works Link (beneath the progress bars)
    const earlierWorks = document.createElement('h3')
    const earlierWorksLink = document.createElement('a')
    earlierWorksLink.setAttribute('href', '#progress-container')
    earlierWorksLink.textContent = 'Earlier Works'
    earlierWorks.appendChild(earlierWorksLink)
    progressBarsWrapper.appendChild(earlierWorks)
}


/*==================================================================================================*/
/* ______________ ABOUT_ME_MODULE - END ___________________________________________________________ */
/*==================================================================================================*/
/*_____________________________________________________BANNER_MODULE - START_______________________ */
/*==================================================================================================*/

function createBanner(parentNode) {
    // Create the banner section container
    const bannerContainer = document.createElement('section')
    bannerContainer.setAttribute('class', 'banner-container')
    parentNode.appendChild(bannerContainer)

    // Create the h1 element for the banner text
    const bannerText = document.createElement('h1')
    bannerText.setAttribute('class', 'banner-text')
    bannerText.textContent = 'MSc in Information Studies (Digital Living) | BA in English & Communication and Digital Media'
    bannerContainer.appendChild(bannerText)
}

/*==================================================================================================*/
/* ______________ BANNER_MODULE - END _____________________________________________________________ */
/*==================================================================================================*/
/*_____________________________________________________FOOTER_MODULE - START_______________________ */
/*==================================================================================================*/

// Function to create the footer
function createFooter(parentNode) {
    // Remove any existing footer to prevent duplicates
    let existingFooter = document.getElementById('footer-container')
    if (existingFooter) {
        existingFooter.remove()
    }

    // Create footer container
    const footerContainer = document.createElement('section')
    footerContainer.setAttribute('id', 'footer-container')
    parentNode.appendChild(footerContainer)

    // Footer text
    const footerDescription = document.createElement('p')
    footerDescription.innerHTML = "© 2025 | Mathias Glarman"

    // Footer links
    const footerLinks = document.createElement('div')
    footerLinks.setAttribute('class', 'footer-links')

    const navLinks = [
        ["Home", "#hero-section"],
        ["About", "#welcome-container"],
        ["Blog", "#progress-container"],
    ]

    navLinks.forEach(([name, href]) => {
        const link = document.createElement('a')
        link.textContent = name
        link.href = href
        link.classList.add('footer-link')

        // Ensure event listener doesn't duplicate
        link.onclick = (e) => {
            if (href.startsWith('#')) {
                e.preventDefault()
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
            }
        }

        footerLinks.appendChild(link)
    })

    footerContainer.appendChild(footerLinks)
    footerContainer.appendChild(footerDescription)

    // Add the scroll effect
    window.addEventListener('scroll', function () {
        const footer = document.getElementById('footer-container')

        if (window.scrollY > 100) { // When the user scrolls more than 100px
            footer.classList.add('transparent') // Add 'transparent' class to make it transparent
        } else {
            footer.classList.remove('transparent') // Remove 'transparent' class when the user scrolls back up
        }
    })
}


function initBlog(parentNode) {
    let currentIndex = 0;
    const postsPerLoad = 2;
    let loading = false;

    const blogContainer = document.createElement('section');
    blogContainer.setAttribute('id', 'blog-container');
    parentNode.appendChild(blogContainer);

    const headerBar = document.createElement('div');
    headerBar.setAttribute('id', 'header-bar');
    blogContainer.appendChild(headerBar);

    const searchInput = document.createElement('input');
    searchInput.setAttribute('id', 'search-input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search posts...');
    headerBar.appendChild(searchInput);

    const sortDropdown = document.createElement('select');
    sortDropdown.setAttribute('id', 'sort-dropdown');
    
    const sortByDateOldestOption = document.createElement('option');
    sortByDateOldestOption.value = 'date-oldest';
    sortByDateOldestOption.innerText = 'Sort by Date (Oldest)';
    sortDropdown.appendChild(sortByDateOldestOption);
    
    const sortByDateNewestOption = document.createElement('option');
    sortByDateNewestOption.value = 'date-newest';
    sortByDateNewestOption.innerText = 'Sort by Date (Newest)';
    sortDropdown.appendChild(sortByDateNewestOption);

    headerBar.appendChild(sortDropdown);

    const tagDropdown = document.createElement('select');
    tagDropdown.setAttribute('id', 'tag-dropdown');
    
    const defaultTagOption = document.createElement('option');
    defaultTagOption.value = '';
    defaultTagOption.innerText = 'Sort by Tag';
    tagDropdown.appendChild(defaultTagOption);

    // Add options dynamically (You can replace this with actual tag data from posts)
    const tags = ['tech', 'travel', 'lifestyle'];
    tags.forEach(tag => {
        const tagOption = document.createElement('option');
        tagOption.value = tag;
        tagOption.innerText = tag.charAt(0).toUpperCase() + tag.slice(1);
        tagDropdown.appendChild(tagOption);
    });

    headerBar.appendChild(tagDropdown);

    const postsContainer = document.createElement('div');
    postsContainer.setAttribute('id', 'posts-container');
    blogContainer.appendChild(postsContainer);

    function addPost(post) {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post-container');
    
        postContainer.innerHTML = `
            <div class="post-main row-layout"> <!-- Initially side by side -->
                <div class="post-image" style="background-image: url('${post.img}');"></div>
                <div class="post-content">
                    <h2 class="post-title">${post.title}</h2>
                    <span class="post-date">${post.date}</span>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join(' ')}
                    </div>
                    <button class="read-more-btn">Read More</button>
                </div>
            </div>
            <div class="full-content">
                <p>${post.fullContent || post.excerpt}</p>
            </div>
        `;
    
        const readMoreBtn = postContainer.querySelector('.read-more-btn');
        const fullContent = postContainer.querySelector('.full-content');
        const postMain = postContainer.querySelector('.post-main');
    
        readMoreBtn.addEventListener('click', () => {
            const isExpanded = fullContent.style.display === 'block';
    
            if (isExpanded) {
                fullContent.style.display = 'none';
                postMain.classList.add('row-layout');
                postMain.classList.remove('column-layout');
                readMoreBtn.innerText = 'Read More';
            } else {
                fullContent.style.display = 'block';
                postMain.classList.remove('row-layout');
                postMain.classList.add('column-layout');
                readMoreBtn.innerText = 'Read Less';
            }
        });
    
        postsContainer.appendChild(postContainer);
    }

    function sortPostsByDate(postsToSort, order = 'date-newest') {
        return postsToSort.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return order === 'date-newest' ? dateB - dateA : dateA - dateB;
        });
    }

    function filterPostsByTag(postsToFilter, tag) {
        if (tag) {
            return postsToFilter.filter(post => post.tags.includes(tag));
        }
        return postsToFilter;
    }

    function loadMorePosts() {
        if (loading) return;
        loading = true;
    
        const endIndex = currentIndex + postsPerLoad;
        const postsToLoad = samplePosts.slice(currentIndex, endIndex);
    
        if (postsToLoad.length === 0) {
            console.log("No more posts to load");
            return;
        }
    
        postsToLoad.forEach(addPost);
    
        currentIndex = endIndex;
        loading = false;
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
    
        if (scrollPosition >= pageHeight - 200 && !loading && currentIndex < samplePosts.length) {
            loadMorePosts();
        }
    });

    searchInput.addEventListener('input', (event) => {
        postsContainer.innerHTML = '';
        const query = event.target.value.toLowerCase();
        const filteredPosts = samplePosts.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
        );
        filteredPosts.forEach(addPost);
    });

    sortDropdown.addEventListener('change', (event) => {
        const sortedPosts = sortPostsByDate([...samplePosts], event.target.value);
        postsContainer.innerHTML = ''; // Clear current posts
        sortedPosts.forEach(addPost);
    });

    tagDropdown.addEventListener('change', (event) => {
        const filteredPosts = filterPostsByTag(samplePosts, event.target.value);
        postsContainer.innerHTML = ''; // Clear current posts
        filteredPosts.forEach(addPost);
    });

    loadMorePosts();
}





//Booting up ...
initView()

