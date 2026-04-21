---
sidebar_position: 3
---
# Working with Disk Restore Points

Restore points are point-in-time 'images' of a disk contents and can be used as a restoration point for the parent disk. The following sections outline all available restore points functions and capabilities in the Yntraa Cloud.

Yntraa block volumes service provides extensive functionality for managing disk restore points. 

## Creating Disk Restore Point

To create disk restore point, follow these steps: 
1. Navigate to **Storage > Block Volume** and access the **Restore Points** tab. The following screen appears:
   ![restorepointdefault](img/restorepointdefault.png)
2. Click the **Create Disk Restore Point** button. The following screen appears:
   ![creatediskrestpointpopup](img/creatediskrestpointpopup.png)
   
   This will generate a restore point that can be used to create an **Image (template)** or restore an existing disk.
   ![restorepointname](img/restorepointname.png)



## Creating a Disk from a Restore Point

Disk restore point created manually or using a schedule lists under the **Restore Points** section of disk details. To create a new data disk using a restore point, the option to **Create Disk Restore Point** can be used, which will initiate a purchase flow similar to [creating a data disk](/docs/Subscribers/Storage/BlockVolumes/CreatingDataDisk).

:::note
This operation may have associated billing impacts.
:::

## Creating an Image from a Restore Point

Disk restore point can be used to create OS Images which can be used at the time of Instance creation. This can be done by using the option to **Create Image** which makes the template available and listed under the **My Images** section.

:::note
Images occupy account-level storage space which may be billed on usage by the service provider.
:::




