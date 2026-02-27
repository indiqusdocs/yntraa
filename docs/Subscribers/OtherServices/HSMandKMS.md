---
sidebar_position: 1
---
# HSM and KMS

In cloud services, Hardware Security Module (HSM) and Key Management Service (KMS) work together to protect sensitive data by securely creating, storing, and managing encryption keys. While HSM provides a highly secure, tamper-resistant environment for key protection, KMS offers centralized and simplified key lifecycle management across cloud resources and applications, ensuring strong security, compliance, and efficient control in cloud and hybrid environments.

To activate the desired Hardware Security Module (HSM) and Key Management Service (KMS), perform the following steps:
1. Navigate to **OTHER SERVICES** > **HSM and KMS**. ![hsmandkms](img/hsmandkms.png)
2. Click the **ACTIVATE** button. ![hsmandkmsactivation.png](img/hsmandkmsactivation.png)
3. Select the I have read and agreed to the **End User License Agreement** and **Privacy Policy** option, and click **CONFIRM ACTIVATION** button.

## Required Details
You need to provide the following details while requesting for the service:
- **Keys/Licensing**: Based on the number of keys required by the customer, the partition and domain will be bound.
- **Keys management**: The key lifecycle and rotation will be defined by the user. After integrating the servers and databases, the keys will be stored and managed by the KMS.
- **Policy Requirements**: The user needs to define the policies that need to be deployed for the guard points.
  
## Accessing HSM and KMS Service Details
The user will receive the service URL, instructions for logging in and monitoring the service via email. Passwords will be shared separately with the user via SMS.  

## Endpoints and Connectivity  
The following table lists the service endpoints:

| **Endpoint** | **FQDN/VIP**  | **Port** | **Who uses it** | **Purpose/Notes**                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------ | ------------- | -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Thales KMS   | 10.246.233.81 | 443      | Tenant-admin    | Cryptographic operations such as key generation, encryption, decryption, and signing are performed within the FIPS-validated, tamper-resistant HSM boundary. High availability, whether Active/Passive or Active/Active, ensures seamless, low-latency key access for all integrated applications. There is no direct exposure of master keys or cryptographic material outside the secure boundary of the HSM. |

## Log Access and Usage
Audit and operational logs are available through the KMS dashboard, including:
- Key usage events
- Administrative actions
- System and security events

**Exporting the logs**: The users can export logs directly from the dashboard in CSV format for audit and compliance purposes.

## Alert and Notifications
- **Alerts enabled by default**: Node down/failover, replication lag, disk usage, connection errors, network latency, SSL expiry, CPU load, RAM load, etc.
- **Alert delivery**: The alerts are delivered to the project email.
- **Alert modification**: Request changes via ticket with the recipients.
## Incident Management
- **Reporting an incident**: Open a Service Desk ticket (P1–P4) including details such as the affected endpoints, timestamp, error, user, and impact.
- **Updates handling**: Incident status is communicated through the ticket, and a post‑incident review is provided within 5 business days. 
## Service Levels and Support
- **SLAs applicable**: For production environments, the service guarantees 99.9% availability. Response times are defined as 15 minutes for P1 incidents and 1 hour for P2 incidents, with resolution targets aligned to the defined runbook.
- **Supporting hours and escalation procedures**: Support is available 24×7 for production environments. Incidents should be escalated according to the L1 → L3 contact matrix provided in your welcome pack.
