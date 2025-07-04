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
    component: ComponentCreator('/docs', 'a91'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4e8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '8d9'),
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
                path: '/docs/category/autoscale',
                component: ComponentCreator('/docs/category/autoscale', '8f1'),
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
                path: '/docs/category/dns-management',
                component: ComponentCreator('/docs/category/dns-management', '98a'),
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
                path: '/docs/category/load-balancer-instances',
                component: ComponentCreator('/docs/category/load-balancer-instances', 'abc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/managing-nat-gateways',
                component: ComponentCreator('/docs/category/managing-nat-gateways', '0d2'),
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
                path: '/docs/category/networking',
                component: ComponentCreator('/docs/category/networking', 'e66'),
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
                path: '/docs/category/wallet-and-transactions',
                component: ComponentCreator('/docs/category/wallet-and-transactions', 'bd9'),
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
                path: '/docs/LoggingIn',
                component: ComponentCreator('/docs/LoggingIn', '3e4'),
                exact: true,
                sidebar: "sidebar1"
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
                path: '/docs/Subscriber/AccountCentre/AboutOneYottaAccountCentre',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/AboutOneYottaAccountCentre', '99b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/InvoicesandCreditNotes',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/InvoicesandCreditNotes', 'e99'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/Organisation-AccountProfile',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/Organisation-AccountProfile', '664'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/Payments',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/Payments', 'aad'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/StandardAgreements',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/StandardAgreements', 'e3d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/SubscriptionsandServices',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/SubscriptionsandServices', 'f05'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/SupportandTickets',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/SupportandTickets', 'fd4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/TeamandChildUserManagement',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/TeamandChildUserManagement', 'e2d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/UnbilledCharges',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/UnbilledCharges', '567'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/AccountCentre/WalletandTransactions',
                component: ComponentCreator('/docs/Subscriber/AccountCentre/WalletandTransactions', '28c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Autoscale/AboutAutoscale',
                component: ComponentCreator('/docs/Subscriber/Compute/Autoscale/AboutAutoscale', 'c83'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Autoscale/CreatingAutoscaleGroups',
                component: ComponentCreator('/docs/Subscriber/Compute/Autoscale/CreatingAutoscaleGroups', '597'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Autoscale/RequirementsforAutoscale',
                component: ComponentCreator('/docs/Subscriber/Compute/Autoscale/RequirementsforAutoscale', '2ae'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs',
                component: ComponentCreator('/docs/Subscriber/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs', 'db3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/AboutKubernetes',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/AboutKubernetes', 'e5b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/AboutKubernetesDashboard',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/AboutKubernetesDashboard', '5b5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/AccessingaClusterusingtheCommandLine',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/AccessingaClusterusingtheCommandLine', 'e94'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/Accessingthekubernetesdashboard',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/Accessingthekubernetesdashboard', 'ab3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/ClusterOperations',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/ClusterOperations', '78b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/CreatingaKubernetesCluster',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/CreatingaKubernetesCluster', '4ce'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/IngressNetworkingonKubernetesClusters',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/IngressNetworkingonKubernetesClusters', '3e2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/Overview',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/Overview', '82c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/ScalingKubernetesClusters',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/ScalingKubernetesClusters', '12c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/Kubernetes/ViewingKubernetesClusterDetails',
                component: ComponentCreator('/docs/Subscriber/Compute/Kubernetes/ViewingKubernetesClusterDetails', '691'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/AboutLinuxInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/AboutLinuxInstances', '545'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/AppOverlays',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/AppOverlays', '4cc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/ConfiguringAlerts', '3f7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/ConnectingtoaLinuxInstance',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/ConnectingtoaLinuxInstance', 'c96'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/CreatingLinuxInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/CreatingLinuxInstances', '009'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/NetworkingManagement', '8b5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/Operations',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/Operations', 'a9b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/Overview',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/Overview', 'dd6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/ProtectingLinuxInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/ProtectingLinuxInstances', 'f4a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/ReconfiguringLinuxInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/ReconfiguringLinuxInstances', '1de'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/ViewingGraphsandUtilizationofLinuxInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/ViewingGraphsandUtilizationofLinuxInstances', 'e58'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/VolumeManagement', '3e3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/LinuxInstances/WorkingwithLinuxInstanceSnapshots',
                component: ComponentCreator('/docs/Subscriber/Compute/LinuxInstances/WorkingwithLinuxInstanceSnapshots', '193'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/AboutRHELInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/AboutRHELInstances', '3bf'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/ConfiguringAlerts', '1d0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/ConnectingtoaRHELInstance',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/ConnectingtoaRHELInstance', '4c3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/CreatingRHELInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/CreatingRHELInstances', '9b8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/NetworkingManagement', 'dd7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/Overview',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/Overview', 'f69'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/ProtectingRHELInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/ProtectingRHELInstances', '8ef'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/ReconfiguringRHELInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/ReconfiguringRHELInstances', 'abb'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/RHELInstanceOperations',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/RHELInstanceOperations', '288'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/ViewingGraphsandUtilization',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/ViewingGraphsandUtilization', '19c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/ViewingRHELInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/ViewingRHELInstances', '770'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/VolumeManagement', '1bc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/RHELInstances/WorkingwithSnapshots',
                component: ComponentCreator('/docs/Subscriber/Compute/RHELInstances/WorkingwithSnapshots', 'd91'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/AboutWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/AboutWindowsInstances', 'cd0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances', 'dbe'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/ConnectingtoaWindowsInstance',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/ConnectingtoaWindowsInstance', 'ebb'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/CreatingWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/CreatingWindowsInstances', '1b4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/NetworkingManagementonWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/NetworkingManagementonWindowsInstances', '17c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/Protection',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/Protection', '87a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/ReconfiguringWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/ReconfiguringWindowsInstances', 'a02'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/ViewingDetailsofWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/ViewingDetailsofWindowsInstances', 'f17'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/ViewingGraphsandUtilisationofWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/ViewingGraphsandUtilisationofWindowsInstances', '6c8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/VolumeManagementwithWindowsInstances',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/VolumeManagementwithWindowsInstances', '216'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/WindowsInstanceOperations',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/WindowsInstanceOperations', '436'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Compute/WindowsInstances/WorkingwithWindowsInstanceSnapshots',
                component: ComponentCreator('/docs/Subscriber/Compute/WindowsInstances/WorkingwithWindowsInstanceSnapshots', '44d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/DNSManagement/AboutDNSManagement',
                component: ComponentCreator('/docs/Subscriber/Networking/DNSManagement/AboutDNSManagement', '987'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/DNSManagement/LinkingDomainstoApiculusCloudConsole',
                component: ComponentCreator('/docs/Subscriber/Networking/DNSManagement/LinkingDomainstoApiculusCloudConsole', '8fd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/DNSManagement/ManagingDNSRecords',
                component: ComponentCreator('/docs/Subscriber/Networking/DNSManagement/ManagingDNSRecords', '3e1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/DNSManagement/SwitchingtoAnotherDNSProvider',
                component: ComponentCreator('/docs/Subscriber/Networking/DNSManagement/SwitchingtoAnotherDNSProvider', 'da3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/IPv4-basedNetworking/AboutIPv4-basedNetworking',
                component: ComponentCreator('/docs/Subscriber/Networking/IPv4-basedNetworking/AboutIPv4-basedNetworking', '53e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/IPv4-basedNetworking/EstablishingSite-to-SiteVPNBetweenTwoVPCs',
                component: ComponentCreator('/docs/Subscriber/Networking/IPv4-basedNetworking/EstablishingSite-to-SiteVPNBetweenTwoVPCs', '21d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/IPv4-basedNetworking/ManagingVPNGatewaysandSite-to-SiteVPN',
                component: ComponentCreator('/docs/Subscriber/Networking/IPv4-basedNetworking/ManagingVPNGatewaysandSite-to-SiteVPN', '84a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/IPv4-basedNetworking/UsingRemoteAccessVPNwithVPC',
                component: ComponentCreator('/docs/Subscriber/Networking/IPv4-basedNetworking/UsingRemoteAccessVPNwithVPC', 'f51'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/L2 Networks/AboutL2Networks',
                component: ComponentCreator('/docs/Subscriber/Networking/L2 Networks/AboutL2Networks', 'a1b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/L2 Networks/AddNewL2Networks',
                component: ComponentCreator('/docs/Subscriber/Networking/L2 Networks/AddNewL2Networks', 'd02'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/LoadBalancerInstances/AboutLoadBalancerInstances',
                component: ComponentCreator('/docs/Subscriber/Networking/LoadBalancerInstances/AboutLoadBalancerInstances', '9f3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/LoadBalancerInstances/ActivatingtheNetScalerVPX',
                component: ComponentCreator('/docs/Subscriber/Networking/LoadBalancerInstances/ActivatingtheNetScalerVPX', '1d1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance',
                component: ComponentCreator('/docs/Subscriber/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance', '456'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/AboutNATGateways',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/AboutNATGateways', '7c3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/Instances',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/Instances', 'd03'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/IPv4Addresses',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/IPv4Addresses', '0ff'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/Operations',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/Operations', '111'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/Overview',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/Overview', '679'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways', '521'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/PortForwardingforVMviaVNF',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/PortForwardingforVMviaVNF', '147'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/NATGateways/PortForwardingwithPublicIP',
                component: ComponentCreator('/docs/Subscriber/Networking/NATGateways/PortForwardingwithPublicIP', '9c9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/AccessingtheVFIControlPanel',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/AccessingtheVFIControlPanel', '80d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/AddingInstancestoaVFI-basedNetwork',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/AddingInstancestoaVFI-basedNetwork', '4c3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/CreatingaVirtualFirewall',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/CreatingaVirtualFirewall', 'f49'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/DeployingVNFandVMWithinVNF',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/DeployingVNFandVMWithinVNF', '091'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/AboutFirewallInstances',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/AboutFirewallInstances', 'd7a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ConfiguringAlerts', 'dbe'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/NetworkingManagement', '65d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/Operations',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/Operations', '06e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/Overview',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/Overview', '2e8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall', 'd22'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/Snapshots',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/Snapshots', 'a61'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilization',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilization', '6e2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails', 'c8b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualFirewall/FirewallInstances/VolumeManagement', 'e3c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds', '9a6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs', 'e2c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers', 'f8d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC', 'c3f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets', '274'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances', 'f83'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/Overview',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/Overview', '10e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring', 'd70'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations', '6ce'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC', '50f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscriber/Networking/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC',
                component: ComponentCreator('/docs/Subscriber/Networking/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC', '734'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/WalletandTransactions/',
                component: ComponentCreator('/docs/WalletandTransactions/', 'f6e'),
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
