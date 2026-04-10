---
sidebar_position: 9
---
# VPC Management and Basic Operations

VPC management offers the following operations. These are basic VPC management actions and don't have any impact on the actual network configurations.

## Powering ON/OFF the Virtual Router

The VPC power state can be managed using the **Start Router / Stop Router** option at the top. The status is shown as **Powered On** in <span class="green">green</span> when the router is <span class="green">Running</span> and **Powered Off** in <span style={{ color: 'red' }}>red</span> when it is <span style={{ color: 'red' }}>STOPPED</span>.

To restart the VPC, navigate to the  **Operations** tab and click the **Restart Virtual Router** button. This performs quick reboot and no data is lost.

![operationnew](img/operationnew.png)

## Deleting a VPC

To delete a VPC, navigate to the **Operations** Section and click the **Delete VPC Network** button. Deleting a VPC removes it permanently.

:::note
Before attempting to delete this VPC, ensure that all Tiers, IPv4 Addresses, and Instances are removed from this VPC. This action is irreversible, and you may not be able to recover any data for this VPC.
:::




