// eslint-disable-next-line import/no-extraneous-dependencies
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createAt = new Date().toISOString();
  const updateAt = createAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createAt,
    updateAt,
  };

  notes.push(newNote);
  const isSuccess = notes.filter((noti) => noti.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Fail to make notes',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'success',
  message: 'success get all data',
  data: {
    notes,
  },
});
const getNotesById = (req, h) => {
  const { id } = req.params;

  const detail = notes.filter((n) => n.id === id)[0];

  if (detail !== undefined) {
    return {
      status: 'success',
      data: {
        note: detail,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'fail get data',
  });
  response.code(404);
  return response;
};

const editNotes = (req, h) => {
  const { id } = req.params;

  const { title, tags, body } = req.payload;
  const updatedAt = new Date().toISOString();

  const indexNotes = notes.findIndex((note) => note.id === id);

  if (indexNotes !== -1) {
    notes[indexNotes] = {
      ...notes[indexNotes],
      title,
      tags,
      body,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteNotes = (req, h) => {
  const { id } = req.params;
  const indexNotes = notes.findIndex((note) => note.id === id);

  if (indexNotes !== -1) {
    notes.splice(indexNotes, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};
module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNotesById,
  editNotes,
  deleteNotes,
};
