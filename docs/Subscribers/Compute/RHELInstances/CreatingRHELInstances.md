---
sidebar_position: 1
---
# Creating RHEL Instances
Before creating a RHEL instance, it is important to plan the architecture, networking and access to the RHEL Instances. 

To create a RHEL instance, the following steps are :

1. Navigate to **Compute > RHEL Instances**.
![rhelinstancenew](img/rhelinstancenew.png)
2. Click the **+ NEW RHEL INSTANCE** button. 
3. Choose an **Availability Zone**, which is the geographical region where your Instance will be deployed. 
![rhelzonenew](img/rhelzonenew.png)
4. Select the destination and then the network from the drop-downs.
5. Select the OS image to run on your Instance.
6. Select the compute pack from the available compute collections.
![computepacknew](img/computepacknew.png)
7. Select the disk configuration from the available **ROOT DISK** packs. You can use the free size option to specify the Root Disk size.
![rootdiskrhelnew](img/rootdiskrhelnew.png)
8. **Choose an Authentication Method**: 
    - **Use SSH key pair**: To view all the SSH key pairs present in your account, click the **Use SSH key pair** option. If your account doesn’t have any SSH key pair, then you can click the **Generate a new key pair** or upload the key pair by clicking the **Upload a key pair** option. 
    - **Use Default Password**: On selecting Use Default Password, the system automatically generates a password for the instance. You can view or copy this password from the instance details page after creation and use it to log in.
    - **Use Custom Password**: On selecting Use Custom Password, you are required to enter and confirm your own password. This password will be used to access the instance after it is created. Ensure the password meets the required security criteria.
9. In the **Name Your RHEL Instance** field, enter the desired name for your RHEL instance.
10. Verify the Estimated Cost of your Windows Instance based on the chosen specifications from the Summary and Estimated Costs Section (Here, both Hourly and Monthly Prices summary are displayed).
11.  Select the **I have read and agreed to the End User License Agreement and Privacy Policy** option.
12. Choose the **BUY HOURLY** or **BUY MONTHLY** option. A confirmation window appears and the price summary will be displayed along with the discount codes if you have any in your account. 
    - You can apply any of the discount codes listed by clicking on the **APPLY** button. 
    - You can also remove the applied discount code by clicking on the **REMOVE** button. 
    - You can cancel this action by clicking on the **CANCEL** button.
    ![costrhelnew](img/costrhelnew.png)
13. Click the **CONFIRM** button to create the RHEL Instance.

:::note
It might take up to 5-8 minutes for the instance to create. You may use the cloud console during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you get notified of this purchase on your registered email address. To access the newly created RHEL Instances, navigate to **Compute > RHEL Instances**.




