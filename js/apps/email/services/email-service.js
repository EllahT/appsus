'use strict'

import storageService from '../../../services/storage.service.js';
import utilService from '../../../services/util.service.js';

export default {
    sendEmail,
    deleteEmail,
    replyEmail,
    toggleStarEmail,
    toggleReadEmail,
    openEmail,
    query,
    getEmailById,
    addDraft
}

const EMAILS_KEY = 'mrEmails';
const DRAFTS_KEY = 'mrDrafts';
const SENTEMAILS_KEY = 'mrSentEmails';
let emails;
let drafts = storageService.load(DRAFTS_KEY);
let sentEmails = storageService.load(SENTEMAILS_KEY);

let defaultEmails = [
    {id: utilService.makeId(), from: 'Puki Levi', to: 'Popo Cohen', subject: 'this is the subject of the email, super importent!!', body: 'this is the content of the email blah blah blah', isRead: true, sentAt: {year: 2019, month: 6, day: 21, hours: 12, minutes: 35, strDate: 'Fri Jun 21 2019'}, isStarred: false, replies: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), to:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: 'searching inside the body', isRead: true, sentAt: getDateAndTime(), isStarred: false, replies: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), to:utilService.makeLorem(5), subject: 'test test', body: utilService.makeLorem(50), isRead: true, sentAt: getDateAndTime(), isStarred: true, replies: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), to:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: false, sentAt: getDateAndTime(), isStarred: false, replies: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), to:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: true, sentAt: getDateAndTime(), isStarred: false, replies: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), to:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: false, sentAt: getDateAndTime(), isStarred: true, replies: []}
];

function sendEmail(from, to, subject, body) {
    let newEmail = {
        id: utilService.makeId(),
        from, to, subject, body, 
        isRead: false, 
        sentAt: getDateAndTime(), 
        isStarred: false, 
        replies: []
    };
    emails.unshift(newEmail);
    storageService.store(EMAILS_KEY, emails);
    addSentEmail(newEmail);

    return Promise.resolve(newEmail.id);
}

function addDraft (from, to, subject, body) {
    if (!drafts) drafts = [];
    let newDraft = {id: utilService.makeId(), from, to, subject, body, isRead: false, sentAt: getDateAndTime(), isStarred: false, replies: []};
    drafts.unshift(newDraft);
    storageService.store(DRAFTS_KEY,drafts);

    return Promise.resolve(newDraft.id);
}

function addSentEmail (newEmail) {
    if (!sentEmails) sentEmails = [];
    let newSentEmail = newEmail;
    newSentEmail.from = newEmail.to;
    newSentEmail.to = newEmail.from;
    sentEmails.unshift(newSentEmail);
    storageService.store(SENTEMAILS_KEY, sentEmails);
}

function deleteEmail(emailId) {
    const emailIdx = emails.findIndex(email => email.id === emailId);
    emails.splice(emailIdx, 1);
    storageService.store(EMAILS_KEY,emails);    

    return Promise.resolve(emailId);
}

function replyEmail(emailId) {
    //get email by id, add to it's replies arr and then return think about how to render
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
    
    let filteredEmails = emails;

    if (filterAndSortParams.searchParams.subject) {
        filteredEmails = filteredEmails.filter(email => email.subject.includes(filterAndSortParams.searchParams.subject));
    }

    if (filterAndSortParams.searchParams.content) {
        filteredEmails = filteredEmails.filter(email => email.body.includes(filterAndSortParams.searchParams.content));
    }

    if (filterAndSortParams.filter === 'starred') {
        filteredEmails = filteredEmails.filter(email => email.isStarred);
    }

    if (filterAndSortParams.filter === 'read') {
        filteredEmails = filteredEmails.filter(email => email.isRead);
    }

    if (filterAndSortParams.filter === 'unread') {
        filteredEmails = filteredEmails.filter(email => !email.isRead);
    }

    if (filterAndSortParams.filter === 'sent') {
        return Promise.resolve(sentEmails)
    }

    if (filterAndSortParams.filter === 'drafts') {
        return Promise.resolve(drafts);
    }

    return Promise.resolve(filteredEmails);
    
}    

function getEmailById(emailId) {
    const email = emails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getDateAndTime() {
    let timeStamp = new Date();
    return {year: timeStamp.getFullYear(), month: timeStamp.getMonth()+1, day: timeStamp.getDate(), hours: timeStamp.getHours(), minutes: timeStamp.getMinutes(), strDate: timeStamp.toDateString()}
}




