---
sidebar_position: 4
---
# Operations

To view all available Block Volume operations:
1. Navigate to the **Storage >Block Volumes** and access the **Operations** tab. The following window appears:
![blockvolumenew](img/blockvolumenew.png)

Yntraa Cloud provides the following operations on Block Volumes:

- **Detach from Instance** - Use this option to detach the Volume from its Instance.
	:::note
	Before detaching, ensure the disk is safely unmounted to prevent data loss or system issues. For Linux, use commands like `lsblk` or `df -h` to confirm the disk is not in use. For Windows, use Disk Management to set the volume to **Offline** or select **Detach VHD**.
	:::
	
- **Attach to Instance** - Use this option to attach the Volume to another Instance.
	:::note
	Root Disks can not be detached from their Instances, and only attached Volumes can be detached from their Instances.
	:::
	
- **Download Volume** - Only Data Disks that are detached from their Instances can be downloaded.
- **Delete Volume** - This removes the Block Volume and all associated restore points and restore point schedules. This also stop the subscription for this Block Volume from the time of deletion.
	:::note
	This action is irreversible and you may not be able to recover any data on this Volume.
	:::	