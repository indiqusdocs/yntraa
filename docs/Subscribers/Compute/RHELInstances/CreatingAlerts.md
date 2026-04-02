---
sidebar_position: 5
---
# Creating Alerts 

Alerts get triggered whenever a configured condition is met. You can create multiple alerts on an instance. Alerts are sent to recipients that you can define and manage.

You can configure alerts for instances running on the Yntraa Cloud. You can define alerts for Instances and configure the email recipients for these alerts using a straightforward and easy-to-use interface.

To view the configured alerts or configure new ones, navigate to [RHEL Instance](AboutRHELInstances.md) and access the **Alerts** tab.
## Instance Alerts

The Alerts tab lists all the alerts already configured for that particular RHEL Instance. In addition, it shows the details:
- Alert Name
- Parameter
- Trigger
- Value
- Reading Duration
  
![alertrhelnewnew](img/alertrhelnewnew.png)
## Creating an Alert

You can create or add alerts simply by clicking the **CREATE ALERT** button. The following screen appears, and you can configure the alert using the on-screen input form.

![createalertnewrhel](img/createalertnewrhel.png)

The various fields of the add alert page are described below:

1. **Name** - You can define the name for your alert.
2. **Choose Parameter** - This option allows you to define what parameter must be monitored to trigger the alert email. Yntraa cloud supports CPU, RAM, NETWORK INPUT, NETWORK OUTPUT parameters.
3. **Trigger when** - This set of options lets you define whether to trigger above or below a custom value.
4. **Reading duration** - This option lets you define the breach window, i.e., the duration for which the breach has to be consistent to trigger the alert email.
5. **Add Recipients** - Email IDS can be added here, or also you can add them by using the manage recipients.

## Managing Recipients

This section list and display all the email IDs already configured for the alerts. You can delete the existing email IDs and add other email IDs by the following steps :

1. Click on the **MANAGE RECIPIENTS** button.
2. Use the dropdown menu to select available recipients.
3. Click the **UPDATE** button to save the recipient list.
   
![recepientrhelnew](img/recepientrhelnew.png)
   
:::note
All the managed recipients receive all the setup alerts. If no email ID is configured or added, then no email is sent for the already configured alerts.
:::




