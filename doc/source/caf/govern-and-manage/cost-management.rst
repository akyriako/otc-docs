Cost Management
---------------

With the business expansion, enterprises pay more attention to cost
management and resource utilization. This section mainly introduces the
resource selection and functions of Cost Center to help enterprise
optimize their costs.

ECS cost optimization
*********************

Selecting the right instance type and the right specifications for a
given application scenario and workload can help you reduce your ECS
costs. Selecting the right billing mode for a given service continuity
cycle can also help you save money. Specific practices include:

Instance type selection
+++++++++++++++++++++++

Huawei Cloud provides a broad range of
instance types for different application scenarios. For example,
general-computing/memory-optimized instances are suitable for
scenarios such as websites, web applications, or medium and
light-load enterprise applications; high-performance
computing/disk-intensive/GPU instances are suitable for scenarios
such as high-performance computing, video encoding, and 3D
rendering. Selecting the right instance type for a given
application can help reduce costs. If you intend to use ECS in
e-commerce website operations, it is a best practice to use
general-computing or memory-optimized instances instead of
high-performance computing instances. They can be 40% to 50% less
expensive than high-performance computing instances of the same
specifications (for example, 8 vCPUs \| 16 GB).

Instance specifications selection
++++++++++++++++++++++++++++++++

Huawei Cloud provides dozens of
instance specifications for you to choose from. You can choose
different specifications to optimize costs based on business
workloads. For example, if the traffic volume of an e-commerce
website is within 500,000 PV and the transaction volume is within
3,000 orders per day, it is a best practice to choose 4 vCPUs \| 8
GB instead of 8 vCPUs \| 16 GB to save costs by 40% to 50%.

Billing mode selection
++++++++++++++++++++++

Huawei Cloud offers three billing modes:
pay-per-use, monthly, and yearly subscriptions. The recommended
billing modes are as follows:

-  If the application duration is less than 20 days, such as short-term
   testing and e-commerce promotions, it is a best practice to use
   the pay-per-use billing.

-  If the application duration is more than 20 days but less than 10
   months, such as game online testing and operations, it is a best
   practice to purchase monthly subscriptions.

-  If the application duration is more than 10 months, such as
   enterprise website operations or government affairs and civil
   information query and operations, it is a best practice to
   purchase yearly subscriptions.

EVS cost optimization
*********************

EVS disk types
++++++++++++++

Huawei Cloud provides four types of EVS disks.
Extreme SSD is excellent for large-scale OLTP databases, NoSQL
databases, stream processing, and log processing. Ultra-high I/O is
designed for high-performance computing (HPC) and data warehouses.
General Purpose SSD is suitable for enterprise applications and
large- and medium-sized development and testing. High I/O is suitable
for office applications. For an e-commerce or enterprise website,
high I/O EVS disks are recommended as they are 65% less expensive
than ultra-high I/O EVS disks with the same capacity.

EVS capacity
++++++++++++

Purchase the capacity you expect to use for the current
month, and leverage EVS capacity expansion capabilities to ensure
that the usage remains at 80%. Instead of purchasing the maximum
capacity you expect to use for the whole year (which may result in
average utilization of less than 50%), you can use monthly billing to
reduce your costs by 20% to 30%. To further reduce costs,
periodically check your account and delete any independent and
unnecessary EVS disks, which may have been created with ECSs that
have already been deleted.

Billing modes
+++++++++++++

If your service has been running on Huawei Cloud for
some time and you have long-term EVS pay-per-use or monthly
subscriptions, you can reduce your costs by changing the billing mode
to yearly. The costs for EVS disks of a given capacity will be
reduced by at least 17%. In addition, migrating rarely used
non-critical or archived data to OBS can also greatly reduce your
costs.

OBS cost optimization
*********************

By OBS storage class
++++++++++++++++++++

Huawei Cloud provides three types of OBS storage classes, each of
different availability and durability levels:

-  Standard storage for frequently accessed data in scenarios such as
   big data and hot videos

-  Infrequent Access storage for less frequently accessed data in
   scenarios such as file synchronization and enterprise backups

-  Archive storage for rarely accessed data in scenarios such as data
   archive and long-term backups

Selecting the right object storage classes based on your business
needs can significantly reduce costs. For instance, you can store
enterprise data that needs to be backed up in the Infrequent Access
storage class, which is 45% less expensive than Standard storage. For
long-term backup, the Archive storage class will be a good choice, as
it is 78% less expensive than Standard storage.

By billing mode
+++++++++++++++

Huawei Cloud offers resource packages with a range of capacity
specifications and durations for Standard storage. For data that will
be stored for a long time using Standard storage class, you can
purchase a yearly package based on the amount of data stored. Using a
package is 25% less expensive than pay-per-use pricing.

EIP cost optimization
*********************

The cost of bandwidth is an important factor to consider during cloud
service configuration, as it may account for up to 30% of the total
cloud resource costs. Huawei Cloud provides static and dynamic BGP
bandwidth. In most cases, static BGP bandwidth is enough. Financial or
gaming platforms, which tend to have demanding bandwidth requirements,
can use dynamic BGP bandwidth. The price of static BGP bandwidth is 20%
lower than that of dynamic BGP bandwidth. If your required bandwidth is
up to 5 Mbit/s, billing by fixed bandwidth monthly is more cost
effective than billing by traffic. If your required bandwidth is higher
than 5 Mbit/s, it is necessary to calculate which billing is more
cost-effective based on the bandwidth size and estimated bandwidth
usage.

-  If you need 10 Mbit/s of static BGP bandwidth billed on a pay-per-use
   basis and the bandwidth usage is greater than 45%, it is more
   cost-effective to be billed by bandwidth.

-  If you need 1 Mbit/s of static BGP bandwidth billed on a pay-per-use
   basis and the bandwidth usage is greater than 18%, it is more
   cost-effective to be billed by traffic.

Using ELB to reduce bandwidth cost
**********************************

Imagine a small game with a login and recharging zone, and two gaming
zones. Each of these three zones is deployed on different ECSs. Each ECS
has 10 Mbit/s of bandwidth, so they need a total of 30 Mbit/s of
bandwidth. Unfortunately, the bandwidth usages of the three ECSs differ
greatly from each other, so bandwidth utilization is low. In this case,
ELB can be used to balance traffic among the three ECSs. ELB could
maximize utilization to the point where 20 Mbit/s of bandwidth would be
enough, and their bandwidth costs could go down.

Using CDN to reduce public network bandwidth usage and lower TCO
****************************************************************

If you are providing static content such as images, video files, and
other file downloads to Internet users through ECS or OBS, you can use
CDN to reduce traffic costs by 50% to 57%. Moreover, CDN offers a better
experience to your customers. If you use OBS and CDN together, you can
reduce costs by another 20%.

Cost optimization with DES
**************************

Take a user generating 35 TB of images that need to be uploaded to OBS
every day. If Direct Connect is used for data transmission, a 4 sg/s of
bandwidth is required and the monthly cost is about ¥ 320,000 CNY. DES
can transmit 120 TB of data at a time and newly generated images can be
transmitted every 3 days. The cost of 10 transmissions per month is
about ¥ 50,000 CNY, which is up to 80% less expensive than using Direct
Connect.

Cost-effective big data storage-compute decoupling solution
***********************************************************

Compute and storage resources are decoupled and can be scaled
separately, avoiding unbalanced resource allocation on a single node. In
addition, Kunpeng computing power can be used, which can further save
computing power costs.

.. toctree::
   :maxdepth: 1