---
sidebar_position: 1
---
# Creating a Kubernetes Cluster

A Kubernetes cluster is a managed environment for deploying and managing containerized applications. Creating a Kubernetes cluster enables you to automate application deployment, scaling, and management while ensuring high availability, efficient resource utilization, and simplified operations across your cloud environment.

To create a kubernetes cluster, follow these steps:

1. Navigate to **Compute > Managed Kubernetes**. The following screen appears: 
   ![Kubernetes List](img/kuberneteslist.png) 
2. Click **+ New Kubernetes Cluster**. The following screen appears: 
   ![Kubernetes Cluster Details1](img/kubeclusterdetails1.png)
   ![Kubernetes Cluster Details2](img/kubeclusterdetails2.png)
   ![Kubernetes Cluster Details2](img/kubeclusterdetails3.png)
3. Select availability zone.
   
    :::note
    Kubernetes clusters can be created only in availability zones that support VPC networking
    :::
1. Select a cluster pack from the list.
2. Select the required IP address configuration for the cluster.
3. Select a compute pack from the compute intensive list.
4. Enter the required cluster size to define the number of nodes created in the Kubernetes cluster.
5. Enter the required node root disk size for each cluster node.
6. Select a kubernetes version from the dropdown.
7. Enter the kubernetes cluster name in **Name Your Kubernetes Cluster**.
8. Select the **I have read and agreed to the Yntraa Cloud Terms and Conditions and Privacy Policy** option, and click the **Buy Monthly** button. 

