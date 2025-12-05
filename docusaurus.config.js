// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yntraa Cloud Technical Documentation',
  tagline: 'Welcome to Yntraa Cloud! A powerful platform designed to simplify and enhance the management of your cloud and network services.\nExplore our comprehensive User Guide, helpful FAQs, and detailed Knowledge Base to streamline operations, automate tasks, and optimize your digital services.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.yntraacloud.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap',
      rel: 'stylesheet',
    },
  ],
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
         sidebarPath: require.resolve('./sidebars.js'),
		  // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
    //      editUrl:
      //      'https://github.com/imyogeshs/yntraa',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
		  
		
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
    //      editUrl:
      //      'https://github.com/indiqus/docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        
		theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
plugins: [
[
require.resolve("@easyops-cn/docusaurus-search-local"),
{
	hashed: true,
},
],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
		docs: {
      sidebar: {
        autoCollapseCategories: true,
		hideable: true,

      },
	 
	  
    },
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: '',
		// hideOnScroll: true,
        logo: {
          alt: 'Yntraa Cloud',
          src: 'img/logo.svg',
		  srcDark: 'img/logo.svg',
        },
        items: [
          
//		  {
//            type: 'docSidebar',
//            sidebarId: 'sidebar1',
//            position: 'left',
//            label: 'Service Providers',
//			  },

		  {
            type: 'docSidebar',
            sidebarId: 'sidebar1',
            position: 'left',
            label: 'User Manual',
          },
		  	{
          type: 'docSidebar',
          sidebarId: 'sidebar2',
          position: 'left',
          label: 'FAQs',
			},
		  {
          type: 'docSidebar',
          sidebarId: 'sidebar3',
          position: 'left',
          label: 'Knowledge Base',
        },
	    	//  {
          //  type: 'docSidebar',
          //  sidebarId: 'sidebar4',
          //  position: 'left',
          //  label: 'Release Notes',
         // },
		  
	//	  {
    //      type: 'dropdown',
    //      label: 'APIs',
    //      position: 'left', // Can be 'left' or 'right'
    //      items: [
    //        {
    //          label: 'Management APIs',
    //         to: '/docs/APIs/apioverview',
    //        },
    //        {
    //          label: 'Global APIs',
	//		  href: 'https://swagger.apiculus.io',
    //        },
    //      ],
    //    },
		   
		  
		  {
          href: 'https://yntraacloud.ai', // Change to the desired link
          label: 'Yntraa Cloud Platform', // The label of your button
          position: 'right',
          className: 'button button--primary', // Add button classes here
        },
		  	  
		  ],
      },
    /*  footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Service Providers',
                to: '/docs/intro',
              },
			  			  {
                label: 'Release Notes',
                to: '/docs/category/release-notes',
              },
			  {
                label: 'Subscribers',
                to: '/docs/Subscribers/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apiculus, Inc.`,
      },
	  */
	  
	  /* Algolia Search is here.
	 
	  
	  algolia: {
      appId: "LR4IO8TKPQ",
      apiKey: "86496eb0535959e8d78cff40e68ba3b8",
      indexName: "apiculus",
      contextualSearch: true,
      searchParameters: {
      facetFilters: ["keywords"]
      }
    },
	*/
	
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
