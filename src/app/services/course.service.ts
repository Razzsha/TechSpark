import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Course, CourseCategory } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private coursesSubject = new BehaviorSubject<Course[]>([
    {
      id: 'mern-stack-development',
      slug: 'mern-stack-development',
      title: 'MERN Stack Development',
      subtitle: 'Master MongoDB, Express.js, React, and Node.js with Real Projects',
      category: 'web-dev',
      categoryLabel: 'Web & Software Development',
      tag: 'Job-ready',
      badgeColor: 'gold',
      duration: '3.5 Months',
      mode: 'Physical & Online',
      level: 'Beginner to Advanced',
      rating: 4.9,
      ratingCount: 340,
      studentsCount: 1420,
      price: 25000,
      originalPrice: 32000,
      discountBadge: '22% OFF',
      shortDescription: 'Build enterprise full-stack web applications with React, Node.js, Express, and MongoDB under expert industry mentorship.',
      fullDescription: 'Our MERN Stack Development course is designed to transform absolute beginners or IT graduates into industry-ready full-stack developers. You will learn modern frontend development with React 18, state management, RESTful APIs, Node.js server setup, and NoSQL database modeling with MongoDB.',
      overview: [
        'Hands-on full-stack development with real-world enterprise project builds.',
        'Deep dive into modern JavaScript (ES6+), React 18, Hooks, and Redux Toolkit.',
        'Backend engineering with Node.js, Express.js, JWT authentication, and MongoDB Atlas.',
        '100% placement assistance & resume preparation upon course completion.'
      ],
      prerequisites: [
        'Basic understanding of HTML, CSS, and elementary programming logic.',
        'Passion for software development and 2 hours of daily practical coding.'
      ],
      careerOutcomes: [
        'Full-Stack Web Developer',
        'Frontend Engineer (React.js)',
        'Backend Developer (Node.js/Express)',
        'API & Database Specialist'
      ],
      keyHighlights: [
        'Live Real-World E-Commerce & SaaS Projects',
        'Git & GitHub Team Workflow Training',
        'Mock Technical Interviews & Resume Review',
        'Official Certification of Accomplishment'
      ],
      syllabus: [
        {
          title: 'Module 1: Advanced HTML5, CSS3, Flexbox & CSS Grid',
          topics: ['Semantic HTML5', 'Responsive Layouts', 'CSS Grid & Flexbox', 'Sass/SCSS', 'Tailwind CSS Fundamentals']
        },
        {
          title: 'Module 2: Modern JavaScript (ES6+) & Asynchronous Programming',
          topics: ['Promises & Async/Await', 'DOM Manipulation', 'Modular JS', 'Fetch API & JSON handling', 'Closures & Scope']
        },
        {
          title: 'Module 3: React 18 Core & State Management',
          topics: ['JSX & Components', 'Props & State', 'UseState, UseEffect, UseRef Hooks', 'Custom Hooks', 'Context API & Redux Toolkit']
        },
        {
          title: 'Module 4: Node.js & Express Server Architecture',
          topics: ['Node Environment & Modules', 'Express Router', 'Middleware', 'REST API Architecture', 'JWT Authentication & Security']
        },
        {
          title: 'Module 5: MongoDB & Mongoose ODM',
          topics: ['NoSQL Data Modeling', 'Mongoose Schemas & Models', 'CRUD Operations', 'Aggregation Pipelines', 'MongoDB Atlas Cloud']
        },
        {
          title: 'Module 6: Capstone Project Deployment',
          topics: ['Git Version Control', 'CI/CD Pipelines', 'Deploying Frontend on Vercel/Netlify', 'Deploying Backend on Render/AWS']
        }
      ],
      upcomingBatches: [
        { startDate: 'Next Monday', timing: '7:00 AM - 9:00 AM', mode: 'Physical', status: 'Filling Fast' },
        { startDate: '1st of Next Month', timing: '4:00 PM - 6:00 PM', mode: 'Online', status: 'Available' }
      ],
      icon: 'code-sandbox'
    },
    {
      id: 'python-django-fullstack',
      slug: 'python-django-fullstack',
      title: 'Python & Django Full Stack',
      subtitle: 'Build Scalable Web Apps with Python, Django, PostgreSQL & REST APIs',
      category: 'web-dev',
      categoryLabel: 'Web & Software Development',
      tag: 'Hot',
      badgeColor: 'red',
      duration: '3 Months',
      mode: 'Physical & Online',
      level: 'Beginner to Intermediate',
      rating: 4.8,
      ratingCount: 290,
      studentsCount: 1180,
      price: 24000,
      originalPrice: 30000,
      discountBadge: '20% OFF',
      shortDescription: 'Learn Python programming from scratch and build robust backends with Django Framework and PostgreSQL database.',
      fullDescription: 'Master one of the world’s most popular programming languages. Python & Django training covers core Python, object-oriented concepts, Django ORM, REST Framework, user authentication, and web security.',
      overview: [
        'Comprehensive Python syntax, OOP concepts, data structures, and file handling.',
        'Web development using Django MVC architecture and Django Template Engine.',
        'Building APIs with Django REST Framework (DRF) for mobile/frontend integration.',
        'Database integration with PostgreSQL and SQLite.'
      ],
      prerequisites: [
        'No prior programming background required.',
        'Basic computer usage skills.'
      ],
      careerOutcomes: [
        'Python Web Developer',
        'Backend Django Developer',
        'REST API Engineer'
      ],
      keyHighlights: [
        'Build 3 End-to-End Dynamic Portals',
        'PostgreSQL Database Optimization',
        'Docker Basics & Deployment',
        'Career Placement Assistance'
      ],
      syllabus: [
        {
          title: 'Module 1: Python Language Fundamentals',
          topics: ['Variables & Data Types', 'Control Flow & Loops', 'Functions & Lambdas', 'Modules & Packages']
        },
        {
          title: 'Module 2: Object-Oriented Programming in Python',
          topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'Encapsulation', 'Exception Handling']
        },
        {
          title: 'Module 3: Django Framework Core',
          topics: ['Django Architecture', 'Models & Migrations', 'Views & URL Routing', 'Templates & Forms']
        },
        {
          title: 'Module 4: Django REST Framework (DRF)',
          topics: ['Serializers', 'API Views & ViewSets', 'Authentication & Token Security', 'Swagger API Documentation']
        }
      ],
      upcomingBatches: [
        { startDate: 'Coming Sunday', timing: '11:00 AM - 1:00 PM', mode: 'Physical', status: 'Available' },
        { startDate: '15th of Month', timing: '5:00 PM - 7:00 PM', mode: 'Online', status: 'Upcoming' }
      ],
      icon: 'python'
    },
    {
      id: 'ai-python-machine-learning',
      slug: 'ai-python-machine-learning',
      title: 'AI with Python: Machine Learning & GenAI',
      subtitle: 'Master ML Algorithms, Neural Networks, PyTorch & LLM Prompting',
      category: 'ai-data',
      categoryLabel: 'AI & Data Science',
      tag: 'Trending',
      badgeColor: 'purple',
      duration: '3 Months',
      mode: 'Physical & Online',
      level: 'Intermediate',
      rating: 4.95,
      ratingCount: 410,
      studentsCount: 950,
      price: 28000,
      originalPrice: 35000,
      discountBadge: '20% OFF',
      shortDescription: 'Step into the future of Artificial Intelligence. Learn Machine Learning, Deep Learning, Computer Vision, and Generative AI (LLMs).',
      fullDescription: 'Become an AI engineer with our cutting-edge training covering NumPy, Pandas, Scikit-Learn, PyTorch, Open-CV, LangChain, and OpenAI API integration. Gain hands-on practice building predictive models and AI agents.',
      overview: [
        'Data analysis with Pandas, NumPy, and Matplotlib/Seaborn visualization.',
        'Supervised & Unsupervised Machine Learning algorithms.',
        'Deep Learning fundamentals with PyTorch & Neural Networks.',
        'Building Generative AI applications with LangChain and Hugging Face.'
      ],
      prerequisites: [
        'Basic knowledge of Python syntax or programming fundamentals.',
        'High school level math & linear algebra basics.'
      ],
      careerOutcomes: [
        'AI / Machine Learning Engineer',
        'Data Scientist',
        'AI Prompt & Solution Architect'
      ],
      keyHighlights: [
        'Real Datasets from Kaggle & Industry',
        'Generative AI & LLM Fine-Tuning Labs',
        'Portfolio Projects on GitHub',
        'Mentorship by Lead AI Data Scientists'
      ],
      syllabus: [
        {
          title: 'Module 1: Data Analytics with NumPy & Pandas',
          topics: ['Array Manipulation', 'DataFrame Wrangling', 'Data Cleaning & Preprocessing', 'Exploratory Data Analysis (EDA)']
        },
        {
          title: 'Module 2: Machine Learning Algorithms',
          topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'K-Means Clustering', 'Model Evaluation & Metrics']
        },
        {
          title: 'Module 3: Neural Networks & Deep Learning',
          topics: ['Perceptrons & Backpropagation', 'PyTorch Framework', 'CNNs for Computer Vision', 'RNNs for Time Series']
        },
        {
          title: 'Module 4: Generative AI & Large Language Models',
          topics: ['Transformer Architecture Basics', 'LangChain Framework', 'RAG (Retrieval-Augmented Generation)', 'Building Custom AI Chatbots']
        }
      ],
      upcomingBatches: [
        { startDate: 'Next Week', timing: '7:00 AM - 9:00 AM', mode: 'Physical', status: 'Filling Fast' }
      ],
      icon: 'robot'
    },
    {
      id: 'flutter-crossplatform-mobile',
      slug: 'flutter-crossplatform-mobile',
      title: 'Flutter & Dart Mobile App Development',
      subtitle: 'Build Cross-Platform iOS & Android Apps with a Single Codebase',
      category: 'mobile',
      categoryLabel: 'Mobile App Development',
      tag: 'Hot',
      badgeColor: 'blue',
      duration: '3 Months',
      mode: 'Physical & Online',
      level: 'Beginner to Intermediate',
      rating: 4.85,
      ratingCount: 220,
      studentsCount: 880,
      price: 24000,
      originalPrice: 30000,
      discountBadge: '20% OFF',
      shortDescription: 'Master Google’s Flutter SDK and Dart programming to create beautifully styled, native-performing mobile applications for iOS and Android.',
      fullDescription: 'Flutter is the industry choice for rapid mobile app development. This course teaches Dart OOP, Flutter UI widgets, state management (Bloc & Provider), REST API integration, Firebase backend, and App Store / Google Play publishing.',
      overview: [
        'Dart programming language core & OOP principles.',
        'Flutter responsive UI layout creation with custom animations.',
        'State management using BLoC pattern and Provider.',
        'Firebase integration (Authentication, Firestore, Push Notifications).'
      ],
      prerequisites: ['Basic programming knowledge in any language (C, Java, Python or JS).'],
      careerOutcomes: ['Flutter Developer', 'Cross-Platform Mobile Engineer', 'iOS/Android App Developer'],
      keyHighlights: ['Publish App to Google Play Store', 'Firebase Real-time Backend Project', 'UI Design Conversion to Code'],
      syllabus: [
        { title: 'Module 1: Dart Fundamentals & Async Programming', topics: ['Variables, Lists & Maps', 'Functions & OOP', 'Futures & Streams'] },
        { title: 'Module 2: Flutter Layouts & Custom Widgets', topics: ['Material & Cupertino Widgets', 'Form Handling', 'Custom Animations'] },
        { title: 'Module 3: State Management (BLoC & Provider)', topics: ['Stateful vs Stateless', 'Provider Pattern', 'BLoC Architecture & Events'] },
        { title: 'Module 4: API Integration & Firebase', topics: ['HTTP Requests & JSON Parsing', 'Firebase Auth & Cloud Firestore', 'Push Notifications'] }
      ],
      upcomingBatches: [
        { startDate: 'Next Month 5th', timing: '4:00 PM - 6:00 PM', mode: 'Physical', status: 'Available' }
      ],
      icon: 'mobile'
    },
    {
      id: 'devops-cloud-aws-kubernetes',
      slug: 'devops-cloud-aws-kubernetes',
      title: 'DevOps & Cloud Engineering (AWS & Docker)',
      subtitle: 'Automate Deployments with CI/CD, Kubernetes, Terraform & AWS',
      category: 'security-devops',
      categoryLabel: 'Security & DevOps',
      tag: 'Job-ready',
      badgeColor: 'gold',
      duration: '3 Months',
      mode: 'Physical & Online',
      level: 'Intermediate to Advanced',
      rating: 4.9,
      ratingCount: 310,
      studentsCount: 760,
      price: 30000,
      originalPrice: 38000,
      discountBadge: '21% OFF',
      shortDescription: 'Master modern cloud infrastructure automation with Linux, Docker, Kubernetes, Jenkins, Terraform, Ansible, and Amazon Web Services.',
      fullDescription: 'DevOps engineers bridge software development and IT operations. Gain hands-on practice setting up automated CI/CD pipelines, containerizing microservices, and provisioning cloud infrastructure as code (IaC).',
      overview: [
        'Linux System Administration & Shell Scripting.',
        'Containerization with Docker & Container Orchestration with Kubernetes.',
        'Infrastructure as Code (IaC) with Terraform & Configuration Management with Ansible.',
        'AWS Cloud Services (EC2, S3, RDS, IAM, EKS, VPC).'
      ],
      prerequisites: ['Basic networking concepts and familiarity with Linux CLI.'],
      careerOutcomes: ['DevOps Engineer', 'Cloud Systems Architect', 'Site Reliability Engineer (SRE)'],
      keyHighlights: ['Automated Production CI/CD Pipeline Build', 'AWS Hands-on Cloud Labs', 'Kubernetes Cluster Management'],
      syllabus: [
        { title: 'Module 1: Linux Admin & Shell Scripting', topics: ['File Permissions & User Mgmt', 'Bash Scripting', 'Networking & SSH'] },
        { title: 'Module 2: Docker Containerization', topics: ['Dockerfiles & Images', 'Multi-stage Builds', 'Docker Compose'] },
        { title: 'Module 3: Kubernetes Container Orchestration', topics: ['Pods, Deployments, Services', 'Ingress Controllers', 'Helm Charts'] },
        { title: 'Module 4: AWS Cloud & CI/CD Pipelines', topics: ['AWS Core Infrastructure', 'Jenkins Pipelines', 'Terraform IaC Setup'] }
      ],
      upcomingBatches: [
        { startDate: 'Next Monday', timing: '6:30 AM - 8:30 AM', mode: 'Online', status: 'Filling Fast' }
      ],
      icon: 'cloud-server'
    },
    {
      id: 'cyber-security-ethical-hacking',
      slug: 'cyber-security-ethical-hacking',
      title: 'Cybersecurity & Ethical Hacking',
      subtitle: 'Vulnerability Assessment, Network Defense & SOC Analyst Skills',
      category: 'security-devops',
      categoryLabel: 'Security & DevOps',
      tag: 'Hot',
      badgeColor: 'red',
      duration: '3.5 Months',
      mode: 'Physical & Online',
      level: 'Beginner to Intermediate',
      rating: 4.92,
      ratingCount: 280,
      studentsCount: 690,
      price: 29000,
      originalPrice: 36000,
      discountBadge: '19% OFF',
      shortDescription: 'Learn essential cybersecurity fundamentals, penetration testing techniques, network packet analysis, and SOC monitoring.',
      fullDescription: 'Protect organizational assets from cyber threats. Learn Kali Linux toolkits, Wireshark, Metasploit, web application security (OWASP Top 10), and SOC log monitoring.',
      overview: [
        'Network fundamentals, TCP/IP, and Packet Analysis using Wireshark.',
        'System vulnerability assessment and Penetration Testing methodologies.',
        'Web application security auditing based on OWASP Top 10 vulnerabilities.',
        'SIEM tools, Log Analysis, and Incident Response.'
      ],
      prerequisites: ['Basic understanding of computer networks and operating systems.'],
      careerOutcomes: ['Cybersecurity Analyst', 'Junior Penetration Tester', 'SOC Analyst L1'],
      keyHighlights: ['Hands-on Kali Linux Virtual Labs', 'CTF (Catch the Flag) Challenges', 'OWASP Security Audit Portfolio'],
      syllabus: [
        { title: 'Module 1: Networking & Kali Linux Setup', topics: ['OSI Model & Port Scanning', 'Wireshark Sniffing', 'Kali Linux Basics'] },
        { title: 'Module 2: Vulnerability Assessment & Pen Testing', topics: ['Nmap Reconnaissance', 'Metasploit Exploitation', 'Privilege Escalation'] },
        { title: 'Module 3: Web Application Security (OWASP Top 10)', topics: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'CSRF & Broken Auth'] }
      ],
      upcomingBatches: [
        { startDate: '10th of Next Month', timing: '4:00 PM - 6:00 PM', mode: 'Physical', status: 'Available' }
      ],
      icon: 'shield-check'
    },
    {
      id: 'java-full-stack-spring-boot',
      slug: 'java-full-stack-spring-boot',
      title: 'Java Full Stack Development (Spring Boot & Angular)',
      subtitle: 'Build Enterprise Applications with Java 17, Spring Boot & Angular',
      category: 'web-dev',
      categoryLabel: 'Web & Software Development',
      tag: 'Job-ready',
      badgeColor: 'gold',
      duration: '4 Months',
      mode: 'Physical & Online',
      level: 'Beginner to Advanced',
      rating: 4.88,
      ratingCount: 390,
      studentsCount: 1350,
      price: 27000,
      originalPrice: 34000,
      discountBadge: '20% OFF',
      shortDescription: 'Master enterprise Java programming, Spring Boot microservices, Hibernate JPA, MySQL database, and Angular frontend framework.',
      fullDescription: 'Java remains the top choice for financial, banking, and enterprise enterprise software worldwide. Learn core Java, OOP, Spring Boot REST APIs, Security, JPA/Hibernate, and Angular integration.',
      overview: [
        'Core Java 17, OOPs concepts, Collections Framework, Streams API.',
        'Spring Boot architecture, Dependency Injection, RESTful APIs.',
        'Hibernate ORM & Spring Data JPA with MySQL / Oracle DB.',
        'Angular frontend components, services, RxJS, and routing.'
      ],
      prerequisites: ['Elementary understanding of programming concepts.'],
      careerOutcomes: ['Enterprise Java Developer', 'Full-Stack Spring Boot & Angular Engineer', 'Backend Java Developer'],
      keyHighlights: ['Banking / E-Commerce System Capstone Project', 'Microservices Architecture', 'Industry Internship Guidance'],
      syllabus: [
        { title: 'Module 1: Core Java 17 & OOP Fundamentals', topics: ['Data Types & Syntax', 'Inheritance & Interfaces', 'Collections & Streams API'] },
        { title: 'Module 2: Spring Boot Microservices', topics: ['Spring Core & DI', 'REST Controllers', 'Spring Security & JWT'] },
        { title: 'Module 3: Database & Hibernate ORM', topics: ['Spring Data JPA', 'MySQL Querying', 'Transaction Management'] },
        { title: 'Module 4: Angular Frontend Integration', topics: ['Angular Components & Directives', 'RxJS Services', 'HTTP Client Integration'] }
      ],
      upcomingBatches: [
        { startDate: 'Next Monday', timing: '11:00 AM - 1:00 PM', mode: 'Physical', status: 'Filling Fast' }
      ],
      icon: 'coffee'
    },
    {
      id: 'digital-marketing-360-ai',
      slug: 'digital-marketing-360-ai',
      title: 'Digital Marketing 360° with AI Tools',
      subtitle: 'Master SEO, Meta Ads, Google Ads, Content Strategy & AI Automation',
      category: 'marketing',
      categoryLabel: 'Digital Marketing',
      tag: 'Popular',
      badgeColor: 'blue',
      duration: '2.5 Months',
      mode: 'Physical & Online',
      level: 'Beginner Friendly',
      rating: 4.82,
      ratingCount: 260,
      studentsCount: 1600,
      price: 18000,
      originalPrice: 22000,
      discountBadge: '18% OFF',
      shortDescription: 'Drive measurable business growth through Search Engine Optimization (SEO), Social Media Marketing (SMM), Performance Ads, and AI content creation.',
      fullDescription: 'Digital marketing is essential for modern business. Learn keyword research, technical SEO, Facebook/Instagram Ad Manager, Google Search & Display Ads, Google Analytics 4 (GA4), and ChatGPT marketing automation.',
      overview: [
        'On-Page, Off-Page, and Technical SEO strategies.',
        'Social Media Marketing & Paid Campaign Execution (Meta & LinkedIn Ads).',
        'Google Ads Search, Display, and Video Campaign Setup.',
        'AI Tools for Content Writing, Graphic Creation, and Copywriting.'
      ],
      prerequisites: ['Basic internet browsing and social media awareness.'],
      careerOutcomes: ['Digital Marketing Specialist', 'SEO Manager', 'Social Media Strategist', 'Performance Marketer'],
      keyHighlights: ['Manage Live Ad Budgets', 'Google Analytics 4 Certification Prep', 'AI Automation Workflows'],
      syllabus: [
        { title: 'Module 1: Search Engine Optimization (SEO)', topics: ['Keyword Research', 'Technical SEO Audit', 'Link Building Strategies'] },
        { title: 'Module 2: Meta Ads (Facebook & Instagram)', topics: ['Ad Account Setup', 'Audience Targeting', 'A/B Split Testing'] },
        { title: 'Module 3: Google Ads & Analytics 4', topics: ['Search Campaigns', 'Conversion Tracking', 'GA4 Reports'] }
      ],
      upcomingBatches: [
        { startDate: 'Every Monday', timing: '7:00 AM - 9:00 AM', mode: 'Physical', status: 'Available' }
      ],
      icon: 'line-chart'
    },
    {
      id: 'ui-ux-design-figma',
      slug: 'ui-ux-design-figma',
      title: 'UI/UX Design Masterclass with Figma',
      subtitle: 'Design User-Centered Mobile Apps & Websites with Interactive Prototypes',
      category: 'design',
      categoryLabel: 'Design & UI/UX',
      tag: 'New',
      badgeColor: 'purple',
      duration: '2.5 Months',
      mode: 'Physical & Online',
      level: 'No Experience Needed',
      rating: 4.87,
      ratingCount: 190,
      studentsCount: 720,
      price: 20000,
      originalPrice: 25000,
      discountBadge: '20% OFF',
      shortDescription: 'Learn UX research methodologies, wireframing, design systems, visual hierarchy, and high-fidelity interactive prototyping using Figma.',
      fullDescription: 'Great software starts with exceptional user experience. This course covers User Personas, Information Architecture, Wireframing, Figma Auto Layout, Design Tokens, Micro-interactions, and Design Handoff to developers.',
      overview: [
        'UX Research, User Interviews, and Persona creation.',
        'Wireframing (Low-fidelity to High-fidelity UI screens).',
        'Mastering Figma: Auto Layout, Components, Variants & Design Systems.',
        'Interactive Prototyping & Usability Testing.'
      ],
      prerequisites: ['Creativity and enthusiasm for digital design.'],
      careerOutcomes: ['UI/UX Designer', 'Product Designer', 'Interaction Designer', 'Figma Specialist'],
      keyHighlights: ['Build 2 Complete Case Studies for Behance/Dribbble', 'Design System Architecture', 'Developer Handoff Best Practices'],
      syllabus: [
        { title: 'Module 1: UX Principles & Research', topics: ['Design Thinking Process', 'User Journey Mapping', 'Information Architecture'] },
        { title: 'Module 2: Figma UI Essentials', topics: ['Frames & Auto Layout', 'Typography & Color Theory', 'Component Variants'] },
        { title: 'Module 3: Interactive Prototyping', topics: ['Smart Animate', 'Micro-interactions', 'User Usability Testing'] }
      ],
      upcomingBatches: [
        { startDate: '15th of Month', timing: '2:00 PM - 4:00 PM', mode: 'Physical', status: 'Available' }
      ],
      icon: 'layout'
    },
    {
      id: 'software-testing-qa-automation',
      slug: 'software-testing-qa-automation',
      title: 'Software Testing & QA Automation',
      subtitle: 'Manual Testing, Selenium WebDriver, Postman API Testing & JMeter',
      category: 'web-dev',
      categoryLabel: 'Web & Software Development',
      tag: 'Hot',
      badgeColor: 'red',
      duration: '2.5 Months',
      mode: 'Physical & Online',
      level: 'Beginner Friendly',
      rating: 4.8,
      ratingCount: 175,
      studentsCount: 610,
      price: 21000,
      originalPrice: 26000,
      discountBadge: '19% OFF',
      shortDescription: 'Ensure software quality through comprehensive manual test suites, API testing with Postman, and automated browser testing with Selenium.',
      fullDescription: 'Quality Assurance engineers safeguard application stability before public releases. Learn STLC, Test Case Writing, Bug Tracking (Jira), Postman API testing, and Selenium WebDriver automation in Java/Python.',
      overview: [
        'Software Testing Life Cycle (STLC) & Agile QA practices.',
        'Test Case Creation, Execution, and Bug Reporting in Jira.',
        'API Testing with Postman & REST Assured.',
        'Automation Testing with Selenium WebDriver & TestNG framework.'
      ],
      prerequisites: ['Basic computer knowledge and logical mindset.'],
      careerOutcomes: ['QA Automation Engineer', 'Manual Test Engineer', 'API Testing Specialist'],
      keyHighlights: ['Automate Live E-Commerce Testing Suite', 'Jira Defect Tracking', 'ISTQB Certification Guidance'],
      syllabus: [
        { title: 'Module 1: Manual Testing & STLC', topics: ['SDLC vs STLC', 'Test Plan & Execution', 'Jira Bug Reporting'] },
        { title: 'Module 2: API Testing with Postman', topics: ['HTTP Verbs & Status Codes', 'Postman Collections', 'API Automation Tests'] },
        { title: 'Module 3: Automation Testing with Selenium', topics: ['Locators & XPath', 'WebDriver Commands', 'TestNG Reporting'] }
      ],
      upcomingBatches: [
        { startDate: 'Next Week', timing: '7:00 AM - 9:00 AM', mode: 'Online', status: 'Filling Fast' }
      ],
      icon: 'check-square'
    },
    {
      id: 'advanced-data-science-r-python',
      slug: 'advanced-data-science-r-python',
      title: 'Data Science & Big Data Analytics',
      subtitle: 'Statistical Modeling, Power BI, SQL & Predictive Analytics',
      category: 'ai-data',
      categoryLabel: 'AI & Data Science',
      tag: 'Trending',
      badgeColor: 'purple',
      duration: '3.5 Months',
      mode: 'Physical & Online',
      level: 'Intermediate',
      rating: 4.91,
      ratingCount: 230,
      studentsCount: 540,
      price: 29000,
      originalPrice: 36000,
      discountBadge: '19% OFF',
      shortDescription: 'Extract actionable business insights from raw data using Advanced SQL, Power BI dashboards, Python statistical analytics, and predictive modeling.',
      fullDescription: 'Data is the core driver of modern enterprises. Learn how to transform structured and unstructured data into interactive executive dashboards and machine learning predictions.',
      overview: [
        'Advanced SQL Queries, Window Functions & CTEs.',
        'Interactive Dashboard creation with Microsoft Power BI.',
        'Statistical Data Analysis with Python.',
        'Building Data Pipelines and Predictive Dashboards.'
      ],
      prerequisites: ['Basic familiarity with Microsoft Excel or data tables.'],
      careerOutcomes: ['Data Analyst', 'Business Intelligence (BI) Developer', 'Data Engineer'],
      keyHighlights: ['Power BI Executive Dashboard Build', 'Real Financial & Retail Datasets', 'Industry Placement Guidance'],
      syllabus: [
        { title: 'Module 1: Advanced SQL for Analytics', topics: ['Joins, Subqueries', 'Window Functions', 'Performance Tuning'] },
        { title: 'Module 2: Power BI Visualization', topics: ['DAX Expressions', 'Data Modeling', 'Interactive Dashboards'] },
        { title: 'Module 3: Python Statistical Modeling', topics: ['Descriptive Statistics', 'Hypothesis Testing', 'Predictive Analytics'] }
      ],
      upcomingBatches: [
        { startDate: '1st of Month', timing: '5:00 PM - 7:00 PM', mode: 'Physical', status: 'Available' }
      ],
      icon: 'bar-chart'
    },
    {
      id: 'csharp-dotnet-core-masterclass',
      slug: 'csharp-dotnet-core-masterclass',
      title: 'C# & .NET Core Enterprise Masterclass',
      subtitle: 'Build Enterprise Web APIs & Microservices with .NET 8 & SQL Server',
      category: 'web-dev',
      categoryLabel: 'Web & Software Development',
      tag: 'Job-ready',
      badgeColor: 'gold',
      duration: '3.5 Months',
      mode: 'Physical & Online',
      level: 'Beginner to Intermediate',
      rating: 4.86,
      ratingCount: 210,
      studentsCount: 890,
      price: 25000,
      originalPrice: 31000,
      discountBadge: '19% OFF',
      shortDescription: 'Build high-speed enterprise Web APIs and cloud backend services using C# 12, ASP.NET Core 8, Entity Framework Core, and SQL Server.',
      fullDescription: 'Microsoft .NET Core is the back-bone of enterprise IT infrastructure worldwide. Master C# programming, Clean Architecture, CQRS pattern, Entity Framework ORM, and Azure deployment.',
      overview: [
        'Object-Oriented Programming with C# 12 and LINQ.',
        'ASP.NET Core Web API architecture with Clean Architecture pattern.',
        'Entity Framework Core (Code-First & Database-First migrations).',
        'Database design with Microsoft SQL Server.'
      ],
      prerequisites: ['Basic programming concepts.'],
      careerOutcomes: ['.NET Software Engineer', 'C# Backend Developer', 'Enterprise Solution Architect'],
      keyHighlights: ['Clean Architecture ERP Enterprise Project', 'Azure App Service Deployment', 'Resume & Interview Mentorship'],
      syllabus: [
        { title: 'Module 1: C# Language & LINQ', topics: ['Generics & Collections', 'LINQ Queries', 'Async/Await Pattern'] },
        { title: 'Module 2: ASP.NET Core Web API', topics: ['Controller Setup', 'Dependency Injection', 'JWT Security'] },
        { title: 'Module 3: EF Core & SQL Server', topics: ['Code-First Migrations', 'Stored Procedures', 'Performance Optimization'] }
      ],
      upcomingBatches: [
        { startDate: 'Next Month 10th', timing: '7:00 AM - 9:00 AM', mode: 'Physical', status: 'Available' }
      ],
      icon: 'windows'
    }
  ]);

  getCourses(): Observable<Course[]> {
    return this.coursesSubject.asObservable();
  }

  getFeaturedCourses(): Observable<Course[]> {
    return this.coursesSubject.pipe(
      map(courses => courses.filter(c => c.tag === 'Hot' || c.tag === 'Job-ready' || c.tag === 'Trending').slice(0, 6))
    );
  }

  getCourseByIdOrSlug(idOrSlug: string): Observable<Course | undefined> {
    return this.coursesSubject.pipe(
      map(courses => courses.find(c => c.id === idOrSlug || c.slug === idOrSlug))
    );
  }

  filterCourses(category: CourseCategory = 'all', searchTerm: string = ''): Observable<Course[]> {
    return this.coursesSubject.pipe(
      map(courses => {
        return courses.filter(course => {
          const matchesCategory = category === 'all' || course.category === category;
          const matchesSearch = !searchTerm ||
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
          return matchesCategory && matchesSearch;
        });
      })
    );
  }
}
