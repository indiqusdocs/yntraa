---
sidebar_position: 4
---
# Getting Started

After completing the sign-up process, the user receives an email with the details to access the Cloud Console.

## 1. Accessing the Console

To access the Yntraa Cloud Console, open the [Sign In](https://uatidpcloud.yotta.com/realms/myaccount/protocol/openid-connect/auth?client_id=yntraa-prod-fe&redirect_uri=https%3A%2F%2Fportal.yntraacloud.ai%2Fauth-callback&response_type=code&scope=openid+profile+email&state=9162e42096eb43a797f32187cd0938b0&code_challenge=80No21C3czvOokBCVScmul7oDSwY8puFo2wZkbybRNg&code_challenge_method=S256) URL using your registered email address and password.

![login](img/login.png)
## 2. Deploying Virtual Private Cloud
The user creates a **Virtual Private Cloud** to set up a secure and isolated network environment for cloud resources. This is one of the initial steps in configuring the network infrastructure, allowing users to define network settings, IP address ranges, and connectivity before deploying other services or applications. For more information on VPC, [click here](/docs/category/about-vpc-instances).

## 3. Creating Subnets and Tiers 
The user creates **Subnets and Tiers** within a Virtual Private Cloud (VPC) to organise the network into logical segments for different application layers such as web, application, and database. Subnets define the IP-based network segments, while tiers help structure the application architecture and manage network traffic effectively within the VPC. For more information on Subnets and Tiers, [click here](/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/CreatingVPCSubnetsTiers).
  
## 4. Adding IPv4 Addresses
The user adds **IPv4 addresses** within a Virtual Private Cloud (VPC) to enable communication between network components and external systems. By default, a public IPv4 address is assigned to the Virtual Router (VR), allowing it to send and receive traffic over the internet. These IP addresses can also be used to configure secure connections such as remote access (L2TP) and site-to-site (IPSec) VPN. For more information on IPv4 Addresses, [click here](/docs/Subscribers/Networking/VirtualPrivateClouds/AboutVPCInstances/IPv4AddressesandVPC).

## 5. Selecting a Compute Package 
The user selects a compute package to define the processing resources required for running applications or workloads. Compute instances are virtual machines that provide CPU, memory, and other resources to support application performance. These instances can run various Linux operating systems such as Ubuntu, CentOS, Rocky Linux, Oracle Linux, and Debian.
  
## 6. Validation and Verification
 
The service provider performs the following activities:

- Verifies the firewall HA status (Active/Passive or Active/Active).
- Validates north–south and east–west traffic flow.
- Confirms GUI accessibility through the management tier.
- Conducts failover testing to ensure high availability functionality.
  
## 7. Creation of Customer Workload Instance

Refer to [Compute](/docs/category/compute) for detailed instructions on creating production virtual machines to host customer application workloads.
