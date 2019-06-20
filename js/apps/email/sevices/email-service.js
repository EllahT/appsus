'use strict'

import storageService from '../../../services/storage.service.js';
import utilService from '../../../services/util.service.js';

export default {
    addEmail,
    deleteEmail,
    replayEmail,
    toggleStarEmail,
    toggleReadEmail,
    query,
    getEmailById
}

const EMAILS_KEY = 'mrEmails';
let emails;

let defaultEmails = [
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: 'searching inside the body', isRead: true, sentAt: getDateAndTime(), isStarred: false, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: 'test test', body: utilService.makeLorem(50), isRead: true, sentAt: getDateAndTime(), isStarred: true, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: false, sentAt: getDateAndTime(), isStarred: false, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: true, sentAt: getDateAndTime(), isStarred: false, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: false, sentAt: getDateAndTime(), isStarred: true, replays: []}
];

function addEmail(from, subject, body, isRead = false, isStarred = false) {
    if (!emails) query();
    let newEmail = {id: utilService.makeId(), subject, body, isRead, sentAt: getDateAndTime(), isStarred, replays: []};
    emails.push(newEmail);

    return Promise.resolve(emailId);
}

function deleteEmail(emailId) {
    const emailIdx = emails.findIdx(email => email.id === emailId);
    emails.slice(emailIdx, 1);

    return Promise.resolve(emailId);
}

function replayEmail(emailId) {
    //get email by id, add to it's replays arr and then return think about how to render
}

function toggleStarEmail(emailId) {
    const email = emails.find(email => email.id === emailId);
    email.isStarred = !email.isStarred;
}

function toggleReadEmail(emailId) {
    const email = emails.find(email => email.id === emailId);
    email.isRead = !email.isRead;
}

function query(filterAndSortPrms) {
    if (!emails) emails = storageService.load(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = defaultEmails;
        storageService.store(EMAILS_KEY, emails);
    }

    if (!filterAndSortPrms) return Promise.resolve(emails)
    
    let filteredEmails;

    if (filterAndSortPrms.searchPrms.subject) {
        filteredEmails = emails.filter(email => email.subject.includes(filterAndSortPrms.searchPrms.subject))
    }

    if (filterAndSortPrms.searchPrms.content) {
        filteredEmails = emails.filter(email => email.body.includes(filterAndSortPrms.searchPrms.content))
    }

    return Promise.resolve(filteredEmails);

        // searchPrms: {subject: 'test', content: ''},
        //         filter: 'all',
        //         sort: ''
    
}    

function getEmailById(emailId) {
    const email = emails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getDateAndTime() {
    let timeStamp = new Date();
    return {year: timeStamp.getFullYear(), month: timeStamp.getMonth()+1, day: timeStamp.getDate(), hours: timeStamp.getHours(), minutes: timeStamp.getMinutes()}
}




