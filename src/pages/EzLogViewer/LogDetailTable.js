/*********************************************************************************
 * 1.프로젝트명: 2020 EMR 인증 및 확산 사업 - Log Viewer 앱
 * 2.파일명: src\pages\EzLogViewer\LogDetailTable.js
 * 3.개요: Log 상세정보 테이블
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
import React from "react";
import { inject } from "mobx-react";
import BootstrapTable from 'react-bootstrap-table-next';
import { logDetailColumns } from './LogDetailColumn';

// =================================================================================
// Type: (뷰) 클래스 컴포넌트
// Name: LogDetailTable
// Desc: Log 상세정보 테이블 컴포넌트
// =================================================================================
@inject("ezLogViewerStore")
class LogDetailTable extends React.Component {
    // ---------------------------------------------------------------------------------
    // 로컬 데이터 모델 정의 (Class[States, Props, Emits], Function, Object...)
    // ---------------------------------------------------------------------------------
    // ---------------------------
    // (지역) 데이터 선언 및 초기화 (지역)
    // ---------------------------
    displayName = "{EzLogViewerList 뷰(컨테이너)}";

    // ---------------------------------------------------------------------------------
    // 리액트 생명주기 함수 선언 (클래스형: (슈퍼) 생성자 포함)
    // ---------------------------------------------------------------------------------
    // ---------------------------
    // (생명주기) 생성
    // ---------------------------
    // constructor(props) {
    //     super(props);
    // }
    // ---------------------------
    // (생명주기) 마운팅
    // ---------------------------
    componentDidMount() {
    }
    // ---------------------------
    // (생명주기) 언마운팅
    // ---------------------------
    componentWillUnmount() {
    }

    // ---------------------------------------------------------------------------------
    // 정의된 뷰 컴포넌트 합성 및 통합 렌더링
    // ---------------------------------------------------------------------------------
    // ---------------------------
    // (생명주기) 렌더링
    // ---------------------------
    
    render() {
      return (
        <BootstrapTable 
          id='logDetailTable'
          keyField='id' 
          data={ this.props.ezLogViewerStore.detailList } 
          columns={ logDetailColumns } 
          condensed
          wrapperClasses="table table-sm table-responsive"
          rowStyle={{overflow: 'hidden', 
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      }}
        />
      );  
    }
    
    // ---------------------------------------------------------------------------------
    // 내부 UI요소 컴포넌트 및 UI 처리 로직 영역
    // ---------------------------------------------------------------------------------
    // ---------------------------
    // 데이터[모델변수, 상태...] 및 UI요소 핸들러: anyFunc0
    // ---------------------------
    anyFunc0 = () => {
        console.log(`${this.displayName}.anyFunc0() (을)를 호출합니다!`);
    };
}

// =================================================================================
// 모듈 외부 공개
// =================================================================================
export default LogDetailTable;