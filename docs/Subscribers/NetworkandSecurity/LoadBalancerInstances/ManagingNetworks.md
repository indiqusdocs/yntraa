---
sidebar_position: 5
---
# Managing Networks

Managing Networks allows you to configure the network connectivity of a Load Balancer instance by adding network interfaces and assigning secondary IP addresses. These capabilities help improve connectivity, support multiple network requirements, and enable more flexible traffic management within the VPC.

This section comprises of the following sub-sections:
<div className="custom-block-blue">  
- [Adding a Network](#adding-a-network)
- [Adding a Secondary IP](#adding-a-secondary-ip)
</div>

## Adding a Network

Adding a network allows you to attach an additional network interface to a Load Balancer instance. This helps the instance connect to multiple networks, improving network connectivity and supporting different traffic or deployment requirements.

To add a network, follow these steps:

1. Navigate to **Network and Security > Load Balancer**. The following screen appears:
![LBI Overview Window](img/lbioverviewwindow.png) 
2. Click **Networking**. The following screen appears:
![Networking](img/networkingscreen.png) 
3. Click the **Add Network** button. The following screen appears: 
![addingnic](img/addingnic.png)
4. Click the **Yes** button. 
   
:::note
If the Instance is inside a VPC, you can associate the Instance to multiple tiers within the VPC or share the Instance with other VPC networks in the same availability zone by using the Add Network option.
:::

## Adding a Secondary IP

A secondary IP is an additional private IP address assigned to an instance apart from its primary IP address. Secondary IPs help in better traffic separation, service isolation, and efficient network management within the VPC.

To add a secondary IP, follow these steps:

1. Navigate to **Network and Security > Load Balancers**. The following screen appears:
![LBI Overview Window](img/lbioverviewwindow.png) 
2. Click **Networking**. The following screen appears:
![Networking](img/networkingscreen.png) 
3. Click the **+ New Secondary IP** button. The following screen appears:
![Add Secondary IP](img/addsecondaryip.png)
4. Click the **Add** button. The secondary IP is added (highlighted in red). The following screen appears: 
![Secondary IP Added in LBI](img/secondaryipaddedinlbi.png)

It is used in following networking services:
- [Static NAT](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/IPv4AddressesandVPC): You can map a public IP to a secondary IP for external access.
- [Port Forwarding](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/IPv4AddressesandVPC): You can direct traffic on specific ports to a secondary IP address assigned to the instance.
- [Load Balancing](/docs/Subscribers/NetworkandSecurity/VirtualPrivateClouds/IPv4AddressesandVPC): You can use secondary IPs as backend or virtual service IPs to distribute traffic.
  
