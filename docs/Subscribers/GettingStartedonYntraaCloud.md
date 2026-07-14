---
sidebar_position: 6
---
# Getting Started

This section guides you through the basic steps to create and launch your first workload on the Yntraa Cloud portal. You will learn how to set up the required networking components, choose the right compute resources, configure storage and access settings, apply security rules, and finally create a customer workload instance.

This section comprises of the following sub-sections:

<div className="custom-block-blue">  
- [Creating Virtual Private Cloud](#creating-virtual-private-cloud)
- [Creating Subnets and Tiers](#creating-subnets-and-tiers )
- [Adding IPv4 Addresses](#adding-ipv4-addresses)
- [Selecting a Compute Package](#selecting-a-compute-package)
- [Selecting an Operating System and My Images](#selecting-an-operating-system-and-my-images)
- [Configuring Storage](#configuring-storage)
- [Configuring SSH Key or Login Credentials](#configuring-ssh-key-or-login-credentials)
- [Configuring Firewall](#configuring-firewall)
- [Creation of Customer Workload Instance](#creation-of-customer-workload-instance)
</div>

## Creating Virtual Private Cloud 
Create a Virtual Private Cloud (VPC) to set up a secure and isolated network environment for your cloud resources. This is one of the initial steps in configuring the network infrastructure, allowing you to define network settings, IP address ranges, and connectivity before deploying other services or applications. For more information on creating a VPC, [click here](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/CreatingandViewingVPCs).

## Creating Subnets and Tiers 
Create Subnets and Tiers within a VPC to organise the network into logical segments for different application layers such as web, application, and database. For more information on creating subnets and tiers, [click here](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/CreatingVPCSubnetsandTiers).
  
## Adding IPv4 Addresses
Add IPv4 addresses within a VPC to enable communication between network components and external systems. By default, a public IPv4 address is assigned to the Virtual Router (VR), allowing it to send and receive traffic over the internet. These IP addresses can also be used to configure secure connections such as remote access (L2TP) and site-to-site (IPSec) VPN. For more information on adding IPv4 addresses, [click here](/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/ManagingIPAddresses)

## Selecting a Compute Package 
Select a compute package to define the processing resources required for running applications or workloads. Compute instances are virtual machines that provide CPU, memory, and other resources to support application performance. These instances can run various Linux operating systems such as Ubuntu, CentOS, Rocky Linux, Oracle Linux, and Debian. For more information on selecting a compute package, [click here](/docs/Subscribers/Compute/WindowsInstances/CreatingWindowsInstances)

  
## Selecting an Operating System and My Images
Select an Operating System or My Image to define the software environment for the compute instance. The operating system provides the platform required to run applications and manage system resources. You can choose from available OS images or use **My Images**, which are custom images created from previously configured instances for faster and consistent deployments. For more information on creating My images, [click here](/docs/Subscribers/ToolsandUtilities/ManagingCustomTemplatesandImages)
 
## Configuring Storage 
Configure a Storage Volume to allocate disk space for the compute instance. The storage volume is used to store the operating system, applications, and data required for the instance to run. You can select the required storage size and type based on their performance and capacity needs. For more information on creating data disk, [click here](/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk)

## Configuring SSH Key or Login Credentials  
Configure an SSH Key or Login Credentials to securely access the compute instance after deployment. SSH keys provide a secure authentication method for connecting to the instance, while login credentials such as a username and password can also be used for access and management. For more information on SSH key, [click here](/docs/Subscribers/ToolsandUtilities/ManagingSSHKeysandKeyPairsforLinuxInstances).

## Configuring Firewall 
Configure Security Rules or Firewall settings to control network traffic to and from the compute instance. These rules define which ports, protocols, and IP addresses are allowed or restricted, helping protect the instance from unauthorized access while ensuring secure communication. For more information on configuring firewall, [click here](/docs/Subscribers/NetworkandSecurity/NATGateways/ManagingNATGateways/ManagingIPAddresses)

## Creation of Customer Workload Instance
Refer to [Compute](/docs/category/compute) for detailed instructions on creating production virtual machines to host customer application workloads.
