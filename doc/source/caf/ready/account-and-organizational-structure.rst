
Account and Organizational Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. todo::

   remove instances of HUA specific services and offerings.


The Landing Zone solution needs a secure, compliant, and scalable
multi-account environment on the cloud.

.. important::
   It is a best practice to plan the account and organizational structure first.

Open Telekom Cloud provides a reference structure. It is recommended that you
design organizational levels and accounts based on your business
architecture, geographic architecture, and IT functions.

1. Different organizational levels and organizational units (OUs) are
   defined on Open Telekom Cloud based on your service architecture.
   Independent member accounts can be created for each service OU based
   on service systems. Independent or shared accounts can be created
   based on service scales and isolation requirements.

2. Different organizational levels and OUs are defined on Open Telekom Cloud
   based on the geographic architecture. Independent member accounts can
   be created under geographic OUs by country or region. On-premises
   customer relationship management systems and customer service systems
   can be deployed in these OUs.

3. For the central IT department of an enterprise, corresponding OUs are
   created on Open Telekom Cloud and the member accounts described in the
   following table are created based on different IT functions to
   isolate responsibilities and permissions in the IT management domain
   and to manage multiple member accounts.

.. list-table::
   :widths: 25 25 25 25
   :header-rows: 1

   * - Account
     - IT Function
     - Responsible Team
     - Resource/Cloud Service
   * - Network operations account
     - Centrally deploy and manage enterprise network resources including network border
       security resources to unify network resource management and networking between VPCs
       under multiple accounts.
     - Network management team and security management team
     - NAT Gateway, EIP, VPC, Direct Connect, Cloud Connect, VPN, CFW, WAF, Anti-DDoS
   * - Public service account
     - Centrally deploy and manage enterprise public resources, services, and application systems, and share them with other member accounts.
     - Public service management team
     - NTP server, AD server, Self-built DNS, OBS bucket, SWR, Collaborative office system
   * - Security operations account
     - -  Serve as the enterprise security operations center.
       -  Centrally control the security policies, security rules, and security resources of the entire enterprise.
       -  Set security configuration baselines for other accounts.
       - Be responsible for the information security of the entire enterprise.
     - Security management team
     - Services that support cross-account security control, such as DEW, SCM, and VSS
   * - O&M and monitoring account
     - Implement unified monitoring and O&M of resources and applications under each member account, and identify potential issues and send pre-warnings in a timely manner.
     - O&M team
     - CBH, Grafana, Prometheus, 3rd-party O&M and monitoring systems
   * - Log account
     - Centrally store the run logs and audit logs of other accounts.
     - Log analysis team and compliance audit team
     - LTS, OBS bucket, SIEM system
   * - Data platform account
     - Centrally deploy the big data platform of the enterprise and collect service data of other accounts to the data platform for storage, processing, and analysis.
     - Data processing team and business analysis team
     - Data lake, Big data analysis platform, Data access service, Data governance platform
   * - DevOps account
     - Centrally manage CI/CD pipelines for the entire enterprise and deploy them across accounts.
     - Software R&D team
     - DevCloud, Self-built DevOps pipeline
   * - Sandbox account
     - Test functions and security policies of cloud services.
     - Test team
     - On-demand resources and services that need to be tested

.. tip::
    In addition to these member accounts, you can create more IT functional
    accounts such as application integration accounts or collaborative
    office account as needed.

By default, a master account is created under the root of the
organization. It is recommended that no cloud resources be deployed
under this master account. You can use this master account to do the
following:

-  **Centrally manage organizations and accounts**: Create and manage
   organizational structures and OUs, create member accounts for OUs, or
   invite other existing accounts to the organization as member
   accounts.

-  **Centrally manage finances**: Collect and analyze statistics on the
   costs of the entire enterprise spent on Open Telekom Cloud; top up
   accounts, apply for credit limits, activate coupons on Open Telekom Cloud
   and allocate them to member accounts; regularly review the usage of
   funds, credit limits, and coupons of member accounts and reclaim them
   in a timely manner.

-  **Centrally manage organizational policies**: Set organizational policies
   for OUs and member accounts, forcibly restrict user permissions (also
   for account administrators) under member accounts to prevent security
   risks caused by excessive permissions. If you apply an organizational
   policy to a specific OU, the policy applies to all member accounts
   and lower-level OUs in that OU.

.. tip::
    You can use enterprise projects or tags to group resources at a fine
    granularity under member accounts. For example, you can group
    application subsystems or sub-products into an enterprise project or tag
    them on Open Telekom Cloud. You can also perform cost allocation and
    find-grained permissions control based on these groupings.

.. toctree::
   :maxdepth: 1
