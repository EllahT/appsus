// List of emails (inbox)
// • Show unread emails count on top (find the right place)
// • Present the listed emails as read/unread
// • Ability to mark as read/unread
// • Click email at list – opens the email for reading
// • New email – ability to create a new email and send it. Support send
// email only to yourself.
// • Search emails
// • Filter read/unread
// • Sort of emails by date, title
// • Reply – allows editing, adding “Re:” to subject

// Model - Start with a basic model of emails:
// {subject: 'Wassap with Vue?', body: 'May I', isRead: false, sentAt : 1551133930594}
// •
// • <email-app>
// • EmailApp Gets emails from service (asynch)
// • <email-list> renders a list of <email-preview> pass down an email prop
// <email-preview>
// o Has an email prop
// o Renders the subject
// o Gives visual indication for read/unread (i.e.: bold/unbold ; closed or
// open envelop)
// • <email-details>
// • Routable component (page)
// • show the entire email
// • allow deleting an email (using a service)
// • <email-status>
// • Renders how many read from the emails
// • <email-filter>
// • Allow filtering by text and Read / Unread
// • <email-compose>
// • Has a form with subject and body
// • Use the service to add email to the list
// • Yes, we are only supporting selfi-emails for now (-: 