
Security PMI
~~~~~~~~~~~~

Develop Preventive Maintenance Inspection (PMI) standards. Define the
monitoring and alarm handling process for services or systems after they
are migrated to the cloud. Describe the key monitoring points,
remediation actions, and issue escalation process to minimize the impact
of security incidents on services.

PMI Check Items
^^^^^^^^^^^^^^^

Network security PMI
********************

-  Check for ports accessible from the Internet. For example, check the
   configurations of ELB and NAT Gateway. Ensure there are no unsafe
   ports accessible from the Internet, and no resources directly bound
   to an EIP. Unsafe ports include internal management ports (for
   example, 22 and 3389) and high-risk ports (135, 139, and 445 for TCP;
   137 and 138 for UDP; or other ports that can be exploited by
   EternalBlue or other ransomware).
-  Check intranet connections. Ensure the network ACL, security group,
   or other network security configurations are clearly defined, only
   necessary ports are open, and arbitrary access to ports is denied.

System security PMI
*******************

-  Vulnerability management: Scan for vulnerabilities, fix them in a
   timely manner, and track the vulnerabilities until they are fixed.
   Our vulnerability management functions can help you detect
   vulnerabilities in Linux, Windows, and Web-CMS.
-  Baseline checks: Detect unsafe settings based on security baselines,
   including weak password policies, common weak passwords, and unsafe
   configuration items.
-  Asset management: Inventory all the assets on your servers, including
   accounts, open ports, processes, web directories, software, and
   auto-started items.
-  Intrusion detection: Use HSS to check for malicious programs,
   suspicious processes, web shells, abnormal shells, unsafe accounts,
   and rootkits. Work with related personnel to eliminate risks in a
   timely manner.

Application security PMI
************************

-  Defense against common attacks: Ensure your business systems have
   configured web firewall policies to monitor and block common web
   application attacks, such as SQL injections, XSS, file inclusion,
   directory traversal, sensitive file access, command/code injection,
   Trojans, and web shells.
-  Service access control: Meet with business personnel and determine
   the scope of allowed access sources. Minimize this scope by
   configuring WAF, VPN, and CBH; blocking IP addresses in certain
   regions; and creating an IP address blacklist and whitelist.
-  Common vulnerability monitoring: Scan for and fix vulnerabilities in
   a timely manner.
-  Web page tamper-proofing: Configure static Web Tamper Protection
   (WTP) in HSS to protect website root directories, preventing
   attackers from uploading scripts and launching reverse shells.
-  Penetration testing: Manually check for and fix logical
   vulnerabilities in a timely manner.
-  Account management: Work with business experts to review all the
   application accounts and revoke unnecessary permissions, especially
   those for authentication, authorization, account, and audit (4A)
   systems. Enable multi-factor authentication (MFA) and delete zombie
   accounts.

Data security PMI
*****************

-  Data access permission control: Review all the database accounts and
   permissions, delete test accounts and other unnecessary accounts, and
   retain only the least required permissions for accounts.
-  Database protection: Deploy database audit and protection equipment
   to filter, monitor, and audit database operations in real time.
-  O&M plane checks: Prevent insiders from using O&M accounts to access
   the internal network. Ensure CBH, VPN, and other systems used for O&M
   access require two-factor authentication (2FA) and strong passwords.
   This can prevent account cracking, which may result in intrusions
   into a large number of servers.
-  Account security checks: Ensure that the length and complexity of
   account passwords meet security requirements. Manage permissions at a
   fine granularity. Allow administrators to access only the resources
   related to their jobs.
-  Backups: Configure backup mechanisms for important business systems.
   Use data backups, server backups, and snapshots to restore services
   if there is an emergency.

PMI Report Template
^^^^^^^^^^^^^^^^^^^

+-----------+---------------+------------------------------------------+
| Category  | Check Item    | Security Suggestion                      |
+===========+===============+==========================================+
| Account   | Password      | Password should be 10 characters or      |
| password  | complexity    | longer and contain at least one digit,   |
|           |               | uppercase letter, lowercase letter, and  |
|           |               | special character. Passwords cannot be   |
|           |               | the same as the username or the username |
|           |               | spelled backwards.                       |
+-----------+---------------+------------------------------------------+
|           | Account       | Account lockout time: 30 minutes         |
|           | lockout       |                                          |
|           | policy        | Account lockout threshold: 5 invalid     |
|           |               | logins                                   |
|           |               |                                          |
|           |               | Reset account lockout counter after: 30  |
|           |               | minutes                                  |
+-----------+---------------+------------------------------------------+
|           | Password      | The password needs to be changed         |
|           | change policy | regularly, at least once every 90 days.  |
|           |               | Notify users 7 days before their         |
|           |               | passwords expire.                        |
+-----------+---------------+------------------------------------------+
|           | Account not   | Delete any accounts not in use.          |
|           | in use        |                                          |
+-----------+---------------+------------------------------------------+
| Network   | Network ACL   | After a system is built, the system      |
|           |               | development team shall provide a         |
|           |               | configuration list. The O&M personnel    |
|           |               | shall check for security risks in the    |
|           |               | ACL.                                     |
+-----------+---------------+------------------------------------------+
|           | Security      | After a system is built, the system      |
|           | group         | development team shall provide a         |
|           |               | configuration list. The O&M personnel    |
|           |               | shall check for security risks in        |
|           |               | security groups.                         |
+-----------+---------------+------------------------------------------+
|           | Port          | After a system is built, the system      |
|           |               | development team shall provide the list  |
|           |               | of necessary ports. The O&M personnel    |
|           |               | shall check for and disable unnecessary  |
|           |               | ports accordingly.                       |
+-----------+---------------+------------------------------------------+
|           | Network       | Check for malicious traffic and analyze  |
|           | traffic       | their statistics. Ask cloud service      |
|           |               | providers to assist the analysis if      |
|           |               | necessary.                               |
+-----------+---------------+------------------------------------------+
| Operation | Account       | Delete or disable accounts not required  |
|           |               | for business operations.                 |
| system    |               |                                          |
+-----------+---------------+------------------------------------------+
|           | Account       | Use strong passwords.                    |
|           | password      |                                          |
+-----------+---------------+------------------------------------------+
|           | Session       | Generally, set it to 15 minutes.         |
|           | timeout       |                                          |
+-----------+---------------+------------------------------------------+
|           | Default       | Disable default shared folders and drive |
|           | sharing       | letters.                                 |
+-----------+---------------+------------------------------------------+
|           | Process       | After a system is built, the system      |
|           |               | development team should provide the list |
|           |               | of necessary process. The O&M personnel  |
|           |               | shall check for and shut down            |
|           |               | unnecessary processes, such as           |
|           |               | alsasound, cups, fbset, nfs, postfix,    |
|           |               | rpcbind, smbfs, snmpd, splash,           |
|           |               | splash_earl, etc.                        |
+-----------+---------------+------------------------------------------+
|           | System        | Scan for and fix vulnerabilities.        |
|           | vulnerability |                                          |
+-----------+---------------+------------------------------------------+
|           | System log    | Check system logs and analyze suspicious |
|           |               | events and attacks (if any).             |
+-----------+---------------+------------------------------------------+
|           | Messenger     | Stop the service and disable it. Enable  |
|           | service       | it only when necessary.                  |
+-----------+---------------+------------------------------------------+
|           | Remote        | Stop the service and disable it. Enable  |
|           | registry      | it only when necessary.                  |
|           | service       |                                          |
+-----------+---------------+------------------------------------------+
|           | TCP/IP        | Stop the service and disable it. Enable  |
|           | NetBIOS       | it only when necessary.                  |
|           | Helper        |                                          |
|           | service       |                                          |
+-----------+---------------+------------------------------------------+
|           | Wireless      | Stop the service and disable it. Enable  |
|           | configuration | it only when necessary.                  |
|           | service       |                                          |
+-----------+---------------+------------------------------------------+
|           | Error         | Stop the service and disable it. Enable  |
|           | reporting     | it only when necessary.                  |
|           | service       |                                          |
+-----------+---------------+------------------------------------------+
|           | Help and      | Stop the service and disable it. Enable  |
|           | support       | it only when necessary.                  |
|           | service       |                                          |
+-----------+---------------+------------------------------------------+
|           | Telnet        | Stop the service and disable it. Enable  |
|           | service       | it only when necessary.                  |
+-----------+---------------+------------------------------------------+
|           | Print spooler | Stop the service and disable it. Enable  |
|           | service       | it only when necessary.                  |
+-----------+---------------+------------------------------------------+
|           | Computer      | Stop the service and disable it. Enable  |
|           | browser       | it only when necessary.                  |
|           | service       |                                          |
+-----------+---------------+------------------------------------------+
|           | Themes        | Stop the service and disable it. Enable  |
|           | service       | it only when necessary.                  |
+-----------+---------------+------------------------------------------+
|           | Telephony     | Stop the service and disable it. Enable  |
|           | service       | it only when necessary.                  |
+-----------+---------------+------------------------------------------+
| M         | System log    | Back up system logs for auditing.        |
| onitoring | backup        |                                          |
| Audit     |               |                                          |
+-----------+---------------+------------------------------------------+
|           | Monitoring    | A system shall provide monitoring        |
|           | information   | capabilities, so that users can learn    |
|           |               | the overall system status by checking    |
|           |               | system monitoring items, database        |
|           |               | monitoring items, business system        |
|           |               | metrics, and network status.             |
+-----------+---------------+------------------------------------------+
| Database  | Database      | Delete default and unnecessary database  |
|           | account       | accounts.                                |
+-----------+---------------+------------------------------------------+
|           | Database      | Use strong passwords.                    |
|           | password      |                                          |
+-----------+---------------+------------------------------------------+
|           | Database file | Minimize file and folder permissions.    |
|           | access        | Allow data to be written only by         |
|           | permission    | database administrators and the user     |
|           |               | that runs the database process.          |
+-----------+---------------+------------------------------------------+
| Web       | Web           | Scan for and fix web vulnerabilities.    |
| Service   | vulnerability |                                          |
+-----------+---------------+------------------------------------------+
|           | Website log   | Check website logs and analyze           |
|           |               | suspicious events and attacks (if any).  |
+-----------+---------------+------------------------------------------+

.. toctree::
   :maxdepth: 1