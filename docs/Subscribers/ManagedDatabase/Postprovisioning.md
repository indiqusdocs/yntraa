---
sidebar_position: 6
---
# Post-Provisioning Access and Visibility
After a Managed Database as a Service (MDBaaS) instance is successfully provisioned, customers are provided with database-level access and connection details required for application integration.
## Database Access Details Provided
Upon completion of provisioning, you receive the following information (subject to the selected database and plan):
- Database endpoint/hostname
- Port number
- Database name (where applicable)
- Admin or privileged database user credentials
- Connection strings or examples

These details enable:
- Application connectivity
- Schema creation and data operations
- User and role management within the database (as permitted)

:::note 
Credential delivery follows Yntraa Cloud security policies and may be shared via secure channels.
:::
## Level of Access Provided 
**Database-Level Access**: You are granted with full database administrative access within the database engine.
- You have ability to perform these operations:
	- Create schemas, tables, indexes
	- Manage database users and roles
	- Perform read/write operations
	- Execute database-specific administrative commands (within allowed limits)

**OS-Level and Infrastructure Access**: You are not provided with the following rights:
	- Operating system (OS) access to database virtual machines
	- Root or sudo access
	- Direct access to database configuration files
	- Control over underlying infrastructure components
This abstraction is fundamental to the managed service model.
## Visibility and Monitoring 
- **What You Can View**: Depending on the service plan and platform capabilities, you may have visibility into:
	- Database service status (running, maintenance, issue)
	- Basic performance indicators
	- Provisioning and change request status

- **What Is Managed Internally by Yntraa**: Yntraa manages and monitors (for example, OS health and patching, Database process health, Resource utilization, Availability and failover mechanisms, Backup jobs and maintenance activities (as per plan))

:::note
Detailed low-level metrics may not be exposed directly to you at this stage.
:::
## Security and Access Control
- Database services are deployed within private VPC networks.
- Network access is controlled via:
	- VPC routing
	- Firewall and security group policies
- You are responsible for:
	- Managing database users and access privileges
	- Ensuring secure credential handling at the application layer
:::note 
Public exposure of database endpoints is restricted and may require additional approvals.
:::
## Change Management and Configuration Restrictions
You cannot directly:
- Modify database engine configuration files
- Install third-party plugins or extensions without approval
- Change system-level parameters

For such changes:
- A support or change request must be raised
- Changes are evaluated for impact and feasibility
- Approved changes are implemented by Yntraa operations teams
