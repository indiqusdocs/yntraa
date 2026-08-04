---
sidebar_position: 1
---
# Creating a VPC

A Virtual Private Cloud (VPC) is a private virtual network that provides a secure environment for your cloud resources. It helps you organize and manage your network while controlling communication between resources.

To create a VPC, follow these steps:

1. Navigate to **Network and Security > Virtual Private Clouds**. The following screen appears:
   ![New VPC](img/newvpc.png)
2. Click the **New Virtual Private Cloud** button. The following screen appears:
   ![VPC Screen](img/vpcdetailsnew.png)
   ![Cost Summary](img/costsummarynew.png)
3. Choose an **Availability Zone**, which is the geographical region where your VPC will be configured.
4. Specify network address base size and select size i.e. The <span class="tooltip-wrapper"> **super CIDR** <span class="tooltip-box">It is the method of combining multiple continuous smaller CIDR blocks into a larger block to reduce the number of routes.</span></span> for internal IP allocation in an x.x.x.x/x format. For more information, refer [IP addressing](/docs/Knowledgebase/WhatisIPAddressSubnetTierandCIDR).
5. **Choose a Networking Pack** from the available network collections. 
6. Select the default IPv4 address for VPC Networking to create the VPC network with a new Public IP address.
7. Enter a name in **Name Your Virtual Private Cloud**.
  
   :::note
   You cannot edit the Super CIDR after creating it.
   :::

1. Select the **I have read and agreed to the End User License Agreement and Privacy Policy** option, and click the **Buy Monthly** button. The following screen appears: 
   ![Confirm VPC](img/confirmvpcnew.png)
2. Click the **Confirm** button. 
   
Once your VPC is ready, you will be notified of this purchase on your email address on record. 











