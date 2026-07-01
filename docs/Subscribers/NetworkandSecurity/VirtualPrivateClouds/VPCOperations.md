---
sidebar_position: 9
---
# VPC Operations

This section help you manage your VPC efficiently after it is created. You can perform key actions to monitor, update, and maintain your VPC, ensuring it continues to support your workload and network requirements effectively.

This section comprises of the following sub-sections:

- [Powering On and Off the Virtual Router](#powering-on-and-off-the-virtual-router)
- [Deleting a VPC](#deleting-a-vpc)

## Powering On and Off the Virtual Router

You can manage the VPC power state by using the Start Router/Stop Router button in the top-right corner. The status is shown as <span class="green">Powered on</span> in green when the router is <span class="green">Running</span> and <span class="red">Powered off</span> when it is <span style={{ color: 'red' }}>Stopped</span>.

To restart the VPC, navigate to the  **Operations** tab and click the **Restart Virtual Router** button. This performs quick reboot and no data is lost.

![operationnew](img/operationnew.png)

## Deleting a VPC

When you no longer need a VPC, delete it to remove unused network resources and keep your cloud environment organised and easy to manage.

To delete a VPC, navigate to the **Operations** Section and click the **Delete VPC Network** button. Deleting a VPC removes it permanently.

:::note
Before attempting to delete this VPC, ensure that all Tiers, IPv4 Addresses, and Instances are removed from this VPC. This action is irreversible, and you may not be able to recover any data for this VPC.
:::




