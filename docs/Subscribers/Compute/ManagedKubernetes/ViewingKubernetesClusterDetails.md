---
sidebar_position: 3
---
# Viewing Kubernetes Cluster Details

View the kubernetes cluster details to access comprehensive information about the cluster, including its configuration, node information, networking, and current status. Reviewing these details helps you monitor cluster health, verify settings, and troubleshoot issues effectively.

To view the details of a kubernetes cluster, follow these steps:

1. Navigate to **Compute > Managed Kubernetes**. The following screen appears: 
   ![Kubernetes List](img/kuberneteslist.png) 
2. Click on your created kubernete cluster name from the list. The Overview tab opens automatically. The following screen appears with the details: 
   ![Overview](img/kubernetesoverview.png)
   
**Configuration and Availability:** This displays the following kubernetes cluster configuration details to help verify its current configuration and operational state:

- The instance's status <span class="green">**Running**</span> or <span style={{ color: 'red' }}>**Stopped**</span>
- Availability Zone
- Cluster Pack
- High Availability

**Nodes:** This displays the following information about the worker nodes associated with the kubernetes cluster, helping you monitor node health, capacity, and overall cluster status:
- Template Name
- Created On

**Internal Information:** This displays the following information that is used for internal identification of the kubernetes cluster and communication with other internal services:
- Kubernetes Version
- Virtual Router Internal Name
- Created On
      
## Stopping and Starting a Kubernetes Cluster

Stop and start a kubernetes cluster to perform maintenance, troubleshoot issues, or manage resource usage. Stopping the cluster temporarily suspends its operation, while starting it restores the cluster and its services, allowing your containerized workloads to resume normal operation.

To stop and start a kubernetes cluster, follow these steps:  

1. Navigate to **Compute > Managed Kubernetes**. The following screen appears: 
   ![Kubernetes List](img/kuberneteslist.png) 
2. Click on your created kubernete cluster name from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/kubernetesclusteroverview.png)
3. Click the <span style={{ color: 'red' }}>Stop Cluster</span> button. The following screen appears: 
   ![Kubernetes Cluster Stop Message](img/kubernetesclusterstopmessage.png)
4. Click the **Yes** button. The following screen appears:
   ![Kubernetes Cluster Stopped](img/kubernetesclusterstopped.png)
5. Click the <span style={{ color: 'blue' }}>Start Cluster</span> button. The following screen appears: 
   ![Kubernetes Cluster Start Message](img/kubernetesclusterstartmessage.png)
6. Click the **Yes** button. The following screen appears:
   ![Overview](img/kubernetesclusteroverview.png)


   
  
