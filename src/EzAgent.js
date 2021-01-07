// ---------------------------------------------------------------------------------
// 의존 및 공유 모듈 임포트 영역
// ---------------------------------------------------------------------------------
import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

//const API_ROOT = 'http://10.2.40.27:8080';
const API_ROOT = 'http://10.2.16.22:8080';
const API_ROOT_DUMMY = 'http://localhost:3000';
// const encode = encodeURIComponent;
const superagent = superagentPromise(_superagent, global.Promise);

const handleErrors = err => {
  console.log(err);
  if (err && err.response && err.response.status === 401) {
    window.console.debug(err);
  }
  return err;
};

const responseBody = res => res.body;

// ---------------------------
// API 비동기 요청 처리객체 정의 (기본 요청 Method)
// ---------------------------
const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`)
      .end(handleErrors)
      .then(responseBody)
      ,
  get: url =>
    superagent.get(`${API_ROOT}${url}`)
      .set('Accept', 'application/json')
      // .set('Access-Control-Allow-Origin', '*')
      // .withCredentials() 
      .end(handleErrors)
      .then(responseBody)
      ,
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body)
      .end(handleErrors)
      .then(responseBody)
      ,
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body)
      .end(handleErrors)
      .then(responseBody)
      ,
  getFile: url =>
    superagent.get(`${API_ROOT_DUMMY}${url}`)
      .end(handleErrors)
      .then(responseBody)
};

// ---------------------------
// Back-End API 서비스별 Wrapper 모듈 (EzLogViewer)
// ---------------------------
const EzLogViewer = {
  forResourceValidate: (date) => requests.get(`/ezfhir-log?date=${date}`),
  forResourceValidateLocal: (date) => requests.get(`/ezframework/ezfhir-log?date=${date}`),
  forResourceValidateDummy: (jsonFileUri) => requests.getFile(`/${jsonFileUri}`)
};

// ---------------------------------------------------------------------------------
// 모듈 외부 공개
// ---------------------------------------------------------------------------------
export default {
  EzLogViewer
};
