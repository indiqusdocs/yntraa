---
sidebar_position: 4
---
# Getting Started

After completing the sign-up process, you receive an email with the details to access the Cloud Console.

## 1. Accessing the Console

Access the Yntraa Cloud console by opening the [URL](https://uatidpcloud.yotta.com/realms/myaccount/protocol/openid-connect/auth?client_id=yntraa-prod-fe&redirect_uri=https%3A%2F%2Fportal.yntraacloud.ai%2Fauth-callback&response_type=code&scope=openid+profile+email&state=9162e42096eb43a797f32187cd0938b0&code_challenge=80No21C3czvOokBCVScmul7oDSwY8puFo2wZkbybRNg&code_challenge_method=S256) and **Signing In** using the registered email address and password. This allows you to securely access the dashboard and manage cloud resources and services.

![sigin](img/sigin.png)
## 2. Creating Virtual Private Cloud
Create a Virtual Private Cloud to set up a secure and isolated network environment for your cloud resources. This is one of the initial steps in configuring the network infrastructure, allowing you to define network settings, IP address ranges, and connectivity before deploying other services or applications. For more information on VPC, [click here](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/AboutVirtualPrivateClouds).

## 3. Creating Subnets and Tiers 
Create Subnets and Tiers within a Virtual Private Cloud (VPC) to organise the network into logical segments for different application layers such as web, application, and database. For more information on Subnets and Tiers, [click here](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers).
  
## 4. Adding IPv4 Addresses
Add IPv4 addresses within a VPC to enable communication between network components and external systems. By default, a public IPv4 address is assigned to the Virtual Router (VR), allowing it to send and receive traffic over the internet. These IP addresses can also be used to configure secure connections such as remote access (L2TP) and site-to-site (IPSec) VPN. For more information on IPv4 Addresses, [click here](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC).

## 5. Selecting a Compute Package 
Select a compute package to define the processing resources required for running applications or workloads. Compute instances are virtual machines that provide CPU, memory, and other resources to support application performance. These instances can run various Linux operating systems such as Ubuntu, CentOS, Rocky Linux, Oracle Linux, and Debian.
  
## 6. Selecting an Operating System/My Images
Select an Operating System or My Image to define the software environment for the compute instance. The operating system provides the platform required to run applications and manage system resources. You can choose from available OS images or use **My Images**, which are custom images created from previously configured instances for faster and consistent deployments.
 
## 7. Configuring Storage Volume
Configure a Storage Volume to allocate disk space for the compute instance. The storage volume is used to store the operating system, applications, and data required for the instance to run. You can select the required storage size and type based on their performance and capacity needs.

## 8. Configuring SSH Key or Login Credentials  
Configure an SSH Key or Login Credentials to securely access the compute instance after deployment. SSH keys provide a secure authentication method for connecting to the instance, while login credentials such as a username and password can also be used for access and management. For more information on SSH key, [click here](/docs/Subscribers/ToolsandUtilities/ManagingSSHKeysandKeyPairsforLinuxInstances).

## 9. Configuring Security Rules/Firewall 
Configure Security Rules or Firewall settings to control network traffic to and from the compute instance. These rules define which ports, protocols, and IP addresses are allowed or restricted, helping protect the instance from unauthorized access while ensuring secure communication.

## 10. Creation of Customer Workload Instance
Refer to [Compute](/docs/category/compute) for detailed instructions on creating production virtual machines to host customer application workloads.
