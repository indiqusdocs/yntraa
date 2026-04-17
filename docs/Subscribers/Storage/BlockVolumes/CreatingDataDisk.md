---
sidebar_position: 2
---
# Creating Data Disk

Creating a data disk in Yntraa Cloud allows you to add additional storage to your instances for better data management and scalability.

To create a Block Volume data disk, follow these steps:

1. Navigate to **Storage > Block Volumes.**
   ![datadisk3new](img/datadisk3new.png)
2. Click the **+ New Block Volume** button.
3. Choose an **Availability Zone**.
4. Select an Instance from the dropdown list to attach the disk to. 
5. In the **Choose Disk Configuration** section:
    - Select the desired disk tier (**Tier1, Tier2, or Tier3**).
    - Click on the **Custom Disk** option and adjust the disk size using the plus (+) or minus (–) controls as per requirement.
    - Click on **Select Pack** to choose the configured disk pack.
   ![datadisk1new](img/datadisk1new.png)
6. Name your data disk.
7. Verify the estimated cost of your data disk based on the options that you have chosen from the **Summary and Estimated Costs** Section.
8. Click on the check box after going through the policies mentioned by your cloud service provider.
   ![datadisk2new](img/datadisk2new.png)
9. Clicking the **Buy Monthly** button. A confirmation pop-over will appear, and the price summary along with any applicable discount codes.
    1. Apply a discount code by clicking the **Apply** button or remove it using the **Remove** button. need ss
    2. Clicking the **Cancel** button, this action will be canceled. need ss
10. Click the **Confirm** button to create the Data Disk.|
   ![bvconfirm](img/bvconfirm.png)

:::note
This process may take 5-8 minutes. You can continue using the Cloud Console during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you’ll be notified of this purchase on your email address on record. The newly created **Data Disk** can be accessed from **Storage >** **Block Volumes** in the main navigation panel.

![datadiskdeploy](img/datadiskdeploy.png)





