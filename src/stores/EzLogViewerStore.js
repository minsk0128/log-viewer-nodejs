/*********************************************************************************
 * 1.프로젝트명: 2020 EMR 인증 및 확산 사업 - Log Viewer 앱
 * 2.파일명: \src\stores\EzLogViewerStore.js
 * 3.개요: EzLogViewer 뷰(페이지)용 요소 스토어 클래스
 *
 * 4.개정이력:
 * <pre>
 *   ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *   |               << 개 정 이 력 ( Modification History ) >>                |
 *   ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 *   |    변경일    |     작성자     |               변경내역                  |
 *   ---------------------------------------------------------------------------
 *      2020.11.09        강민수            최초 생성
 *   ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
 * </pre>
 * @author 강민수 (minsk0128@ezcaretech.com)
 * @since 2020.11.09
 * @version 1.0
 *
 * Copyright (c) 2020 by ezCaretech All rights reserved.
 *********************************************************************************/
// =================================================================================
// 의존 및 공유 모듈 임포트 영역 (기본)
// =================================================================================
import { observable, action, computed } from "mobx";
//import * as EzAgent from '../EzAgent';
import agent from "../EzAgent";

// =================================================================================
// Type: 클래스 컴포넌트
// Name: EzLogViewerStore
// Desc: 자식요소 스토어 (전역모델)
// =================================================================================
// ---------------------------
// 업무별 파생 스토어(모델)
// ---------------------------
class EzLogViewerStore {

    // ---------------------------
    // 로그 목록 처리용 전역 state
    // ---------------------------
    @observable responseList = [];    //API Data
    @observable loading = true;       //LogList 테이블 Loading State
    @observable controllerList = [];  //LogList 테이블 Data (Controller Filtering List)
    @observable isError = undefined;

    // ---------------------------
    // 로그 상세정보 처리용 전역 state
    // ---------------------------
    @observable url = '';           // URL 정보
    @observable statusCode = '';    // Status Code
    @observable response = [];      // JSON Response
    @observable detailList = [];    // LogDetail 테이블 Data (클릭 row와 동일한 Group ID List)


    // ---------------------------
    // API 호출
    // ---------------------------
    @action searchLog = (date) => {
      //const apiData = EzAgent.fetchAPI(date);
      //console.log(apiData);
      
      // const jsonFileUri = "/_mock/logData.json";
      const jsonFileUri = "/_mock/logSample.json";
      
      this.loadValidation(date);
      //this.loadValidationDummy(jsonFileUri);
    }

    // ---------------------------
    // 리소스 검증 API 비동기 호출 액션
    // ---------------------------
    @action loadValidation(date) {
      this.loading = true;
      this.isError = undefined;
      
      // state 초기화 
      this.responseList = [];
      this.controllerList = [];
      this.url = '';
      this.statusCode = '';
      this.response = []; 
      this.detailList = [];  

      return agent.EzLogViewer.forResourceValidateLocal(date)
          .then(res => {
              console.log(res);
              // console.log(res.body);
              const editList = this.editResponseList(res);
                this.responseList = editList;
      
                //Controller (로그 리스트 데이터) 추출
                let controllerList = editList.filter(data => data.service.includes('com.ezFhir.station.controller.impl'));

                console.log(controllerList);  
                this.controllerList = controllerList;
          
                this.setDetailInfo(this.controllerList[0]);
          })
          .catch(action(err => {
              //this.isError = err.response;
              this.isError = err.response && err.response.body && err.response.body.errors;
              console.log(">>> ERROR =>", err);
              // throw err;
          }))
          .finally(action(() => { this.loading = false; }));
    }
    // ---------------------------
    // 리소스 검증 API 비동기 호출 액션(mockup 테스트)
    // ---------------------------
    @action loadValidationDummy(jsonFileUri) {
        this.isloading = true;
        this.isError = undefined;
        
        // state 초기화 
        this.responseList = [];
        this.controllerList = [];
        this.url = '';
        this.statusCode = '';
        this.response = []; 
        this.detailList = [];  
        
        return agent.EzLogViewer.forResourceValidateDummy(jsonFileUri)
            .then(res => {
                console.log(res);
                // console.log(res.body);
                const editList = this.editResponseList(res);
                this.responseList = editList;
      
                //Controller (로그 리스트 데이터) 추출
                let controllerList = editList.filter(data => data.service.includes('com.ezFhir.station.controller.impl'));

                console.log(controllerList);  
                this.controllerList = controllerList;
          
                this.setDetailInfo(this.controllerList[0]);
            })
            .catch(action(err => {
                this.isError = err.response && err.response.body && err.response.body.errors;
                console.log(">>> ERROR =>", err);
                // throw err;
            }))
            .finally(action(() => { this.loading = false; }));
    }

    // ---------------------------
    // 로그 상세정보 세팅 
    // ---------------------------
    @action setDetailInfo = (row) => {

      // 같은 그룹ID 추출
      if(row.processGroupId === null || row.processGroupId.trim() === '' || row.processGroupId === undefined){
        this.detailList = [];
      }else{
        this.detailList = this.responseList.filter(data => data.processGroupId === row.processGroupId);
      }
      
      this.url = row.processMethod+' '+row.url;
      this.statusCode = row.responseCode;
      this.response = row.response;
    }

    // ---------------------------
    // Response List Data Form 수정
    // ---------------------------
    editResponseList = (data) => {
      let editList = data;
      
      data.forEach(function(item, index, array) {
        let logInfo = item.processMethod + ' ' + item.url;
        editList[index].logInfo = logInfo;
        
        if(item.responseCode !== '200'){  // 200이 아니면 Error!
          editList[index].errorYN = 'YES';
        }else{
          editList[index].errorYN = 'NO';
        }
      });

      return editList;
    }
}

// =================================================================================
// 상태관리 저장소 모듈 외부 공개
// =================================================================================
export default EzLogViewerStore;
