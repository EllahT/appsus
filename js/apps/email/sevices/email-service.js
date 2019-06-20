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
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: true, sentAt: new Date(), isStarred: false, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: true, sentAt: new Date(), isStarred: true, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: false, sentAt: new Date(), isStarred: false, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: true, sentAt: new Date(), isStarred: false, replays: []},
    {id: utilService.makeId(), from:utilService.makeLorem(5), subject: utilService.makeLorem(10), body: utilService.makeLorem(50), isRead: false, sentAt: new Date(), isStarred: true, replays: []}
];

function addEmail(from, subject, body, isRead = false, sentAt = new Date(), isStarred = false) {
    if (!emails) query();
    let newEmail = {id: utilService.makeId(), subject, body, isRead, sentAt, isStarred, replays: []};
    emails.push(newEmail);

    return Promise.resolve(emailId);
}

function deleteEmail(emailId) {
    const emailIdx = emails.findIdx((email) => {email.id === emailId});
    emails.slice(emailIdx, 1);

    return Promise.resolve(emailId);
}

function replayEmail(emailId) {
    //get email by id, add to it's replays arr and then return think about how to render
}

function toggleStarEmail(emailId) {
    const email = emails.find((email) => {email.id === emailId});
    email.isStarred = !email.isStarred;
}

function toggleReadEmail(emailId) {
    const email = emails.find((email) => {email.id === emailId});
    email.isRead = !email.isRead;
}

function query(filter) {
    if (!emails) emails = storageService.load(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = defaultEmails;
        storageService.store(EMAILS_KEY, emails);
    }

    if (!filter) return Promise.resolve(emails) 
    
    // return filterEmails(filter)
    //     .then((filteredEmails) => {
    //         return filteredEmails;
    //     })
}

function filterEmails() {
//do filtering by filter.type (title/body) and filter.txt return promise reloved to filtered arr
}

function getEmailById(emailId) {
    const email = emails.find((email) => {email.id === emailId});
    return Promise.resolve(email);
}






