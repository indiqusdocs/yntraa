import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
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
    component: ComponentCreator('/docs', 'c41'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '629'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bdf'),
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
                path: '/docs/category/cloud-assure-services',
                component: ComponentCreator('/docs/category/cloud-assure-services', 'afe'),
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
                path: '/docs/category/managed-kubernetes',
                component: ComponentCreator('/docs/category/managed-kubernetes', '905'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managed-solutions',
                component: ComponentCreator('/docs/category/managed-solutions', 'df9'),
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
                path: '/docs/category/other-services-1',
                component: ComponentCreator('/docs/category/other-services-1', '381'),
                exact: true,
                sidebar: "sidebar2"
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
                path: '/docs/category/storage-as-a-service',
                component: ComponentCreator('/docs/category/storage-as-a-service', '72b'),
                exact: true,
                sidebar: "sidebar2"
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
                path: '/docs/FAQs/',
                component: ComponentCreator('/docs/FAQs/', '44a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/ManagedSolutions/ManagedDatabases',
                component: ComponentCreator('/docs/FAQs/ManagedSolutions/ManagedDatabases', '1ec'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/ManagedSolutions/ResiliencyAssuranceService',
                component: ComponentCreator('/docs/FAQs/ManagedSolutions/ResiliencyAssuranceService', 'c33'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/Other Services/CloudAssureServices/AssesmentandAdvisory',
                component: ComponentCreator('/docs/FAQs/Other Services/CloudAssureServices/AssesmentandAdvisory', '602'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/Other Services/CloudAssureServices/CloudAssure',
                component: ComponentCreator('/docs/FAQs/Other Services/CloudAssureServices/CloudAssure', '489'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/Other Services/CloudAssureServices/MigrationAssist',
                component: ComponentCreator('/docs/FAQs/Other Services/CloudAssureServices/MigrationAssist', 'ccc'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/Other Services/CloudAssureServices/ProfessionalService',
                component: ComponentCreator('/docs/FAQs/Other Services/CloudAssureServices/ProfessionalService', '119'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/Other Services/StorageasaService/File Storage',
                component: ComponentCreator('/docs/FAQs/Other Services/StorageasaService/File Storage', '17d'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/FAQs/Other Services/StorageasaService/ObjectStorage',
                component: ComponentCreator('/docs/FAQs/Other Services/StorageasaService/ObjectStorage', '9f5'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Knowledgebase/DifferenceBetweenL2NetworksandVPC',
                component: ComponentCreator('/docs/Knowledgebase/DifferenceBetweenL2NetworksandVPC', '755'),
                exact: true,
                sidebar: "sidebar3"
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
                path: '/docs/Knowledgebase/WorkingwithVPNConnectionsinaVPC',
                component: ComponentCreator('/docs/Knowledgebase/WorkingwithVPNConnectionsinaVPC', '62d'),
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
                path: '/docs/Subscribers/AccountCentre/AccountProfile',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/AccountProfile', '516'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/ServiceBalanceDetails',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/ServiceBalanceDetails', '295'),
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
                path: '/docs/Subscribers/AccountCentre/UnbilledCharges',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/UnbilledCharges', 'aa3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/UsageFeed',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/UsageFeed', 'c2b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AddingTeamMembers',
                component: ComponentCreator('/docs/Subscribers/AddingTeamMembers', 'e6b'),
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
                path: '/docs/Subscribers/Compute/Autoscale/Modifying Configurations',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/Modifying Configurations', '85a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/ViewingAutoscaleGroups',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/ViewingAutoscaleGroups', '9d2'),
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
                path: '/docs/Subscribers/Compute/ManagedKubernetes/BackupingandRestoringETCD',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/BackupingandRestoringETCD', '224'),
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
                path: '/docs/Subscribers/Compute/ManagedKubernetes/InstallingACSCSIDriveronK8sCluster',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/InstallingACSCSIDriveronK8sCluster', 'e31'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/InstallingPrometheusandGrafana',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/InstallingPrometheusandGrafana', '743'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/KubernetesDashboard',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/KubernetesDashboard', 'f4a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/ManagingKubernetesClusterOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/ManagingKubernetesClusterOperations', '993'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/ManagedKubernetes/ManagingNetworkRules',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/ManagingNetworkRules', '25e'),
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
                path: '/docs/Subscribers/Compute/ManagedKubernetes/ViewingKubernetesClusters',
                component: ComponentCreator('/docs/Subscribers/Compute/ManagedKubernetes/ViewingKubernetesClusters', '465'),
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
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/CreatingLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/CreatingLinuxInstances', '261'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ManagingAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ManagingAlerts', '4ca'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ManagingInstanceRestorePoints',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ManagingInstanceRestorePoints', '35f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ManagingLinuxInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ManagingLinuxInstanceOperations', '4a8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ManagingNetworks',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ManagingNetworks', '2e9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ManagingVolume',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ManagingVolume', 'bd3'),
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
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/Viewing Details of Linux Instances',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/Viewing Details of Linux Instances', 'b78'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ViewingGraphs',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ViewingGraphs', 'f90'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ViewingLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ViewingLinuxInstances', '494'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/OtherLinuxInstances/ViewingUtilisation',
                component: ComponentCreator('/docs/Subscribers/Compute/OtherLinuxInstances/ViewingUtilisation', '96d'),
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
                path: '/docs/Subscribers/Compute/RHELInstances/ManagingAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ManagingAlerts', '02f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ManagingInstanceRestorePoints',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ManagingInstanceRestorePoints', '221'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ManagingNetworks',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ManagingNetworks', '96c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ManagingRHELInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ManagingRHELInstanceOperations', '045'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ManagingVolume',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ManagingVolume', '710'),
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
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingDetailsofRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingDetailsofRHELInstances', '0c1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingGraphs',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingGraphs', 'a01'),
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
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingUtilisation',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingUtilisation', 'c81'),
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
                path: '/docs/Subscribers/Compute/WindowsInstances/Managing Instance Restore Points',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/Managing Instance Restore Points', 'd18'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ManagingAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ManagingAlerts', '06d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ManagingNetworks',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ManagingNetworks', '08d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ManagingVolume',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ManagingVolume', '326'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ManagingWindowInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ManagingWindowInstanceOperations', '4d1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ReconfiguringWindowInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ReconfiguringWindowInstances', 'd79'),
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
                path: '/docs/Subscribers/Compute/WindowsInstances/ViewingGraphs',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ViewingGraphs', 'a7c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ViewingUtilisation',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ViewingUtilisation', 'b78'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ViewingWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ViewingWindowsInstances', 'ee5'),
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
                path: '/docs/Subscribers/NetworkandSecurity/L2 Networks/AddinganL2Networks',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/L2 Networks/AddinganL2Networks', '2db'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/L2 Networks/ManagingL2NetworksOperations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/L2 Networks/ManagingL2NetworksOperations', '504'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/L2 Networks/ViewingL2Networks',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/L2 Networks/ViewingL2Networks', '19f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/AccessingtheAlteonLBIControlPanel',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/AccessingtheAlteonLBIControlPanel', '358'),
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
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ManagingInstanceRestorePoint',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ManagingInstanceRestorePoint', '1b3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ManagingLoadBalanceInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ManagingLoadBalanceInstanceOperations', '370'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ManagingNetworks',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ManagingNetworks', 'e69'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ReconfiguringLoadBalancerInstance',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ReconfiguringLoadBalancerInstance', '02c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ViewingLoadBalancerInstanceDetails',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ViewingLoadBalancerInstanceDetails', '922'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ViewingLoadBalancerInstances',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/LoadBalancerInstances/ViewingLoadBalancerInstances', 'caa'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingIPAddresses',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingIPAddresses', '658'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGatewayOperations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGatewayOperations', '41c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ViewingNATGatewayDetails',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ViewingNATGatewayDetails', 'd0f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ViewingNATGatewayInstances',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ViewingNATGatewayInstances', '8c0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/NATGateways/ViewingNATGateways',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/NATGateways/ViewingNATGateways', 'd45'),
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
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingAlerts',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingAlerts', '589'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingFirewallInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingFirewallInstanceOperations', '842'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingInstanceRestorePoints',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingInstanceRestorePoints', 'c5c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingVolume',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingVolume', '76e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/NetworkingManagement', '017'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ReconfiguringVirtualFirewall',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ReconfiguringVirtualFirewall', '202'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingGraphs',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingGraphs', '3e4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingUtilisation',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingUtilisation', '969'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingVirtualFirewallInstanceDetails',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingVirtualFirewallInstanceDetails', '54e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingVirtualFirewalls',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ViewingVirtualFirewalls', 'a0a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AddingIPv4AddressesandRules',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AddingIPv4AddressesandRules', '79c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/CreatingaVPC',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/CreatingaVPC', '887'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/CreatingSubnetsandTiers',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/CreatingSubnetsandTiers', 'ded'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ManagingAccessControlList',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ManagingAccessControlList', '857'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ManagingVPCInstances',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ManagingVPCInstances', '6d9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ReconfiguringaVPC',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ReconfiguringaVPC', 'a1a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ViewingVPCDetails',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ViewingVPCDetails', 'b1d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ViewingVPCs',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/ViewingVPCs', '318'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/VPCOperations',
                component: ComponentCreator('/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/VPCOperations', 'cca'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Other Services/ServicesOffered',
                component: ComponentCreator('/docs/Subscribers/Other Services/ServicesOffered', 'b02'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Other Services/SubscribingtoaService',
                component: ComponentCreator('/docs/Subscribers/Other Services/SubscribingtoaService', '62f'),
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
                path: '/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk', '64e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/CreatingDiskRestorePointsandVolume',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/CreatingDiskRestorePointsandVolume', 'f72'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/CreatingRestorePointSchedules',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/CreatingRestorePointSchedules', '3fe'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/ManagingOperations',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/ManagingOperations', '622'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/ResizingtheBlockVolume',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/ResizingtheBlockVolume', 'd43'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/ViewingBlockVolumeDetails',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/ViewingBlockVolumeDetails', '33c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/ViewingBlockVolumes',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/ViewingBlockVolumes', 'dd6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/AddingObjectinBucket',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/AddingObjectinBucket', 'e15'),
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
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/DeletingObjectBucket',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/DeletingObjectBucket', '21d'),
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
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/ViewingObjectStorageBucket',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/ViewingObjectStorageBucket', '9fb'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBuckets/ViewingObjectStorageBucketDetails',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBuckets/ViewingObjectStorageBucketDetails', 'd11'),
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
                path: '/docs/Subscribers/ToolsandUtilities/ManagingSSHKeyPairs',
                component: ComponentCreator('/docs/Subscribers/ToolsandUtilities/ManagingSSHKeyPairs', '55e'),
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
