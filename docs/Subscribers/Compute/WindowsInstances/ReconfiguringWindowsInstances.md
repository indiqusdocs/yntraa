---
sidebar_position: 10
---
# Reconfiguring Windows Instances

To view available reconfiguration options:
1. Navigate to **Compute** > [Windows Instances](AboutWindowsInstances). The following screen appears: ![Windows Instance View](img/windowsinstanceview.png)
2. Select a Windows Instance, and access the **Reconfigure** tab. The following screen appears: ![reconfigdefault](img/reconfigdefault.png)
3. Click the **Stop Instance** button to stop the instance. The status changes to **Powered Off**.
4. To reconfigure the current compute pack, select the desired option from the list and click the **Reconfigure Compute Pack** button. ![Reconfig Windows Compute Pack](img/reconfigwindowscomputepack.png)
5. To reconfigure the current root disk, select **Custom Disk**, enter the required disk size, and click **Select Pack**. ![Reconfig Root Disk](img/reconfigrootdisk.png)
   
   To change the billing interval, follow these steps:
1. Navigate to **Compute > Windows Instance**. The following screen appears: ![Windows Instance View](img/windowsinstanceview.png)
2. Click the **Switch Plan** button to change the billing interval between monthly and hourly. ![Windows Switch Plan](img/windowsswitchplan.png)
3. Select the **I have read and agreed to the end user license agreement and privacy policy** option.
4. Click **Confirm Switch** button.
   
:::note
You can only reconfigure with the same billing interval. To change the billing interval, use the **Switch Plan** button. It is recommended to switch the plan before reconfiguring the Instance if you wish to use both the Reconfigure and Switch Plan options. You will be charged as per the pack you have reconfigured, not based on the older pack.
:::




