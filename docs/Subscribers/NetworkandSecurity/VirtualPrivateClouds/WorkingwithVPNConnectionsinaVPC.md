---
sidebar_position: 3
---
# Working with VPN Connections in a VPC

The VPC feature on Yntraa Cloud provides advanced networking capabilities for use with VPN gateways and connections over an IPSec tunnel. Yntraa Cloud gives the ability to create virtual private networks (VPN) to access virtual machines inside a VPC.

There are two types of VPN connections supported on Yntraa cloud :

1. **Remote Access VPN -** To connect securely from your home or office to your VPC on Yntraa Cloud. This is used primarily when you’re using a dynamic IP to connect to the internet and a VPN connection can, therefore, not be pre-configured.
2. **Site-to-Site VPN -** To connect a private static network to your VPC on Yntraa Cloud using an IPSec tunnel. Site-to-site gateways must be pre-configured on Yntraa Cloud.

The underlying SDN on Yntraa Cloud provides an L2TP-over-IPsec-based remote access VPN service to VPCs and guest virtual networks. Since each VPC has its own virtual router, VPNs are not shared across the networks.

:::note
All VPN users in your account will get access to all VPNs created in your account.
:::




