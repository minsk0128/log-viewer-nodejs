/*********************************************************************************
 * 1.프로젝트명: 2020 EMR 인증 및 확산 사업 - Log Viewer 앱
 * 2.파일명: src\pages\EzLogViewer\EzLogViewerDetail.js
 * 3.개요: Log Viewer 상세정보 처리 주영역 (뷰)
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
import React, { Fragment } from "react";
import { Container, Row, Button } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { FcAnswers } from "react-icons/fc";
import { IoMdArrowDropright } from "react-icons/io";
import ReactJson from 'react-json-view';
import LogDetailTable from "./LogDetailTable";

// =================================================================================
// Type: (뷰) 클래스 컴포넌트
// Name: EzLogViewerDetail
// Desc: Log 상세정보 뷰(컨테이너) 컴포넌트
// =================================================================================
@inject("ezLogViewerStore")
@observer
class EzLogViewerDetail extends React.Component {
    // ---------------------------------------------------------------------------------
    // 로컬 데이터 모델 정의 (Class[States, Props, Emits], Function, Object...)
    // ---------------------------------------------------------------------------------
    // ---------------------------
    // (지역) 데이터 선언 및 초기화 (지역)
    // ---------------------------
    displayName = "{EzLogViewerDetail 뷰(컨테이너)}";

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
        <Fragment>
          <Container>
            <Row className="p-2 mt-4">
              <h4>&nbsp;&nbsp;<FcAnswers/> 로그 상세정보</h4>
            </Row>
            <Row className="border">
              <Container id="logDetailContent">
                <br/>
                <div><IoMdArrowDropright/><b>{this.props.ezLogViewerStore.url}</b></div><br/>
                <LogDetailTable/>
                <div><IoMdArrowDropright/><b>Status Code </b> :  {this.props.ezLogViewerStore.statusCode}</div><br/>
                <div><IoMdArrowDropright/><b>Response</b></div>
                <ReactJson src={this.props.ezLogViewerStore.response} theme="tube" />
                <br/>
              </Container>
            </Row>
          </Container>
        </Fragment>
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
export default EzLogViewerDetail;