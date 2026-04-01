---
sidebar_position: 6
---
# Configuring Alerts on Windows Instances

To view the configured alerts or configure new ones, navigate to [Operating Windows Instances](AboutWindowsInstances), select a Windows Instance and access the **Alerts** tab .

Alerts get triggered whenever a configured condition is met. You can create multiple alerts on an instance. Alerts are sent to recipients that you can define and manage.

Subscribers can configure alerts for instances running on the Yntraa cloud console. Subscribers can define alerts for Instances and configure the email recipients for these alerts using a straightforward and easy-to-use interface.

# Instance Alerts

The Alerts tab can be accessed from the instances details. It shows the alerts already configured for that particular instance with following details:
- ID
- Alert Name
- Parameter
- Trigger
- Value
- Reading Duration
# Adding an Alert

Subscribers can create or add alerts simply by clicking on the **Create Alert** button. The following screen will open up, and the subscriber must describe the details of the alert.

![createalertnew](img/createalertnew.png)

The various fields of the add alert page are described below:

- **Name** - You can define the name for your alert.
- **Choose parameter** - This option allows you to define what parameter must be monitored to trigger the alert email. Yntraa cloud supports CPU, RAM, Disk, 1-min Load Average, 5-min Load Average, 15-min Load Average parameters.
- **Trigger when** - This set of options lets you define whether to trigger above or below a custom value.
- **Value in Percentage** - You can define the Value. 
- **Reading duration** - This option lets you define the breach window, i.e., the duration for which the breach has to be consistent to trigger the alert email.
- **Add Recipients** - Email IDs can be added here, or also you can add them by using the configure recipients

# Managing Recipients

This section list and display all the email IDs already configured for the alerts. You can delete the existing email IDs and add other email IDs by following these steps:

1. Click the **Manage Recipients** button.
2. Click the dropdown icon in the **Add Recipients** field to view the recipients list.
3. From the list view, select the email IDs based on their assigned roles.
4. Select the appropriate role option to ensure the selected recipients receive alert notifications.
5. Click the **UPDATE** button to save the changes to the recipients list.
   
![managerecepientsnew](img/managerecepientsnew.png)

:::note
	All the recipients configured will receive all the setup alerts. If no email ID is configured or added, then no email will be sent for the already configured alerts.
:::




