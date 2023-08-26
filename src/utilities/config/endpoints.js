const BASE_URL = '';
const EXT1_BASE_URL = '';
const EXT_BASE_URL = '';

const ENDPOINTS = {
  // Authentications
  REGISTER: '/users',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',

  // Upload Question
  UPLOAD_QUES: '/HandWrittenQuestionAnswer',

  //Question History
  GET_ALL_QUES: '/question/all',

  //Like and Dislike
  UPDATE_STATUS: '/question/update-status',

  //Add Question
  ADD_QUES: '/question/add',
};

export {BASE_URL, ENDPOINTS, EXT_BASE_URL, EXT1_BASE_URL};
