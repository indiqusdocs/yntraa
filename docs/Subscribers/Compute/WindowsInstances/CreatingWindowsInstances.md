---
sidebar_position: 2
---
# Creating Windows Instances

Create a Windows instance to deploy a virtual machine for running Windows-based applications and workloads in the cloud. During creation, you configure the required compute, storage, networking, and other settings to provision an instance that meets your workload requirements.

To create a windows instance, follow these steps:

1. Navigate to the **Compute > Windows Instances**. The following screen appears: 
   ![Window Instance Created](img/windowinstancecreated.png)
2. Click the **+ New Windows Instance** button. The following screen appears: 
![newwindowcreate1](img/newwindowcreate1.png)
3. Select Availability Zone.
4. Select a network destination for your instance. Choose an existing VPC from the available options and select the appropriate network tier listed under network tier dropdown.
    :::note
	To add a Windows Instance to a VPC or VNF, you need to have a VPC or VNF configured with at least one tier.
	:::
5. **Choose an OS Image** section and select the required operating system from the available options. Choose the appropriate version based on your requirement.
![wininstancethirdnew](img/wininstancethirdnew.png)
6. Select a compute pack from the list.
7. Select a **Root Disk** from the available options or choose **Custom Disk** to specify the required disk size, and then click **Select Pack**.
![summarynew](img/summarynew.png)
8. Verify the estimated cost of your windows instance based on the chosen specifications from the **Summary and Estimated Costs**.
9. Select the **I have read and agreed to the End User License Agreement and Privacy Policy** option.
10. Choose the **Buy Hourly** or **Buy Monthly** option. A confirmation window appears and the price summary displays along with the discount codes if you have any in your account. 
    - You can apply any of the discount codes listed by clicking on the **Apply** button. 
    - You can also remove the applied discount code by clicking on the **Remove** button. 
11. Click the **Confirm** button.
![winconfirmpurchase](img/winconfirmpurchase.png)

    :::note 
    This might take up to 5-8 minutes. You may use the cloud console during this time, but it is advised that you do not refresh the browser window.
    :::






