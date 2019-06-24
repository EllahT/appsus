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
    addDraft,
    getMailsAndUnreadCount
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
        sentAt: {timeStamp: 1526470200, year: 2018, month: 5, day: 16, hours: 13, minutes: 15, strDate: 'Wed May 16, 2018'}, 
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
        sentAt: {timeStamp: 1526470200, year: 2018, month: 5, day: 16, hours: 13, minutes: 15, strDate: 'Wed May 16, 2018'}, 
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

    let filteredEmails = emails.filter(email => (email.type === 'email'));

    if (!filterAndSortParams) return Promise.resolve(filteredEmails)
    
    if (filterAndSortParams.searchParams.subject) {
        filteredEmails = filteredEmails.filter(email => email.subject.toLowerCase().includes(filterAndSortParams.searchParams.subject.toLowerCase()));
    }

    if (filterAndSortParams.searchParams.content) {
        filteredEmails = filteredEmails.filter(email => email.body.toLowerCase().includes(filterAndSortParams.searchParams.content.toLowerCase()));
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
        sortFunc = utilService.createSortFuncTxt(sorter.by, sorter.op);
    } else {
        sortFunc = utilService.createSortFuncDate(sorter.op,'sentAt');
    }

    return emailsToSort.sort(sortFunc);
}

function getEmailById(emailId) {
    const email = emails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getDateAndTime() {
    let timeStamp = new Date();
    return {timeStamp: timeStamp.getTime(), year: timeStamp.getFullYear(), month: timeStamp.getMonth()+1, day: timeStamp.getDate(), hours: timeStamp.getHours(), minutes: timeStamp.getMinutes(), strDate: timeStamp.toDateString()}
}

function getMailsAndUnreadCount() {
    const onlyEmails = emails.filter(email => (email.type === 'email'));
    const undreadEmails = emails.filter(email => ((!email.isRead) && email.type === 'email'));
    return Promise.resolve({total: onlyEmails.length, unread:undreadEmails.length});
}


