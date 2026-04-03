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
    component: ComponentCreator('/docs', '19f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '886'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ae9'),
            routes: [
              {
                path: '/docs/category/about-vpc-instances',
                component: ComponentCreator('/docs/category/about-vpc-instances', '210'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/account-centre',
                component: ComponentCreator('/docs/category/account-centre', '23a'),
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
                path: '/docs/category/cloud-assure',
                component: ComponentCreator('/docs/category/cloud-assure', '330'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/cloud-assure-1',
                component: ComponentCreator('/docs/category/cloud-assure-1', 'c6b'),
                exact: true,
                sidebar: "sidebar2"
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
                path: '/docs/category/firewall-instances',
                component: ComponentCreator('/docs/category/firewall-instances', '8bc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/l2-networks',
                component: ComponentCreator('/docs/category/l2-networks', 'f07'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/load-balancer-instances',
                component: ComponentCreator('/docs/category/load-balancer-instances', 'abc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managed-compute',
                component: ComponentCreator('/docs/category/managed-compute', '044'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/managed-databases',
                component: ComponentCreator('/docs/category/managed-databases', '91c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/managed-kubernetes',
                component: ComponentCreator('/docs/category/managed-kubernetes', '905'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managed-security',
                component: ComponentCreator('/docs/category/managed-security', '2e6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managed-solutions',
                component: ComponentCreator('/docs/category/managed-solutions', 'd2e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managed-storage',
                component: ComponentCreator('/docs/category/managed-storage', 'b3f'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/managing-nat-gateways',
                component: ComponentCreator('/docs/category/managing-nat-gateways', '0d2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/miscellaneous',
                component: ComponentCreator('/docs/category/miscellaneous', 'd7b'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/monitoring-and-usage',
                component: ComponentCreator('/docs/category/monitoring-and-usage', '227'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/nat-gateways',
                component: ComponentCreator('/docs/category/nat-gateways', '049'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/network-and-security',
                component: ComponentCreator('/docs/category/network-and-security', '4e1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/object-storage-buckets',
                component: ComponentCreator('/docs/category/object-storage-buckets', '425'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/other-linux-instances',
                component: ComponentCreator('/docs/category/other-linux-instances', '0c0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/other-services',
                component: ComponentCreator('/docs/category/other-services', 'eb7'),
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
                path: '/docs/category/tools-and-utilities',
                component: ComponentCreator('/docs/category/tools-and-utilities', '6e6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/virtual-firewalls',
                component: ComponentCreator('/docs/category/virtual-firewalls', '453'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/virtual-private-clouds',
                component: ComponentCreator('/docs/category/virtual-private-clouds', '733'),
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
                path: '/docs/FAQs/CloudAssure/',
                component: ComponentCreator('/docs/FAQs/CloudAssure/', 'ae2'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/CloudAssure/AssesmentandAdvisory',
                component: ComponentCreator('/docs/FAQs/CloudAssure/AssesmentandAdvisory', '101'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/CloudAssure/MigrationAssist',
                component: ComponentCreator('/docs/FAQs/CloudAssure/MigrationAssist', '561'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/CloudAssure/ProfessionalService',
                component: ComponentCreator('/docs/FAQs/CloudAssure/ProfessionalService', '4ba'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/CloudAssure/ResiliencyAssuranceService',
                component: ComponentCreator('/docs/FAQs/CloudAssure/ResiliencyAssuranceService', 'a08'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/ManagedCompute/VirtualDesktop',
                component: ComponentCreator('/docs/FAQs/ManagedCompute/VirtualDesktop', '145'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/ManagedStorage/File Storage',
                component: ComponentCreator('/docs/FAQs/ManagedStorage/File Storage', '836'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/Miscellaneous/FAQs',
                component: ComponentCreator('/docs/FAQs/Miscellaneous/FAQs', '9d3'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/OtherServices/ManagedDatabases',
                component: ComponentCreator('/docs/FAQs/OtherServices/ManagedDatabases', '67e'),
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
                path: '/docs/ReleaseNotes/Ver1000',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1000', 'db9'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Address',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Address', 'cd2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Assets',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Assets', '5c5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Commercial',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Commercial', 'ea3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/CompanyDetails',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/CompanyDetails', 'e77'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Contacts',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Contacts', '116'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Dashboard',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Dashboard', 'ce3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/MonitoringandUsage/MonitoringBackup',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/MonitoringandUsage/MonitoringBackup', 'a77'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/MonitoringandUsage/MonitoringInfra',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/MonitoringandUsage/MonitoringInfra', 'e55'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/MonitoringandUsage/UsageDetails',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/MonitoringandUsage/UsageDetails', 'a22'),
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
                path: '/docs/Subscribers/AccountCentre/Profile',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Profile', '399'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/ResettingPassword',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/ResettingPassword', 'a27'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Services',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Services', 'ba2'),
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
                path: '/docs/Subscribers/AccountCentre/TeamMemberManagement',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/TeamMemberManagement', 'a69'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Tickets',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Tickets', '9f0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/CloudAssure/AssessmentandAdvisory',
                component: ComponentCreator('/docs/Subscribers/CloudAssure/AssessmentandAdvisory', 'af4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/CloudAssure/MigrationAssist',
                component: ComponentCreator('/docs/Subscribers/CloudAssure/MigrationAssist', 'f47'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/CloudAssure/MonitoringandNotifications',
                component: ComponentCreator('/docs/Subscribers/CloudAssure/MonitoringandNotifications', '411'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/CloudAssure/ProfessionalServices',
                component: ComponentCreator('/docs/Subscribers/CloudAssure/ProfessionalServices', 'aa5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/CloudAssure/SecurityandCompliance',
                component: ComponentCreator('/docs/Subscribers/CloudAssure/SecurityandCompliance', '98b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/AboutKubernetes',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/AboutKubernetes', '83a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/AboutKubernetesDashboard',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/AboutKubernetesDashboard', '53d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/AccessingaClusterusingtheCommandLine',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/AccessingaClusterusingtheCommandLine', '29d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/Accessingthekubernetesdashboard',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/Accessingthekubernetesdashboard', '5d1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/ClusterOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/ClusterOperations', 'd88'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/CreatingaKubernetesCluster',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/CreatingaKubernetesCluster', 'dbf'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/IngressNetworkingonKubernetesClusters',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/IngressNetworkingonKubernetesClusters', '767'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/Overview', 'a2b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/ScalingKubernetesClusters',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/ScalingKubernetesClusters', '318'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/ViewingKubernetesClusterDetails',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/ViewingKubernetesClusterDetails', '489'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/AboutLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/AboutLinuxInstances', 'a58'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ConnectingtoaLinuxInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ConnectingtoaLinuxInstance', 'b0b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/CreatingAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/CreatingAlerts', 'c58'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/CreatingLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/CreatingLinuxInstances', '261'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/NetworkingManagement', '49e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/Operations',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/Operations', 'c32'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/Overview', 'ec3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ReconfiguringLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ReconfiguringLinuxInstances', '953'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ViewingGraphsandUtilizationofLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ViewingGraphsandUtilizationofLinuxInstances', '914'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/VolumeManagement', 'f77'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/WorkingwithLinuxInstanceRestorePoints',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/WorkingwithLinuxInstanceRestorePoints', 'edc'),
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
                path: '/docs/Subscribers/Compute/RHELInstances/ConnectingtoaRHELInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ConnectingtoaRHELInstance', '363'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/CreatingAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/CreatingAlerts', 'ff9'),
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
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingGraphsandUtilisation',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingGraphsandUtilisation', 'cd3'),
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
                path: '/docs/Subscribers/Compute/RHELInstances/WorkingwithRestorePoints',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/WorkingwithRestorePoints', '784'),
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
                path: '/docs/Subscribers/Compute/WindowsInstances/ConnectingtoaWindowsInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ConnectingtoaWindowsInstance', '5b0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/CreatingAlertsonWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/CreatingAlertsonWindowsInstances', 'a87'),
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
                path: '/docs/Subscribers/Compute/WindowsInstances/WorkingwithWindowsInstanceRestorePoints',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/WorkingwithWindowsInstanceRestorePoints', 'd3a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/GettingStartedonYntraaCloud',
                component: ComponentCreator('/docs/Subscribers/GettingStartedonYntraaCloud', '4a5'),
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
                path: '/docs/Subscribers/ManagedSecurity/DDosProtection',
                component: ComponentCreator('/docs/Subscribers/ManagedSecurity/DDosProtection', '99a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSecurity/PrivilegedAccessManagement',
                component: ComponentCreator('/docs/Subscribers/ManagedSecurity/PrivilegedAccessManagement', '803'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSecurity/YottaSmartCSOC',
                component: ComponentCreator('/docs/Subscribers/ManagedSecurity/YottaSmartCSOC', '05b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSolutions/BackupandRecovery',
                component: ComponentCreator('/docs/Subscribers/ManagedSolutions/BackupandRecovery', '730'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSolutions/BareMetal',
                component: ComponentCreator('/docs/Subscribers/ManagedSolutions/BareMetal', '4ec'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSolutions/DevOpsasaService',
                component: ComponentCreator('/docs/Subscribers/ManagedSolutions/DevOpsasaService', 'ceb'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSolutions/LoadTestingasaService',
                component: ComponentCreator('/docs/Subscribers/ManagedSolutions/LoadTestingasaService', '171'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSolutions/ManagedDatabaseServices',
                component: ComponentCreator('/docs/Subscribers/ManagedSolutions/ManagedDatabaseServices', '31c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSolutions/MessagingServices',
                component: ComponentCreator('/docs/Subscribers/ManagedSolutions/MessagingServices', '50a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSolutions/ResiliencyAssuranceService',
                component: ComponentCreator('/docs/Subscribers/ManagedSolutions/ResiliencyAssuranceService', '3d2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/L2 Networks/AboutL2Networks',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/L2 Networks/AboutL2Networks', '8ea'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/L2 Networks/AddNewL2Networks',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/L2 Networks/AddNewL2Networks', 'f3a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/AboutLoadBalancerInstances',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/AboutLoadBalancerInstances', 'a56'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ActivatingtheNetScalerVPX',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ActivatingtheNetScalerVPX', 'b70'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/CreatingaLoadBalancerInstance',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/CreatingaLoadBalancerInstance', '517'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/AboutNATGateways',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/AboutNATGateways', 'fc5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/Instances',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/Instances', 'ffa'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/IPv4Addresses',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/IPv4Addresses', '217'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/Operations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/Operations', 'aac'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/Overview',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/Overview', '46c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways', 'd53'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/PortForwardingforVMviaVNF',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/PortForwardingforVMviaVNF', 'd08'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/PortForwardingwithPublicIP',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/PortForwardingwithPublicIP', 'e32'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/AccessingtheVFIControlPanel',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/AccessingtheVFIControlPanel', 'f76'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/AddingInstancestoaVFI-basedNetwork',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/AddingInstancestoaVFI-basedNetwork', '220'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/CreatingaVirtualFirewall',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/CreatingaVirtualFirewall', '484'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/DeployingVNFandVMWithinVNF',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/DeployingVNFandVMWithinVNF', '368'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/AboutFirewallInstances',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/AboutFirewallInstances', 'b06'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ConfiguringAlerts', '60e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/NetworkingManagement', '409'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/Operations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/Operations', 'a02'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/Overview', '02f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall', '138'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/Snapshots',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/Snapshots', '31a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilisation',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilisation', '844'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails', '543'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/FirewallInstances/VolumeManagement', '1ac'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds', 'dcc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs', 'bdd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers', '065'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC', '463'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets', 'a1f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances', '571'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/Overview', '3b1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring', 'a73'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations', '00d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC', '1c9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC', '84a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/Containers',
                component: ComponentCreator('/docs/Subscribers/OtherServices/Containers', 'c1c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/FileStorage',
                component: ComponentCreator('/docs/Subscribers/OtherServices/FileStorage', 'df8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/SigningIn',
                component: ComponentCreator('/docs/Subscribers/SigningIn', '122'),
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
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/WorkingwithDiskRestorePoints',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/WorkingwithDiskRestorePoints', '6b5'),
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
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/AboutYntraaObjectStorage',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/AboutYntraaObjectStorage', 'e12'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/CreatingObjectStorage',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/CreatingObjectStorage', 'a37'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/FeatureListandIntegrationDetails',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/FeatureListandIntegrationDetails', 'f60'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/FrequentlyAskedQuestions',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/FrequentlyAskedQuestions', '187'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/SystemRequirements',
                component: ComponentCreator('/docs/Subscribers/SystemRequirements', '4d4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ToolsandUtilities/AboutToolsandUtilities',
                component: ComponentCreator('/docs/Subscribers/ToolsandUtilities/AboutToolsandUtilities', 'f81'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ToolsandUtilities/AddingVPNGateways',
                component: ComponentCreator('/docs/Subscribers/ToolsandUtilities/AddingVPNGateways', '549'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ToolsandUtilities/ManagingCustomTemplatesandImages',
                component: ComponentCreator('/docs/Subscribers/ToolsandUtilities/ManagingCustomTemplatesandImages', 'c14'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ToolsandUtilities/ManagingInstanceandDiskRestorePoints',
                component: ComponentCreator('/docs/Subscribers/ToolsandUtilities/ManagingInstanceandDiskRestorePoints', '188'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ToolsandUtilities/ManagingSSHKeysandKeyPairsforLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/ToolsandUtilities/ManagingSSHKeysandKeyPairsforLinuxInstances', '7bc'),
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
