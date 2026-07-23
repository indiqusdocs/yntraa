---
sidebar_position: 7
---
# Managing Networks

Manage the networking configuration of your linux instance to control connectivity and communication with other resources. You can configure network settings, and manage network access to ensure secure and reliable communication for your workloads.

 To add network interface to a linux instance, follow these steps:
 
## Adding Firewall Rule  

To add a firewall rule, follow these steps: 
 
1. Navigate to **Compute > Managed Kubernetes**. The following screen appears: 
   ![Kubernetes List](img/kuberneteslist.png) 
2. Click on your created kubernete cluster from the list. The Overview tab opens automatically. The following screen appears with the details: 
   ![Overview](img/kubernetesoverview.png)
3. Click **Networking**. The following screen appears: 
   ![Network Tab](img/networktab.png)
4. Click **Add Networking Rule**. The following screen appears:
   ![Adding Firewall Rule](img/addingfirewallrule.png)
5. Click the **Firewall** rule from the dropdown. The following screen appears: 
   ![Firewall Rule Details](img/firewallruledetails.png) 
6. Click the **Add Firewall Rule**. The following screen appears:
   ![Rule Added](img/ruleadded.png) 
   
## Adding Port Forwarding Rule

Add a port forwarding rule to securely forward traffic from a specified external port to a target port on a Kubernetes service or pod. Port forwarding enables temporary access to applications running inside the cluster for testing, debugging, development, or administrative tasks without exposing them publicly.

To add a port forwarding rule, follow these steps: 

1. Navigate to **Compute > Managed Kubernetes**. The following screen appears: 
   ![Kubernetes List](img/kuberneteslist.png) 
2. Click on your created kubernete cluster from the list. The Overview tab opens automatically. The following screen appears with the details: 
   ![Overview](img/kubernetesoverview.png)
3. Click **Networking**. The following screen appears: 
   ![Network Tab](img/networktab.png)
4. Click **Add Networking Rule**. The following screen appears:
   ![Adding Firewall Rule](img/addingfirewallrule.png)
5. Click the **Firewall** rule from the dropdown. The following screen appears: 
   ![Portward Rule Details](img/portwardingruledetails.png) 
6. Click the **Add Port forwarding Rule** button. The following screen appears: 
   ![Rule Added](img/ruleadded.png) 
7. Click the **Port Forwarding** list. The following screen appears: 
   ![Port Forwarding Rule Add](img/portforwardingruleadd.png)
   
## Adding Load Balance Rule

Add a load balancing rule to distribute incoming network traffic across one or more Kubernetes services or application instances. Load balancing improves application availability, scalability, and reliability by ensuring traffic is evenly routed to healthy backend workloads, helping maintain consistent performance and minimize service disruptions.

To add a load balance rule, follow these steps: 

1. Navigate to **Compute > Managed Kubernetes**. The following screen appears: 
   ![Kubernetes List](img/kuberneteslist.png) 
2. Click on your created kubernete cluster from the list. The Overview tab opens automatically. The following screen appears with the details: 
   ![Overview](img/kubernetesoverview.png)
3. Click **Networking**. The following screen appears: 
   ![Network Tab](img/networktab.png)
4. Click **Add Networking Rule**. The following screen appears:
   ![Adding Firewall Rule](img/addingfirewallrule.png)
5. Click the **Load Balacing Rule** rule from the dropdown. The following screen appears: 
   ![Load Balance Rule Details](img/loadbalaceruledetails.png) 
6. Click the **Add Port forwarding Rule** button. The following screen appears:
  