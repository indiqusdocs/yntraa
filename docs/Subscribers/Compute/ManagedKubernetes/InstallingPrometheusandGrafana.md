---
sidebar_position: 12
---
# Installing Prometheus and Grafana

This section describes the process for deploying Prometheus and Grafana on a Kubernetes cluster using the kube-prometheus-stack Helm chart from the Prometheus Community repository.

The deployment includes:
    - Prometheus Server
    - Grafana Dashboard
    - Alertmanager
    - Node Exporter
    - Kubernetes Metrics Collection Components

## Prerequisites
Ensure the following prerequisites are met before proceeding:
    - A running Kubernetes cluster.
    - kubectl installed and configured.
    - Helm installed and configured.
    - Internet connectivity from the Kubernetes master node.
    - Sufficient cluster resources available for monitoring components.
  
## Adding Prometheus Community Helm Repository
Run the following commands to add the official Prometheus Community Helm repository and update the local Helm cache:

- **Adding Helm Repository**

   `helm repo add prometheus-community https://prometheus-community.github.io/helm-charts`

- **Updating Helm Repository**
 
  `helm repo update`

## Creating Monitoring Namespace
Create a dedicated namespace for monitoring components.

   `kubectl create namespace monitoring`
   
## Deploying Prometheus and Grafana Stack
Deploy the kube-prometheus-stack Helm chart into the monitoring namespace.

`helm install prometheus prometheus-community/kube-prometheus-stack --namespace monitoring`
    
## Verifying Installation
Verify that all monitoring pods are running successfully.

`kubectl get pods -n monitoring`

Expected output should show pods in Running state.

Example:

```
NAME                                                     READY      STATUS    RESTARTS alertmanager-prometheus-kube-prometheus-alertmanager-0      2/2     Running   0 prometheus-grafana-6b8d4f6f58-abcde                      3/3     Running   0 prometheus-kube-prometheus-operator-xxxxx                1/1     Running   0 prometheus-kube-state-metrics-xxxxx                      1/1     Running   0 prometheus-prometheus-kube-prometheus-prometheus-0       2/2     Running   0
```
    
## Accessing Grafana
The Helm chart automatically deploys Grafana and generates a default admin password.

- **Forwarding Grafana Service Port**
   
   Run the following command to access Grafana locally:
   
   `kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring`
   
- **Accessing Grafana UI**
   
   Open the following URL in web browser:
   
   `http://localhost:3000`

- **Default Grafana Credentials**
    - Username: admin
  
  Retrieve the automatically generated admin password:
  
  `kubectl get secret --namespace monitoring prometheus-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo`


## Accessing Prometheus

- **Forwarding Prometheus Service Port** 
   
   Run the following command:

  `kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090:9090 -n monitoring` 

- **Accessing Prometheus UI** 
   
   Open the following URL in your web browser:
   
   `http://localhost:9090` 

## Validation Checks
After deployment, verify the following validations:
    - All pods in the monitoring namespace are running.
    - Grafana dashboard is accessible.
    - Prometheus UI is accessible.
    - Kubernetes cluster metrics are visible in Prometheus.
    - Grafana dashboards are automatically populated.
      
## Troubleshooting

- **Checking Helm Release Status**
  
   `helm list -n monitoring` 
   
- **Checking Pod Logs**
  
  `kubectl logs -n monitoring <pod-name>`
  
- **Describing Failed Pods**

  `kubectl describe pod <pod-name> -n monitoring`
 
 Prometheus and Grafana have now been successfully deployed on the Kubernetes cluster using the kube-prometheus-stack Helm chart. The environment is ready for monitoring Kubernetes workloads, infrastructure metrics, and alerting integration.