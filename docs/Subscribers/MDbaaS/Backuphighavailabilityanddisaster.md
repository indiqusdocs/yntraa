---
sidebar_position: 8
---
# Backup, High Availability and Disaster Recovery
## Backup Management 
As part of MDBaaS, Yntraa Cloud performs **managed backups** for supported databases, subject to the selected service plan.

Backups typically include:
- Database-level backups
- Full and/or incremental backups (database dependent)
- Automated backup scheduling

Backup configurations may vary based on:
- Database engine
- Deployment architecture
- Service plan

**Backup Storage and Retention**
- Backups will be configured as per provided details in request by you through Portal.
- Default retention policies are defined as per the service plan, you can refer Backup guidelines.
- Extended retention or custom backup policies may require:
	- Plan upgrades
	- Additional service requests

:::note 
Backup retention details are communicated during service onboarding definition.
:::

**Backup Restoration**

- Restore operations are performed by Yntraa operations teams upon request.
- Restoration may be:
	- To the same database instance, or
	- To a new database instance (subject to feasibility)

You must provide, the following details: 
- Restore point (date/time)
- Target environment (if applicable)
:::note 
 Restore operations may involve downtime depending on the database and restore type.
::: 
## High Availability 
- High availability is implemented based on:
	- Database engine capabilities
	- Number of nodes selected
	- Service plan entitlements
- Typical HA mechanisms include:
	- Primary–replica configurations
	- Clustered or distributed deployments
	- Automatic failover within a defined scope

:::note 
Certain databases mandate a **minimum node count** (e.g., 3 nodes) to enable HA.
:::
- HA Behavior and Failover
	- Failover mechanisms are managed by Yntraa.
	- Automatic failover is supported where the database engine natively provides it.
- Failover may result in:
	- Short-lived connection interruptions
	- Application reconnections being required
:::note 
Application retry logic is the customer’s responsibility.
:::