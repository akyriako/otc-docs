Emergency Handling
~~~~~~~~~~~~~~~~~~

The process of receiving, handling, and escalating incidents must be
standardized to ensure that customer issues are handled at the promised
service level. The incident handling responsibilities, time
requirements, and notification mechanism must be clearly defined.
Services must be quickly recovered to ensure the promised quality and
availability.

Roles and responsibilities
**************************

+--------------+-------------------------------------------------------+
| Role         | Responsibility                                        |
+==============+=======================================================+
| O&M engineer | -  Receive customer incidents reported by hotline or  |
|              |    email.                                             |
|              |                                                       |
|              | -  Record all information about received incidents,   |
|              |    including contact methods of reporters, incident   |
|              |    features, details, and time.                       |
|              |                                                       |
|              | -  Diagnose and analyze incidents and provide         |
|              |    solutions by referring to relevant documentation.  |
|              |    For incidents that cannot be resolved, transfer    |
|              |    them to developers or seek help from O&M leaders.  |
|              |                                                       |
|              | -  Hold first accountability to track incidents,      |
|              |    record handling progress, and keep customers       |
|              |    updated on the progress as required.               |
|              |                                                       |
|              | -  Demarcate incidents and provide solutions within a |
|              |    specified period. Transfer unresolvable incidents  |
|              |    to developers within the specified time.           |
|              |                                                       |
|              | -  Close incidents that the reporters have confirmed  |
|              |    resolved with the provided solutions.              |
|              |                                                       |
|              | -  Transfer reoccurring incidents and those with      |
|              |    unknown causes or known defects to the issue       |
|              |    management process.                                |
|              |                                                       |
|              | -  Summarize lessons learned from typical and general |
|              |    incidents.                                         |
+--------------+-------------------------------------------------------+
| Developer    | -  Locate and analyze the causes of incidents         |
|              |    transferred from O&M engineers, and resolve the    |
|              |    incidents.                                         |
|              |                                                       |
|              | -  Follow up with incident owners to confirm          |
|              |    resolution.                                        |
|              |                                                       |
|              | -  Locate causes of bugs in the production            |
|              |    environment, and provide and implement             |
|              |    comprehensive solutions.                           |
+--------------+-------------------------------------------------------+
| Incident     | -  Coordinate and monitor the incident handling       |
| manager      |    process.                                           |
|              |                                                       |
| (O&M leader) | -  Coordinate resources for major incidents.          |
|              |                                                       |
|              | -  Review and approve solutions for major incidents.  |
|              |                                                       |
|              | -  Trace the output of major incident reports.        |
+--------------+-------------------------------------------------------+

Incident severity and response
******************************

Level 1: incidents that have major impacts on services, such as serious
damage, data loss, service data or function errors (which cause multiple
customer complaints), and system faults recurring within a short period
of time.

Level 2: incidents that have minor impacts on services, such as
unavailability of a few functions (service degradation), function
impairment on some users, data inconsistency (no financial loss), and
common system faults.

Level 3: incidents that have no impact on services, such as data query
and consulting. Services are normal but experience is affected.

Response and resolution time requirements vary by incident level. The
response timing is 24/7 and starts once an incident is reported.

+----------------+----------------+-----------------+-----------------+
| Incident Level | Response Time  | Recovery Time   | Resolution Time |
|                | (minutes)      | (hours)         | (days)          |
+================+================+=================+=================+
| 1              | 10             | 2               | 7               |
+----------------+----------------+-----------------+-----------------+
| 2              | 30             | 6               | 20              |
+----------------+----------------+-----------------+-----------------+
| 3              | 60             | 24              | 60              |
+----------------+----------------+-----------------+-----------------+

Remarks:

-  The incident levels and response time above are only examples. Adjust
   them as required.

-  O&M engineers can transfer out incidents that they cannot resolve by
   referring to relevant documentation within the specified time.

-  The response time is the maximum delay before an incident handler
   starts handling an incident after receiving it.

-  The recovery time is the maximum duration needed to recover services
   after an incident occurs.

-  The resolution time is the maximum duration taken by an O&M engineer
   to resolve or transfer out an incident.

Incident escalation and notification
***********************************

The notification mechanism defined in the following table is for
incidents that are Level 1 and 2.

+----------------------------+--------------+-------------------------+
| Notification               | Method       | Recipients              |
+============================+==============+=========================+
| Initial notification       | SMS and      | (Send to) Service owner |
|                            | email        |                         |
| (30 minutes)               |              | (CC) O&M team           |
+----------------------------+--------------+-------------------------+
|                            | Phone call   | R&D leader              |
+----------------------------+--------------+-------------------------+
| Handling progress          | SMS and      | (Send to) Service owner |
|                            | email        |                         |
| (1 hour)                   |              | (CC) O&M team           |
+----------------------------+--------------+-------------------------+
| Fault rectification        | SMS and      | (Send to) Service owner |
|                            | email        |                         |
|                            |              | (CC) O&M team           |
+----------------------------+--------------+-------------------------+
| Escalation of overdue      | SMS and      | (Send to) Service owner |
| incidents                  | email        |                         |
|                            |              | (CC) O&M team, R&D      |
|                            |              | leader                  |
+----------------------------+--------------+-------------------------+
|                            | Phone call   | R&D leader              |
+----------------------------+--------------+-------------------------+

If a Level-2 incident's impact on services and users worsens, escalate
it to Level 1 and then handle it with Level-1 standards.

Precautions during incident management
**************************************

-  Record all incidents on the live network in the unified event
   management system for analysis.

-  Respond to and resolve incidents within the specified time.

-  Analyze incidents handled every month.

.. toctree::
   :maxdepth: 1