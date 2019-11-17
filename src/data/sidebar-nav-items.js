export default function () {
  return [{
    title: 'Overview',
    to: {
      name: 'home',
    },
    htmlBefore: '<i class="material-icons">home</i>',
    htmlAfter: '',
  }, {
    title: 'Registration',
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: {
      name: 'register-patient',
    },
  }, {
    title: 'Assistant',
    htmlBefore: '<i class="material-icons">emoji_people</i>',
    to: {
      name: 'assistant',
    },
  }, {
    title: 'Patients',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'tables',
    },
  }, {
    title: 'User Profile',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'user-profile-lite',
    },
  }];
}
