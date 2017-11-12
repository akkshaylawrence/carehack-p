const format = require('date-fns/format');

const dateFmt = 'YYYYMMDDTHHmmss';

function createEvent(start, location, doctor, mailAddress) {
  const formattedStart = format(start, dateFmt);
  const now = format(new Date(), dateFmt);
  const icsContent = `BEGIN:VCALENDAR
PRODID:-//Find Care//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
DTSTART:${formattedStart}Z
DTEND:${formattedStart}Z
DTSTAMP:${formattedStart}Z
ORGANIZER;CN=Help @FINDCARE:mailto:help@findcare.in
UID:4c4qp049d3vh085ac1tjtcj20c@google.com
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=
 TRUE;CN=${mailAddress};X-NUM-GUESTS=0:mailto:${mailAddress}
CREATED:${now}Z
DESCRIPTION:You have an appoitment at ${location} with ${doctor}
LAST-MODIFIED:${now}Z
LOCATION:${location}
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY: APPOINTMENT
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;
  return icsContent;
}

createEvent(new Date('2018-07-11'), 'Bharat', 'Harris Jayaraj', 'agney@outlook.in');

module.exports = {
  createEvent
};


