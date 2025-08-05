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
    component: ComponentCreator('/docs', '357'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '056'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4d5'),
            routes: [
              {
                path: '/docs/AboutServiceProviderAdministration/AdminConsole',
                component: ComponentCreator('/docs/AboutServiceProviderAdministration/AdminConsole', 'ebe'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/AboutServiceProviderAdministration/ISVConsoles',
                component: ComponentCreator('/docs/AboutServiceProviderAdministration/ISVConsoles', 'b5a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/AboutServiceProviderAdministration/ManagingSupportTickets',
                component: ComponentCreator('/docs/AboutServiceProviderAdministration/ManagingSupportTickets', 'c70'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/AboutServiceProviderAdministration/MetabaseBusinessIntelligenceDashboards',
                component: ComponentCreator('/docs/AboutServiceProviderAdministration/MetabaseBusinessIntelligenceDashboards', '28f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/AboutServiceProviderAdministration/OTRSTicketingandServiceInterface',
                component: ComponentCreator('/docs/AboutServiceProviderAdministration/OTRSTicketingandServiceInterface', '499'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/AboutServiceProviderAdministration/Role-basedAccessonAdminConsole',
                component: ComponentCreator('/docs/AboutServiceProviderAdministration/Role-basedAccessonAdminConsole', 'b7b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/AboutServiceProviderAdministration/ZabbixDashboardandNMS',
                component: ComponentCreator('/docs/AboutServiceProviderAdministration/ZabbixDashboardandNMS', 'cab'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/AboutEstimates',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/AboutEstimates', '20a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/AboutInvoice',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/AboutInvoice', '26b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/AddingOne-timeChargesandDiscounts',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/AddingOne-timeChargesandDiscounts', '551'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/CreatingaCreditNoteAgainstanInvoice',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/CreatingaCreditNoteAgainstanInvoice', 'f52'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/CreatingCreditNotesinBulk',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/CreatingCreditNotesinBulk', 'a0b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/DeactivatingaSubscription',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/DeactivatingaSubscription', '0a1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/Overview',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/Overview', '4bb'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/RecordingTaxDeductions',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/RecordingTaxDeductions', '560'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/RecordingTransactionsandOfflinePayments',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/RecordingTransactionsandOfflinePayments', 'ed3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/ResendingCreditNotes',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/ResendingCreditNotes', 'fc6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/ReversingTransactions',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/ReversingTransactions', 'eac'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/UpdatingSubscriptionCharges',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/UpdatingSubscriptionCharges', '121'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/ViewingandDownloadingCreditNotes',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/ViewingandDownloadingCreditNotes', '502'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/ViewinganddownloadingInvoices',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/ViewinganddownloadingInvoices', '6c4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/ViewingReceiptsandAcknowledgments',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/ViewingReceiptsandAcknowledgments', '904'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/ViewingTaxDeductions',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/ViewingTaxDeductions', '644'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/BillingandFinancials/ViewingTransactionDetails',
                component: ComponentCreator('/docs/Administration/BillingandFinancials/ViewingTransactionDetails', 'a8c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ManagingQuickPlans/AddingQuickPlanstoaCatalogue',
                component: ComponentCreator('/docs/Administration/ManagingQuickPlans/AddingQuickPlanstoaCatalogue', '8bc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ManagingQuickPlans/CreatingQuickPlans',
                component: ComponentCreator('/docs/Administration/ManagingQuickPlans/CreatingQuickPlans', 'ab9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ManagingQuickPlans/SettingUpaQuickPlanCategory',
                component: ComponentCreator('/docs/Administration/ManagingQuickPlans/SettingUpaQuickPlanCategory', 'aa1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/MarketingManagement/Overview',
                component: ComponentCreator('/docs/Administration/MarketingManagement/Overview', '5f6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/MarketingManagement/WorkingwithCoupons',
                component: ComponentCreator('/docs/Administration/MarketingManagement/WorkingwithCoupons', '8bd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/MarketingManagement/WorkingwithDiscountCodes',
                component: ComponentCreator('/docs/Administration/MarketingManagement/WorkingwithDiscountCodes', '4ea'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ResellerManagement/CreatingandUpdatingResellers',
                component: ComponentCreator('/docs/Administration/ResellerManagement/CreatingandUpdatingResellers', '2c1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ResellerManagement/ManagingBillingforResellers',
                component: ComponentCreator('/docs/Administration/ResellerManagement/ManagingBillingforResellers', '6b5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ResellerManagement/ManagingReseller-taggedAccounts',
                component: ComponentCreator('/docs/Administration/ResellerManagement/ManagingReseller-taggedAccounts', 'a85'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ResellerManagement/Overview',
                component: ComponentCreator('/docs/Administration/ResellerManagement/Overview', '95a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/CustomCatalogues/AssigningCustomCataloguestoCustomers',
                component: ComponentCreator('/docs/Administration/ServicesManagement/CustomCatalogues/AssigningCustomCataloguestoCustomers', '72d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/CustomCatalogues/CreatingaCustomCatalogue',
                component: ComponentCreator('/docs/Administration/ServicesManagement/CustomCatalogues/CreatingaCustomCatalogue', '69c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/CustomCatalogues/EnablingorDisablingCatalogueItems',
                component: ComponentCreator('/docs/Administration/ServicesManagement/CustomCatalogues/EnablingorDisablingCatalogueItems', 'a1c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/CustomCatalogues/UpdatingPricesonCatalogues',
                component: ComponentCreator('/docs/Administration/ServicesManagement/CustomCatalogues/UpdatingPricesonCatalogues', '5f1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringKubernetesService',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringKubernetesService', '1a7'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringLinuxInstances',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringLinuxInstances', '44a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringRHELInstances',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringRHELInstances', '622'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringWindowsInstances',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Compute/ConfiguringWindowsInstances', '54c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/ConfiguringInstanceProtection',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/ConfiguringInstanceProtection', '3db'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringDNSManagement',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringDNSManagement', '9a5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringIPv4Addresses',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringIPv4Addresses', '614'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringLoadBalancerInstances',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringLoadBalancerInstances', 'a5e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringVirtualFirewallInstances',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringVirtualFirewallInstances', '2e6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringVirtualPrivateClouds',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Networking services/ConfiguringVirtualPrivateClouds', 'd36'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Storage/ConfiguringBlockVolumes',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Storage/ConfiguringBlockVolumes', '6c4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Storage/ConfiguringObjectStorage',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Configuring Services/Storage/ConfiguringObjectStorage', '571'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/Working with Default Services/Overview',
                component: ComponentCreator('/docs/Administration/ServicesManagement/Working with Default Services/Overview', 'a33'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/WorkingwithAvailabilityZones',
                component: ComponentCreator('/docs/Administration/ServicesManagement/WorkingwithAvailabilityZones', '1e8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/ServicesManagement/WorkingwithCloudCollections',
                component: ComponentCreator('/docs/Administration/ServicesManagement/WorkingwithCloudCollections', '36d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/AccountManagementOverview',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/AccountManagementOverview', 'b6c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/ChangingResourceLimitsforSubscribers',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/ChangingResourceLimitsforSubscribers', '3ae'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/ChangingSubscribersPrimaryEmail',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/ChangingSubscribersPrimaryEmail', '285'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/CreatingandUpdatingSubscriberAccounts',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/CreatingandUpdatingSubscriberAccounts', '636'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/ImpersonatinganAccount',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/ImpersonatinganAccount', 'af2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/MaintainingRelationshipPersonnelInformation',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/MaintainingRelationshipPersonnelInformation', '8ec'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/UpdatingaSubscribersTaxationCategory',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/UpdatingaSubscribersTaxationCategory', '10b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/UpdatingCreditLimitandOtherBillingInformation',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/UpdatingCreditLimitandOtherBillingInformation', '044'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/WorkingwithAccountStates',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/WorkingwithAccountStates', '503'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SubscribersandAccounts/WorkingwithKYCandAccountVerification',
                component: ComponentCreator('/docs/Administration/SubscribersandAccounts/WorkingwithKYCandAccountVerification', '3a6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SupportManagement/End-to-endSupportUsingOTRS',
                component: ComponentCreator('/docs/Administration/SupportManagement/End-to-endSupportUsingOTRS', '766'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SupportManagement/HandlingPurchaseandProvisioningRequests',
                component: ComponentCreator('/docs/Administration/SupportManagement/HandlingPurchaseandProvisioningRequests', 'ed3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SupportManagement/Overview',
                component: ComponentCreator('/docs/Administration/SupportManagement/Overview', '0af'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/SupportManagement/ViewingActivityLogs',
                component: ComponentCreator('/docs/Administration/SupportManagement/ViewingActivityLogs', '08a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/TrialManagement/AboutTrials',
                component: ComponentCreator('/docs/Administration/TrialManagement/AboutTrials', 'cd3'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/TrialManagement/AutomatingTrialEnrollments',
                component: ComponentCreator('/docs/Administration/TrialManagement/AutomatingTrialEnrollments', '89c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/TrialManagement/WorkingwithAccountTrials',
                component: ComponentCreator('/docs/Administration/TrialManagement/WorkingwithAccountTrials', 'b04'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Administration/TrialManagement/WorkingwithSubscriptionTrials',
                component: ComponentCreator('/docs/Administration/TrialManagement/WorkingwithSubscriptionTrials', '2b8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/APIs/AccountManagement/DisableAccount',
                component: ComponentCreator('/docs/APIs/AccountManagement/DisableAccount', 'bd7'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/AccountManagement/EnableAccount',
                component: ComponentCreator('/docs/APIs/AccountManagement/EnableAccount', 'bfa'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/AccountManagement/RestrictAccount',
                component: ComponentCreator('/docs/APIs/AccountManagement/RestrictAccount', '6c9'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/AccountManagement/TerminateAccount',
                component: ComponentCreator('/docs/APIs/AccountManagement/TerminateAccount', '676'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/apioverview',
                component: ComponentCreator('/docs/APIs/apioverview', '4f4'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/AuthenticateSession',
                component: ComponentCreator('/docs/APIs/AuthenticateSession', '07c'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/CloseSession',
                component: ComponentCreator('/docs/APIs/CloseSession', '4e3'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/CreateAccount',
                component: ComponentCreator('/docs/APIs/CreateAccount', '095'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/Helpers/ACSKeysandRegions',
                component: ComponentCreator('/docs/APIs/Helpers/ACSKeysandRegions', 'c1b'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/Helpers/CountryList',
                component: ComponentCreator('/docs/APIs/Helpers/CountryList', '79f'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/Helpers/StatesList',
                component: ComponentCreator('/docs/APIs/Helpers/StatesList', '6e7'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/APIs/Helpers/TaxCategories',
                component: ComponentCreator('/docs/APIs/Helpers/TaxCategories', 'ea6'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/category/about-service-providers-administration',
                component: ComponentCreator('/docs/category/about-service-providers-administration', '8ee'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/about-vpc-instances',
                component: ComponentCreator('/docs/category/about-vpc-instances', '210'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/about-vpc-instances-1',
                component: ComponentCreator('/docs/category/about-vpc-instances-1', 'cd0'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/account-centre',
                component: ComponentCreator('/docs/category/account-centre', '23a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/account-centre-1',
                component: ComponentCreator('/docs/category/account-centre-1', 'f5a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/account-management',
                component: ComponentCreator('/docs/category/account-management', 'bc4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/account-management-1',
                component: ComponentCreator('/docs/category/account-management-1', '97b'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/category/administration',
                component: ComponentCreator('/docs/category/administration', '59a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/advanced-configurations',
                component: ComponentCreator('/docs/category/advanced-configurations', '3f8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/apiculus-authoritive-nameserver',
                component: ComponentCreator('/docs/category/apiculus-authoritive-nameserver', '463'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/apiculus-object-storage',
                component: ComponentCreator('/docs/category/apiculus-object-storage', '7c8'),
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
                path: '/docs/category/autoscale-1',
                component: ComponentCreator('/docs/category/autoscale-1', 'd3e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/aws-linkage',
                component: ComponentCreator('/docs/category/aws-linkage', '708'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/billing-and-financials',
                component: ComponentCreator('/docs/category/billing-and-financials', '0bc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/billing-and-financials-1',
                component: ComponentCreator('/docs/category/billing-and-financials-1', '277'),
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
                path: '/docs/category/block-volumes-1',
                component: ComponentCreator('/docs/category/block-volumes-1', '2af'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/branding-and-content',
                component: ComponentCreator('/docs/category/branding-and-content', '3c1'),
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
                path: '/docs/category/compute-1',
                component: ComponentCreator('/docs/category/compute-1', '328'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/compute-services',
                component: ComponentCreator('/docs/category/compute-services', '6a6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/configuring-default-services',
                component: ComponentCreator('/docs/category/configuring-default-services', '750'),
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
                path: '/docs/category/details-of-block-volume-1',
                component: ComponentCreator('/docs/category/details-of-block-volume-1', 'ff1'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/dns-management',
                component: ComponentCreator('/docs/category/dns-management', '98a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/dns-management-1',
                component: ComponentCreator('/docs/category/dns-management-1', '91f'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/firewall-instances',
                component: ComponentCreator('/docs/category/firewall-instances', '8bc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/firewall-instances-1',
                component: ComponentCreator('/docs/category/firewall-instances-1', '432'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/getting-started',
                component: ComponentCreator('/docs/category/getting-started', '129'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/helpers',
                component: ComponentCreator('/docs/category/helpers', 'b04'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/helpers-1',
                component: ComponentCreator('/docs/category/helpers-1', '6c7'),
                exact: true,
                sidebar: "sidebar3"
              },
              {
                path: '/docs/category/inbuild-apps',
                component: ComponentCreator('/docs/category/inbuild-apps', 'e72'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/introduction',
                component: ComponentCreator('/docs/category/introduction', '7d5'),
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
                path: '/docs/category/ipv4-based-networking-1',
                component: ComponentCreator('/docs/category/ipv4-based-networking-1', 'd78'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/kubernetes',
                component: ComponentCreator('/docs/category/kubernetes', 'd1a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/kubernetes-1',
                component: ComponentCreator('/docs/category/kubernetes-1', 'a44'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/l2-networks',
                component: ComponentCreator('/docs/category/l2-networks', 'f07'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/l2-networks-1',
                component: ComponentCreator('/docs/category/l2-networks-1', '76d'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/linux-instances',
                component: ComponentCreator('/docs/category/linux-instances', '251'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/linux-instances-1',
                component: ComponentCreator('/docs/category/linux-instances-1', '0a9'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/load-balancer-instances',
                component: ComponentCreator('/docs/category/load-balancer-instances', 'abc'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/load-balancer-instances-1',
                component: ComponentCreator('/docs/category/load-balancer-instances-1', '2a5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/load-balancer-instances-2',
                component: ComponentCreator('/docs/category/load-balancer-instances-2', 'f7d'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/login-configuration',
                component: ComponentCreator('/docs/category/login-configuration', 'e48'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/management-apis',
                component: ComponentCreator('/docs/category/management-apis', '676'),
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
                path: '/docs/category/managing-nat-gateways-1',
                component: ComponentCreator('/docs/category/managing-nat-gateways-1', 'dcb'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/managing-quick-plans',
                component: ComponentCreator('/docs/category/managing-quick-plans', '435'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/marketing-management',
                component: ComponentCreator('/docs/category/marketing-management', 'ea9'),
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
                path: '/docs/category/nat-gateways-1',
                component: ComponentCreator('/docs/category/nat-gateways-1', 'c9e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/networking',
                component: ComponentCreator('/docs/category/networking', 'e66'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/networking-1',
                component: ComponentCreator('/docs/category/networking-1', 'b2c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/networking-services',
                component: ComponentCreator('/docs/category/networking-services', 'c7c'),
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
                path: '/docs/category/object-storage-bucket-1',
                component: ComponentCreator('/docs/category/object-storage-bucket-1', 'd50'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/platform-administration',
                component: ComponentCreator('/docs/category/platform-administration', '279'),
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
                path: '/docs/category/reseller-management',
                component: ComponentCreator('/docs/category/reseller-management', 'f50'),
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
                path: '/docs/category/rhel-instances-1',
                component: ComponentCreator('/docs/category/rhel-instances-1', 'aae'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/services-and-system-requirements',
                component: ComponentCreator('/docs/category/services-and-system-requirements', 'd0b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/services-management',
                component: ComponentCreator('/docs/category/services-management', '8b2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/signup-configuration',
                component: ComponentCreator('/docs/category/signup-configuration', '842'),
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
                path: '/docs/category/storage-1',
                component: ComponentCreator('/docs/category/storage-1', '0f4'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/storage-services',
                component: ComponentCreator('/docs/category/storage-services', 'a8a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/subscribers-and-accounts',
                component: ComponentCreator('/docs/category/subscribers-and-accounts', '5eb'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/support-management',
                component: ComponentCreator('/docs/category/support-management', 'a1c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/trial-management',
                component: ComponentCreator('/docs/category/trial-management', '069'),
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
                path: '/docs/category/virtual-firewalls-1',
                component: ComponentCreator('/docs/category/virtual-firewalls-1', 'ec8'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/virtual-private-clouds',
                component: ComponentCreator('/docs/category/virtual-private-clouds', '733'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/virtual-private-clouds-1',
                component: ComponentCreator('/docs/category/virtual-private-clouds-1', 'da0'),
                exact: true,
                sidebar: "sidebar2"
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
                path: '/docs/category/windows-instances-1',
                component: ComponentCreator('/docs/category/windows-instances-1', '42b'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/category/working-with-custom-catalogues',
                component: ComponentCreator('/docs/category/working-with-custom-catalogues', '78c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/category/working-with-default-services',
                component: ComponentCreator('/docs/category/working-with-default-services', '58e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/FAQs',
                component: ComponentCreator('/docs/FAQs', '8d8'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/AdvancedConfigurations/AddingCustomScripts',
                component: ComponentCreator('/docs/GettingStarted/AdvancedConfigurations/AddingCustomScripts', '706'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/AdvancedConfigurations/CurrencyLocalisation',
                component: ComponentCreator('/docs/GettingStarted/AdvancedConfigurations/CurrencyLocalisation', '3e2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/AdvancedConfigurations/EnablingResellerModule',
                component: ComponentCreator('/docs/GettingStarted/AdvancedConfigurations/EnablingResellerModule', 'b0e'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/AdvancedConfigurations/ManagingQuickPlanCategories',
                component: ComponentCreator('/docs/GettingStarted/AdvancedConfigurations/ManagingQuickPlanCategories', 'cbf'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/BillingandFinancials/ConfiguringAdditionalFields',
                component: ComponentCreator('/docs/GettingStarted/BillingandFinancials/ConfiguringAdditionalFields', 'baa'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/BillingandFinancials/ConfiguringBasicBilling',
                component: ComponentCreator('/docs/GettingStarted/BillingandFinancials/ConfiguringBasicBilling', '94a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/BillingandFinancials/ConfiguringTaxDeductions',
                component: ComponentCreator('/docs/GettingStarted/BillingandFinancials/ConfiguringTaxDeductions', 'c40'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/BrandingandContent/ConfiguringCustomLinks',
                component: ComponentCreator('/docs/GettingStarted/BrandingandContent/ConfiguringCustomLinks', '5ef'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/BrandingandContent/CustomisingBrandandGraphicAssets',
                component: ComponentCreator('/docs/GettingStarted/BrandingandContent/CustomisingBrandandGraphicAssets', '431'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/BrandingandContent/PublishingStandardStaticContent',
                component: ComponentCreator('/docs/GettingStarted/BrandingandContent/PublishingStandardStaticContent', '670'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/InBuiltApps/ConfiguringSMSGateway',
                component: ComponentCreator('/docs/GettingStarted/InBuiltApps/ConfiguringSMSGateway', '3a2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/InBuiltApps/ConfiguringSystemEmailsusingSMTP',
                component: ComponentCreator('/docs/GettingStarted/InBuiltApps/ConfiguringSystemEmailsusingSMTP', '7e5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/InBuiltApps/ManagingGooglereCAPTCHAandTagManager',
                component: ComponentCreator('/docs/GettingStarted/InBuiltApps/ManagingGooglereCAPTCHAandTagManager', '5b2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/InBuiltApps/ManagingPaymentGateways',
                component: ComponentCreator('/docs/GettingStarted/InBuiltApps/ManagingPaymentGateways', 'e22'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/LoginConfigurations/ConfiguringPasswordPolicies',
                component: ComponentCreator('/docs/GettingStarted/LoginConfigurations/ConfiguringPasswordPolicies', 'ac0'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/LoginConfigurations/LoginSecurityand2FA',
                component: ComponentCreator('/docs/GettingStarted/LoginConfigurations/LoginSecurityand2FA', 'e8b'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/PlatformAdministration/ConfiguringAutomationPolicies',
                component: ComponentCreator('/docs/GettingStarted/PlatformAdministration/ConfiguringAutomationPolicies', 'ddd'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/PlatformAdministration/GeneralPlatformSettings',
                component: ComponentCreator('/docs/GettingStarted/PlatformAdministration/GeneralPlatformSettings', 'bf5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/PlatformAdministration/ManagingServiceProviderProfile',
                component: ComponentCreator('/docs/GettingStarted/PlatformAdministration/ManagingServiceProviderProfile', 'dbf'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/PlatformAdministration/ManagingSPAdminUsers',
                component: ComponentCreator('/docs/GettingStarted/PlatformAdministration/ManagingSPAdminUsers', '9df'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/SignupConfigurations/ConfiguringAccountDefaults',
                component: ComponentCreator('/docs/GettingStarted/SignupConfigurations/ConfiguringAccountDefaults', 'ba6'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/SignupConfigurations/RestrictingFreeEmailDomains',
                component: ComponentCreator('/docs/GettingStarted/SignupConfigurations/RestrictingFreeEmailDomains', '112'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/GettingStarted/SignupConfigurations/SignupSettings',
                component: ComponentCreator('/docs/GettingStarted/SignupConfigurations/SignupSettings', '22f'),
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
                path: '/docs/Introduction/AccessCentral',
                component: ComponentCreator('/docs/Introduction/AccessCentral', '7b5'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Introduction/BillingConcepts',
                component: ComponentCreator('/docs/Introduction/BillingConcepts', '0f1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Introduction/BuildingBlocks',
                component: ComponentCreator('/docs/Introduction/BuildingBlocks', '923'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Introduction/SupportedPaymentGateways',
                component: ComponentCreator('/docs/Introduction/SupportedPaymentGateways', '291'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Introduction/SupportedSMSGateways',
                component: ComponentCreator('/docs/Introduction/SupportedSMSGateways', 'a2a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ReleaseNotes/Ver11000',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11000', '427'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11010',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11010', '7fc'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11100',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11100', '1e5'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11110',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11110', 'af6'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11200',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11200', '17f'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11210',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11210', 'c36'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11300',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11300', 'ca5'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11400',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11400', '829'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11500',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11500', '6d2'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11510',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11510', 'd56'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11600',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11600', '4f2'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11610',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11610', '026'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11620',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11620', '915'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11700',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11700', 'eff'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11710',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11710', '583'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11720',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11720', '78a'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11730',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11730', '429'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11740',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11740', '0e0'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11741',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11741', '55c'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11750',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11750', '470'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11760',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11760', 'c6c'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11800',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11800', 'b34'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver11900',
                component: ComponentCreator('/docs/ReleaseNotes/Ver11900', '3ca'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver1710',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1710', '939'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver1711',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1711', '04a'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver1720',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1720', '4a9'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver1800',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1800', 'caf'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver1900',
                component: ComponentCreator('/docs/ReleaseNotes/Ver1900', 'e55'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2000',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2000', '2d4'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2010',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2010', '4ca'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2030',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2030', 'c0b'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2031',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2031', '8d2'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2040',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2040', '35a'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2050',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2050', 'cfb'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2051',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2051', 'c72'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2052',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2052', '5ed'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2100',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2100', 'dbc'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2110',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2110', '2c5'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2111',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2111', '0fd'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2200',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2200', '76d'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2210',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2210', 'de6'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2220',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2220', '3a0'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2300',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2300', '6e4'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2310',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2310', '632'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2400',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2400', '2b7'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2500',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2500', 'c5f'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2510',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2510', '097'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ReleaseNotes/Ver2520',
                component: ComponentCreator('/docs/ReleaseNotes/Ver2520', 'a36'),
                exact: true,
                sidebar: "sidebar4"
              },
              {
                path: '/docs/ResettingPassword',
                component: ComponentCreator('/docs/ResettingPassword', 'afa'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/About',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/About', 'a27'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/DNSRequirements',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/DNSRequirements', '442'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/SupportedRecordTypes',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/SupportedRecordTypes', '06a'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/SystemRequirements',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/SystemRequirements', '3c9'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusObjectStorage/AboutApiculusObjectStorage',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusObjectStorage/AboutApiculusObjectStorage', '00c'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusObjectStorage/FeatureListandIntegrationDetails',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusObjectStorage/FeatureListandIntegrationDetails', 'a0f'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusObjectStorage/FrequentlyAskedQuestions',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusObjectStorage/FrequentlyAskedQuestions', '142'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/ApiculusObjectStorage/SystemRequirements',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/ApiculusObjectStorage/SystemRequirements', 'a85'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/AWSLinkage/AboutAWSLinkage',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/AWSLinkage/AboutAWSLinkage', 'ce1'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/AWSLinkage/IntegrationDetails',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/AWSLinkage/IntegrationDetails', 'e9d'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/AWSLinkage/Prerequisites',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/AWSLinkage/Prerequisites', 'd59'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/LoadBalancerInstances/About',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/LoadBalancerInstances/About', 'e94'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/LoadBalancerInstances/FeatureList',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/LoadBalancerInstances/FeatureList', '4a4'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/ServicesandSystemRequirements/LoadBalancerInstances/SystemRequirements',
                component: ComponentCreator('/docs/ServicesandSystemRequirements/LoadBalancerInstances/SystemRequirements', '9a2'),
                exact: true,
                sidebar: "sidebar1"
              },
              {
                path: '/docs/Subscribers/AccountCentre/AboutYntraaAccountCentre',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/AboutYntraaAccountCentre', '69e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/InvoicesandCreditNotes',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/InvoicesandCreditNotes', 'dcc'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Organisation-AccountProfile',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Organisation-AccountProfile', '0ab'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/Payments',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/Payments', 'cd0'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/StandardAgreements',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/StandardAgreements', '781'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/SubscriptionsandServices',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/SubscriptionsandServices', 'f4d'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/SupportandTickets',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/SupportandTickets', 'e54'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/TeamandChildUserManagement',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/TeamandChildUserManagement', 'f7a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/UnbilledCharges',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/UnbilledCharges', '72e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/AccountCentre/WalletandTransactions',
                component: ComponentCreator('/docs/Subscribers/AccountCentre/WalletandTransactions', 'eb4'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/AboutAutoscale',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/AboutAutoscale', '1ee'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/CreatingAutoscaleGroups',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/CreatingAutoscaleGroups', '3ae'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/RequirementsforAutoscale',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/RequirementsforAutoscale', '48b'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs',
                component: ComponentCreator('/docs/Subscribers/Compute/Autoscale/UsingStaticPasswordinAutoScaleGroupVMs', '6a7'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/AboutKubernetes',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/AboutKubernetes', 'f24'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/AboutKubernetesDashboard',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/AboutKubernetesDashboard', 'c3b'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/AccessingaClusterusingtheCommandLine',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/AccessingaClusterusingtheCommandLine', '7d5'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/Accessingthekubernetesdashboard',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/Accessingthekubernetesdashboard', 'bb7'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/ClusterOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/ClusterOperations', '328'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/CreatingaKubernetesCluster',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/CreatingaKubernetesCluster', '38d'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/IngressNetworkingonKubernetesClusters',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/IngressNetworkingonKubernetesClusters', '398'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/Overview', '732'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/ScalingKubernetesClusters',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/ScalingKubernetesClusters', '352'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/Kubernetes/ViewingKubernetesClusterDetails',
                component: ComponentCreator('/docs/Subscribers/Compute/Kubernetes/ViewingKubernetesClusterDetails', 'a49'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/AboutLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/AboutLinuxInstances', 'bbc'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/AppOverlays',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/AppOverlays', '411'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ConfiguringAlerts', '7e6'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ConnectingtoaLinuxInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ConnectingtoaLinuxInstance', '277'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/CreatingLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/CreatingLinuxInstances', '84e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/NetworkingManagement', '7d7'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/Operations',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/Operations', 'ccb'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/Overview', '931'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ProtectingLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ProtectingLinuxInstances', 'f3a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ReconfiguringLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ReconfiguringLinuxInstances', 'a4c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/ViewingGraphsandUtilizationofLinuxInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/ViewingGraphsandUtilizationofLinuxInstances', 'c65'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/VolumeManagement', 'e96'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/LinuxInstances/WorkingwithLinuxInstanceSnapshots',
                component: ComponentCreator('/docs/Subscribers/Compute/LinuxInstances/WorkingwithLinuxInstanceSnapshots', 'e06'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/AboutRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/AboutRHELInstances', '7a9'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ConfiguringAlerts', '662'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ConnectingtoaRHELInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ConnectingtoaRHELInstance', '98a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/CreatingRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/CreatingRHELInstances', '973'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/NetworkingManagement', 'ec4'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/Overview', '513'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ProtectingRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ProtectingRHELInstances', '132'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ReconfiguringRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ReconfiguringRHELInstances', 'ea5'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/RHELInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/RHELInstanceOperations', 'b32'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingGraphsandUtilization',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingGraphsandUtilization', 'e7e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/ViewingRHELInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/ViewingRHELInstances', '138'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/VolumeManagement', 'd7a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/RHELInstances/WorkingwithSnapshots',
                component: ComponentCreator('/docs/Subscribers/Compute/RHELInstances/WorkingwithSnapshots', 'aec'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/AboutWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/AboutWindowsInstances', '7c1'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ConfiguringAlertsonWindowsInstances', '78e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ConnectingtoaWindowsInstance',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ConnectingtoaWindowsInstance', '9d3'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances', 'b99'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/NetworkingManagementonWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/NetworkingManagementonWindowsInstances', '7e6'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/Protection',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/Protection', '690'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ReconfiguringWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ReconfiguringWindowsInstances', 'd2e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ViewingDetailsofWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ViewingDetailsofWindowsInstances', 'b25'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/ViewingGraphsandUtilisationofWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/ViewingGraphsandUtilisationofWindowsInstances', 'a58'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/VolumeManagementwithWindowsInstances',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/VolumeManagementwithWindowsInstances', '8cb'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/WindowsInstanceOperations',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/WindowsInstanceOperations', '9dc'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Compute/WindowsInstances/WorkingwithWindowsInstanceSnapshots',
                component: ComponentCreator('/docs/Subscribers/Compute/WindowsInstances/WorkingwithWindowsInstanceSnapshots', '2b6'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/FAQs',
                component: ComponentCreator('/docs/Subscribers/FAQs', '16b'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/intro',
                component: ComponentCreator('/docs/Subscribers/intro', '8ac'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/LoggingIn',
                component: ComponentCreator('/docs/Subscribers/LoggingIn', 'fc2'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/DNSManagement/AboutDNSManagement',
                component: ComponentCreator('/docs/Subscribers/Networking/DNSManagement/AboutDNSManagement', '326'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/DNSManagement/LinkingDomainstoApiculusCloudPlatform',
                component: ComponentCreator('/docs/Subscribers/Networking/DNSManagement/LinkingDomainstoApiculusCloudPlatform', 'f04'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/DNSManagement/ManagingDNSRecords',
                component: ComponentCreator('/docs/Subscribers/Networking/DNSManagement/ManagingDNSRecords', '884'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/DNSManagement/SwitchingtoAnotherDNSProvider',
                component: ComponentCreator('/docs/Subscribers/Networking/DNSManagement/SwitchingtoAnotherDNSProvider', 'e7e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/AboutIPv4-basedNetworking',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/AboutIPv4-basedNetworking', '2fa'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/EstablishingSite-to-SiteVPNBetweenTwoVPCs',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/EstablishingSite-to-SiteVPNBetweenTwoVPCs', '902'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/ManagingVPNGatewaysandSite-to-SiteVPN',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/ManagingVPNGatewaysandSite-to-SiteVPN', '61f'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/IPv4-basedNetworking/UsingRemoteAccessVPNwithVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/IPv4-basedNetworking/UsingRemoteAccessVPNwithVPC', '44e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/L2 Networks/AboutL2Networks',
                component: ComponentCreator('/docs/Subscribers/Networking/L2 Networks/AboutL2Networks', '3e0'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/L2 Networks/AddNewL2Networks',
                component: ComponentCreator('/docs/Subscribers/Networking/L2 Networks/AddNewL2Networks', 'c39'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/LoadBalancerInstances/AboutLoadBalancerInstances',
                component: ComponentCreator('/docs/Subscribers/Networking/LoadBalancerInstances/AboutLoadBalancerInstances', 'ef9'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/LoadBalancerInstances/ActivatingtheNetScalerVPX',
                component: ComponentCreator('/docs/Subscribers/Networking/LoadBalancerInstances/ActivatingtheNetScalerVPX', '5d5'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance',
                component: ComponentCreator('/docs/Subscribers/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance', 'baa'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/AboutNATGateways',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/AboutNATGateways', 'b4d'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Instances',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Instances', '756'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/IPv4Addresses',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/IPv4Addresses', '86c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Operations',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Operations', 'b05'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Overview',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/Overview', '341'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/ManagingNATGateways/ViewingandManagingNATGateways', 'd70'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/PortForwardingforVMviaVNF',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/PortForwardingforVMviaVNF', '3fe'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/NATGateways/PortForwardingwithPublicIP',
                component: ComponentCreator('/docs/Subscribers/Networking/NATGateways/PortForwardingwithPublicIP', '06e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/AccessingtheVFIControlPanel',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/AccessingtheVFIControlPanel', '926'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/AddingInstancestoaVFI-basedNetwork',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/AddingInstancestoaVFI-basedNetwork', '722'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/CreatingaVirtualFirewall',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/CreatingaVirtualFirewall', '158'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/DeployingVNFandVMWithinVNF',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/DeployingVNFandVMWithinVNF', 'a9e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/AboutFirewallInstances',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/AboutFirewallInstances', '8d0'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ConfiguringAlerts',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ConfiguringAlerts', '55f'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/NetworkingManagement',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/NetworkingManagement', '5ce'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Operations',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Operations', 'cef'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Overview', '05c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ReconfiguringVirtualFirewall', 'ace'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Snapshots',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/Snapshots', '659'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilization',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingGraphsandUtilization', 'bed'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/ViewingVirtualFirewallDetails', '548'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/VolumeManagement',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualFirewall/FirewallInstances/VolumeManagement', '24c'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds', 'd5d'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreateListandViewVPCs', 'ec8'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers', 'f26'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC', '404'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingAccessControlonVPCSubnets', '0b7'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/ManagingVPCInstances', '80e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Overview',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Overview', 'b46'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/Reconfiguring', 'ca5'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/VPCManagementandBasicOperations', 'a39'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/DifferenceBetweenL2NetworksandVPC', 'b1e'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Networking/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC',
                component: ComponentCreator('/docs/Subscribers/Networking/VirtualPrivateClouds/WorkingwithVPNConnectionsinaVPC', '35a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/ResettingPassword',
                component: ComponentCreator('/docs/Subscribers/ResettingPassword', '2de'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/SigningUp',
                component: ComponentCreator('/docs/Subscribers/SigningUp', '106'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/AboutBlockVolumes',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/AboutBlockVolumes', '525'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk', 'bd4'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Operations',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Operations', '2b1'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Overview',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Overview', '7f7'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/ResizetheBlockVolume',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/ResizetheBlockVolume', '7dd'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Schedules',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/Schedules', 'ee0'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/WorkingwithVolumeSnapshots',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/DetailsofBlockVolumes/WorkingwithVolumeSnapshots', '195'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/UsingBlockVolumeswithKubernetes',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/UsingBlockVolumeswithKubernetes', '6f9'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes',
                component: ComponentCreator('/docs/Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes', 'd20'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/AboutYntraaObjectStorage',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/AboutYntraaObjectStorage', '213'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/CreatingObjectStorageBucket',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/CreatingObjectStorageBucket', '23f'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/FeatureListandIntegrationDetails',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/FeatureListandIntegrationDetails', '240'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/FrequentlyAskedQuestions',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/FrequentlyAskedQuestions', 'd7a'),
                exact: true,
                sidebar: "sidebar2"
              },
              {
                path: '/docs/Subscribers/Storage/ObjectStorageBucket/SystemRequirements',
                component: ComponentCreator('/docs/Subscribers/Storage/ObjectStorageBucket/SystemRequirements', '993'),
                exact: true,
                sidebar: "sidebar2"
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
