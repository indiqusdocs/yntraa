---
sidebar_position: 11
---
# Installing ACS CSI Driver on K8s Cluster

This section describes the process for installing and configuring the Apache CloudStack (ACS) Container Storage Interface (CSI) driver on a kubernetes cluster using Helm.

## Prerequisites

Before proceeding with the installation, ensure the following prerequisites are met: 

- Kubernetes cluster is up and running. 
- kubectl access is configured on the master/control-plane node. 
- Internet connectivity is available from the master node. 
- CloudStack API endpoint (api-url) must be reachable from the kubernetes master node. 
- Root or sudo access is available on all kubernetes nodes.
  
## Installing Helm 

Execute the following commands on the kubernetes master node to install Helm:

### Installing Required Packages

To install the required packages, run the following command:

   `sudo apt-get install curl gpg apt-transport-https --yes`

### Adding Helm Repository

Run the following commands to add the Helm repository:
```
 curl -fsSL https://packages.buildkite.com/helm-linux/helm-debian/gpgkey | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
```


```
echo "deb [signed-by=/usr/share/keyrings/helm.gpg] https://packages.buildkite.com/helm-linux/helm-debian/any/ any main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
```
 

### Updating Repository and Installing Helm
To update the repository and install help, run the following commands:
```
sudo apt-get update 
sudo apt-get install helm
```

## Downloading CloudStack CSI Driver Helm Charts 

Download the latest CloudStack CSI Driver Helm charts from the official release page: 
https://github.com/cloudstack/cloudstack-csi-driver/releases/ 

After downloading, run the following commands: 
1. Extract/unzip the downloaded package. 
   
	`unzip cloudstack-csi-driver.zip`
   
2. Navigate to the extracted directory.
    
   `cd cloudstack-csi-driver`
   
## Preparing Kubernetes Nodes 

Create the metadata directory on all kubernetes nodes by running the following command: 

`mkdir -p /run/metadata`
    
## Installing CloudStack CSI Driver
Navigate to the extracted Helm chart directory and run the following command: 

`helm install cloudstack-csi . -n kube-system --create-namespace`

## Expected Installation Output 

Sample successful installation output: 

```
NAME: cloudstack-csi 
LAST DEPLOYED: Fri Mar 6 06:17:54 2026 
NAMESPACE: kube-system 
STATUS: deployed 
REVISION: 1 
TEST SUITE: None
```
    
:::note
A warning related to duplicate healthz port names may appear during installation. This warning does not impact the functionality of the CSI driver.
:::

## Verifying CSI Driver Installation

Verify that all CSI driver pods are running successfully by running the following command: 

`kubectl get pod -A` 

Expected output: 
```
NAMESPACE     NAME                                         READY   STATUS 
kube-system   cloudstack-csi-controller-5c5bf995bc-8ddfp   5/5     Running 
kube-system   cloudstack-csi-controller-5c5bf995bc-f4zbr   5/5     Running 
kube-system   cloudstack-csi-node-glbfq                    3/3     Running 
kube-system   cloudstack-csi-sc-syncer-j8dls               0/1     Completed
```

Ensure: 
- cloudstack-csi-controller pods are in Running state. 
- cloudstack-csi-node pods are in Running state. 
- cloudstack-csi-sc-syncer pod status is Completed.
  
## Troubleshooting

### **API Connectivity Issues**

   Verify that the CloudStack API endpoint is reachable from the master node: 
   
   `curl -k https://<cloudstack-api-url>/client/api`

### **Checking CSI Driver Logs** 

- **Controller logs**: 

    `kubectl logs -n kube-system deployment/cloudstack-csi-controller`

- **Node plugin logs**: 

    `kubectl logs -n kube-system <cloudstack-csi-node-pod-name>`

The Apache CloudStack CSI Driver is now successfully installed and integrated with the kubernetes cluster. Persistent Volumes can now be dynamically provisioned using CloudStack-backed storage.