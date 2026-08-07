---
sidebar_position: 3
---
# Viewing Kubernetes Cluster Details

View the Kubernetes cluster details to access comprehensive information about the cluster, including its configuration, node information, networking, and current status. Reviewing these details helps you monitor cluster health, verify settings, and troubleshoot issues effectively.

To view the details of a Kubernetes cluster, follow these steps:

1. Navigate to **Compute > Managed Kubernetes**. The following screen appears: 
   ![Kubernetes List](img/kuberneteslist.png) 
2. Click on your created Kubernete cluster name from the list. The Overview tab opens automatically. The following screen appears with the details: 
   ![Overview](img/kubernetesoverview.png)
   
- **Configuration and Availability:** This displays the following Kubernetes cluster configuration details to help verify its current configuration and operational state:
	- The instance's status <span class="green">**Running**</span> or <span style={{ color: 'red' }}>**Stopped**</span>
	- Availability Zone
	- Cluster Pack
	- High Availability

- **Nodes:** This displays the following information about the worker nodes associated with the Kubernetes cluster, helping you monitor node health, capacity, and overall cluster status:
	- Template Name
	- Created On

- **Internal Information:** This displays the following information that is used for internal identification of the Kubernetes cluster and communication with other internal services:
	- Kubernetes Version
	- Virtual Router Internal Name
	- Created On
