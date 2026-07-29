---
sidebar_position: 3
---
# Viewing Details of Linux Instances

View detailed information about a linux instance, including its configuration, status, networking, storage, and resource allocation. Reviewing these details helps you monitor the instance and verify its settings for effective management.

This section comprises of the following sub-sections:

<div className="custom-block-blue">  
- [Launching Linux Instance Web Based Console](#launching-linux-instance-web-based-console)
- [Stopping and Starting a Linux Instance](#stopping-and-starting-a-linux-instance)
</div>

To view the details of linux instances, follow these steps:

1. Navigate to **Compute > Other Linux Instances**. The following screen appears: 
   ![Linux Instance List](img/linuxinstancelist.png)
2. Click on your created linux instance from the list. The Overview tab opens automatically. The following screen appears with the details: 
   ![Overview](img/linuxinstanceoverview.png)

**Configuration and Availability:** This displays the following linux instance configuration details to help verify its current configuration and operational state:

- The instance's status <span class="green">**Running**</span> or <span style={{ color: 'red' }}>**Stopped**</span>
- Availability Zone
- Operating System
- Compute Pack
- Root Disk

**Internal Information:** This displays the following information that is used for internal identification of the linux instances and communication with other internal services:
- Template Name
- Created On

**Security and Access Control:** This displays the available security settings and access control options for the linux instance based on its networking zone. The available information and operations may vary depending on the configured network environment:
- Network Name
- VPC Name
- Access Control

## Launching Linux Instance Web Based Console 

Launch the linux instance web-based console to access and manage your linux instance through a web browser. The console provides a convenient way to perform administrative and management tasks on the instance.

1. Navigate to **Compute > Other Linux Instances**. The following screen appears: 
   ![Linux Instance List](img/linuxinstancelist.png)
2. Click on your created linux instance from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/linuxinstanceoverview.png)
3. Click **Launch Console** button, and then provide the linux credentials to login and access the linux instance web-based console.
   
## Stopping and Starting a Linux Instance

Stop a linux instance to temporarily shut it down when it is not in use, helping optimize resource usage. Start the instance whenever you need to restore access and resume running your linux-based applications and workloads.

To start and stop the linux instance, follow these steps:  

1. Navigate to the **Compute > Other Linux Instances**. The following screen appears: 
  ![Linux Instance List](img/linuxinstancelist.png)
2. Click on your created linux instance from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/linuxinstanceoverview.png)
3. Click the <span style={{ color: 'red' }}>Stop Instance</span> button. The following screen appears: 
   ![Linux Stop Instance Message](img/linuxstopinstancemessage.png)
4. Click the **Yes** button. The following screen appears:
   ![Linux Instance Stopped](img/linuxinstancestopped.png)
5. Click the <span style={{ color: 'blue' }}>Start Instance</span> button. The following screen appears: 
   ![Linux Instance Start Message](img/linuxinstancestartmessage.png)
6. Click the **Yes** button. The following screen appears:
   ![Overview](img/linuxinstanceoverview.png)








