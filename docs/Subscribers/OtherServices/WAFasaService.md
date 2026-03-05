---
sidebar_position: 7
---
# WAF as a Service

A Web Application Firewall (WAF) is a security solution that protects web applications by monitoring and filtering incoming and outgoing traffic. It inspects data at the application layer to detect and block malicious or suspicious activity, ensuring secure and reliable web performance.

To activate the desired Web Application Firewall (WAF) service, perform the following steps:
1. Navigate to **OTHER SERVICES** > **WAF as a Service**. ![waf](img/waf.png)
2. Click the **ACTIVATE** button. ![wafactivation.png](img/wafactivation.png)
3. Select the I have read and agreed to the **End User License Agreement** and **Privacy Policy** option, and click **CONFIRM ACTIVATION** button.
   
   Once submitted, a support ticket will be automatically generated for the operations team for further processing.

### Required Details

You need to provide the following details while requesting for the service:

- **Throughput/Licensing**: Based on the throughput required from the customer, the sizing or compute will be selected and deployed in the cloud infrastructure.
- **Deployment Mode**: Reverse-proxy, inline, transparent/bridge mode, or behind a load balancer.
- **Protected Application Details**
    - Domain(s), URLs, APIs, microservices.
    - Public vs internal exposure.
    - Expected traffic volume and patterns.
- **Network Placement**
    - Frontend VIPs (public or internal).
    - Backend server pools/application servers.
    - Required subnets/VLANs for management, data.
      
## Accessing Web Application Firewall Service Details

The user will receive the service URL, instructions for logging in and monitoring the service. Passwords will be shared separately with the user via SMS.

## Endpoints and Connectivity
The following table lists the service endpoints.

| **Endpoint**       | **FQDN /VIP** | **Port**    | **User Type** | **Purpose/Notes**                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------------- | ----------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Radware Alteon WAF | 192.168.1.12  | 443/ 22 TCP | Admin         | A single ingress point

## Accessing the Web Application Firewall Server
Content Required
   
## Monitor Access Usage

- Radware WAF enables real-time monitoring of web application access and usage.
- Dashboards provide visibility into traffic patterns, user activity, and attack attempts.
- Monitoring helps detect unauthorized access, anomalies, and policy violations.
## Log Access and Usage

- Radware WAF logs all web application access and usage activities.
- Logs record allowed and blocked HTTP/HTTPS requests for security monitoring.
- Administrators can review logs to identify attacks, policy violations, and suspicious behavior.
## Exporting Logs
The user can download the logs in CSV format from the dashboard.
## Alert and Notifications
- **Alerts enabled by default**: Node down/failover, replication lag, disk usage, connection errors, network latency, SSL expiry, CPU load, RAM load, etc.
- **Alert delivery**: The alerts are delivered to the project email.
- **Alert modification**: Request changes via ticket with the recipients.
## Incident Management
- **Reporting an incident**: Open a Service Desk ticket (P1–P4) including details such as the affected endpoints, timestamp, error, user, and impact.
- **Updates handling**: Incident status is communicated through the ticket, and a post‑incident review is provided within 5 business days. 
## Service Levels and Support
- **SLAs applicable**: For production environments, the service guarantees 99.9% availability. Response times are defined as 15 minutes for P1 incidents and 1 hour for P2 incidents, with resolution targets aligned to the defined runbook. 
- **Support hours and escalation procedures**: Support is available 24×7 for production environments. Incidents should be escalated according to the L1 → L3 contact matrix provided in your welcome pack.