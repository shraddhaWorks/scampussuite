export interface ContentSection {
  title: string;
  content: string;
  image: string;
}

export interface SubFeature {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  sections?: ContentSection[];
}

export interface PillarDataBase {
  letter: string;
  tag: string;
  title: string;
  features?: string[]; // Optional list of key features for the pillar
  iconName: string; // Icon identifier instead of JSX
  image: string;
  subFeatures: SubFeature[];
}

export const pillars: PillarDataBase[] = [
  {
    letter: 'S',
    tag: 'UNIFIED MANAGEMENT',
    title: 'Students & Staff',
    iconName: 'Users',
    features: [
      "Add Users",
      "Student Attendance",
      "Faculty Attendance",
      "Student Leaves",
      "Faculty Leaves",
      "Audit Management",
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    subFeatures: [
      {
        "title": "Add Users",
        "description": "A centralized user management system that enables administrators to create, manage, and control access for users with role-based permissions, structured workflows, and secure monitoring.",
        "benefits": [
          "Role-Based Access Control",
          "Centralized User Management",
          "Permission Control",
          "Secure Monitoring"
        ],
        "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
        "sections": [
          {
            "title": "Overview",
            "content": "The User Management System in SCAMPUS provides a structured and secure platform for managing users across the institution. It allows administrators to create users, assign roles, and control access based on hierarchy. With clearly defined responsibilities for Principal and Heads of Department, the system ensures organized user handling and secure access to platform features.",
            "image": "https://img.freepik.com/premium-vector/business-workflow-automation-concept_107173-4592.jpg"
          },
          {
            "title": "User Creation Process",
            "content": "Authorized users can create new accounts by navigating to the User Management module and accessing the Add User form. The process involves entering essential details such as role, name, email, username, password, and department. For faculty users, additional details like subjects, classes, qualification, and experience can be included. Once submitted, the user is created and added to the system instantly.",
            "image": "https://img.freepik.com/free-vector/task-management-abstract-concept_335657-2125.jpg"
          },
          {
            "title": "Role-Based Access & Permissions",
            "content": "The system follows a strict role-based access control model where the Principal has full control over all users, while Heads of Department can manage faculty within their departments. Permissions can be assigned during user creation to allow or restrict access to specific features such as attendance, timetable, examinations, and reports. This ensures secure and controlled access across the platform.",
            "image": "https://supertokens.com/covers/what-is-rbac-cover.png"
          },
          {
            "title": "User Monitoring & System Behavior",
            "content": "Administrators can view, edit, and manage users through a centralized dashboard with filtering and search options. The system maintains structured records including role, department, status, and activity details. Key behaviors include role-based visibility, permission-based feature access, and real-time updates to user data, ensuring efficient management, security, and transparency across the institution.",
            "image": "https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg"
          }
        ]
      },
      {
        title: 'Student Attendance',
        description: 'A centralized attendance management system that enables institutions to record, manage, and track student attendance with controlled access, real-time updates, and structured monitoring.',
        benefits: ['Centralized Tracking', 'Real-Time Monitoring', 'Role-Based Access', 'Accurate Reporting'],
        image: 'https://images.unsplash.com/photo-1581091012184-3b90a0e468b4?auto=format&fit=crop&q=80',
        sections: [
          {
            title: 'Overview',
            content: 'The Attendance Management System in S Campus provides a structured approach to recording, managing, and monitoring student attendance across the institution. It ensures accuracy and discipline by allowing attendance to be marked based on specific academic parameters such as year, class, section, and period, while also supporting real-time updates and automated calculations to improve tracking and visibility.',
            image: 'https://img.freepik.com/premium-vector/report-result-analyze-inspection-review-icon-paper-sheet-audit-sales-growth-graph-data-overview_101884-2320.jpg?semt=ais_incoming&w=740&q=80'
          },
          {
            title: 'Role-Based Access',
            content: 'Authorized users can record attendance by selecting key details such as year, class or section, period, and date, along with student status including present, absent, or late. The process involves accessing the Attendance module, applying the required filters, marking attendance for each student, and submitting the data, after which the records are stored in a structured format with real-time updates and options to view or export reports.',
            image: 'https://supertokens.com/covers/what-is-rbac-cover.png'
          },
          {
            title: 'Access Control and System Behavior',
            content: 'The system operates on a role-based access model where teachers are responsible for marking attendance, Heads of Department can monitor attendance across classes, and students have view-only access to their individual attendance records. The system enforces strict rules such as allowing attendance only for the current day, restricting past and future entries, and locking records once submitted, ensuring secure, accurate, and well-controlled attendance management.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCMM8MENLpCKw1Q3jq3gUk5rXlWZKO2UPww&s'
          },
          {
            title: '',
            content: 'The Attendance Management System enhances institutional efficiency by introducing structure, accuracy, and real-time visibility into attendance processes. It minimizes manual errors, prevents data manipulation, and ensures accountability at every level. This results in a reliable attendance ecosystem where teachers manage records efficiently, administrators monitor performance, and students stay informed.',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...'
          }
        ]
      },
      {
        title: 'Faculty Attendance',
        description: 'Real-time KPIs for student achievement and teacher success.',
        benefits: ['Grade curves', 'Growth trends', 'Custom filters'],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
      },
      {
        "title": "Student Leaves",
        "description": "A centralized leave management system that enables students to apply, track, and manage leave requests with real-time status updates, structured workflows, and role-based approvals.",
        "benefits": [
          "Structured Workflow",
          "Role-Based Approvals",
          "Real-Time Tracking",
          "Centralized Monitoring"
        ],
        "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        "sections": [
          {
            "title": "Overview",
            "content": "The Student Leave Management System in SCAMPUS provides a structured and efficient platform for handling student leave requests across the institution. It allows students to apply for leave, ensures requests are routed to the appropriate teacher for approval, and maintains a complete record of all leave activities. The system enhances transparency and simplifies communication between students and teachers through a streamlined and organized workflow.",
            "image": "https://img.freepik.com/premium-vector/business-workflow-automation-concept_107173-4592.jpg"
          },
          {
            "title": "Leave Request Process",
            "content": "Students can easily apply for leave through their dashboard by navigating to the Leave module and submitting a request with required details such as leave type, dates, and reason. The system automatically calculates the number of leave days and sets the request status to pending. Once submitted, the request is sent to the assigned teacher, who can review and either approve or reject it. Based on the action, the leave status is updated instantly and categorized accordingly.",
            "image": "https://img.freepik.com/free-vector/task-management-abstract-concept_335657-2125.jpg"
          },
          {
            "title": "Role-Based Access & Approval Flow",
            "content": "The system follows a clear role-based approval structure where students initiate leave requests and teachers act as the approving authority. Teachers can view all requests in categorized sections such as pending, approved, and rejected, and take appropriate actions. The system ensures controlled access and accountability by recording approval details, including the authority responsible for each decision.",
            "image": "https://supertokens.com/covers/what-is-rbac-cover.png"
          },
          {
            "title": "Tracking, Summary & System Behavior",
            "content": "Students can track all their leave requests in real time, including status, dates, and reasons. The system maintains a complete leave history and provides summary insights such as total leaves taken and pending requests. Key behaviors include automatic day calculation, real-time status updates, categorized tracking, and approval authority visibility. This ensures accuracy, transparency, and a well-organized leave management experience across the institution.",
            "image": "https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg"
          }
        ]
      },
      {
        "title": "Faculty Leaves",
        "description": "A centralized leave management system that enables faculty to apply for leave, track request status, and manage approvals through a structured and role-based workflow with real-time updates.",
        "benefits": [
          "Structured Workflow",
          "Role-Based Approvals",
          "Real-Time Tracking",
          "Centralized Monitoring"
        ],
        "image": "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80",
        "sections": [
          {
            "title": "Overview",
            "content": "The Faculty Leave Management System in SCAMPUS provides a structured platform for teachers to apply for leave and track their requests efficiently. It ensures that all leave applications are routed to the Head of Department for approval, maintaining a clear hierarchy and improving transparency in the leave process across the institution.",
            "image": "https://img.freepik.com/premium-vector/business-workflow-automation-concept_107173-4592.jpg"
          },
          {
            "title": "Leave Request Process",
            "content": "Teachers can apply for leave through their dashboard by navigating to the Leave module and submitting a request with required details such as leave type, dates, and reason. The system automatically calculates the number of leave days and sets the request status to pending. Once submitted, the request is sent to the Head of Department, who reviews and either approves or rejects it, after which the status is updated instantly.",
            "image": "https://img.freepik.com/free-vector/task-management-abstract-concept_335657-2125.jpg"
          },
          {
            "title": "Role-Based Access & Approval Flow",
            "content": "The system follows a clear role-based approval structure where teachers initiate leave requests and Heads of Department act as the approving authority. Each request goes through a controlled approval flow, ensuring accountability and proper access control. All requests are categorized into pending, approved, and rejected sections for better organization and monitoring.",
            "image": "https://supertokens.com/covers/what-is-rbac-cover.png"
          },
          {
            "title": "Tracking & System Behavior",
            "content": "Teachers can track all their leave requests in real time, including status, dates, and reasons. The system maintains a complete leave history and clearly separates pending and processed requests. Key features include automatic day calculation, real-time status updates, and structured record management, ensuring a transparent, accurate, and efficient leave management experience.",
            "image": "https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg"
          }
        ]
      },
      {
        title: 'Audit Management',
        description: 'Two-way student and staff input channels for continuous improvement.',
        benefits: ['Surveys', 'Action items', 'Engagement streams'],
        image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    letter: 'C',
    tag: 'REAL-TIME CONNECTIVITY',
    title: 'Communication',
    features: [
      "News Feed",
      "Circulars",
      "Chat & Messaging",
      "Notification Module",
      "Certificate Requests",
      "Workshops & Events"
    ],
    iconName: 'MessageSquare',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800',
    subFeatures: [
      {
        title: 'News Feed',
        description: 'A centralized communication system that enables institutions to create, manage, and distribute circulars with controlled visibility and targeted delivery.',
        benefits: [
          'Centralized Communication',
          'Targeted Delivery',
          'Role-Based Access',
          'Priority Management'
        ],
        image: 'https://media.istockphoto.com/id/1080310630/photo/love-letter-envelope.jpg?s=612x612&w=0&k=20&c=3go2_Tq6VGpUYCsR5milVQRQKuvE58r8Lu_Ow0FOFNY=',
        sections: [
          {
            title: 'Overview',
            content: 'The Circular Management System in S Campus provides a structured approach to creating, managing, and distributing official announcements across the institution. It ensures that communication remains clear and relevant by allowing circulars to be targeted to specific users such as classes, departments, or the entire campus, while also supporting priority levels and attachments to improve the quality and effectiveness of information delivery.',
            image: 'https://img.freepik.com/premium-vector/report-result-analyze-inspection-review-icon-paper-sheet-audit-sales-growth-graph-data-overview_101884-2320.jpg?semt=ais_incoming&w=740&q=80'
          },
          {
            title: 'Role-Based Access',
            content: 'Authorized users can create circulars by entering key details such as title, reference number, date, and content, along with optional attachments and importance levels. The process involves accessing the Circulars module, filling in the required information, selecting the appropriate audience, and choosing whether to publish immediately or save as a draft, after which the circular is displayed in a structured listing where users can search and filter based on different criteria for easy access.',
            image: 'https://supertokens.com/covers/what-is-rbac-cover.png'
          },
          {
            title: 'Access Control and System Behavior',
            content: 'The system operates on a role-based access model where the Principal has full visibility across the institution, Heads of Department can manage circulars within their departments, faculty can create circulars for specific classes, and students have view-only access. Visibility is determined by both the creator\'s role and the selected audience, ensuring that circulars are delivered only to relevant users while maintaining controlled, secure, and well-organized communication.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCMM8MENLpCKw1Q3jq3gUk5rXlWZKO2UPww&s'
          },
          {
            title: '',
            content: 'The Circular Management System enhances institutional communication by introducing structure, control, and relevance. It ensures that information is delivered efficiently to the right audience while maintaining clarity and reducing unnecessary communication. This results in a more organized and effective information flow across the institution.',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEhEPEBASEBAQEBAVGBgSERcYEBYPFREXFxUYFRUYHSogGBoxGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHSUvLS0tLS03MC0tLS0tLS0tLS8rLS0tLS0rLy0tLS0vLSstLS0tLS0vLy0tLS0tLSstLf/AABEIAJsBRgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYCBAEDBwj/xABMEAABAgIEBgwKCgAFBQAAAAABAAIDEQQFEiEGFzFBUdIHEyJSU2FxgZGTlNEUMjM1VHJ0krGyFkJic3Whs8HC8CNDgqLhFSQlg/H/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAApEQACAgEDAwQCAgMAAAAAAAAAAQIRAxITMQQhURRBYYEi8UJxwdHw/9oADAMBAAIRAxEAPwD3FERAEREAREQBatZ1jBo0J8ePEbChQxNznG4D9zxLaXmOz421Q6LCJIZFp8FrpHK0tcgN87MdRekv7PF1VxjkqL0l/Z4uqvNqTgFVMOLDo7olJESNasi22RsiZmbF2QrThYKVG5kKII1Jsxo21NvF8S7L/h3C8X8a39PMz3YnquOSovSX9ni6qY5Ki9Jf2eLqqg4sKu31I6xuomLCrt9SOsbqJ6eZG9Ev2OSovSX9ni6qY5Ki9Jf2eLqqg4sKu31I6xuomLCrt9SOsbqJ6eY3ol+xyVF6S/s8XVTHJUXpL+zxdVUHFhV2+pHWN1ExYVdvqR1jdRPTzG9Ev2OSovSX9ni6qY5Ki9Jf2eLqqg4sKu31I6xuomLCrt9SOsbqJ6eY3ol+xyVF6S/s8XVTHJUXpL+zxdVUHFhV2+pHWN1ExYVdvqR1jdRPTzG9Ev2OSovSX9ni6qzhbMFRucGtpERznEAAUeLMuJkANyvPsWNX76kdY3UXZQsBqDRIrI0PbXRGTI2x7S0GUpyDRfoUx6abdFZZ4pWeiRMJ6SHmMGg0cvLWtIGYaReHSvvmFtU3ZAoNHYIkfbobc5EF7w3lLAZDjKiKjaIsOLRzlO7b61wn0hvSoh7CCWkSIJBB05CF1SwQla4aOVZ5xp8pk1jkqL0l/Z4uqmOSovSX9ni6qoVYYD1fGfbLHwicoguDWk6bJBA5pLrZsaVacj6R1jdRcz6WaOmPUwkeg45Ki9Jf2eLqpjkqL0l/Z4uqqDiwq7fUjrG6iYsKu31I6xuoq+nmX3ol+xyVF6S/s8XVTHJUXpL+zxdVUHFhV2+pHWN1ExYVdvqR1jdRPTzG9Ev2OSovSX9ni6qY5Ki9Jf2eLqqg4sKu31I6xuomLCrt9SOsbqJ6eY3onotD2W6jivbDbSi0uMgXwYjWz43Fsgrw1wIBBBBEwRkI4l84YUbHtCo1Ej0iG6PbhMDhae0tnaAvFnjXt+x5ELqsoDnEkmiwrzl8VZzg4umXjJS7osKIioWCIiAIiIAiIgCIiAIiIAiIgC822cGzgVeDkNZ0cdIcvSV5vs2eRq78Uo38kBZXYOUec5vmJyM2zE8sjZuWIwZo1wk6QMx4tztI3NxvN6misxBPEtt2Xkptx8EL9HoO+ie8NVPo9B30T3hqqb2k8SbSeJN2XkbcfBCfR6DvonvDVT6PQd9E94aqm9pPEsXQiL03ZeRtx8EN9HoO+ie8NVPo9B30T3hqqWRTuS8kaI+CJ+j0HfRPeGqn0eg76J7w1VLIm5LyNEfBE/R+DvonvDVT6PwN9E94aqlUTcl5GiPghqRUtHhtc9zoga0EndDIOZUqK+0Sckz0DMFZcMaxyUdp0Of/ABb+/Qqwu/p4y06pe5wdRJatK9jbquk7VFY/NOR9U3Hv5lI4TUOy8RQNzEy+uO8fAqDVtoo8Kotg+OBL/wBjch57ulTkemSl9MrjWqLj9oqqyBWJErjcR8VyFoYG9QaRCnKMHy0sImOUEXqxUaqaLEFpkR7hxOH57m5VALuo9IfDNpji08X7jOsZ42+HRtjz6e0lZb/o/B30T3h3J9H4O+ie8O5adXYRgybGFk74eLzjMrFBe1wDgQ4HIQZjpXHN5IcndB45rsRYwdg76J7w7lm3B6AM8T3h3KXRZ7s/Jpoj4KFsn1PCh1VTntL5thNykS8owaFYNjjzXQPZYXyqP2WPNFP+5b+qxSGxx5roHssL5VSUm33LxSXBZERFUkIiIAiIgCIiAIiAIiIAiIgCIiALzfZs8jV34pRv5L0heb7Nnkau/FKN/JAX7PzraWpn51tqzICIiqSFjEyHkKyWMTIeQoDUREVyoREQBa9PpbYMN0V2RoyaTmHSthU3C+sbbxAadzDvdxxJfsPiVrhx65UZ5Z6I2QUeM57nPcZucSTylYrhcheseWchTmCtKsxDDOR4mPWH/HwUXAoEZ/iw3HjlIdJuUrVtRxg9j3FrbLgbjN1xyXXfmscri4tNmmJSUk0jHCah7XF2wDcxb/9Y8b9jzlRAV5rag7dBc2W6G6b6wzc4mOdUVUwz1R/onqIaZX5MlyuFyFqc5kFtUGnxYJnDdLSMrTyhaoXKq1fJCbTtFwq3CKG+TYn+G7j8Q8+bnU41wK83ZCccjXHkBKkqDS6VRxMNdtYyh4NnLmzhcmTAv4nbi6qX819m1sseaKf9y39VikNjjzXQPZYXyqF2R6XttS018i21AaZH75imtjjzXQPZYXyrjkqdHoRaatFkREUEhERAEREAREQBERAEREAREQBeb7Nnkau/FKN/JekLzfZs8jV34pRv5IC+5+dba1M/OttWZCMXukCdAJUSafE0joClY/iu9U/BQC0xJPkzyNo2fD4m+/IJ4fE335BayLTSvBTU/Js+HRNI6Atiixy8ODpTEiDJRy3Ku+v6o+KrOKomLdmyiIsjU0a5p4o8J0T62Ro0vOTv5lT4VTuItxozIVq/dOBeZ3zN8lca1q6HTG2XzuvBBkQfgedU2sqhiwZkDbGaWi8Djau3pnGqTpnJ1Cld1aNhsGgM8aI6KeKcv8AaB8V2NrmjQ/JQL9Jst/MTKgEC6niT5bZzbjXCSJuLhHFPisY3pJ+P7LUi1vSHZYrh6sm/LJaKIscV7FXkk/cuuDNPdEhye4ucxxEzeS03iZ6RzLXrDBsPe57H2Q4kyszkTllfkUDVFYmA4ulaa4SInLkI/udS8fCt0pQ4QHG8z/IS+K5pY5xm3A6I5McoVP2M4eDTc73HkkO9bDcH4DRNwMvtOIH5SWVQVu6PbZElaF4s3Tabj0fuqzTmvD3Me5zixxE3Ek5bjeiU5SaboiTxxipKN2WBzKDDymGeTdn8prqdW9HZ5OGT/pa0d/5KvBcq+0vdmLzv2SRMRa+iHxWNbyzJ/vMuqjuiUl7WPcS3KcwDRluGfNzqNVpwfoVltojdPkeRuYfvzqs6grQx6ssqb7EbsmslU9OlcBBb0baxTOxx5roHssL5VG7KrZVRT/uW/qsUlscea6B7LC+VefJ2z1oqkWRERVJCIiAIiIAiIgCIiAIiIAiIgC832bPI1d+KUb+S9IXm+zZ5GrvxSjfyQF9z8621plZCKdKs0Qd8fxXeqfgoBTBiEhwO9d8FDrXEZ5AiItTILcq76/qj4rTW5V31/VHxVZ8Fo8myiIsTYLFzZrJchqAg6zwfhRZkCw/S0XE8YzqrVhVMaB47Zt3zb28+jnXpAC1KzpMKCwvimTZyyTJJzAZ866MXUTTrkwy4IvvwearkK3U/ByFFG2QDYLgCN4QRMXfV5uhVmmUKJBNmI0t0H6p5Cu2GWM+DhnilDk6AsgsVyFcyNyq6TtUVr805H1Tce/mUjhRR5RGxBkiNkfWbd8JdCg1YnO8Ioel8H+Iv/2lYz7SUvo1h+UXH7IFcrELIK5gb1UUTbXgEblt5/Yf3jV3o0OSiqjoO1sAPjG88uhTjRJcGeduj1OmxaY9+SqbK/min/ct/VYpDY4810D2WF8qj9lfzRT/ALlv6rFIbHHmugeywvlXMzqLIiIoAREQBERAEREAREQBERAa9NpO12JC0XxWMAnLxjeeZoJ5l3PnIylORlPJPNNR9duLdpiWXOEONadZaXGW1RGi4CfjOao+JX+2Qn2QN0x4tNfkPgm2mRAyg7nmWscbkk0ZuaT7kzV9L21lqVlwJa5pytiNMnDjvyHOJFUDZt8jV34pRv5K4VFR47S90WUnshXgzL3tBFsjMSzaweNqp+zb5GrvxSjfyVZpKVItFtruXsohXCkGQyO9V3wUVJSrSL+MEdK1fAzpb0q8GkUmrNSSSW34I7S3pTwN2lvSr60U0s1JLbq/6/qj4p4E7S3pXdR4Ni1MgkyFyrKSaLRi7M0AWQaswFlZqYhqyREAVRpD/D6VZF9Go/Q50/3I6AdKksKaxMNggQ74sbciWUMJkTynIOfQouLEdRGQqLR5GkRCC4ymJn+y5GrqwQaWpcvj/LObNNN6fZc/6LYJNaS4gAAkk5AAL1GUCmQ6Yx52s2A8t3YBDhLLJR+EdMfELKFDO7iyLyMgZllyXT5ANKnKuojYTGsaJNaJD9yeOd6zcVGFvl8f0XUtUqXCK7WeC+V0Ay+y43czs3Oq7GgvYbL2lrhmI/s16cQtWm0CHFFl7Q4ceUchzLTH1LXaRlk6VPvHsecKXwbpNmIYZ8WKJcVoZPymF31lg29k3QjbbvT4w5DkKhWlzHZ2uaQbxeHA6F1XHJHscdSxyTZ2UqBtb3sP1XEc2Y9Elv1DQ9sfaI3LJHldm7+hK6lEdCiMEzGY27PanKXwHMrHVFCENjW5xeeNxyrPJkqHyaY8V5PhElR2SC7lwAuV57dnpIqeyx5op/3Lf1WKQ2OPNdA9lhfKo7ZY80U/7lv6rFI7HHmugeywvlVWWLIiIoAREQBERAEREAREQBYPfJZOK64InMqSA5r5GRAdIynknmmq5WVDLyb6OI7QWuIDmgMjw3Q22nyO6tPmG51aFrRaDDc0slZDojYhsyBL2vD5nTe0K+OellZw1I1aA57nOAjMLIZLCzaXNitIF03F/POzeCtLC3BaHWLIDIkV8MQKRDjCwBe5k5AzzXqeENoJdIWiACZXkCcgTovPSVG0Wsor2siiCDBiOaBZeXRWhzpAuZZllyie5v0I7l3Q7R7M3DRftHoXHgv2j0LJtNhF+1iIwvmRZtC1MCZEtMsyxg1hAeZMiw3Eie5eDNukS5R0qPyJ7DwX7R6E8F+0ehdUOs4b4jIcNzYlpryS14MrNmVwyznl4lvKHqXIVPg1vBftHoWL6M4ZDP4rbRRqZNEex013AJS2yIcM9x/ZcNKsQZIuEQk5XXSaQ2G1z3GTWiZ/ulZqu13FNIitorDuWmbyNI7vieJXhDUzLLk0R+fY1KFEtGLWEfNMMH5AD4DnK66vdYbEp8a97p2By3CXw5AV20pnhEVlGZdBg+NLJdce4cpXL2ClRhDA/wC3o8snil2SXJdLkB0rsvz+l4+zjXx+37v6NnBqgu3VIi3xY19+ZhvHJO48gCsYXXDbJZrjyTc5WduOOlUczSa4RUNARNR9Y1VCjDdNvzEXOHOpBFMZNO0VlFSVMrdAqIwolpzrbWzsDOCc5zaelWCCySzkitOblyVhjUODKaTXC4VC5Vdlc/8AiKf9y39VikdjjzXQPZYXyqN2VvNFP+5b+qxSWxx5roHssL5VVkosiIigkIiIAiIgCIiAIiIDGJkWMA3chKzIXRMtM8xUog2EWLXg5CslBJweLKoF1HebJbR3QqVbZafDIbBMnC24kO3bSJ3EE36b1PorxnpKyjZX6NQooEOE7bjYitJ8kIMmvtW7di0ZyyTmZyOcrGPVkV1FokIMk9jJOBIABNEiNIJ0FzgDKeVWJFbeZXaRFMtRI8GJtLmNZCitJdZBBcWSaADf4pvyaFKoipKVl0qCIsIkVrcp71Uk6acbgNJWDMi6nOLzM5My7gtKpFDlFwigk6KdEe2G8sFp4Fw4/wB9PMq/I0aETft8b3h/Z9JVliOABJMgBM8igaIwx4pjOG5aZNHJk7+UrbG+xydQvyVcvj48s1nsNHhCG3y8bRlE7v8AjlJUxVFBEFgbnyk6XZ+7mXTAq9+3OixJHMyWZv8A8+JUs0SU5J9qJw46dtfC/wC+TlERYHUEREAREQBERAEREBU9lbzRT/uW/qsUnscea6B7LC+VRmyt5op/3Lf1WKT2OPNdA9lhfKqslFkREUEhERAEREAREQBERAFw5s1yiA6XQAuPB1xS6WyFYtT3b7AkPrWSfg0rTpdewITrDrU+Jqm2RRu+DrzvZnZZg1fLPWdGHxV6hVzBdkte6qhsr1FGrWiwoFFLQ+HSGxDtjywWQxwuIBvmQlsUW7wY6CufBuIrwPFVXfDQ+2RNRMVNd8ND7ZE1FbWyNJ774PxFPB+IrwLFTXfDQ+2RNRMVNd8ND7ZE1E1MaT33wfiK5FH4l4DiprvhofbImomKmu+Gh9siaiamNJ9BBksy5snQvnzFTXfDQ+2RNRMVNd8ND7ZE1FFk0fQdk6EsnQvnzFTXfDQ+2RNRc4qK74aH2yJqJYo97ptF2xhZMicsnEZpRaKGANAuAXz5RtjSuYgtNjNAySdS4gcDnBFhduKyu+GZ2yJqKdbqiu2tWr3PoWydCWToXz1isrvhmdsiaiYrK74ZnbImoostR9C2ToSydC+dnbGVdBzWbc0l85SpcSVwJMzYuFy7sVNd8ND7ZE1EsUfQdk6EsnQvnzFTXfDQ+2RNRMVNd8ND7ZE1EsUfQdk6EsnQvnzFTXfDQ+2RNRMVNd8ND7ZE1EsUfQdk6EsnQvnzFTXfDQ+2RNRMVNd8ND7ZE1EsUer7KwP/SKf9y39ViktjjzXQPZYXyrxONsT1yQWuiwnNOUGlvIPKCxe2YKOFDoVFo0XykGCxjrN7bQGY3TUMFkRRUTCCA3Lb91dsCuIL2l7bVkaReoJJBF1UWkNiMbEbOy8AieWRXagCIiAIiIAiIgCIiA6KZRGRQA6e5daBBvDpET6Ccqr9aYNxnm2ykAnREhTPvNI+Cs6ICgRqrriH5NkB44nS/JwWIg1+P8AJg9YzuXoKICgbXhBwUHrGdyWMIOCg9YzuV/RAUCxhBwUHrGdyWMIOCg9YzuV/RAUCxhBwUHrGdyWMIOCg9YzuV/RAUCxhBwUHrGdyWMIOCg9YzuV/RAUCxhBwUHrGdyWMIOCg9YzuV/RAUDaq/4GD77O5Nrr/goPvs7lf0QFA2uv+Cg++zuTaq/4KD77O5X9EBQBDr/goPvs7lzteEHBQesb3K/IgKDYwg4KD1je5Nrwg4KD1je5X5EBQdrwg4KD1je5Nrwg4KD1je5X5EBQdrwg4KD1je5Nrr/goPWN7lfkQFB2uv8AgoPWN7k2uv8AgoPWN7lfkQFAMGvz/lQesb3LB1Drw5YMDrG9y9CRAUKjVHWT/KiDD5Bb+BCn6uqB7G2Xxy5pyhkMMHS4uKnkQHXR4DYbWsYJNaAAJzuHKuxEQBERAEREB//Z'
          }
        ]
      },
      {
        title: 'Circulars',
        description: 'A centralized communication system that enables institutions to create, manage, and distribute circulars with controlled visibility and targeted delivery.',
        benefits: [
          'Centralized Communication',
          'Targeted Delivery',
          'Role-Based Access',
          'Priority Management'
        ],
        image: 'https://media.istockphoto.com/id/1080310630/photo/love-letter-envelope.jpg?s=612x612&w=0&k=20&c=3go2_Tq6VGpUYCsR5milVQRQKuvE58r8Lu_Ow0FOFNY=',
        sections: [
          {
            title: 'Overview',
            content: 'The Circular Management System in S Campus provides a structured approach to creating, managing, and distributing official announcements across the institution. It ensures that communication remains clear and relevant by allowing circulars to be targeted to specific users such as classes, departments, or the entire campus, while also supporting priority levels and attachments to improve the quality and effectiveness of information delivery.',
            image: 'https://img.freepik.com/premium-vector/report-result-analyze-inspection-review-icon-paper-sheet-audit-sales-growth-graph-data-overview_101884-2320.jpg?semt=ais_incoming&w=740&q=80'
          },
          {
            title: 'Role-Based Access',
            content: 'Authorized users can create circulars by entering key details such as title, reference number, date, and content, along with optional attachments and importance levels. The process involves accessing the Circulars module, filling in the required information, selecting the appropriate audience, and choosing whether to publish immediately or save as a draft, after which the circular is displayed in a structured listing where users can search and filter based on different criteria for easy access.',
            image: 'https://supertokens.com/covers/what-is-rbac-cover.png'
          },
          {
            title: 'Access Control and System Behavior',
            content: 'The system operates on a role-based access model where the Principal has full visibility across the institution, Heads of Department can manage circulars within their departments, faculty can create circulars for specific classes, and students have view-only access. Visibility is determined by both the creator\'s role and the selected audience, ensuring that circulars are delivered only to relevant users while maintaining controlled, secure, and well-organized communication.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCMM8MENLpCKw1Q3jq3gUk5rXlWZKO2UPww&s'
          },
          {
            title: '',
            content: 'The Circular Management System enhances institutional communication by introducing structure, control, and relevance. It ensures that information is delivered efficiently to the right audience while maintaining clarity and reducing unnecessary communication. This results in a more organized and effective information flow across the institution.',
            image: 'data:image/jpeg;base64,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'
          }
        ]
      },
      {
        title: 'Chat & Messaging',
        description: 'Dedicated portal for parent communications and student progress summaries.',
        benefits: ['Live chat', 'Report cards', 'Alerts'],
        image: 'https://images.unsplash.com/photo-1581091870627-c24e539dd3dc?auto=format&fit=crop&q=80'
      },
      {
        title: 'Notification Module',
        description: 'High-priority alerts with acknowledgement and escalation workflows.',
        benefits: ['Geo-targeted', 'Read receipts', 'SLA logs'],
        image: 'https://images.unsplash.com/photo-1581092580515-3c2efd7de0ee?auto=format&fit=crop&q=80'
      },
      {
        title: 'Certificate Requests',
        description: 'Structured feedback survey routing with sentiment analytics.',
        benefits: ['Pulse checks', 'AI insights', 'Auto tickets'],
        image: 'https://images.unsplash.com/photo-1590608897129-79efbb8cb3ff?auto=format&fit=crop&q=80'
      },
      {
        title: 'Workshops & Events',
        description: 'Description for Workshops & Events',
        benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
        image: 'https://images.unsplash.com/photo-1554224155-16974a4ea2c5?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    letter: 'A',
    tag: 'EXCELLENCE IN EDUCATION',
    title: 'Academics',
    features: [
      "Class & Section Setup",
      "Assignments",
      "Exams & Grading",
      "Marksheet Generation",
      "RollNumber Allocation"
    ],
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1607013407627-6ee814329547?w=500&auto=format&fit=crop&q=60',
    subFeatures: [
      {
        title: 'Class & Section Setup',
        description: 'Drag-and-drop course design with standards tagging.',
        benefits: ['Version history', 'Shared libraries', 'Standards mapping'],
        image: 'https://images.unsplash.com/photo-1587614382346-4ec4c23ecf35?auto=format&fit=crop&q=80'
      },
      {
        title: 'Assignments',
        description: 'Create auto-graded, rubric-based and project assessments.',
        benefits: ['Question bank', 'Adaptive difficulty', 'Live grading'],
        image: 'https://images.unsplash.com/photo-1559028012-4810c5f7f3a5?auto=format&fit=crop&q=80'
      },
      {
        title: 'Exams & Grading',
        description: 'Visualized classroom performance and equity checks.',
        benefits: ['Heatmaps', 'Intervention flags', 'Trend lines'],
        image: 'https://images.unsplash.com/photo-1581091012184-3b90a0e468b4?auto=format&fit=crop&q=80'
      },
      {
        title: 'Marksheet Generation',
        description: 'Personalized student learning journeys and mastery tracking.',
        benefits: ['Recommendations', 'Milestone badges', 'Relearning plans'],
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80'
      },
      {
        title: 'RollNumber Allocation',
        description: 'Virtual group workspaces with shared docs and discussion boards.',
        benefits: ['Real-time editing', 'Peer reviews', 'Resource sharing'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    letter: 'M',
    tag: 'DATA-DRIVEN INSIGHTS',
    title: 'Monitoring',
    features: [
      "Attendance Analytics",
      "Seat Allocation (Exams & Labs)",
      "Invigilation Management",
      "Exam Results"
    ],
    iconName: 'BarChart3',
    image: 'https://plus.unsplash.com/premium_photo-1748853983673-6e48199324fe?w=500&auto=format&fit=crop&q=60',
    subFeatures: [
      {
        title: 'Attendance Analytics',
        description: 'Unified KPI dashboards across campus operations.',
        benefits: ['Custom widgets', 'Snapshot export', 'Smart alerts'],
        image: 'https://images.unsplash.com/photo-1551516594-2a53d496f061?auto=format&fit=crop&q=80'
      },
      {
        title: 'Seat Allocation (Exams & Labs)',
        description: 'Student attrition and resource demand forecasts.',
        benefits: ['Regression models', 'What-if scenarios', 'What-if sliders'],
        image: 'https://images.unsplash.com/photo-1561414920-f132b60f06e4?auto=format&fit=crop&q=80'
      },
      {
        title: 'Invigilation Management',
        description: 'Automated reporting for accreditation and audit readiness.',
        benefits: ['Policy mapping', 'Gap alerts', 'Automated exports'],
        image: 'https://images.unsplash.com/photo-1517242027353-96af1f7a5cf9?auto=format&fit=crop&q=80'
      },
      {
        title: 'Exam Results',
        description: 'Track lab, classroom and facility usage in real time.',
        benefits: ['Occupancy heatmap', 'Peak alerts', 'Utilization trend'],
        image: 'https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    letter: 'P',
    tag: 'FINANCIAL EXCELLENCE',
    title: 'Payments',
    features: [
      "Online Payments",
      "Invoice Generation",
      "Payment Tracking",
      "Due Alerts"
    ],
    iconName: 'CreditCard',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    subFeatures: [
      {
        title: 'Online Payments',
        description: 'Automated invoicing and multi-cycle fee plans.',
        benefits: ['Partial payments', 'Auto-retry', 'SMS reminders'],
        image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80'
      },
      {
        title: 'Invoice Generation',
        description: 'Automated scholarship eligibility and award workflows.',
        benefits: ['Slot management', 'Approval flows', 'Distribution tracking'],
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80'
      },
      {
        title: 'Payment Tracking',
        description: 'Department budgets, invoices and spend audit trails.',
        benefits: ['Category tags', 'Threshold alerts', 'Financial years'],
        image: 'https://images.unsplash.com/photo-1588776814546-d8b5b6ad6b89?auto=format&fit=crop&q=80'
      },
      {
        title: 'Due Alerts',
        description: 'Secure multi-currency and multi-method checkout support.',
        benefits: ['Card/UPI/ACH', 'PCI compliance', 'Refund automation'],
        image: 'https://images.unsplash.com/photo-1549421263-64a4f20e376c?auto=format&fit=crop&q=80'
      }
    ]
  },
  {
    letter: 'U',
    tag: 'CAMPUS MANAGEMENT',
    title: 'University Operations',
    features: [
      "Hostel Room Booking",
      "Bus Booking Management",
      "Library Management"
    ],
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1731977188312-889e607b8c6a?w=500&auto=format&fit=crop&q=60',
    subFeatures: [
      {
        title: 'Hostel Room Booking',
        description: 'Centralized reservations for rooms, labs and equipment.',
        benefits: ['Booking calendar', 'Conflict checks', 'Usage fees'],
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80'
      },
      {
        title: 'Bus Booking Management',
        description: 'Route management and live bus tracking for campus transit.',
        benefits: ['Pick-up alerts', 'ETA updates', 'Capacity planning'],
        image: 'https://images.unsplash.com/photo-1528256952176-78409138514e?auto=format&fit=crop&q=80'
      },
      {
        title: 'Library Management',
        description: 'A centralized system to manage book issuance, returns, tracking, and automated fine calculation with real-time visibility.',
        benefits: [
          'Centralized Operations',
          'Book Issuance & Returns',

          'Automated Fine Calculation',
          'Notifications & Alerts'
        ],
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80',

        sections: [
          {
            title: 'Overview',
            content: 'The Library Management System provides a structured platform to manage book issuance, returns, tracking, and fine management. It simplifies daily operations while ensuring accuracy, transparency, and easy access for both administrators and students.',
            image: 'https://img.freepik.com/free-vector/library-concept-illustration_114360-1019.jpg'
          },
          {
            title: 'Centralized Administration',
            content: 'The system follows a role-based approach where the Principal assigns a Library Admin to manage all operations. The admin handles book issuance, returns, and fine tracking, while students have secure read-only access to their records.',
            image: 'https://img.freepik.com/free-vector/teamwork-concept-illustration_114360-1802.jpg'
          },
          {
            title: 'Book Issuance & Return',
            content: 'Books are issued and returned through a simple workflow where admins enter details like book name, author, issue date, and due date. Records are updated instantly and visible to students, ensuring accurate tracking.',
            image: 'https://img.freepik.com/free-vector/book-management-concept_23-2148669904.jpg'
          },
          {
            title: 'Automated Fine Calculation',
            content: 'The system automatically calculates fines for overdue books. Fine starts after the due date, increases daily based on predefined values, and stops once the book is returned, ensuring accuracy and fairness.',
            image: 'https://img.freepik.com/free-vector/calculator-concept_23-2148171762.jpg'
          },
          {
            title: 'Student Self-Service Panel',
            content: 'Students can view their book records including issued books, returned books, pending books, and fine details through a dedicated dashboard. This ensures transparency and keeps students informed.',
            image: 'https://img.freepik.com/free-vector/student-dashboard-concept_23-2148657198.jpg'
          },
          {
            title: 'Real-Time Tracking',
            content: 'All library activities including book issuance, returns, and fine updates are tracked in real time. This ensures accurate records and transparency between administrators and students.',
            image: 'https://img.freepik.com/free-vector/real-time-sync-concept_23-2148699835.jpg'
          },
          {
            title: 'Notifications & Alerts',
            content: 'Students receive automated notifications when due dates are reached, helping them return books on time and avoid fines, improving discipline and efficiency.',
            image: 'https://img.freepik.com/free-vector/notification-concept_23-2148547867.jpg'
          },
          {
            title: 'Reports & Insights',
            content: 'The system provides detailed reports on book usage, returns, pending records, and fines. These insights help administrators monitor activity, improve decision-making, and optimize library operations.',
            image: 'https://img.freepik.com/free-vector/data-report-concept_23-2148636496.jpg'
          }
        ]
      },
    ]
  },
  {
    letter: 'S',
    tag: 'SMART TIME MANAGEMENT',
    title: 'Scheduling',
    features: [
      "Timetable Management",
      "Exam Scheduling",
      "Training & Placement Management"

    ],
    iconName: 'Calendar',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    subFeatures: [
      {
        title: 'Timetable Management',
        description: 'Auto-build course schedules with professor and room constraints.',
        benefits: ['Conflict minimization', 'cross-term sync', 'export to calendar'],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80'
      },
      {
        title: 'Exam Scheduling',
        description: 'Schedule exams, assign invigilators and publish results securely.',
        benefits: ['Seat planners', 'question banks', 'proctoring alerts'],
        image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80'
      },
      {
        title: 'Training & Placement Management',
        description: 'Campus event workflows with resource and attendee management.',
        benefits: ['Invite tracking', 'notifications', 'check-in'],
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80'
      }
    ]
  }
];