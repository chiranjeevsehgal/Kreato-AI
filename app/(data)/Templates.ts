export const Templates = [
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',

        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',

        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required: true
            },

        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',

        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required: true
            },

        ]
    },
    {
        name: 'API Documentation Generator',
        desc: 'Automatically generate clear and concise API documentation based on your endpoint descriptions.',
        category: 'Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920277.png',
        slug: 'api-doc-generator',
        aiPrompt: 'Generate detailed API documentation based on the given endpoint information. Include method, parameters, request/response examples, and potential error codes. Format the output in rich text editor format.',
        form: [
            {
                label: 'Enter API endpoint details (method, path, parameters, etc.)',
                field: 'textarea',
                name: 'apiDetails',
                required: true
            }
        ]
    },
    {
        name: 'Code Refactoring Suggestions',
        desc: 'Get AI-powered suggestions to improve your code structure and efficiency.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1005/1005141.png',
        category: 'Coding',
        slug: 'code-refactor-suggestions',
        aiPrompt: 'Analyze the given code snippet and provide suggestions for refactoring to improve readability, efficiency, and adherence to best practices. Give output in rich text editor format with code blocks where necessary.',
        form: [
            {
                label: 'Paste your code snippet here',
                field: 'textarea',
                name: 'codeSnippet',
                required: true
            },
            {
                label: 'Programming Language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'Technical Interview Question Generator',
        desc: 'Generate relevant technical interview questions based on specific IT roles and skills.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1584/1584892.png',
        category: 'Recruitment',
        slug: 'tech-interview-questions',
        aiPrompt: 'Generate 5-10 technical interview questions suitable for the specified IT role and skill level. Include a mix of conceptual and practical questions. Provide the output in rich text editor format.',
        form: [
            {
                label: 'IT Role (e.g., Frontend Developer, DevOps Engineer)',
                field: 'input',
                name: 'role',
                required: true
            },
            {
                label: 'Skill Level (e.g., Junior, Senior)',
                field: 'input',
                name: 'skillLevel',
                required: true
            }
        ]
    },
    {
        name: 'Tech Stack Recommendation',
        desc: 'Get AI-powered recommendations for the best tech stack based on your project requirements.',
        icon: 'https://cdn-icons-png.flaticon.com/128/8099/8099237.png',
        category: 'Development',
        slug: 'tech-stack-recommendation',
        aiPrompt: 'Based on the project requirements, recommend an appropriate tech stack. Include suggestions for frontend, backend, database, and any other relevant technologies. Provide a brief explanation for each recommendation. Give the output in rich text editor format.',
        form: [
            {
                label: 'Describe your project requirements',
                field: 'textarea',
                name: 'projectRequirements',
                required: true
            },
            {
                label: 'Any specific technologies you prefer or want to avoid?',
                field: 'input',
                name: 'preferences',
                required: false
            }
        ]
    },
    {
        name: 'Regex Pattern Generator',
        desc: 'Create regular expressions based on text pattern descriptions.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3097/3097958.png',
        category: 'Development',
        slug: 'regex-generator',
        aiPrompt: 'Generate a regular expression pattern based on the given description. Provide the regex, example matches, and a brief explanation. Output in rich text editor format.',
        form: [
            {
                label: 'Describe the text pattern you want to match',
                field: 'textarea',
                name: 'patternDescription',
                required: true
            }
        ]
    },
    {
        name: 'Code Comment Generator',
        desc: 'Automatically generate meaningful comments for your code to improve documentation.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1442/1442581.png',
        category: 'Coding',
        slug: 'code-comment-generator',
        aiPrompt: 'Generate appropriate comments for the given code snippet. Include function/method summaries, parameter descriptions, and any important notes. Output the commented code in rich text editor format with code blocks.',
        form: [
            {
                label: 'Paste your code snippet here',
                field: 'textarea',
                name: 'codeSnippet',
                required: true
            },
            {
                label: 'Programming Language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    },
    {
        name: 'Docker Command Helper',
        desc: 'Get help with Docker commands based on what you want to accomplish.',
        icon: 'https://cdn-icons-png.flaticon.com/128/5969/5969059.png',
        category: 'DevOps',
        slug: 'docker-command-helper',
        aiPrompt: 'Provide Docker command(s) and explanation based on the user\'s description of what they want to do. Include any necessary flags or options. Output in rich text editor format with code blocks.',
        form: [
            {
                label: 'Describe what you want to do with Docker',
                field: 'textarea',
                name: 'dockerTask',
                required: true
            }
        ]
    },
    {
        name: 'Git Command Assistant',
        desc: 'Get help with Git commands for various version control scenarios.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494748.png',
        category: 'Version Control',
        slug: 'git-command-assistant',
        aiPrompt: 'Provide Git command(s) and explanation based on the user\'s description of their version control scenario. Include any necessary flags or options. Output in rich text editor format with code blocks.',
        form: [
            {
                label: 'Describe your Git scenario or what you want to achieve',
                field: 'textarea',
                name: 'gitScenario',
                required: true
            }
        ]
    },
    {
        name: 'LinkedIn Profile Optimizer',
        desc: 'Enhance your LinkedIn profile to attract recruiters and showcase your skills effectively.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
        category: 'Career',
        slug: 'profile-optimizer',
        aiPrompt: 'Based on the provided information, generate optimized content for key sections of a LinkedIn profile tailored for professionals. Include suggestions for the headline, about section, and how to present skills and experiences. Output in rich text editor format.',
        form: [
            {
                label: 'Your current job title and main skills',
                field: 'input',
                name: 'currentRole',
                required: true
            },
            {
                label: 'Brief description of your experience and achievements',
                field: 'textarea',
                name: 'experience',
                required: true
            },
            {
                label: 'Target role or career goal',
                field: 'input',
                name: 'careerGoal',
                required: true
            }
        ]
    },
    {
        name: 'LinkedIn Post Generator',
        desc: 'Create engaging LinkedIn posts to showcase your IT projects and achievements.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6928/6928929.png',
        category: 'Social Media',
        slug: 'tech-project',
        aiPrompt: 'Generate a LinkedIn post that highlights a project or achievement. Include relevant hashtags and a call-to-action. The post should be engaging and showcasing skills. Output in rich text editor format.',
        form: [
            {
                label: 'Briefly describe your IT project or achievement',
                field: 'textarea',
                name: 'projectDescription',
                required: true
            },
            {
                label: 'Key technologies or skills used',
                field: 'input',
                name: 'technologies',
                required: true
            }
        ]
    },
    {
        name: 'Job Description Analyzer',
        desc: 'Analyze job descriptions on LinkedIn to highlight key requirements and suggest profile improvements.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3920/3920775.png',
        category: 'Career',
        slug: 'job-description-analyzer',
        aiPrompt: 'Analyze the given job description, extract key requirements and skills, and provide suggestions for tailoring a LinkedIn profile to match this job. Highlight any gaps in skills or experience. Output in rich text editor format.',
        form: [
            {
                label: 'Paste the job description here',
                field: 'textarea',
                name: 'jobDescription',
                required: true
            },
            {
                label: 'Your main skills and experiences',
                field: 'textarea',
                name: 'candidateProfile',
                required: true
            }
        ]
    },

    {
        name: 'Blog Content Generator',
        desc: 'An AI-powered tool that creates comprehensive blog post content based on your topic and outline. It generates engaging, well-structured articles to save you time and enhance your content marketing efforts.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {

        name: 'Youtube Description',
        desc: "Create compelling YouTube video descriptions with this AI tool. It generates concise, keyword-rich summaries with emojis to increase viewer engagement and improve your video's discoverability.",
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: "Boost your YouTube video's SEO with this AI-powered tag generator. It creates relevant, trending tags based on your video title and content, helping to increase your video's visibility in search results and suggested videos.",
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that automatically adds relevant emojis to your text, making it more engaging and expressive for social media or casual communication.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI-powered tool that creates engaging Instagram post content based on your keywords, helping you maintain a consistent and attractive social media presence.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',

        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: "An AI tool that generates relevant and trending Instagram hashtags based on your keywords, helping to increase your post's visibility and reach.",
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',

        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',

        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required: true
            },

        ]
    },


    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',

        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required: true
            },

        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',

        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            },

        ]
    },
];
