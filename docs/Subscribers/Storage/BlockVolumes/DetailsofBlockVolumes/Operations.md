---
sidebar_position: 4
---
# Operations

To view all available Block Volume operations, navigate to the **Storage**, select the **Block Volumes** and access the **Operations** tab. The following window appears:
![blockvolumenew](img/blockvolumenew.png)

Yntraa Cloud provides the options to perform the following operations on Block Volumes:

- **Detach from Instance** -
	Use this option to detach this Volume from its Instance.
- **Attach to Instance** -
	Use this option to attach this Volume to another Instance.
	:::note
	Root Disks can not be detached from their Instances, and only attached Volumes can be detached from their Instances.
	:::
- **Download Volume** -
  Only Data Disks that are detached from their Instances can be downloaded.
- **Delete Volume** -
	This removes the Block Volume and all associated restore points and restore point schedules. This also stop the subscription for this Block Volume from the time of deletion.
	:::note
		This action is irreversible and you may not be able to recover any data on this Volume.
	:::	