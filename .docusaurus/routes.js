import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
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
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
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
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
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
    component: ComponentCreator('/docs', '238'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c65'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c80'),
            routes: [
              {
                path: '/docs/category/account-centre',
                component: ComponentCreator('/docs/category/account-centre', '23a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/autoscale',
                component: ComponentCreator('/docs/category/autoscale', '8f1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/block-volumes',
                component: ComponentCreator('/docs/category/block-volumes', '5ee'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/compute',
                component: ComponentCreator('/docs/category/compute', 'a28'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/details-of-block-volume',
                component: ComponentCreator('/docs/category/details-of-block-volume', '644'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/kubernetes',
                component: ComponentCreator('/docs/category/kubernetes', 'd1a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/linux-instances',
                component: ComponentCreator('/docs/category/linux-instances', '251'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/object-storage-bucket',
                component: ComponentCreator('/docs/category/object-storage-bucket', '3dd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/rhel-instances',
                component: ComponentCreator('/docs/category/rhel-instances', '163'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/storage',
                component: ComponentCreator('/docs/category/storage', '438'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/windows-instances',
                component: ComponentCreator('/docs/category/windows-instances', 'a38'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/FAQs',
                component: ComponentCreator('/docs/FAQs', 'ad9'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Knowledgebase/IPv4Networking',
                component: ComponentCreator('/docs/Knowledgebase/IPv4Networking', 'f85'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/Knowledgebase/WhatisaVirtualFirewallintheCloud',
                component: ComponentCreator('/docs/Knowledgebase/WhatisaVirtualFirewallintheCloud', '3e1'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/Knowledgebase/WhatisaVPC',
                component: ComponentCreator('/docs/Knowledgebase/WhatisaVPC', '467'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/Knowledgebase/WhatisInstances',
                component: ComponentCreator('/docs/Knowledgebase/WhatisInstances', 'ed1'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/Knowledgebase/WhatisIPAddressSubnetTierandCIDR',
                component: ComponentCreator('/docs/Knowledgebase/WhatisIPAddressSubnetTierandCIDR', '182'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/Subscribers/AccountCentre/AboutYntraaAccountCentre',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/AboutYntraaAccountCentre', '3c0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/InvoicesandCreditNotes',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/InvoicesandCreditNotes', '10d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Organisation-AccountProfile',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Organisation-AccountProfile', 'f65'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Payments',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Payments', '1a1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/StandardAgreements',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/StandardAgreements', '53c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/SubscriptionsandServices',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/SubscriptionsandServices', '4c9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/SupportandTickets',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/SupportandTickets', '875'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/TeamandChildUserManagement',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/TeamandChildUserManagement', '033'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/UnbilledCharges',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/UnbilledCharges', 'aa3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/WalletandTransactions',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/WalletandTransactions', '30d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/AboutAutoscale',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/AboutAutoscale', '784'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/CreatingAutoscaleGroups',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/CreatingAutoscaleGroups', '98d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/RequirementsforAutoscale',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/RequirementsforAutoscale', 'ce7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupInstances', '3fd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/AboutKubernetes',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/AboutKubernetes', '0bc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/AboutKubernetesDashboard',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/AboutKubernetesDashboard', 'de9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/AccessingaClusterusingtheCommandLine',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/AccessingaClusterusingtheCommandLine', '09b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/Accessingthekubernetesdashboard',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/Accessingthekubernetesdashboard', '982'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/ClusterOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/ClusterOperations', 'eb8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/CreatingaKubernetesCluster',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/CreatingaKubernetesCluster', 'a9b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/IngressNetworkingonKubernetesClusters',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/IngressNetworkingonKubernetesClusters', 'de9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/Overview', '2c3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/ScalingKubernetesClusters',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/ScalingKubernetesClusters', '026'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/ViewingKubernetesClusterDetails',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/ViewingKubernetesClusterDetails', '2f5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/AboutLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/AboutLinuxInstances', '909'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/AppOverlays',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/AppOverlays', '8c7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ConfiguringAlerts', '5e4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ConnectingtoaLinuxInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ConnectingtoaLinuxInstance', 'd01'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/CreatingLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/CreatingLinuxInstances', '7d2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/NetworkingManagement', '1c4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/Operations',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/Operations', 'c65'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/Overview', '90a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ProtectingLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ProtectingLinuxInstances', '49f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ReconfiguringLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ReconfiguringLinuxInstances', 'f93'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ViewingGraphsandUtilizationofLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ViewingGraphsandUtilizationofLinuxInstances', '593'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/VolumeManagement', '14a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/WorkingwithLinuxInstanceSnapshots',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/WorkingwithLinuxInstanceSnapshots', '567'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/AboutRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/AboutRHELInstances', '02c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ConfiguringAlerts', '710'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ConnectingtoaRHELInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ConnectingtoaRHELInstance', '363'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/CreatingRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/CreatingRHELInstances', 'b48'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/NetworkingManagement', 'eb7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/Overview', '398'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ProtectingRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ProtectingRHELInstances', '3b5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ReconfiguringRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ReconfiguringRHELInstances', '36f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/RHELInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/RHELInstanceOperations', 'dfc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingGraphsandUtilization',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingGraphsandUtilization', 'b53'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingRHELInstances', 'ce6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/VolumeManagement', '7c3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/WorkingwithSnapshots',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/WorkingwithSnapshots', '35d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/AboutWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/AboutWindowsInstances', 'ff7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances', 'b3d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ConnectingtoaWindowsInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ConnectingtoaWindowsInstance', '5b0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances', 'efe'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/NetworkingManagementonWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/NetworkingManagementonWindowsInstances', '495'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/Protection',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/Protection', '805'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ReconfiguringWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ReconfiguringWindowsInstances', '425'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ViewingDetailsofWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ViewingDetailsofWindowsInstances', '387'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ViewingGraphsandUtilisationofWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ViewingGraphsandUtilisationofWindowsInstances', '104'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/VolumeManagementwithWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/VolumeManagementwithWindowsInstances', 'b4d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/WindowsInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/WindowsInstanceOperations', '650'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/WorkingwithWindowsInstanceSnapshots',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/WorkingwithWindowsInstanceSnapshots', '17e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/intro',
                component: ComponentCreator('/docs/Subscribers/intro', 'b36'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/LoggingIn',
                component: ComponentCreator('/docs/Subscribers/LoggingIn', '3a5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ResettingPassword',
                component: ComponentCreator('/docs/Subscribers/ResettingPassword', '7ed'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/SigningUp',
                component: ComponentCreator('/docs/Subscribers/SigningUp', 'cb7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/AboutBlockVolumes',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/AboutBlockVolumes', 'b4d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk', '64e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Operations',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Operations', '198'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Overview',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Overview', 'd3d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/ResizetheBlockVolume',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/ResizetheBlockVolume', '011'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Schedules',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Schedules', 'e0e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/WorkingwithVolumeSnapshots',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/WorkingwithVolumeSnapshots', 'f77'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/UsingBlockVolumeswithKubernetes',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/UsingBlockVolumeswithKubernetes', 'a37'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes', '7a2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/AboutYntraaObjectStorage',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/AboutYntraaObjectStorage', '7d7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/CreatingObjectStorageBucket',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/CreatingObjectStorageBucket', '9ca'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/FeatureListandIntegrationDetails',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/FeatureListandIntegrationDetails', 'c6a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/FrequentlyAskedQuestions',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/FrequentlyAskedQuestions', 'e02'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/SystemRequirements',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/SystemRequirements', '7c8'),
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
