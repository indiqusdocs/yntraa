---
sidebar_position: 5
---
# Managing Load Balance Instance Operations

You can manage the lifecycle of load balancer by restarting, force stopping, renaming, or deleting. These operations help you maintain service availability, resolve operational issues, organize resources, and manage your cloud infrastructure efficiently.

To view all available load balancer instance operations, follow these steps:
 1. Navigate to the **Network and Security > Load Balancers**. The following screen appears:
![Load Balancer Screen](img/loadbalancerscreen.png)
 2. Select a **Instance** and click **Operations**. The following screen appears:
![LB Operations](img/lboperations.png)

Yntraa Cloud provides the following operations on load balancer instances:

- [Restarting an Instance](#restarting-an-instance)
- [Force Stop an Instance](#force-stop-an-instance)
- [Renaming an Instance](#renaming-an-instance)
- [Deleting an Instance](#deleting-an-instance)

## Restarting an Instance

Restart a load balancer instance to refresh its operating state, apply certain configuration changes, or resolve temporary issues without changing its existing settings. This action helps restore normal operation, improve service reliability, and ensure efficient traffic distribution across backend resources.

To restart an instance, follow these steps: 

1. Navigate to the **Network and Security > Load Balancers**. The following screen appears:
![Load Balancer Screen](img/loadbalancerscreen.png)
2. Select a **Instance** and click **Operations**. The following screen appears:
![LB Operations](img/lboperations.png)
3. Click the **Restart Instance** button. The following screen appears: 
 ![Restart Instance Message](img/restartinstancemessage.png)
4. Click the **Yes** button.
   
## Force Stop an Instance

Force stop a load balancer instance to immediately terminate its operations when it becomes unresponsive or cannot be shut down through a normal stop operation. This action helps recover from critical issues, restore control of the instance, and prepare it for troubleshooting or restart. 

To force stop an instance, follow these steps: 

1. Navigate to the **Network and Security > Load Balancers**. The following screen appears:
![Load Balancer Screen](img/loadbalancerscreen.png)
2. Select a **Instance** and click **Operations**. The following screen appears:
![LB Operations](img/lboperations.png)
3. Click the **Force Stop Instance** button. The following screen appears: 
 ![Force Stop Instance Message](img/forcestopinstancemessage.png)
 4. Click the **Yes** button. 

## Renaming an Instance

Rename a load balancer instance to assign a more meaningful or recognizable name without affecting its configuration or functionality. This action helps improve resource identification, simplifies instance management, and makes it easier to locate the instance in cloud environment. 

To rename an instance, follow these steps: 

1. Navigate to **Network and Security > Load Balancers**. The following screen appears:
![Load Balancer Screen](img/loadbalancerscreen.png)
2. Select a **Instance** and and click **Operations**. The following screen appears:
![LB Operations](img/lboperations.png)
3. Click the **Rename Instance** button. The following screen appears: 
 ![Instance Name Changed](img/instancenamechanged.png)
4. Click the **Done** button. The new instance name appears (highlighted in red). 
![Name Changed](img/namechange.png)

## Deleting an Instance

Delete a load balancer instance when it is no longer required to remove it permanently from cloud environment. This action helps free up resources, reduce unnecessary costs, and keep your infrastructure organized by eliminating unused instances. 

To delete an instance, follow these steps:

1. Navigate to the **Network and Security > Load Balancers**. The following screen appears:
![Load Balancer Screen](img/loadbalancerscreen.png)
2. Select a **Load balancer Instance** and click **Operations**. The following screen appears:
![LB Operations](img/lboperations.png)
3. Click the **Delete Instance** button. The following screen appears: 
![Delete Instance](img/deleteinstance.png)
4. Enter **Delete** and click the **Delete Now** button. 
5. Enter **DELETE** and click the **Schedule Deletion** button.

:::note
You can schedule the deletion of the resource and continue using it until the end of the current billing cycle. If needed, you can revoke the scheduled deletion before the billing cycle ends.
:::