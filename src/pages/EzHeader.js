/*********************************************************************************
 * 1.프로젝트명: 2020 EMR 인증 및 확산 사업 - Log Viewer 앱
 * 2.파일명: \src\pages\EzHeader.js
 * 3.개요: 앱 헤더 - 전역정보UI 표시 (뷰)
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
import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcSearch } from "react-icons/fc";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// =================================================================================
// Type: (뷰) 클래스 컴포넌트
// Name: EzHeader
// Desc: 헤더 뷰, 날짜 검색 기능
// =================================================================================
@inject("ezLogViewerStore")
@observer
class EzHeader extends React.Component {
    // ---------------------------------------------------------------------------------
    // 로컬 데이터 모델 정의 (Class[States, Props, Emits], Function, Object...)
    // ---------------------------------------------------------------------------------
    // ---------------------------
    // (지역) 데이터 선언 및 초기화 (지역)
    // ---------------------------
    displayName = "{EzHeader 뷰(컨테이너)}";

    // ---------------------------------------------------------------------------------
    // 리액트 생명주기 함수 선언 (클래스형: (슈퍼) 생성자 포함)
    // ---------------------------------------------------------------------------------
    // ---------------------------
    // (생명주기) 생성
    // ---------------------------
    constructor(props) {
        super(props);

        this.state = {
            date : new Date()
        }
    }

    // ---------------------------
    // (생명주기) 마운팅
    // ---------------------------
    componentDidMount() {
        const initDate = this.getFormatDate(new Date())

        this.props.ezLogViewerStore.searchLog(initDate);
    }

    render() {
        return(
            <div id="logViewerHeader">
            <Navbar variant="dark" expand="lg">
                &emsp;&emsp;&emsp;&emsp;
                {/* Logo */}
                <Navbar.Brand href="/">
                <img src="./images/ez-logo.png" 
                    alt="ezCaretech logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"/>
                
                {/* Date Picker */}
                <DatePicker 
                    className="myDatePicker"  
                    dateFormat="yyyy-MM-dd"
                    selected={this.state.date}
                    onChange={(date) => {this.setState({date:date})}}
                    popperModifiers={{ // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                    preventOverflow: {
                        enabled: true,
                        },
                    }}
                    popperPlacement="auto"
                    todayButton="Today"
                />

                <Form inline>
                    &nbsp;<FcSearch size="2em" onClick={this.handleClick}/>
                    &emsp;&emsp;&emsp;&emsp;
                </Form>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
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

    // ---------------------------
    // 검색 버튼 클릭 이벤트 
    // ---------------------------
    handleClick = () => {
        console.log('===== 검색 날짜 =====');
        console.log(this.state.date);

        let searchDate = this.getFormatDate(this.state.date);
        console.log(searchDate);

        this.props.ezLogViewerStore.searchLog(searchDate);
    }

    // ---------------------------
    // 날짜 'yyyy-MM-dd' 포맷으로 반환
    // ---------------------------
    getFormatDate = (date) => {
        var year = date.getFullYear();              //yyyy
        var month = (1 + date.getMonth());          //M
        month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
        var day = date.getDate();                   //d
        day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
        
        return  year + '-' + month + '-' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
    }  
};

// =================================================================================
// 모듈 외부 공개
// =================================================================================
export default EzHeader;
