---
sidebar_position: 3
---
# Using Remote Access VPN with VPC

To use a VPN client to connect to your VPC, follow these steps:

1. Navigate to  **Networking > Virtual Private Clouds** from the main navigation panel and select the VPC that you wish to connect to using your VPN client.
   
2. Inside the VPC, navigate to the **IPv4 ADDRESSES** section and click the **Manage VPN access**. After this, click on the **Remote Access (L2TP)**  option and enable the switch for the Remote Access VPN.
   
3. This will also enable the **Remote Access VPN** button for the VPC’s default IP. Click on the button to copy the pre-shared key (PSK) and the IP range from the dialog box to use in your VPN client.

4. Additionally, you’ll need to add VPN user credentials here.

To test this configuration, you can open the VPN client on your local system and try connecting to the VPC.

## Configuring VPN on Windows

To  configure a VPN Connection on Windows using Native VPN client, follow these steps:

1. Open the **Control Panel**, navigate to **Network and Internet**.
2. Select **Network and Sharing Center**.
3. Under **Change your networking settings**, click **Set up a new network connection or network**.
4. The following window appears. Select **Connect to a workplace**, and click **Next**.
5. Select the **Use my Internet connection(VPN)** option.
6. The following window appears. Enter the **Internet address** (refer **IPv4 Address** from **point 2** under **Using Remote Access VPN with VPC** ).	  
7. Select the **Remember my credentials** option, and click **Create**.
8. To configure VPN settings, open **Network and Sharing Center**, and click **Change adapter settings**.
9. Navigate back to **Network and Internet**, then select **Network Connections**.
10. Locate your **VPC network**, right-click on it, and select **Properties**.
11. The Properties window appears:
12. In the **Properties** window, navigate to the **Security** tab.
	- Under **Type of VPN**, select **L2TP/IPsec**.
	- In the **Data Encryption** field, choose **Require encryption**.
	- Select the **Allow these protocols** option.
	- Select **Microsoft CHAP Version 2(MS-CHAP v2)**.
13. Click the **Advanced settings** button. The following window appears:
14. Select the **Use pre-shared key for authentication** option (for pre-shared key refer to **point 3** under **Using Remote Access VPN with VPC**).
15. Click **OK** to save your settings.    
16. To initiate the VPN connection, navigate to **Network > Connection Settings**, then click **Connect**.
17. Enter your **Username** and **Password**, click **OK**.

 The configuration is successful.

