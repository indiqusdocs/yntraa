---
sidebar_position: 5
---
# Adding IPv4 Addresses and Rules

Additional IPv4 addresses provide extra public network endpoints for resources within a Virtual Private Cloud (VPC). After an IPv4 address is added, you can configure network rules, such as load balancing, port forwarding, and Static NAT, to control how incoming traffic is routed and made accessible. This enables flexible network connectivity while supporting application availability and secure access.

To add a additional IPv4 address to the VPC, follow these steps:

1. Navigate to **Network and Security > Virtual Private Clouds**. The following screen appears:
   ![VPC Deployed](img/vpcdeployed.png) 
2. Click on your created VPC name from the list. The following screen appears:
   ![Deployed VPC Overview](img/deployedvpcoverview.png)
3. Click **IP Addresses**. The following screen appears:
   ![IP addition in VPC](img/ipaddbutton.png)
4. Click the **Add Public IPv4 Address** button. The following screen appears:
   ![IP in VPC](img/ipinvpc.png) 

    :::note
    Public IPv4 addresses may carry a price which may vary depending on availability of IPv4 addresses in the country of operation, and/or how they have been priced.
    :::
    
This section comprises of the following sub-sections:

<div className="custom-block-blue">  
- [Configuring Load balancing](#configuring-load-balancing)
- [Configuring Port Forwarding](#configuring-port-forwarding)
- [Configuring Static NAT](#configuring-static-nat)
</div>

## Configuring Load Balancing 

Load balancing helps distribute traffic across multiple instances to improve performance and availability. By creating a load balancing rule in your VPC, you define how traffic is routed and can easily manage which instances handle the load.

:::note
A load balancer IP rule can only be configured if the tier/subnet type is set to **Public IP**.
:::

To configure the Load Balancing Rule, follow these steps:
1. Navigate to **Network and Security > Virtual Private Clouds**, and click **IP Addresses**. The following screen appears:
   ![VPC IP Address](img/vpcipaddress.png)
2. Click the **Load Balancing** icon (highlighted in red). The following screen appears:
   ![Add Rule](img/addrulenew.png)
3. Click **Add Rule**. The following screen appears:
   ![addrule1new](img/addrule1new.png)	  
4. Click the **Add Load Balancing Rule** button. The following screen appears: 
   ![Enable LBI](img/enablelbi.png)

Once the load balancer rule has been created, the **Port Forwarding Rule** and **Static NAT** icons are automatically disabled. You can navigate to load balancer and add (or remove) instances to this rule by following these steps:

5. Click the **Load Balancer Rule** icon. The following screen appears:
   ![Add Rule](img/addrulenew.png)
6. Click the dropdown and select the appropriate **Load Balancing Rule**. This following screen appears that shows the instances that are part of this load balancer, and those available to be added. 
   ![Add Rule](img/addrule2.png)
7. Click the **+** icon (highlighted in red) to add an instance. The following screen appears:
  ![Add Instance in LB Rule](img/addinstanceinlbrule.png) 

To verify the load balancer configuration, log into each instance behind it, create an **index.html** file with different content on each, and access the public IP address from your browser. If configured correctly, each browser page refresh should take turns in loading the two index.html pages.

## Configuring Port Forwarding

A Port Forwarding rule is required for accessing the instances contained in a VPC. Since instances in a VPC only have a private IP address, a public IP address is required for each instances that you want to access from your terminal.

To configure port forwarding, follow these steps:
1. Navigate to **Network and security > Virtual Private Clouds**, and click **IP Addresses**. The following screen appears:
   ![PF Rule Add](img/pficon.png)
2. Click the **Port Forwarding** icon (highlighted in red). The following screen appears:
   ![Add Rule](img/pfaddrulebutton.png) 
3. Click **+ Add Rule**. The following screen appears: 
   ![PF Rule Added](img/pfnowadded.png)
    :::note
    The end ports should be equal to or greater than the start ports.
    :::
4. Click the **Add Port Forwarding Rule** button. The following screen appears: 
   ![PF Rule Enable](img/pfruleenable.png)

Once the Port-Forwarding rule is created, the **Load Balancing** and **Static NAT** icons are automatically disabled. You can then view the details of the Port Forwarding rule by following these steps:

5. Click the **Port Forwarding Rule** icon. The following screen appears:
   ![PF](img/pf.png)

You can view the instance where this rule is configured, along with the private and public port range mappings.

To test if port-forwarding is configured correctly, use the public IP to SSH into the instances the IP forwards to.

:::note
A Port-Forwarding IP address can be used to configure multiple Port-Forwarding  access rules but with one instance. To port-forward into a different instance, you must purchase an additional public IP address.
:::

## Configuring Static NAT

A Static NAT rule maps a public IP address to the private IP address of a instance, allowing direct access from external networks. Configure a Static NAT rule to assign a dedicated public IP address to a instance and enable consistent inbound connectivity.

To configure Static NAT, follow these steps:

1. Navigate to **Network and security > Virtual Private Clouds**, and click **IP Addresses**. The following screen appears:
   ![VPC IP Address](img/vpcipaddress3.png)
2. Click the **Static NAT** icon (highlighted in red). The following screen appears: 
   ![Add Static NAT](img/addstaticnat.png)
3. Select the instance from the dropdown, and click the **Add Static NAT** button. The following screen appears:
   ![Static NAT Enable](img/staticnatenable.png)
   
Once the Static NAT is created, the **Port Forwarding Rule** and **Load Balancing** icons are automatically disabled.

To test whether static NAT has been configured correctly, you can use the public IP to SSH into the instance that the IP is NAT-ing to.
