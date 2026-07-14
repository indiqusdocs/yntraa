---
sidebar_position: 4
---
# Configuring Alerts

Alerts get triggered whenever a configured condition is met. You can create multiple alerts on an instance. Alerts are sent to recipients that you can define and manage. 

You can configure alerts for instances running on the Yntraa Cloud. You can define alerts for Instances and configure the email recipients for these alerts using a straightforward and easy-to-use interface.

To configure alerts, follow these steps: 

1. Navigate to **Network and Security > Virtual Firewalls**. The following screen appears: 
![vfinstancealert](imgnew/vfinstancealert.png)
2. Click on your created virtual firewall from the list. The following screen appears:
![VF Created](imgnew/launchconsolenew.png) 
3. Click **Alerts**. The following screen appears:
![alertnew](imgnew/alertnew.png)
4. Click the **Create Alert** button. The following screen appears where you provide the required details: 
![Create Alert](imgnew/createalertoninstance.png)

    - **Name** - You can define the name for your alert.
    - **Choose Parameter** - This option allows you to define what parameter needs to be monitored to trigger the alert email. Yntraa Cloud supports CPU, RAM, NETWORK INPUT, and NETWORK OUTPUT parameters.
    - **Trigger when** - This set of options lets you define whether to trigger above or below a custom value.
    - **Reading duration** - This option lets you define the breach window, that is, the duration for which the breach must be consistent to trigger the alert email.
    - **Add Recipients** - You can add the emails of the recipients.

## Managing Recipients

The Manage Recipients feature lets you control who receives firewall alerts. It displays all configured or added email IDs and provides options to remove outdated addresses or add new ones. 

To remove existing email IDs and add other email IDs, follow these steps.

1. Navigate to **Network and Security > Virtual Firewalls**. The following screen appears: 
![vfinstancealert](imgnew/vfinstancealert.png)
2. Click on your created virtual firewall. The following screen appears:
![VF Created](imgnew/launchconsolenew.png) 
3. Click **Alerts**. The following screen appears:
![alertnew](imgnew/alertnew.png)
4. Click the **Manage Recipients** button. The following screen appears:
![Managing Recipients](imgnew/managingrecepients.png) 
5. Click the dropdown. From the list, you can perform the following:
    - **Add recipients**: Select the email IDs that you want to add.
    - **Remove recipients**: Clear the selection for the email IDs that you want to remove.
6. Click the **Update** button to save the changes. 







