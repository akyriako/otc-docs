
Account and Organizational Structure
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Landing Zone solution needs a secure, compliant, and scalable
multi-account environment on the cloud. It is a best practice to plan
the account and organizational structure first.

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


+----------+------------------------+--------------+------------------+
| Account  | IT Function            | Responsible  | Resource or      |
|          |                        | Team         | Cloud Service    |
+==========+========================+==============+==================+
| Network  | Centrally deploy and   | Network      | NAT Gateway      |
| op       | manage enterprise      | management   |                  |
| erations | network resources      | team and     | EIP              |
| account  | including network      | security     |                  |
|          | border security        | management   | VPC              |
|          | resources to unify     | team         |                  |
|          | network resource       |              | Direct Connect   |
|          | management and         |              |                  |
|          | interworking between   |              | Cloud Connect    |
|          | VPCs under multiple    |              |                  |
|          | accounts.              |              | VPN              |
|          |                        |              |                  |
|          | In particular,         |              | CFW              |
|          | centrally manage the   |              |                  |
|          | internet-oriented and  |              | WAF              |
|          | on-premises IDC        |              |                  |
|          | equipment              |              | Anti-DDoS        |
|          | room-oriented network  |              |                  |
|          | ingress and egress.    |              |                  |
+----------+------------------------+--------------+------------------+
| Public   | Centrally deploy and   | Public       | NTP server       |
| service  | manage enterprise      | service      |                  |
| account  | public resources,      | management   | AD server        |
|          | services, and          | team         |                  |
|          | application systems,   |              | Self-built DNS   |
|          | and share them with    |              |                  |
|          | other member accounts. |              | OBS bucket       |
|          |                        |              |                  |
|          |                        |              | SWR              |
|          |                        |              |                  |
|          |                        |              | Collaborative    |
|          |                        |              | office system    |
+----------+------------------------+--------------+------------------+
| Security | -  Serve as the        | Security     | Services that    |
| op       |    enterprise security | management   | support          |
| erations |    operations center.  | team         | cross-account    |
| account  |                        |              | security         |
|          | -  Centrally control   |              | control, such as |
|          |    the security        |              | DEW, SCM, and    |
|          |    policies, security  |              | VSS              |
|          |    rules, and security |              |                  |
|          |    resources of the    |              |                  |
|          |    entire enterprise.  |              |                  |
|          |                        |              |                  |
|          | -  Set security        |              |                  |
|          |    configuration       |              |                  |
|          |    baselines for other |              |                  |
|          |    accounts.           |              |                  |
|          |                        |              |                  |
|          | -  Be responsible for  |              |                  |
|          |    the information     |              |                  |
|          |    security of the     |              |                  |
|          |    entire enterprise.  |              |                  |
+----------+------------------------+--------------+------------------+
| O&M and  | Implement unified      | O&M team     | CBH              |
| mo       | monitoring and O&M of  |              |                  |
| nitoring | resources and          |              | Grafana          |
| account  | applications under     |              |                  |
|          | each member account,   |              | Prometheus       |
|          | and identify potential |              |                  |
|          | issues and send        |              | Third-party O&M  |
|          | pre-warnings in a      |              | and monitoring   |
|          | timely manner.         |              | systems          |
+----------+------------------------+--------------+------------------+
| Log      | Centrally store the    | Log analysis | LTS              |
| account  | run logs and audit     | team and     |                  |
|          | logs of other          | compliance   | OBS bucket       |
|          | accounts.              | audit team   |                  |
|          |                        |              | SIEM system      |
+----------+------------------------+--------------+------------------+
| Data     | Centrally deploy the   | Data         | Data lake        |
| platform | big data platform of   | processing   |                  |
| account  | the enterprise and     | team and     | Big data         |
|          | collect service data   | business     | analysis         |
|          | of other accounts to   | analysis     | platform         |
|          | the data platform for  | team         |                  |
|          | storage, processing,   |              | Data access      |
|          | and analysis.          |              | service          |
|          |                        |              |                  |
|          |                        |              | Data governance  |
|          |                        |              | platform         |
+----------+------------------------+--------------+------------------+
| DevOps   | Centrally manage CI/CD | Software R&D | DevCloud         |
| account  | pipelines for the      | team         |                  |
|          | entire enterprise and  |              | Self-built       |
|          | deploy them across     |              | DevOps pipeline  |
|          | accounts.              |              |                  |
+----------+------------------------+--------------+------------------+
| Sandbox  | Test functions and     | Test team    | On-demand        |
| account  | security policies of   |              | resources and    |
|          | cloud services.        |              | services that    |
|          |                        |              | need to be       |
|          |                        |              | tested           |
+----------+------------------------+--------------+------------------+

In addition to these member accounts, you can create more IT functional
accounts such as application integration accounts or collaborative
office account as needed.

By default, a master account is created under the root of the
organization. It is recommended that no cloud resources be deployed
under this master account. You can use this master account to do the
following:

-  Centrally manage organizations and accounts: Create and manage
   organizational structures and OUs, create member accounts for OUs, or
   invite other existing accounts to the organization as member
   accounts.

-  Centrally manage finances: Collect and analyze statistics on the
   costs of the entire enterprise spent on Open Telekom Cloud; top up
   accounts, apply for credit limits, activate coupons on Open Telekom Cloud
   and allocate them to member accounts; regularly review the usage of
   funds, credit limits, and coupons of member accounts and reclaim them
   in a timely manner.

-  Centrally manage organizational policies: Set organizational policies
   for OUs and member accounts, forcibly restrict user permissions (also
   for account administrators) under member accounts to prevent security
   risks caused by excessive permissions. If you apply an organizational
   policy to a specific OU, the policy applies to all member accounts
   and lower-level OUs in that OU.

You can use enterprise projects or tags to group resources at a fine
granularity under member accounts. For example, you can group
application subsystems or sub-products into an enterprise project or tag
them on Open Telekom Cloud. You can also perform cost allocation and
find-grained permissions control based on these groupings.

.. toctree::
   :maxdepth: 1
