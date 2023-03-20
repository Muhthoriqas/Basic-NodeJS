const {
  addNoteHandler,
  getAllNotesHandler,
  getNotesById,
  editNotes,
  deleteNotes,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesById,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotes,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotes,
  },
];

module.exports = routes;
