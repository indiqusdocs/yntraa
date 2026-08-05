---
sidebar_position: 7
---
# Managing Volume 

Manage volumes to monitor and protect the storage resources attached to your instances. Volume management allows you to view attached disks, create disk restore points to safeguard data before changes, and create custom images for rapid instance deployment and recovery. These operations help ensure data protection, simplify backup and restoration, and maintain consistent storage configurations across your cloud environment.

This section comprises of the following sub-sections:

<div className="custom-block-blue">  
- [Viewing Attached Disk](#viewing-attached-disk)
- [Adding Volume](#adding-volume)
- [Creating Disk Restore Point ](#creating-disk-restore-point)
- [Viewing Disk Restore Point ](#viewing-disk-restore-point)
- [Creating a Custom Image or My Image](#creating-a-custom-image-or-my-image)
- [Creating Volume from Disk Restore Point](#creating-volume-from-disk-restore-point)
- [Deleting Disk Restore Point](#deleting-disk-restore-point)
</div>

## Viewing Attached Disk

View the disks attached to an instance to verify the storage resources associated with it. This helps you identify the attached disks, review their details, and confirm that the required storage volumes are correctly connected, enabling efficient storage management and troubleshooting.

To view the disks attached to an instance, follow these steps: 

1. Navigate to **Compute > Other Linux Instances**. The following screen appears:
   ![Linux Instance Created](img/linuxinstancelist.png)
2. Click on your created linux instance name from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/linuxinstanceoverview.png)
3. Click **Volumes**. The following screen appears: 
![View Root Disk](img/viewattacheddisk.png)

## Adding Volume

Adding a volume allows you to create and attach additional block storage to your cloud instances. Volumes provide persistent storage for applications, databases, and other data that must be retained independently of the instance lifecycle. You can create volumes with the required capacity and attach them to supported instances to expand available storage.

To add volume, follow these steps:

1. Navigate to **Compute > Other Linux Instances**. The following screen appears:
   ![Linux Instance Created](img/linuxinstancelist.png)
2. Click on your created linux instance name from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/linuxinstanceoverview.png)
3. Click **Volumes**. The following screen appears: 
   ![Adding Volume](img/addvolume.png)
4. Click the [**Add Volume**](/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk) button to initiate the add volume procedure.

## Creating Disk Restore Point 

Create a disk restore point to capture the current state of a disk before performing updates, configuration changes, or other modifications. A disk restore point preserves the disk data at a specific point in time, allowing you to restore the disk to that state if needed. This helps protect against accidental data loss, simplifies recovery from unexpected issues, and ensures business continuity with minimal downtime.

To create the disk restore point, follow these steps: 

1. Navigate to **Compute > Other Linux Instances**. The following screen appears:
   ![Linux Instance Created](img/linuxinstancelist.png)
2. Click on your created linux instance name from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/linuxinstanceoverview.png)
3. Click **Volumes**. The following screen appears: 
  ![View Root Disk](img/linuxinstancevolume.png)
4. Click the **Create Restore Point** icon (highlighted in red). The following screen appears: 
  ![Create Disk Restore Point in linux Instance](img/creatediskrestorepoint.png)
5. Click the **Create Disk Restore Point** button. The disk restore point is created.
    :::note
    Restore Point creation will occupy space in your additional storage.
    :::

## Viewing Disk Restore Point

View disk restore points to monitor the available recovery snapshots created for a disk. Reviewing restore points helps you verify backup availability, identify restore points based on their creation time, and select the appropriate recovery point when restoring a disk. This ensures you can quickly recover disk data to a known good state whenever required.

To view the disk restore point, follow these steps: 

1. Navigate to **Tools and Utilities > Restore Points**. The following screen appears:
![Restore Points list](img/restorepointview.png)
2. Click **Disk Restore Point**. The following screen appears: 
![View Disk Restore Points](img/linuxdiskrestorepoint.png)

## Creating a Custom Image or My Image

Creating custom images or My Image allows you to create a reusable image from an existing instance by using a disk restore point. The custom image captures the current state and configuration of the instance, making it easier to deploy new instances with the same setup.

To create a custom image or My Image, follow these steps:

1. Navigate to **Compute > Other Linux Instances**. The following screen appears: 
   ![Linux My Image](img/linuxmyimage.png)
2. Click on your created linux instance name from the list. The following screen appears:
   ![Overview](img/overviewpage.png)
3. Click **Volumes**. The following screen appears: 
   ![Volumes in Linux](img/volumesinlinux.png)
4. Click the **CREATE RESTORE POINT** icon (highlighted in red). The following screen appears: 
   ![Creating Restore Point](img/creatingrestorepoint.png)
5. Click the **Create Restore Point**. The disk restore point is created. 
6. Navigate to **Tools and Utilities > Restore Points**. The following screen appears: 
   ![Instance Restore Point](img/instancerestorepoint.png)
7. Click **Disk Restore Point**. The following screen appears: 
   ![Disk Restore Point](img/diskrestorepoint.png)
8. Navigate to **Disk Restore Point**. The following screen appears: 
   ![Disk Restore Point](img/diskrestorepointview.png)
9. Click the **Create Image** icon (highlighted in red). The following screen appears where you provide the required details:
   ![Creating My Image](img/creatingmyimage.png)
10. Click the **Yes** button.
11. Navigate to **Tools and Utilities > My Images**. The following screen appears: 
   ![My Image Created](img/myimagecreated.png)

## Creating Volume from Disk Restore Point

Create a volume to provision additional block storage for your cloud resources. Volumes provide persistent storage that can be attached to instances to expand storage capacity, host application data, or separate data from the operating system. Creating dedicated volumes improves storage flexibility, simplifies data management, and allows independent backup, restore, and lifecycle management without affecting the associated instance.

To create volume from disk restore point, follow these steps: 

1. Navigate to **Compute > Other Linux Instances**. The following screen appears:
   ![Linux Instance Created](img/linuxinstancelist.png)
2. Click on your created linux instance name from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/linuxinstanceoverview.png)
3. Click **Volumes**. The following screen appears: 
   ![View Root Disk](img/linuxinstancevolume.png)
4. Click the **Create Restore Point** icon (highlighted in red). The following screen appears: 
   ![Create Disk Restore Point in linux Instance](img/creatediskrestorepoint.png)
5. Click the **Create Disk Restore Point** button. 
6. Navigate to **Tools and Utilities > Restore Points**. The following screen appears: 
   ![Restore Points list](img/restorepointview.png)
7. Click **Disk Restore Point**. The following screen appears: 
   ![View Disk Restore Points](img/linuxcreatevolume.png)
8. Click the **Create Volume** icon (highlighted in red) corresponding to the required disk restore point. The following screen appears:
   ![Linux Create Volume1](img/linuxcreatevolume1.png)
   ![Linux Create Volume2](img/linuxcreatevolume2.png)
9. Select availability zone.
10. Select the instance from the dropdown for which you want to create a restore point.
11. In the **Choose Disk Configuration** section:
    - Select the desired disk tier (**Tier1, Tier2, or Tier3**).
    - Click the **Custom Disk** option and adjust the disk size using the plus (+) or minus (–) controls as per requirement.
    - Click the **Select Pack** to choose the configured disk pack.
12. Enter the disk name in **Name Your Data Disk**. 
13. Select the **I have read and agreed to the Yntraa Cloud Terms and Conditions and Privacy Policy** option, and click **Buy Monthly** button. The following screen appears: 
   ![Data Disk Purchase](img/datadiskpurchase.png)
14. Click the **Confirm** button. The data disk is created.

## Deleting Disk Restore Point

Delete a disk restore point when it is no longer required to free up storage resources and simplify restore point management. Removing outdated or unnecessary restore points helps maintain an organized backup environment while ensuring that only relevant recovery points are retained.
:::warning
This action can not be reversed.
:::

To delete disk restore point, follow these steps: 
1. Navigate to **Compute > Other Linux Instances**. The following screen appears:
   ![Linux Instance Created](img/linuxinstancelist.png)
2. Click on your created linux instance name from the list. The Overview tab opens automatically. The following screen appears: 
   ![Overview](img/linuxinstanceoverview.png)
3. Click **Volumes**. The following screen appears: 
   ![View Root Disk](img/linuxinstancevolume.png)
4. Click the **Create Restore Point** icon (highlighted in red). The following screen appears: 
   ![Create Disk Restore Point in linux Instance](img/creatediskrestorepoint.png)
5. Click the **Create Disk Restore Point** button.
6. Navigate to **Tools and Utilities > Restore Points**. The following screen appears: 
   ![Restore Points list](img/restorepointview.png)
7. Click **Disk Restore Point**. The following screen appears:
   ![Delete Restore Point Linux](img/deleterestorepointlinux.png)
8. Click the  **Delete Disk Restore Point** icon (highlighted in red). The following screen appears: 
   ![Disk Restore Point Deleted](img/deleteddiskrestore.png)
9. Click the **Yes** button. The disk restore point is deleted.
   
