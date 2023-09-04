import { atom } from 'recoil'

/*
    여러 컴포넌트에서 하나의 저장소를 DB처럼 사용하기 위해
    Recoil 저장소 파일을 생성
*/


export const contentStore = atom({
    key: 'contentStore',
    default: {
        // 여러 컴포넌트에서 공유해서 사용할 항목
        clientName: '',
        shipToName: ''
    }
});


