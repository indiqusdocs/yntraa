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
    component: ComponentCreator('/docs', 'c95'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '99f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '20e'),
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
                path: '/docs/category/advance-services',
                component: ComponentCreator('/docs/category/advance-services', 'd40'),
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
                path: '/docs/category/ipv4-based-networking',
                component: ComponentCreator('/docs/category/ipv4-based-networking', '25a'),
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
                path: '/docs/category/l2-networks',
                component: ComponentCreator('/docs/category/l2-networks', 'f07'),
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
                path: '/docs/category/managed-compute',
                component: ComponentCreator('/docs/category/managed-compute', 'a17'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managed-compute-1',
                component: ComponentCreator('/docs/category/managed-compute-1', '94c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/managed-database',
                component: ComponentCreator('/docs/category/managed-database', 'c15'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managed-databases',
                component: ComponentCreator('/docs/category/managed-databases', '91c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/managed-network',
                component: ComponentCreator('/docs/category/managed-network', 'bbe'),
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
                path: '/docs/category/nat-gateways',
                component: ComponentCreator('/docs/category/nat-gateways', '049'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/networking',
                component: ComponentCreator('/docs/category/networking', 'e66'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/object-storage',
                component: ComponentCreator('/docs/category/object-storage', '7c0'),
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
                path: '/docs/Subscribers/AccountCentre/Commercial',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Commercial', 'ea3'),
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
                path: '/docs/Subscribers/AccountCentre/Organisation-AccountProfile',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Organisation-AccountProfile', 'f65'),
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
                path: '/docs/Subscribers/AdvanceServices/DevOpsasaService',
                component: ComponentCreator('/docs/Subscribers/AdvanceServices/DevOpsasaService', '203'),
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
                path: '/docs/Subscribers/CloudAssure/OptimisationService',
                component: ComponentCreator('/docs/Subscribers/CloudAssure/OptimisationService', '04b'),
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
                path: '/docs/Subscribers/CloudAssure/ResiliencyAssuranceService',
                component: ComponentCreator('/docs/Subscribers/CloudAssure/ResiliencyAssuranceService', '99a'),
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
                path: '/docs/Subscribers/Compute/LinuxInstances/WorkingwithLinuxInstanceRestorePoints',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/WorkingwithLinuxInstanceRestorePoints', '7be'),
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
                path: '/docs/Subscribers/ManagedCompute/BareMetal',
                component: ComponentCreator('/docs/Subscribers/ManagedCompute/BareMetal', 'b1b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedCompute/ContainerRegistry',
                component: ComponentCreator('/docs/Subscribers/ManagedCompute/ContainerRegistry', 'c20'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedCompute/VirtualDesktops',
                component: ComponentCreator('/docs/Subscribers/ManagedCompute/VirtualDesktops', '05a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/Backuphighavailabilityanddisaster',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/Backuphighavailabilityanddisaster', '562'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/introduction',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/introduction', '653'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/MDBaas',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/MDBaas', '50f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/Postprovisioning',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/Postprovisioning', 'ba8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/PreRequisites',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/PreRequisites', '0e3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/Scalingandconfigurationmanagement',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/Scalingandconfigurationmanagement', 'e48'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/servicedeprovisioning',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/servicedeprovisioning', 'c47'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/Serviceoverviewandarchitecture',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/Serviceoverviewandarchitecture', '2e7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedDatabase/Serviceprovisioning',
                component: ComponentCreator('/docs/Subscribers/ManagedDatabase/Serviceprovisioning', '791'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedNetwork/LoadBalancer',
                component: ComponentCreator('/docs/Subscribers/ManagedNetwork/LoadBalancer', '01c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/ManagedSecurity/EndPointSecurity',
                component: ComponentCreator('/docs/Subscribers/ManagedSecurity/EndPointSecurity', '935'),
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
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/AboutIPv4-basedNetworking',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/AboutIPv4-basedNetworking', 'bdd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/EstablishingSite-to-SiteVPNBetweenTwoVPCs',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/EstablishingSite-to-SiteVPNBetweenTwoVPCs', '860'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/ManagingVPNGatewaysandSite-to-SiteVPN',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/ManagingVPNGatewaysandSite-to-SiteVPN', 'cb0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/UsingRemoteAccessVPNwithVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/UsingRemoteAccessVPNwithVPC', '180'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/L2 Networks/AboutL2Networks',
                component: ComponentCreator('/docs/Subscribers/Networking/L2 Networks/AboutL2Networks', 'b06'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/L2 Networks/AddNewL2Networks',
                component: ComponentCreator('/docs/Subscribers/Networking/L2 Networks/AddNewL2Networks', '976'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/AboutNATGateways',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/AboutNATGateways', 'fa1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Instances',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Instances', '5cd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/IPv4Addresses',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/IPv4Addresses', '43f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Operations',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Operations', '435'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Overview',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Overview', 'bda'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways', 'fdf'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/PortForwardingforVMviaVNF',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/PortForwardingforVMviaVNF', '4ff'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/PortForwardingwithPublicIP',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/PortForwardingwithPublicIP', 'f43'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/AccessingtheVFIControlPanel',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/AccessingtheVFIControlPanel', '0ae'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/AddingInstancestoaVFI-basedNetwork',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/AddingInstancestoaVFI-basedNetwork', 'e77'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/CreatingaVirtualFirewall',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/CreatingaVirtualFirewall', '420'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/DeployingVNFandVMWithinVNF',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/DeployingVNFandVMWithinVNF', 'f4d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/AboutFirewallInstances',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/AboutFirewallInstances', '8b3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ConfiguringAlerts', 'c00'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/NetworkingManagement', '5bd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Operations',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Operations', '9be'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Overview', 'b62'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall', 'ebe'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Snapshots',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Snapshots', '6a1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilization',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilization', 'a9a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails', '7b7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/VolumeManagement', '031'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds', 'e46'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs', 'e7d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers', '5ed'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC', '8f2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets', '666'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances', '7ce'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Overview', '562'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring', '119'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations', '72f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC', '3e7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC', '1b3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/CDNasaService',
                component: ComponentCreator('/docs/Subscribers/OtherServices/CDNasaService', '11b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/CyberSecurityProfessionalServices',
                component: ComponentCreator('/docs/Subscribers/OtherServices/CyberSecurityProfessionalServices', '9f1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/DDosProtection',
                component: ComponentCreator('/docs/Subscribers/OtherServices/DDosProtection', '4a5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/GlobalCloudConnect',
                component: ComponentCreator('/docs/Subscribers/OtherServices/GlobalCloudConnect', 'f8c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/HostedInternetBandwidth',
                component: ComponentCreator('/docs/Subscribers/OtherServices/HostedInternetBandwidth', '805'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/HSMandKMS',
                component: ComponentCreator('/docs/Subscribers/OtherServices/HSMandKMS', '7e4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/LoadTestingasaService',
                component: ComponentCreator('/docs/Subscribers/OtherServices/LoadTestingasaService', '79c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/MessagingServices',
                component: ComponentCreator('/docs/Subscribers/OtherServices/MessagingServices', 'a1b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/MultiTenantBraaS',
                component: ComponentCreator('/docs/Subscribers/OtherServices/MultiTenantBraaS', 'ea4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/PrivilegedAccessManagement',
                component: ComponentCreator('/docs/Subscribers/OtherServices/PrivilegedAccessManagement', 'daf'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/SecurityTesting',
                component: ComponentCreator('/docs/Subscribers/OtherServices/SecurityTesting', 'b4a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/SIEM',
                component: ComponentCreator('/docs/Subscribers/OtherServices/SIEM', '489'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/UTMasaService',
                component: ComponentCreator('/docs/Subscribers/OtherServices/UTMasaService', 'fb1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/OtherServices/WAFasaService',
                component: ComponentCreator('/docs/Subscribers/OtherServices/WAFasaService', '3cd'),
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
                path: '/docs/Subscribers/Storage/ObjectStorage/AboutYntraaObjectStorage',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorage/AboutYntraaObjectStorage', '30b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorage/CreatingObjectStorage',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorage/CreatingObjectStorage', 'afc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorage/FeatureListandIntegrationDetails',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorage/FeatureListandIntegrationDetails', 'e67'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorage/FrequentlyAskedQuestions',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorage/FrequentlyAskedQuestions', '01c'),
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
