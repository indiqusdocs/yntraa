---
sidebar_position: 3
---
# Service Overview and Architecture
Yntraa Cloud Managed Database as a Service (MDBaaS) provides a standardized, managed deployment of databases on Yntraa Cloud infrastructure using a QuickPlan-based provisioning model, where:
- You initiate service requests via the Yntraa Cloud Console
- Database provisioning is triggered through a standardized request form
- Actual database deployment is performed by Yntraa Cloud backend automation and operations teams
- You receive confirmation once the database service is successfully deployed and ready for use

The service is designed to abstract infrastructure and operational complexity while ensuring:

- Controlled and compliant deployments
- Consistent architecture and operational standards
- Reduced customer operational overhead
## Deployment Architecture
**Infrastructure Layer**
- Databases are deployed on dedicated virtual machines (VMs) provisioned within the customer-selected project and VPC.
- Compute, storage, and network resources are allocated based on the configuration selected during service request.
- Each database deployment follows pre-approved reference architectures defined by Yntraa Cloud.

**Database Layer**
- Database software is installed, configured, and managed by Yntraa Cloud Operations team.
- High availability and clustering (where applicable) are configured as per:
- Selected database type
- Minimum node requirements (e.g., minimum 3-node clusters for distributed databases)
- Database versions are selectable during provisioning and are governed by Yntraa-supported versions.

:::note
Direct customer-managed installation of database software on VMs is not part of the MDBaaS offering.
:::

## Scaling Model (Current Capabilities)
**Vertical Scaling**
- CPU, memory, and storage scaling is supported based on:
- Database type
- Selected plan
- Operational feasibility
- Scaling requests may require a support request or change request and are not fully self-service at this stage.

**Horizontal Scaling**
- Horizontal scaling is supported only for databases that natively support clustering or sharding (for example, Cassandra, MongoDB, Elasticsearch).
- Node count changes are performed by Yntraa operations teams post validation.
:::note 
Real-time or automatic elastic scaling is not currently available via the console.
:::