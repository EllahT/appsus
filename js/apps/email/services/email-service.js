'use strict'

import storageService from '../../../services/storage.service.js';
import utilService from '../../../services/util.service.js';

export default {
    sendEmail,
    deleteEmail,
    toggleStarEmail,
    toggleReadEmail,
    openEmail,
    query,
    getEmailById,
    addDraft
}

const EMAILS_KEY = 'mrEmails';
let emails;

const defaultEmails = [
    {
        id: utilService.makeId(), 
        from: 'Puki Levi', 
        to: 'Popo Cohen', 
        subject: 'this is the subject of the email, super importent!!', 
        body: 'this is the content of the email blah blah blah', 
        isRead: true, 
        sentAt: {timeStamp: 1561121640, year: 2019, month: 6, day: 21, hours: 12, minutes: 54, strDate: 'Fri Jun 21, 2019'}, 
        isStarred: false, 
        type: 'email'
    },
    {
        id: utilService.makeId(), 
        from:utilService.makeLorem(5), 
        to:utilService.makeLorem(5), 
        subject: utilService.makeLorem(10), 
        body: 'searching inside the body', 
        isRead: true, 
        sentAt: getDateAndTime(), 
        isStarred: false, 
        type: 'email'
    },
    {
        id: utilService.makeId(), 
        from:utilService.makeLorem(5), 
        to:utilService.makeLorem(5), 
        subject: 'test test', 
        body: utilService.makeLorem(50), 
        isRead: true, 
        sentAt: getDateAndTime(), 
        isStarred: true, 
        type: 'email'
    },
    {
        id: utilService.makeId(), 
        from:utilService.makeLorem(5), 
        to:utilService.makeLorem(5), 
        subject: utilService.makeLorem(10), 
        body: utilService.makeLorem(50), 
        isRead: false, 
        sentAt: getDateAndTime(), 
        isStarred: false, 
        type: 'email'
    },
    {
        id: utilService.makeId(), 
        from:utilService.makeLorem(5), 
        to:utilService.makeLorem(5), 
        subject: utilService.makeLorem(10), 
        body: utilService.makeLorem(50), 
        isRead: true, 
        sentAt: getDateAndTime(), 
        isStarred: false, 
        type: 'email'
    },
    {
        id: 
        utilService.makeId(), 
        from:utilService.makeLorem(5), 
        to:utilService.makeLorem(5), 
        subject: utilService.makeLorem(10), 
        body: utilService.makeLorem(50), 
        isRead: false, 
        sentAt: getDateAndTime(), 
        isStarred: true, 
        type: 'email'
    },
    {
        id: utilService.makeId(), 
        from: 'puki puki', 
        to: 'popo popo', 
        subject: utilService.makeLorem(10), 
        body: utilService.makeLorem(50), 
        sentAt: getDateAndTime(), 
        isRead: true, 
        isStarred: true,
        type: 'draft'
    },
    {
        id: utilService.makeId(), 
        from: 'puki puki', 
        to: 'popo popo', 
        subject: utilService.makeLorem(10), 
        body: utilService.makeLorem(50), 
        sentAt: getDateAndTime(), 
        isRead: true, 
        isStarred: false,
        type: 'draft'
    }, 
    {
        id: utilService.makeId(), 
        from: 'Popo Cohen', 
        to: 'Puki Levi', 
        subject: 'this is the subject of the email, super importent!!', 
        body: 'this is the content of the email blah blah blah', 
        isRead: true, 
        sentAt: {timeStamp: 1561121640, year: 2019, month: 6, day: 21, hours: 12, minutes: 54, strDate: 'Fri Jun 21, 2019'}, 
        isStarred: false, 
        type: 'sent'
    }, 
    {
        id: utilService.makeId(), 
        from: 'Popo Cohen', 
        to: 'Puki Levi', 
        subject: 'this is the subject of the email, super importent!!', 
        body: 'this is the content of the email blah blah blah', 
        isRead: true, 
        sentAt: {timeStamp: 1561121640, year: 2019, month: 6, day: 21, hours: 12, minutes: 54, strDate: 'Fri Jun 21, 2019'}, 
        isStarred: true, 
        type: 'sent'
    }
];


function sendEmail(from, to, subject, body) {
    let newEmail = {
        id: utilService.makeId(),
        from, to, subject, body, 
        isRead: false, 
        sentAt: getDateAndTime(), 
        isStarred: false, 
        type: 'email'
    };
    emails.unshift(newEmail);
    storageService.store(EMAILS_KEY, emails);
    addSentEmail(newEmail);

    return Promise.resolve(newEmail.id);
}

function addDraft (from, to, subject, body) {
    let newDraft = {
        id: utilService.makeId(), 
        from, to, subject, body, 
        sentAt: getDateAndTime(), 
        isRead: true, 
        isStarred: false, 
        type: 'draft'
    };
    emails.unshift(newDraft);
    storageService.store(EMAILS_KEY,emails);

    return Promise.resolve(newDraft.id);
}

function addSentEmail (newEmail) {
    let newSentEmail = {
        id: utilService.makeId(),
        from: newEmail.to,
        to: newEmail.from,
        subject: newEmail.subject,
        body: newEmail.body,
        isRead: true,
        sentAt: getDateAndTime(), 
        isStarred: false,
        type: 'sent'
    };
    
    emails.unshift(newSentEmail);
    storageService.store(EMAILS_KEY, emails);
}

function deleteEmail(emailId) {
    const emailIdx = emails.findIndex(email => email.id === emailId);
    if (emailIdx !== -1) {
        emails.splice(emailIdx, 1);
        storageService.store(EMAILS_KEY,emails);    

        return Promise.resolve(emailId);
    } else {
        return Promise.reject('there is no email with this email id');
    }
}

function toggleStarEmail(emailId) {
    const email = emails.find(email => email.id === emailId);
    email.isStarred = !email.isStarred;
    storageService.store(EMAILS_KEY,emails);
}

function toggleReadEmail(emailId) {
    const email = emails.find(email => email.id === emailId);
    email.isRead = !email.isRead;
    storageService.store(EMAILS_KEY,emails);
}

function openEmail(emailId) {
    const email = emails.find(email => email.id === emailId);
    email.isRead = true;
    storageService.store(EMAILS_KEY,emails);
}

function query(filterAndSortParams) {
    if (!emails) emails = storageService.load(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = defaultEmails;
        storageService.store(EMAILS_KEY, emails);
    }

    if (!filterAndSortParams) return Promise.resolve(emails)
    
    let filteredEmails = emails.filter(email => (email.type === 'email'));;

    if (filterAndSortParams.searchParams.subject) {
        filteredEmails = filteredEmails.filter(email => email.subject.includes(filterAndSortParams.searchParams.subject));
    }

    if (filterAndSortParams.searchParams.content) {
        filteredEmails = filteredEmails.filter(email => email.body.includes(filterAndSortParams.searchParams.content));
    }

    if (filterAndSortParams.filter === 'read') {
        filteredEmails = filteredEmails.filter(email => ((email.isRead) && email.type === 'email'));
    }

    if (filterAndSortParams.filter === 'unread') {
        filteredEmails = filteredEmails.filter(email => ((!email.isRead) && email.type === 'email'));
    }

    if (filterAndSortParams.filter === 'starred') {
        filteredEmails = emails.filter(email => email.isStarred);
    }

    if (filterAndSortParams.filter === 'sent') {
        filteredEmails = emails.filter(email => email.type === 'sent');
    }

    if (filterAndSortParams.filter === 'drafts') {
        filteredEmails = emails.filter(email => email.type === 'draft');
    }

    if (filterAndSortParams.sort.by && filterAndSortParams.sort.op) {
        filteredEmails = sortEmails(filteredEmails,filterAndSortParams.sort);
    }

    return Promise.resolve(filteredEmails);
}    

function sortEmails(emailsToSort, sorter) {
    var sortFunc;
    
    if (sorter.by === 'subject') {
        sortFunc = createSortFuncTxt(sorter.by, sorter.op);
    } else {
        sortFunc = createSortFuncSentAt(sorter.op);
    }

    return emailsToSort.sort(sortFunc);
}

function createSortFuncSentAt(op) {
    function sorting(a,b) {
        if (op === '+') {
            if (a.sentAt.timeStamp > b.sentAt.timeStamp) {
                return 1;
            } else if (a.sentAt.timeStamp < b.sentAt.timeStamp) {
                return -1;
            } else {
                return 0;
            }    
        } else {
            if (a.sentAt.timeStamp < b.sentAt.timeStamp) {
                return 1;
            } else if (a.sentAt.timeStamp > b.sentAt.timeStamp) {
                return -1;
            } else {
                return 0;
            }    
        } 
    }
    return sorting;
}

function createSortFuncTxt(txt,op) {
    function sorting(a,b) {
        if (op === '+') {
            if (a[txt] > b[txt]) {
                return 1;
            } else if (a[txt] < b[txt]) {
                return -1;
            } else {
                return 0;
            }    
        } else {
            if (a[txt] < b[txt]) {
                return 1;
            } else if (a[txt] > b[txt]) {
                return -1;
            } else {
                return 0;
            }    
        } 
    }
    return sorting;
}

function getEmailById(emailId) {
    const email = emails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getDateAndTime() {
    let timeStamp = new Date();
    return {timeStamp: timeStamp.getTime(), year: timeStamp.getFullYear(), month: timeStamp.getMonth()+1, day: timeStamp.getDate(), hours: timeStamp.getHours(), minutes: timeStamp.getMinutes(), strDate: timeStamp.toDateString()}
}




