---
sidebar_position: 3
---
# SIEM

Security Information and Event Management (SIEM) in cloud service is a centralised security solution that collects and analyzes data from multiple sources to detect and respond to threats in real time. It provides log management, monitoring, alerts, and compliance reporting, helping organizations improve visibility and strengthen their overall security posture.

To activate the desired Security Information and Event Management (SIEM) service, perform the following steps:
1. Navigate to **OTHER SERVICES** > **SIEM**. ![siem](img/siem.png)
2. Click the **ACTIVATE** button. ![siemactivation.png](img/siemactivation.png)
3. Select the I have read and agreed to the **End User License Agreement** and **Privacy Policy** option, and click **CONFIRM ACTIVATION** button.
   
### Required Details 
You need to provide the following details while requesting for the service:
- **Throughput/Licensing**: Based on the volume of log data (EPS – Events Per Second) and customer retention requirements from the customer, the appropriate sizing and compute resources will be selected and deployed within the private cloud infrastructure.
- **Integration and Data Sources**: Includes a list of Log Sources and Protocols (Syslog, CEF, SNMP, API, Database, File-based, etc.) along with cloud and Third-Party Integrations (AWS, Azure, GCP, ServiceNow, EDR, etc.).
- **SIEM Configuration and Correlation**: Covers use cases and correlation rules (Threat Detection, Compliance, Insider Threat, etc.), dashboards, reports, and alerts to be configured as well as retention and archival policies (short-term and long-term storage requirements).
## Accessing SIEM Service Details
The user will receive the service URL, instructions for logging in and monitoring the service via email Passwords will be shared separately with the user via SMS.  
## Endpoints and Connectivity  
The following table lists the service endpoints.

| **Endpoint** | **FQDN/VIP**             | **Port**     | **User Type** | **Purpose/Notes**                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | ------------------------ | ------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SIEM_URL     | cloud.delhisiem01.nic.in | 8443/ 22 TCP | User          | Security events from diverse sources are collected, normalised, and correlated according to defined detection and compliance policies. High availability, whether Active/Passive or Active/Active, ensures continuous log ingestion, analysis, and alerting, thereby providing uninterrupted visibility into the security posture and threat activity across the environment. |

## Accessing the SIEM service
Content Required
## Monitor Access and Usage
Content required
## Exporting Logs
The user can download the logs in CSV format from the dashboard.  
## Alert and Notifications
- **Alert Enabling**: Multiple failed logins, account lockouts, successful logins from unusual or new locations, firewall denies, port scans, etc.
- **Alert delivery**: The alerts are delivered to the project email.
- **Alert modification**: Request changes via ticket with the recipients.
## Incident Management
- **Reporting an incident**: Open a Service Desk ticket (P1–P4) including details such as the affected endpoints, timestamp, error, user, and impact.
- **Handling updates**: Incident status is communicated through the ticket, and a post‑incident review is provided within 5 business days.
## Service Levels and Support
- **SLAs applicable**: For production environments, the service guarantees 99.9% availability. Response times are defined as 15 minutes for P1 incidents and 1 hour for P2 incidents, with resolution targets aligned to the defined runbook. 
- **Support hours and escalation procedures**: Support is available 24×7 for production environments. Incidents should be escalated according to the L1 → L3 contact matrix provided in your welcome pack.

