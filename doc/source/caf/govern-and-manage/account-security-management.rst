Account Security Management
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This section describes common account types and management measures.

Account types
*************

-  CBH accounts
-  OS account
-  Database accounts
-  Cloud management platform account
-  Business system account
-  Tenant account provided by the cloud provider
-  Other business-related accounts

Roles and responsibilities
**************************

+-------------------+--------------------------------------------------+
| Role              | Description                                      |
+===================+==================================================+
| Account applicant | The one who is applying for an account or        |
|                   | permission (for themselves or others)            |
| (Maintenance,     |                                                  |
| development, or   |                                                  |
| audit engineer)   |                                                  |
+-------------------+--------------------------------------------------+
| Account user      | User of an account or permission                 |
|                   |                                                  |
| (Maintenance,     |                                                  |
| development, or   |                                                  |
| audit engineer)   |                                                  |
+-------------------+--------------------------------------------------+
| Account           | Responsible for routine account and permissions  |
| administrator     | management, such as reviewing account creation   |
|                   | and deregistration requests, managing passwords, |
| (System           | and changing the owner of an account.            |
| administrator)    |                                                  |
+-------------------+--------------------------------------------------+
| Account approver  | Responsible for reviewing and approving account  |
|                   | permissions applications. Their work includes:   |
| (O&M manager)     |                                                  |
|                   | -  Checking whether the applications for         |
|                   |    accounts and permissions are authentic,       |
|                   |    necessary, and appropriate.                   |
|                   |                                                  |
|                   | -  Regularly reviewing accounts and permissions. |
|                   |    Revoke unnecessary accounts or permissions in |
|                   |    a timely manner.                              |
|                   |                                                  |
|                   | -  Ensuring the overall security of accounts and |
|                   |    permissions.                                  |
+-------------------+--------------------------------------------------+

Constraints
***********

-  Employees can apply for permissions to access the production
   environment only when necessary.
-  For employees who have worked in your company for one month or
   longer, but have not completed their probationary periods, their
   supervisors shall assume responsibilities when they apply for system
   permissions.
-  Employees who have violated O&M regulations shall not be granted
   long-term change permissions. Only one-time change permissions can be
   granted.

Validity period
***************

-  The validity period of a permission depends on the role. If a
   permission expires, you need to apply for it again.

+--------------------+-------------------------------------------------+
| Permission         | Usage                                           |
| Validity Period    |                                                 |
+====================+=================================================+
| 1 year             | Long-term network O&M. Common applicants        |
|                    | include:                                        |
|                    |                                                 |
|                    | -  O&M personnel                                |
|                    |                                                 |
|                    | -  O&M manager                                  |
|                    |                                                 |
|                    | -  O&M platform developers responsible for      |
|                    |    long-term O&M tool development, system       |
|                    |    interconnection, and release                 |
+--------------------+-------------------------------------------------+
| 3 months           | Project development. Permissions shall be       |
|                    | revoked after the project delivery.             |
+--------------------+-------------------------------------------------+
| 1 week             | Short-term project delivery, acceptance, and    |
|                    | issue tracking.                                 |
+--------------------+-------------------------------------------------+
| 1 day              | Short-term access for incident/problem          |
|                    | handling, issue escalation, and security check. |
+--------------------+-------------------------------------------------+

Application process
*******************

1. The applicant fills out the application form, sends it to the account
   approver, and CC's it to the account administrator.
2. The account approver checks whether the application is necessary and
   appropriate, and then approves it or provides review comments.
3. If the application is approved, the account administrator creates an
   account and send it to the account user.
4. The account user changes the initial password before using the
   account.

..  note::
    To change the permissions of an account, you do not need the account
    approver to approve the account again. Submit an online request or send
    an email to obtain approval for the change. Then, send the proof of
    approval to the account administrator. The account administrator will
    assign permissions accordingly.

Deregistration process
**********************

1. The account applicant sends an email or submits an online application
   for deregistration and explains the reason (such as resignation, job
   transfer, or job responsibility change).
2. The account administrator deregisters the account and revokes its
   permissions.
3. The account administrator records the deregistration results and
   sends them to the account applicant, owner, and user.

The account administrator regularly checks account validity periods,
reports expired accounts, and deletes accounts as needed after
conferring with related business managers and users.

..  note::
    -  Accounts that are valid for only one week or less will automatically
       be deregistered upon expiry.
    -  For employees who have submitted resignation applications, ensure
       their permissions are revoked before they leave the company.

Precautions
***********

-  Configure appropriate password complexity rules. A password must be
   at least 8 characters long and must contain digits, letters, and
   special characters. Do not allow common weak passwords or
   easy-to-guess passwords.
-  Do not allow users to lend their accounts to others. A user is
   responsible for all the operations performed through their account.
-  For accounts that have not been logged in for 30 days, the account
   administrator can deregister them after notifying the account users
   by email.
-  If the account administrator finds that the password of an account
   was leaked or compromised, they must immediately report the problem
   to the account owner, reset the password and notify the account user,
   and send a detailed report about this incident to the account owner.
-  Passwords need to be changed regularly. Password cannot be used for
   longer than 90 consecutive days.

.. toctree::
   :maxdepth: 1