---
sidebar_position: 1
---
# About Virtual Firewall Instances

Virtual Firewall Instances provide the ability to implement firewall services using a Virtualized Network Function (VNF) framework within your network environment. These instances are designed to support multiple VLAN configurations, enable the use of public IPv4 addresses, and offer automated service deployment.

The service falls under the Virtual Firewall and is built using our integration framework using [FortiGate VM](https://www.fortinet.com/products/private-cloud-security/fortigate-virtual-appliances) for powering the appliance.

To access all virtual firewalls created in your account, follow these steps: 

This section comprises of the following sub-sections:

<div className="custom-block-blue">  
- [Viewing Virtual Firewall Details](#viewing-virtual-firewall-details)
- [Launching Virtual Firewall Web Based Console ](#launching-virtual-firewall-web-based-console)
- [Stopping and Starting Virtual Firewall Instance](#stopping-and-starting-virtual-firewall-instance)
</div>

## Viewing Virtual Firewall Details

Viewing virtual firewall details lets you access the configuration, status, and key information of a virtual firewall. View the firewall details to verify its settings, monitor its configuration, and ensure it is protecting network traffic as intended.



To view a virtual firewall details, follow these steps: 

1. Navigate to **Network and Security > Virtual Firewalls**. The following screen appears:
![virtualfirewallnew](imgnew/virtualfirewallnew.png)

2. Click on your created virtual firewall name from the list. The following screen appears with the available sections and their corresponding operations:
![launchconsolenew](imgnew/launchconsolenew.png)
   
- [Viewing Firewall Instance Details](/docs/Subscribers/NetworkandSecurity/VirtualFirewall/Viewing%20Firewall%20Instance%20Details)
- [Viewing Graphs and Utilisation](ViewingGraphs.md)
- [Configuring Alerts](/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ConfiguringAlerts)
- [Managing Volume](/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ManagingVolume)
- [Networking Management](/docs/Subscribers/NetworkandSecurity/VirtualFirewall/NetworkingManagement)
- [Restore Points](/docs/Subscribers/NetworkandSecurity/VirtualFirewall/Snapshots)
- [Reconfiguring Virtual Firewall](/docs/Subscribers/NetworkandSecurity/VirtualFirewall/ReconfiguringVirtualFirewall)
- [ManagingFirewallInstanceOperations](ManagingFirewallInstanceOperations.md)

## Launching Virtual Firewall Web Based Console 

The virtual firewall console provides a secure, web‑based interface to manage and monitor your firewall. It allows administrators or you to configure policies, review system activity, and ensure network protection through a centralized dashboard. 

1. Navigate to **Network and Security > Virtual Firewalls**. The following screen appears:
![virtualfirewallnew](imgnew/virtualfirewallnew.png)
2. Click on your created virtual firewall name from the list. The following screen appears:
![All Details Screen](imgnew/launchconsolenew.png) 
3. Click the **Launch Console** button. The following screen appears where you provide the required details:  
![fortinetui](imgnew/fortinetui.png)
4. Click the **Login** button. The FortiGate web-based management interface opens, allowing you to begin firewall configuration.
   
## Stopping and Starting Virtual Firewall Instance

Administrators stop and start the virtual firewall instance to apply updates, perform maintenance, or optimize resources. This action suspends firewall operations without deleting configurations and quickly restores protection when restarted.

To start and stop the virtual firewall instance, follow these steps:  

1. Navigate to **Network and Security > Virtual Firewalls**. The following screen appears with the details: 
![virtualfirewallnew](imgnew/virtualfirewallnew.png)
 2. Click on your created virtual firewall name from the list. The following screen appears:
![All Details Screen](imgnew/launchconsolenew.png) 
3. Click the <span style={{ color: 'red' }}>Stop Instance</span> button. The following screen appears: 
![Stop VF Message](imgnew/stopvfmessage.png)
4. Click the **Yes** button. The following screen appears:
![VF Instance Stopped](imgnew/vfinstancestopped.png)
5. Click the <span style={{ color: 'blue' }}>Start Instance</span> button. The following screen appears: 
![Start Instance Message](imgnew/startinstancemessage.png)
6. Click the **Yes** button. The following screen appears:
![All Details Screen](imgnew/launchconsolenew.png) 

