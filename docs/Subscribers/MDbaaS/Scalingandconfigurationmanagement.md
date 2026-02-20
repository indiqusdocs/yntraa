---
sidebar_position: 7
---
# Scaling and Configuration Management 
Yntraa Cloud Managed Database as a Service (MDBaaS) supports controlled scaling and configuration changes to ensure platform stability and predictable performance.

While the service abstracts infrastructure and database operations, **not all scaling and configuration changes are self-service** at this stage. This section explains what changes are supported, how they are performed, and the associated limitations.

The Scaling models supported are:
## Vertical Scaling (Scale Up)
Vertical scaling involves increasing resources on existing database nodes.

**Supported changes include:**
	- Increasing vCPU allocation
	- Increasing memory allocation
	- Expanding data disk size

**Key characteristics:** Vertical scaling is supported subject to database and plan compatibility
- Scaling operations may require:
	- Planned maintenance windows
	- Short service interruptions (depending on the database)
- Changing Request 
	- Raise a support or change request with desired configuration changes
	- Yntraa operations teams validate feasibility and execute the change
:::note 
Reduction of allocated resources (scale down) may not be supported in all cases.
:::
## Horizontal Scale(Scale Out/Scale In)
Horizontal scaling involves modifying the number of database nodes.

**Key characteristics:**
Adding or removing nodes is performed by Yntraa operations teams
- Scaling requires:
	- Architecture validation
	- Licensing reassessment (where applicable)
	- Data rebalancing considerations
:::note 
Horizontal scaling is not available for all relational databases.
:::
## Store Scaling 
- Data disk expansion is supported for most database engines
- Storage size can be increased post-deployment
- Storage reduction is generally **not supported**

You should plan storage sizing carefully during initial provisioning.
## Configuration Management 
- You Can Configure Directly Within the database engine and perform the following services.
	- Create and manage schemas, tables, and indexes
	- Manage database users and roles
	- Configure application-level parameters
- Restricted Configuration Changes: You cannot directly perform these changes:
	- Modify database engine configuration files
	- Change OS-level parameters
	- Install custom extensions or plugins
	- Alter clustering or replication settings
- Such changes require:
	- Support or change requests
	- Impact assessment by Yntraa Cloud
	- Approval based on service plan and platform standards