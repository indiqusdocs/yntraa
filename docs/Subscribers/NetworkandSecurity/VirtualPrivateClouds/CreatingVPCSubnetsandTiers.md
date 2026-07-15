---
sidebar_position: 3
---
# Creating VPC Subnets and Tiers

A VPC subnet is a smaller, segmented network within a VPC that helps organise and isolate cloud resources, while tiers define how these subnets are structured for different application layers.

Subnets and tiers help efficiently group resources, control traffic flow, and improve security and performance within your cloud environment.

## Creating a Subnet and Tier
To create a subnet and tier, follow these steps:

1. Navigate to **Network & Security > Virtual Private Clouds**. The following screen appears:
![VPC List](img/vpclist.png)
2. Click on the VPC name from the list. The following screen appears:
![Overview in VPC](img/overviewinvpc.png)
3. Click **Subnet And Tiers**. The following screen appears:
![Adding Tier in VPC](img/addingtierinvpc.png)
4. Click the **Add Tier** button. The following screen appears where you provide the required details:
![Adding Network Tier](img/addingnetworktier.png)
5. Click the **Add Network Tier** button. The following screen appears: 
![Subnet and Tier Created in VPC](img/subnetandtiercreatedinvpc.png)
   
## Restarting a Network Tier

Restarting a network tier refreshes the selected tier by reapplying its network configuration. Use this option to restore normal network operations, apply recent configuration changes, or resolve temporary connectivity issues within the tier.

To restart a network tier, follow these steps:

1. Click the **Restart Network** icon (highlighted in red). 
![Restart Network](img/restartnetwork.png)

   The follow screen appears:
   ![Restart Tier in VPC](img/restarttierinvpc.png)
2. Click the **Restart Tier** button. 
   
## Replacing an ACL

Replacing an Access Control List (ACL) enables you to assign a different ACL to a tier. Use this option to update the traffic filtering rules and ensure the tier complies with your current security and access requirements.

To replace an ACL, follow these steps:

1. Click the **Replace Access Control List** icon (highlighted in red). 
   ![Tier Default Deny](img/tierdefaultdeny.png)
   
   The following screen appears: 
   ![Tier Replaced](img/tierreplaced.png)
1. Select a different **ACL** from the **Access Control** dropdown.
2. Click the **Replace Tier ACL** button.

## Deleting a Network Tier

Deleting a network tier permanently removes the selected tier from the VPC. Use this option to remove tiers that are no longer required, simplify network management, and maintain a clean and organized network configuration.
:::note
You can delete only the empty network tiers, which means that in order to delete a network tier, ensure that there are no Instances and no NAT rule(s) associated with it.
:::

To delete a network tier, follow these steps:

1. Click the **Delete Network** icon (highlighted in red). 
![Delete Tier in VPC](img/deletetierinvpc.png)

   The following screen appears: 
   ![Tier Delete Message](img/tierdeletemessage.png)
   
2. Select the **I confirm that I have removed everything from this tier** option, and click the **Delete Tier** button. The following screen appears: 
![Tier Deleted in VPC](img/tierdeletedinvpc.png)

