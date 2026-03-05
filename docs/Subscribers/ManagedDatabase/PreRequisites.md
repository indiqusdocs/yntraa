---
sidebar_position: 4
---
# Pre-Requisites
Before initiating a Managed Database as a Service (MDBaaS) request on Yntraa Cloud, you must ensure that the following prerequisites are met.
## Yntraa Cloud Account and Project Access
- A valid Yntraa Cloud account is required.
- The user must have access to an active Yntraa project where the database service will be deployed.
- The user must be assigned appropriate permissions to:
	- Access QuickPlan services
	- Submit Managed Database service requests
	- Select network and resource configurations
:::note 
Insufficient permissions may prevent service activation or delay deployment.
:::
## Network Pre-Requisites 
MDBaaS deployments are performed within customer-selected network environments.

You must ensure:
- An existing Virtual Private Cloud (VPC) is available
- Appropriate subnets are configured within the VPC
- Required network policies and firewall rules allow application-to-database connectivity

During provisioning, you will be required to select the **Target VPC** where the database nodes will be deployed.
:::note 
Public internet exposure of database services is not enabled by default and may be restricted based on security policies.
:::
##  Capacity and Resource Planning

Prior to submitting a request, you should  have clarity on:
- Expected workload and data size
- Compute requirements (vCPU and memory per node)
- Storage requirements (data disk size and performance needs)
- Number of database nodes required

These inputs directly impact:

- Database performance
- High availability behavior
- Licensing requirements
- Cost and billing
:::note 
You should size conservatively for production workloads and consult Yntraa support for guidance if required.
:::
## Licensing Readiness (Where Applicable)
For databases offered under **Enterprise Support or BYOL plans**, you must ensure:

- Valid licenses are available for the selected database
- License quantities are calculated correctly using: Total vCPU × Number of Nodes.
- License terms are compliant with the respective database vendor policies

You will be required to acknowledge licensing responsibility during provisioning.
:::note 
License validation may be part of backend review before deployment initiation.
:::
## Database Selection and Version Finalisation 
Before provisioning, You should:
- Finalize the database engine (e.g., MySQL, PostgreSQL, MongoDB)
- Select the database version from supported options
- Understand version compatibility with their application

Once provisioning is initiated:
- Database version changes may require request cancellation and re-submission
- Downgrades are generally not supported
## Application and Connectivity Considerations
You should ensure:
- Application connectivity requirements are understood (ports, protocols)
- Security groups and firewall rules allow communication between application and database nodes
- Credentials and secrets management processes are in place at the application layer

:::note 
Application-level configuration and connection management remain the customer’s responsibility.
:::
## Operational Readiness
You should be aware that:
- Database provisioning is not instantaneous and requires backend processing
- Deployment timelines may vary based on:
	- Database type
	- Cluster size
	- Licensing validation
	- Resource availability
Clear communication and readiness help ensure timely service activation.