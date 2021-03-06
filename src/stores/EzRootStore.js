/*********************************************************************************
 * 1.프로젝트명: 2020 EMR 인증 및 확산 사업 - Log Viewer 앱
 * 2.파일명: \src\stores\EzRootStore.js
 * 3.개요: 상태 및 액션 관리를 위한 최상위 전역 스토어 클래스
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
import EzLogViewerStore from './EzLogViewerStore';

// =================================================================================
// Type: 클래스 컴포넌트
// Name: EzRootStore
// Desc: 요소별 스토어 통합관리를 위한 앱 최상위 스토어 (전역모델)
// =================================================================================
// ---------------------------
// 루트 스토어(모델)
// ---------------------------
class EzRootStore {
    constructor() {
        // 'this' (최상위 스토어 자신)를 바인딩
        this.ezLogViewerStore = new EzLogViewerStore(this);
        // 자식 스토어(리듀서)가 계속 추가될 영역
        // ...
    }
}

// =================================================================================
// 모듈 외부 공개
// =================================================================================
export default EzRootStore;