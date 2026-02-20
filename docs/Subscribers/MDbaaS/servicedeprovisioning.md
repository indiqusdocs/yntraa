---
sidebar_position: 9
---
# Service Deprovisioning 
Service de-provisioning refers to the **permanent termination of a Managed Database as a Service (MDBaaS) instance** on Yntraa Cloud.
## De-Provisioning Scenarios
De-provisioning may occur under the following scenarios:
- Customer-initiated service termination
- End of subscription or contract period
- Non-renewal of service plans
- Policy or compliance-driven termination (as applicable)
## De-Provisioning Request Process
To initiate de-provisioning, follow these steps:
1. The customer submits a **de-provisioning request** via:
	- Yntraa Cloud Console (where available)
	- Yntraa support channels
2. The request must clearly specify:
	- Database instance to be terminated
	- Desired termination date
	- Confirmation of data deletion acknowledgment
3. Yntraa validates the request and schedules de-provisioning
:::note 
De-provisioning is not instantaneous and may follow defined timelines.
:::
## Data Handling and Retention
**Data Deletion**: Upon de-provisioning the following changes will occur:
- Database instances are permanently deleted
- Associated data disks and backups are removed
- All database data becomes **irrecoverable**
You must ensure that all required data backups or exports are completed **before** requesting de-provisioning.
## Backup Retention Post De-Provisioning
- Backups are retained only as per:
	- Contractual obligations
	- Regulatory requirements (if applicable)
- No restoration is possible once the retention period expires
:::note 
Yntraa Cloud is not responsible for data loss resulting from customer-initiated de-provisioning.
:::
## Resource Cleanup
During de-provisioning, the following changes will occur:
- Compute resources (VMs) are released
- Storage volumes are deleted
- Network configurations specific to the service are removed
:::note 
Shared or customer-managed resources outside the MDBaaS scope are not affected.
:::
## Billing and Charges
- Billing for the service continues until the effective termination date
- Any outstanding usage charges are applied as per billing policies
- License-related costs (under BYOL) remain the customer’s responsibility
## Important Warnings and Acknowledgements
Before submitting a de-provisioning request, you must acknowledge that:
- De-provisioning is irreversible
- All data will be permanently deleted
- Service restoration will require fresh provisioning