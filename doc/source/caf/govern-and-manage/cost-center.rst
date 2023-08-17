Cost Center
~~~~~~~~~~~

Cost Center is a cost management service provided by Huawei Cloud free
of charge. Cost Center can help collect information about Huawei Cloud
costs and usage, explore and analyze Huawei Cloud cost usage, and
monitor and track Huawei Cloud costs.

Cost Forecasting and Tracking
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Estimating and forecasting costs
++++++++++++++++++++++++++++++++

The businesses and cloud service expenditures are dynamically changing,
which makes it difficult to precisely forecast costs.

Before you use cloud services, you can use Huawei Cloud Price Calculator
to estimate their costs. You can view the costs and usage in **Cost
Analysis** of Huawei Cloud Cost Center and learn about the forecasted
costs in the following days (90 days at most) or months (12 months at
most). Forecasting is based on your historical costs and usage on Huawei
Cloud.

Creating budgets to track cost and usage
++++++++++++++++++++++++++++++++++++++++

Budgets can be used to efficiently track costs.
Once completing cost estimation and forecasting, you can create
different types of budgets on the **Budgets** page of Cost Center to
track your costs against the budgeted amount you specified and send
alerts to the recipients you configured if the thresholds you defined
are reached. You can also create budget reports, and Huawei Cloud will
periodically generate and send them to the recipients you configured on
a schedule you set.

Cost Allocation
^^^^^^^^^^^^^^^

Accurate and effective cost allocation is conducive for cost
transparency and accountability in an enterprise. Cost transparency and
accountability are critical to accounting management of an enterprise.

Determine how the costs are organized
+++++++++++++++++++++++++++++++++++++

Before performing accounting management, an enterprise needs to figure
out its cost allocation to ensure that the expenditures on Huawei Cloud
can be allocated across different organizations.

The expenditures of an enterprise with multiple accounts can be
allocated across its member accounts. In addition, the enterprise can
use tags to attach organization information to resources, and the tag
information will be displayed in costs. The tags can also be used to
identify the costs of different environments (such as production and
testing) or to identify different organizations, products, and owners.

You can also activate the tags for enterprise accounts, including the
master account, in **Cost Tags** of Huawei Cloud Cost Center to help
analyze your Huawei Cloud costs and track your budgets. You are advised
to plan and activate cost tags as early as possible because they take
effect only for cost data generated after tag activation.

Some of costs cannot be directly grouped by tag, for example, the costs
for shared resources in an enterprise, cloud services that do not
support tags, and untagged resources. You can define rules to split the
costs across organizations in the enterprise evenly or proportionally,
or based on the custom percentage.

Original costs and amortized costs
++++++++++++++++++++++++++++++++++

There are two types of costs in Huawei Cloud Cost Center:

-  Original cost: reflects costs of cloud services purchased at the list
   price with available discounts applied.

-  Amortized cost: reflects amounts (prepaid for yearly/monthly
   services) amortized on a daily basis. For example, if you purchased a
   one-year cloud service for ¥365 CNY, the amortized cost per day is ¥1
   CNY.

Amortized costs are an accrued expense and calculated based on accrual
accounting, and the costs need to be amortized across organizations of
the enterprise.

To learn more about the rules for amortized costs, visit
https://support.huaweicloud.com/intl/en-us/usermanual-cost/costcenter_000002_01.html.

Cost Analysis
^^^^^^^^^^^^^

Understanding the cost trends and cost driving forces in an enterprise
is the key for efficient cost management, control, and optimization.

Analyzing the trends and distribution of costs and usage
++++++++++++++++++++++++++++++++++++++++++++++++++++++++

**Cost Analysis** of Huawei Cloud Cost Center visualizes your original
costs or amortized costs of last 18 months using various dimensions and
display filters for cost analysis so that you can analyze the trends and
drivers of your service usage and costs from a variety of perspectives
or within different defined scopes. An enterprise master account can
analyze the costs and usage of its member accounts.

You can use Preconfigured Analysis Reports in Cost Center to analyze
your costs and usage.

+-------------------------+--------------------------------------------+
| Report Name             | Description                                |
+=========================+============================================+
| Monthly Costs by        | Types of services with high original costs |
| Service Type            | over the last six months                   |
+-------------------------+--------------------------------------------+
| Monthly Costs by Linked | Linked accounts with high original costs   |
| Account                 | over the last six months                   |
+-------------------------+--------------------------------------------+
| Daily cost              | Trend of daily original costs in the last  |
|                         | three months and forecasted costs in the   |
|                         | next month                                 |
+-------------------------+--------------------------------------------+
| Monthly Amortized Costs | Monthly amortized costs over the last six  |
|                         | months                                     |
+-------------------------+--------------------------------------------+
| Pay-Per-Use ECS Monthly | Monthly original costs and usage of a      |
| Costs and Usage         | pay-per-use ECS over the last six months   |
+-------------------------+--------------------------------------------+

If the preconfigured reports cannot meet your requirements, you can
create custom reports, which you can choose a specific period of time,
the aspects measured, display filters, and cost types. You can save your
analysis results in a custom report so that you can run the same
analysis again later if needed.

You can export the preconfigured reports and custom reports as CSV
files. In addition, Huawei Cloud provides monthly or daily cost details
that carry tag information for in-depth analysis.

Cost Optimization
^^^^^^^^^^^^^^^^^

The expenditures on cloud resources mainly depend on the billing rate
and resource usage. An enterprise can optimize its costs from these
aspects.

Billing rate
++++++++++++

For the pay-per-use products you will use for a long term, you can view
the optimization option (changing the billing mode from pay-per-use to
yearly/monthly) in Cost Center to find opportunities to reduce costs.
You can analyze the usage of your pay-per-use ECS, EVS, and RDS
resources in Cost Center. Cost Center provides optimization options
based on these analyses, identifying places where you can save money by
changing the billing mode from pay-per-use to yearly/monthly.

Cost Center allows you to learn about the actual utilization or coverage
of resource packages in a specific period to check whether your resource
packages are fully used or they are able to cover your pay-per-use
resource usage. You can adjust the purchase of resource packages in the
following period based on the analysis results.

Resource usage
++++++++++++++

You can use CES to monitor the usage of cloud services to identify idle
resources or resources with low usage and release idle resources or
downgrade specifications of resources with low usage to reduce costs.
Note that you need to confirm with the business department to ensure
that releasing resources or downgrading specifications will not affect
services.

Customers can optimize service technical solutions to improve resource
utilization, such as decoupled storage and compute and time-based
resource sharing, or use cost-effective instances.

Functions
^^^^^^^^^

Cost Center provides the following functions:

-  Cost Analysis: presents your cost data in graphs and tables. You can
   view your Huawei Cloud costs and usage of different billing cycles
   and dive deeper by service type, region, linked account, billing
   mode, and cost tag.

-  Cost and Usage Forecasting: forecasts your future costs and usage
   based on your historical costs and usage on Huawei Cloud.

-  Budget Management: allows you to configure budgets and stay informed
   of how your costs and usage progress.

-  Report Management: allows you to save the cost analyses as reports so
   that you can share with the various member accounts under your master
   account. On the **Reports** > **Analysis Reports** page, you can use
   some commonly used analysis reports preconfigured by Huawei Cloud. It
   also allows you to track your budgeting on a regular basis after you
   create budget reports on the **Reports** > **Budget Reports** page.

-  Cost Anomaly Detection: monitors the costs of your pay-per-use
   resources to detect cost anomalies and reduce unnecessary
   expenditures.

Billing Modes
^^^^^^^^^^^^^

-  Yearly/Monthly: Cost Center analyzes the usage of your pay-per-use
   ECS, EVS, and RDS resources, and provides optimization options
   (changing from pay-per-use to yearly/monthly) to find opportunities
   to reduce costs.

-  Resource Packages: Cost Center allows you to view the analyses of
   your resource packages to determine whether they are properly used
   and whether costs can be reduced.

-  Cost Tag: identifies your Huawei Cloud resources. You can use the
   cost tags to manage your resources and activate them to track your
   costs. Cost tags can be used for cost analysis and budget management.

.. toctree::
   :maxdepth: 1
