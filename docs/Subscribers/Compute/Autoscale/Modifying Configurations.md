---
sidebar_position: 4
---
# Modifying Configurations

The modifying configurations allows you to update the settings of an existing autoscale group. You can disable the group, access its configuration settings, update the required parameters, and apply the changes. The available configurations include compute resources, OS image, and disk settings. After reviewing the updates, you can confirm the changes to save and apply the new configuration.

To modify the autoscale group configuration settings, follow these steps: 

1. Navigate to **Compute > Autoscale Groups**. The following screen appears: 
   ![Autoscale Group Window](img/autoscalegroupwindow.png)
2. Click the **Disable** icon. The following screen appears: 
   ![Disable Autoscale](img/disableautoscale.png) 
3. Click the **Disable** button. The following screen appears: 
   ![Auto Scale Disabled](img/autoscaledisabled.png) 
4. Click on your created autoscale group name. The following screen appears where you can modify the following configurations: 
   ![Update and Enable Group](img/updateandenable.png)  
   
    - OS image (must belong to the same zone)
    - Compute offering (CPU/RAM)
    - Disk size (≥ template minimum) 
    - Configure Autoscale Group
    - Scale Up Policy
    - Scale Down Policy
    - Email Notification
    - Autoscale Group Name

    :::note
    When using custom images to create or update an autoscale group, the root disk settings are applied based on the image configuration. Images with a fixed disk size use the default value, images that support overrides display the minimum size by default, and images without a defined disk size require you to select a disk offering or enter a custom size.
    :::

5. Click **Update and Enable This Group** button. The following screen appears: 
   ![Update Autoscale](img/updateautoscale.png) 
6. Click the **Confirm and Update** button to save and apply the updated configuration. 

