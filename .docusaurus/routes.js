import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '1b9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', 'dea'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '85c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '99a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2a3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '941'),
            routes: [
              {
                path: '/docs/BillingandWallet/AddingWalletBalance',
                component: ComponentCreator('/docs/BillingandWallet/AddingWalletBalance', '0fa'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/BillingandWallet/CreditVoucherBalance',
                component: ComponentCreator('/docs/BillingandWallet/CreditVoucherBalance', '0c2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/ai-endpoints',
                component: ComponentCreator('/docs/category/ai-endpoints', 'b82'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/ai-lab',
                component: ComponentCreator('/docs/category/ai-lab', 'd96'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/ai-workspace',
                component: ComponentCreator('/docs/category/ai-workspace', '284'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/bare-metal',
                component: ComponentCreator('/docs/category/bare-metal', '16c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/billing-and-wallet',
                component: ComponentCreator('/docs/category/billing-and-wallet', '093'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/dashboard',
                component: ComponentCreator('/docs/category/dashboard', '9d3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/deploy',
                component: ComponentCreator('/docs/category/deploy', 'e62'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/develop',
                component: ComponentCreator('/docs/category/develop', '32b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/kubernetes-cluster',
                component: ComponentCreator('/docs/category/kubernetes-cluster', '84f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/release-notes',
                component: ComponentCreator('/docs/category/release-notes', 'ff9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/serverless',
                component: ComponentCreator('/docs/category/serverless', 'd4f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/slurm-cluster',
                component: ComponentCreator('/docs/category/slurm-cluster', '456'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/team-and-support',
                component: ComponentCreator('/docs/category/team-and-support', '4eb'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/tickets',
                component: ComponentCreator('/docs/category/tickets', '3a2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/train',
                component: ComponentCreator('/docs/category/train', 'cc0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/users',
                component: ComponentCreator('/docs/category/users', '6d4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Dashboard/CreatingNewProject',
                component: ComponentCreator('/docs/Dashboard/CreatingNewProject', '816'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Dashboard/DefaultProject',
                component: ComponentCreator('/docs/Dashboard/DefaultProject', '134'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Deploy/AIEndpoints/CreatingNewAIEndpoints',
                component: ComponentCreator('/docs/Deploy/AIEndpoints/CreatingNewAIEndpoints', '991'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Deploy/AIEndpoints/ViewingAIEndpoints',
                component: ComponentCreator('/docs/Deploy/AIEndpoints/ViewingAIEndpoints', '152'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Deploy/Serverless/CreatingServerlessGPU',
                component: ComponentCreator('/docs/Deploy/Serverless/CreatingServerlessGPU', 'bfd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Deploy/Serverless/ViewingServerlessGPU',
                component: ComponentCreator('/docs/Deploy/Serverless/ViewingServerlessGPU', 'd6c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Develop/AI Lab/CreatingAILabInstance',
                component: ComponentCreator('/docs/Develop/AI Lab/CreatingAILabInstance', 'e66'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Develop/AI Lab/ViewingDetailsofAILabInstances',
                component: ComponentCreator('/docs/Develop/AI Lab/ViewingDetailsofAILabInstances', '32d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Develop/AI Workspace/CreatingNewAIWorkspace',
                component: ComponentCreator('/docs/Develop/AI Workspace/CreatingNewAIWorkspace', '0a7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Develop/AI Workspace/ViewingDetailsofAIWorkspace',
                component: ComponentCreator('/docs/Develop/AI Workspace/ViewingDetailsofAIWorkspace', 'ef5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'fdd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/LoggingIn',
                component: ComponentCreator('/docs/LoggingIn', '3e4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ReleaseNotes/Ver1100',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1100', 'a27'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/ReleaseNotes/Ver1110',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1110', 'eab'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/ResettingPassword',
                component: ComponentCreator('/docs/ResettingPassword', 'afa'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/SigningUp',
                component: ComponentCreator('/docs/SigningUp', 'a09'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/TeamandSupport/Tickets/CreatingNewTicket',
                component: ComponentCreator('/docs/TeamandSupport/Tickets/CreatingNewTicket', 'f7f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/TeamandSupport/Tickets/ViewingTicketStatus',
                component: ComponentCreator('/docs/TeamandSupport/Tickets/ViewingTicketStatus', '4f0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/TeamandSupport/Users/CreatingNewUser',
                component: ComponentCreator('/docs/TeamandSupport/Users/CreatingNewUser', '769'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Train/BareMetal/CreatingBareMetalServer',
                component: ComponentCreator('/docs/Train/BareMetal/CreatingBareMetalServer', '6ef'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Train/BareMetal/ViewingBareMetalServer',
                component: ComponentCreator('/docs/Train/BareMetal/ViewingBareMetalServer', '779'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Train/KubernetesCluster/CreatingKubernetesCluster',
                component: ComponentCreator('/docs/Train/KubernetesCluster/CreatingKubernetesCluster', '700'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Train/KubernetesCluster/ViewingKubernetesCluster',
                component: ComponentCreator('/docs/Train/KubernetesCluster/ViewingKubernetesCluster', '6bc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Train/SlurmCluster/CreatingSlurmCluster',
                component: ComponentCreator('/docs/Train/SlurmCluster/CreatingSlurmCluster', '27b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Train/SlurmCluster/ViewingSlurmCluster',
                component: ComponentCreator('/docs/Train/SlurmCluster/ViewingSlurmCluster', 'daa'),
                exact: true,
                sidebar: "sidebar1"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
