---
sidebar_position: 1
---
# Creating Linux Instances

Before creating a Linux instance, it is important to plan the architecture, networking and access to the Linux Instances. 

To create a Linux instance, follow these steps:

1. Navigate to **Compute > Other Linux Instances**.
   ![linuxinstancenew](img/linuxinstancenew.png)
2. Click the **+ NEW LINUX INSTANCE** button.
   ![creatinglinuxnew](img/creatinglinuxnew.png)
3. Choose an **Availability Zone**, which is the geographical region where your Instance deploys.
4. Select a VPC or VNF network from the **Select Network Destination** drop-down, and select the appropriate tier listed in network.
	:::note
	To add a Linux Instance to a VPC or VNF, you must have a VPC or VNF configured with at least one tier.
	:::
5. Select the **OS Image** to run on your Instance.
6. Navigate to **Choose an OS Image > MY IMAGES**, and select an image.
   need to discuss
7. Select the **Compute Pack** from the available compute collections.
   ![computepacknew](img/computepacknew.png)
8. Select a root disk for your instance from the available options or choose **Custom Disk** to define the size. Adjust the disk size as required, and click **Select Pack** to confirm.
9. **Choose an Authentication Method**:
    - **Use SSH key pair**: To view all the SSH key pairs present in your account, click the **Use SSH key pair** option. If your account doesn’t have any SSH key pair, then you can click the **Generate a new key pair** or upload the key pair by clicking the **Upload a key pair** option. 
    - **Use Default Password**: On selecting **Use Default Password**, the system automatically generates a password for the instance. You can view or copy this password from the instance details page after creation and use it to log in.
    - **Use Custom Password**: On selecting **Use Custom Password**, you are required to enter and confirm your own password. This password is used to access the instance after it is created. Ensure the password meets the required security criteria.
10. In the **Name Your Linux Instance** field, enter the desired name for your Linux Instance. The Instance name contains alphanumeric characters, underscore, dots and hyphens only. 
11. Verify the estimated cost of your Linux Instance based on the chosen specifications from the **Summary and Estimated Costs** Section (Here, both Hourly and Monthly Prices summary are displayed).
    ![costsummarynew](img/costsummarynew.png)
12. Select the **I have read and agreed to the end user license agreement and privacy policy** option.
13. Choose the **Buy Hourly** or **Buy Monthly** option. A confirmation window appears and the price summary displays along with the discount codes if you have any in your account. 
    - You can apply any of the discount codes listed by clicking on the **Apply** button. 
      need ss
    - You can also remove the applied discount code by clicking on the **Remove** button.
      need ss 
    - You can cancel this action by clicking the **Cancel** button.
    ![confirmpurchasenew](img/confirmpurchasenew.png)
14. Click the **Confirm** button to create the Linux Instance.
    ![confirmlinuxpurchase](img/confirmlinuxpurchase.png)

:::note
It might take up to 5-8 minutes for the Linux instance to get created. You may use the cloud console during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you get notified of this purchase on your registered email ID. To access the newly created Linux Instances, navigate to **Compute > Other Linux Instances** on the main navigation panel.




